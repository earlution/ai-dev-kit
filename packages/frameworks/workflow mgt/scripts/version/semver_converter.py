#!/usr/bin/env python3
"""
SemVer Converter: Convert internal RC.EPIC.STORY.TASK+BUILD to SemVer MAJOR.MINOR.PATCH+BUILD

Uses Hybrid Approach:
- MAJOR = RC (direct mapping)
- MINOR = First-seen Epic number (sequential, per RC)
- PATCH = First-seen Story number (sequential, per RC)
- BUILD = Preserved from internal version

Registry-based mapping ensures monotonic SemVer increases while preserving semantic meaning.

1:1 Mapping (design invariant):
- Each internal version string maps to exactly one SemVer string (deterministic given the
  current registry). The converter is the single source of truth for this mapping.
- Each SemVer string produced by the converter corresponds to exactly one (RC, EPIC, STORY, BUILD)
  coordinate; TASK is not encoded in SemVer, so multiple tasks in the same story share the same
  MINOR.PATCH and are distinguished only by BUILD. For a given SemVer, reverse lookup returns
  (RC, EPIC, STORY, 0, BUILD) with TASK set to 0 (cannot be recovered from SemVer).
- Git tags must align: the SemVer tag and the internal tag for a release must point to the
  same commit. See dev-kit versioning policy Section 2.1 (1:1 mapping and tag alignment).
"""

import yaml
import os
from pathlib import Path
from typing import Tuple, Dict, Any, Optional


def find_registry_file() -> Path:
    """Find semver-registry.yaml in project root."""
    # Start from script location and walk up to find project root
    current = Path(__file__).parent
    while current != current.parent:
        registry_file = current / "semver-registry.yaml"
        if registry_file.exists():
            return registry_file
        # Also check one level up (common project root location)
        parent_registry = current.parent / "semver-registry.yaml"
        if parent_registry.exists():
            return parent_registry
        current = current.parent
    # Default: assume project root is 4 levels up from scripts/version/
    return Path(__file__).parent.parent.parent.parent.parent / "semver-registry.yaml"


def load_semver_registry() -> Dict[str, Any]:
    """Load SemVer registry from YAML file."""
    registry_file = find_registry_file()
    
    if not registry_file.exists():
        # Create empty registry structure
        return {
            "rc_0": {"epic_to_minor": {}, "story_to_patch": {}},
            "rc_1": {"epic_to_minor": {}, "story_to_patch": {}}
        }
    
    try:
        with open(registry_file, 'r', encoding='utf-8') as f:
            registry = yaml.safe_load(f) or {}
        
        # Ensure rc_0 and rc_1 exist
        if "rc_0" not in registry:
            registry["rc_0"] = {"epic_to_minor": {}, "story_to_patch": {}}
        if "rc_1" not in registry:
            registry["rc_1"] = {"epic_to_minor": {}, "story_to_patch": {}}
        
        return registry
    except Exception as e:
        print(f"⚠️  Warning: Failed to load registry: {e}")
        return {
            "rc_0": {"epic_to_minor": {}, "story_to_patch": {}},
            "rc_1": {"epic_to_minor": {}, "story_to_patch": {}}
        }


def save_semver_registry(registry: Dict[str, Any]) -> None:
    """Save SemVer registry to YAML file."""
    registry_file = find_registry_file()
    
    # Ensure directory exists
    registry_file.parent.mkdir(parents=True, exist_ok=True)
    
    with open(registry_file, 'w', encoding='utf-8') as f:
        yaml.dump(registry, f, default_flow_style=False, sort_keys=False, allow_unicode=True)


def convert_internal_to_semver(rc: int, epic: int, story: int, task: int, build: int) -> Tuple[int, int, int, int]:
    """
    Convert internal RC.EPIC.STORY.TASK+BUILD to SemVer MAJOR.MINOR.PATCH+BUILD.

    One internal version always yields exactly one SemVer (1:1 forward mapping).
    
    Uses Hybrid Approach:
    - MAJOR = RC (direct mapping)
    - MINOR = First-seen Epic number (sequential, per RC)
    - PATCH = First-seen Story number (sequential, per RC)
    - BUILD = Preserved from internal version
    
    Args:
        rc: Release Candidate (0 = development, 1+ = release candidate)
        epic: Epic number
        story: Story number within epic
        task: Task number within story (not used in mapping, but preserved for reference)
        build: Build number (preserved in SemVer)
    
    Returns:
        Tuple of (major, minor, patch, build) for SemVer
    """
    registry = load_semver_registry()
    
    # Get RC scope
    rc_key = f"rc_{rc}"
    if rc_key not in registry:
        registry[rc_key] = {"epic_to_minor": {}, "story_to_patch": {}}
    
    rc_scope = registry[rc_key]
    epic_to_minor = rc_scope.get("epic_to_minor", {})
    story_to_patch = rc_scope.get("story_to_patch", {})
    
    # MAJOR = RC (direct mapping)
    major = rc
    
    # MINOR = First-seen Epic number (sequential, per RC)
    epic_key = epic
    if epic_key not in epic_to_minor:
        # New epic - assign next MINOR number
        existing_minors = list(epic_to_minor.values())
        minor = max(existing_minors) + 1 if existing_minors else 1
        epic_to_minor[epic_key] = minor
        rc_scope["epic_to_minor"] = epic_to_minor
    else:
        minor = epic_to_minor[epic_key]
    
    # PATCH = First-seen Story number (sequential, per RC)
    story_key = f"({epic},{story})"  # String key for (Epic, Story) combination
    if story_key not in story_to_patch:
        # New story - assign next PATCH number within this RC
        existing_patches = list(story_to_patch.values())
        patch = max(existing_patches) + 1 if existing_patches else 1
        story_to_patch[story_key] = patch
        rc_scope["story_to_patch"] = story_to_patch
    else:
        patch = story_to_patch[story_key]
    
    # BUILD = Preserved from internal version
    build_semver = build
    
    # Save updated registry
    save_semver_registry(registry)
    
    return (major, minor, patch, build_semver)


