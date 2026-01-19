#!/usr/bin/env python3
"""
Create or update GitHub release using SemVer tag.

This script creates or updates a GitHub release for the SemVer tag,
ensuring the release uses the external-facing SemVer version instead
of the internal version.
"""

import os
import sys
import argparse
import requests
from typing import Optional, Dict


def get_release_by_tag(github_token: str, repo: str, tag: str, verbose: bool = False) -> Optional[Dict]:
    """Get existing release by tag name."""
    url = f"https://api.github.com/repos/{repo}/releases/tags/{tag}"
    headers = {
        "Authorization": f"token {github_token}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    if verbose:
        print(f"   Checking for existing release: {tag}")
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 404:
        return None
    elif response.status_code != 200:
        print(f"⚠️  Warning: Failed to check for release (status {response.status_code}): {response.text}", file=sys.stderr)
        return None
    
    return response.json()


def create_release(
    github_token: str,
    repo: str,
    semver_tag: str,
    internal_version: str,
    summary: str,
    epic: str,
    story: str,
    task: str,
    verbose: bool = False
) -> Optional[Dict]:
    """Create a new GitHub release for the SemVer tag."""
    url = f"https://api.github.com/repos/{repo}/releases"
    headers = {
        "Authorization": f"token {github_token}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    # Use SemVer for release name and tag
    release_name = semver_tag  # e.g., "v0.3.19+3"
    
    # Create release body with both SemVer and internal version
    release_body = f"""Release {semver_tag} (internal: {internal_version})

{summary}

**Epic:** {epic} | **Story:** {story} | **Task:** {task}

---
*This release uses Semantic Versioning (SemVer) for external compatibility. Internal version: {internal_version}*"""
    
    data = {
        "tag_name": semver_tag,  # Use SemVer tag
        "name": release_name,    # Use SemVer for release name
        "body": release_body,
        "draft": False,
        "prerelease": False
    }
    
    if verbose:
        print(f"   Creating release for SemVer tag: {semver_tag}")
        print(f"   Release name: {release_name}")
    
    response = requests.post(url, headers=headers, json=data)
    
    if response.status_code not in [200, 201]:
        print(f"❌ Error: Failed to create release (status {response.status_code}): {response.text}", file=sys.stderr)
        return None
    
    return response.json()


def update_release(
    github_token: str,
    repo: str,
    release_id: int,
    semver_tag: str,
    internal_version: str,
    summary: str,
    epic: str,
    story: str,
    task: str,
    verbose: bool = False
) -> Optional[Dict]:
    """Update an existing GitHub release."""
    url = f"https://api.github.com/repos/{repo}/releases/{release_id}"
    headers = {
        "Authorization": f"token {github_token}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    # Use SemVer for release name
    release_name = semver_tag  # e.g., "v0.3.19+3"
    
    # Create release body with both SemVer and internal version
    release_body = f"""Release {semver_tag} (internal: {internal_version})

{summary}

**Epic:** {epic} | **Story:** {story} | **Task:** {task}

---
*This release uses Semantic Versioning (SemVer) for external compatibility. Internal version: {internal_version}*"""
    
    data = {
        "name": release_name,    # Use SemVer for release name
        "body": release_body,
        "draft": False,
        "prerelease": False
    }
    
    if verbose:
        print(f"   Updating release for SemVer tag: {semver_tag}")
        print(f"   Release name: {release_name}")
    
    response = requests.patch(url, headers=headers, json=data)
    
    if response.status_code not in [200, 201]:
        print(f"❌ Error: Failed to update release (status {response.status_code}): {response.text}", file=sys.stderr)
        return None
    
    return response.json()


def main() -> int:
    """Main execution function."""
    try:
        parser = argparse.ArgumentParser(
            description="Create or update GitHub release using SemVer tag"
        )
        parser.add_argument(
            "--semver-tag",
            required=True,
            help="SemVer tag name (e.g., v0.3.19+3)"
        )
        parser.add_argument(
            "--internal-version",
            required=True,
            help="Internal version (e.g., v0.3.2.11+3)"
        )
        parser.add_argument(
            "--summary",
            required=True,
            help="Release summary"
        )
        parser.add_argument(
            "--epic",
            required=True,
            help="Epic number"
        )
        parser.add_argument(
            "--story",
            required=True,
            help="Story number"
        )
        parser.add_argument(
            "--task",
            required=True,
            help="Task number"
        )
        parser.add_argument(
            "--repo",
            help="GitHub repository (owner/repo). Defaults to GITHUB_REPOSITORY env var"
        )
        parser.add_argument(
            "--token",
            help="GitHub personal access token. Defaults to GITHUB_TOKEN env var"
        )
        parser.add_argument(
            "--verbose",
            action="store_true",
            help="Enable verbose output"
        )
        parser.add_argument(
            "--dry-run",
            action="store_true",
            help="Dry run mode (don't actually create/update release)"
        )
        
        args = parser.parse_args()
        
        # Get GitHub token (from argument or environment)
        github_token = args.token or os.environ.get('GITHUB_TOKEN')
        if not github_token:
            print("❌ Error: GitHub token required (--token or GITHUB_TOKEN env var)", file=sys.stderr)
            return 1
        
        # Get repository (from argument or environment)
        repo = args.repo or os.environ.get('GITHUB_REPOSITORY')
        if not repo:
            print("❌ Error: GitHub repository required (--repo or GITHUB_REPOSITORY env var)", file=sys.stderr)
            return 1
        
        if args.verbose:
            print(f"SemVer tag: {args.semver_tag}")
            print(f"Internal version: {args.internal_version}")
            print(f"Repository: {repo}")
        
        # Dry run mode
        if args.dry_run:
            print("✅ Dry run: Would create/update GitHub release")
            print(f"   SemVer tag: {args.semver_tag}")
            print(f"   Release name: {args.semver_tag}")
            print(f"   Summary: {args.summary}")
            return 0
        
        # Check for existing release
        if args.verbose:
            print(f"\n🔍 Checking for existing release: {args.semver_tag}")
        
        existing_release = get_release_by_tag(github_token, repo, args.semver_tag, args.verbose)
        
        if existing_release:
            if args.verbose:
                print(f"   ✅ Found existing release, updating...")
            release = update_release(
                github_token,
                repo,
                existing_release['id'],
                args.semver_tag,
                args.internal_version,
                args.summary,
                args.epic,
                args.story,
                args.task,
                args.verbose
            )
        else:
            if args.verbose:
                print(f"   Release not found, creating new release...")
            release = create_release(
                github_token,
                repo,
                args.semver_tag,
                args.internal_version,
                args.summary,
                args.epic,
                args.story,
                args.task,
                args.verbose
            )
        
        if not release:
            return 1
        
        release_url = release.get('html_url', f"https://github.com/{repo}/releases/tag/{args.semver_tag}")
        print(f"\n✅ GitHub release created/updated successfully!")
        print(f"   Release: {release_url}")
        if args.verbose:
            print(f"   Release name: {release.get('name', args.semver_tag)}")
            print(f"   Tag: {release.get('tag_name', args.semver_tag)}")
        
        return 0
        
    except KeyboardInterrupt:
        print("\n❌ Upload cancelled by user", file=sys.stderr)
        return 1
    except Exception as e:
        print(f"❌ Unexpected error: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