def format_semver(major: int, minor: int, patch: int, build: int) -> str:
    """Format SemVer as MAJOR.MINOR.PATCH+BUILD string."""
    return f"{major}.{minor}.{patch}+{build}"


def semver_to_internal(semver: str) -> Optional[Tuple[int, int, int, int, int]]:
    """
    Reverse conversion: SemVer string to internal (RC, EPIC, STORY, TASK, BUILD).

    Given the current registry, returns the unique internal coordinate that would produce
    this SemVer. TASK is not encoded in SemVer, so it is returned as 0 (cannot be recovered).
    Returns None if the SemVer cannot be produced by the current registry (e.g. unknown
    MINOR or PATCH).

    Args:
        semver: SemVer string (e.g. "0.5.39+2")

    Returns:
        (rc, epic, story, task, build) with task=0, or None if not in registry.
    """
    parts = semver.split("+")
    if len(parts) != 2:
        return None
    try:
        build = int(parts[1])
    except ValueError:
        return None
    version_parts = parts[0].split(".")
    if len(version_parts) != 3:
        return None
    try:
        major, minor, patch = int(version_parts[0]), int(version_parts[1]), int(version_parts[2])
    except ValueError:
        return None
    rc = major
    registry = load_semver_registry()
    rc_key = f"rc_{rc}"
    if rc_key not in registry:
        return None
    rc_scope = registry[rc_key]
    epic_to_minor = rc_scope.get("epic_to_minor", {})
    story_to_patch = rc_scope.get("story_to_patch", {})
    minor_to_epic = {v: k for k, v in epic_to_minor.items()}
    patch_to_story = {v: k for k, v in story_to_patch.items()}
    if minor not in minor_to_epic or patch not in patch_to_story:
        return None
    epic = minor_to_epic[minor]
    story_key = patch_to_story[patch]
    if not isinstance(story_key, str) or not story_key.startswith("(") or not story_key.endswith(")"):
        return None
    inner = story_key[1:-1].split(",")
    if len(inner) != 2:
        return None
    try:
        story_epic, story = int(inner[0]), int(inner[1])
    except ValueError:
        return None
    if story_epic != epic:
        return None
    return (rc, epic, story, 0, build)


def convert_version_string(internal_version: str) -> str:
    """
    Convert internal version string to SemVer string.
    
    Args:
        internal_version: Internal version string (e.g., "0.6.7.101+24")
    
    Returns:
        SemVer string (e.g., "0.1.1+24")
    """
    # Parse internal version: RC.EPIC.STORY.TASK+BUILD
    parts = internal_version.split('+')
    if len(parts) != 2:
        raise ValueError(f"Invalid internal version format: {internal_version}")
    
    build = int(parts[1])
    version_parts = parts[0].split('.')
    
    if len(version_parts) != 4:
        raise ValueError(f"Invalid internal version format: {internal_version}")
    
    rc = int(version_parts[0])
    epic = int(version_parts[1])
    story = int(version_parts[2])
    task = int(version_parts[3])
    
    major, minor, patch, build_semver = convert_internal_to_semver(rc, epic, story, task, build)
    return format_semver(major, minor, patch, build_semver)


if __name__ == "__main__":
    import sys
    
    if len(sys.argv) < 2:
        print("Usage: semver_converter.py <internal_version>")
        print("Example: semver_converter.py 0.6.7.101+24")
        sys.exit(1)
    
    internal_version = sys.argv[1]
    try:
        semver = convert_version_string(internal_version)
        print(semver)
    except Exception as e:
        print(f"❌ Error: {e}", file=sys.stderr)
        sys.exit(1)
