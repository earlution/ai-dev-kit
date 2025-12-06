#!/bin/bash
# Auto-update Git submodule framework to latest compatible version
#
# Usage:
#   ./auto-update-git-submodule.sh <framework-name> [target-version] [--check-only]
#
# Examples:
#   ./auto-update-git-submodule.sh numbering-versioning
#   ./auto-update-git-submodule.sh numbering-versioning 2.1.0
#   ./auto-update-git-submodule.sh numbering-versioning --check-only

set -euo pipefail

FRAMEWORK_NAME="${1:-}"
TARGET_VERSION="${2:-}"
CHECK_ONLY="${3:-}"

if [ -z "$FRAMEWORK_NAME" ]; then
    echo "❌ Error: Framework name required"
    echo "Usage: $0 <framework-name> [target-version] [--check-only]"
    exit 1
fi

# Configuration
SOURCE_REPO="https://github.com/earlution/vibe-dev-kit.git"
FRAMEWORK_TAG_PREFIX="${FRAMEWORK_NAME}-v"
SUBMODULE_PATH="frameworks/vibe-dev-kit"

# Check if submodule exists
if [ ! -d "$SUBMODULE_PATH" ]; then
    echo "❌ Error: Submodule not found at $SUBMODULE_PATH"
    exit 1
fi

# Get current version
CURRENT_TAG=$(cd "$SUBMODULE_PATH" && git describe --tags --exact-match 2>/dev/null || echo "")
if [ -z "$CURRENT_TAG" ]; then
    CURRENT_COMMIT=$(cd "$SUBMODULE_PATH" && git rev-parse HEAD)
    echo "⚠️  Warning: Submodule not on a tagged version (at commit $CURRENT_COMMIT)"
    CURRENT_VERSION="unknown"
else
    CURRENT_VERSION=$(echo "$CURRENT_TAG" | sed "s/${FRAMEWORK_TAG_PREFIX}//")
    echo "📦 Current version: $CURRENT_VERSION ($CURRENT_TAG)"
fi

# Fetch latest tags
echo "🔍 Fetching latest tags..."
cd "$SUBMODULE_PATH"
git fetch --tags --quiet

# Find latest version
if [ -n "$TARGET_VERSION" ]; then
    LATEST_VERSION="$TARGET_VERSION"
    LATEST_TAG="${FRAMEWORK_TAG_PREFIX}${LATEST_VERSION}"
    
    # Verify tag exists
    if ! git rev-parse "$LATEST_TAG" >/dev/null 2>&1; then
        echo "❌ Error: Tag $LATEST_TAG not found"
        exit 1
    fi
else
    # Find latest tag matching framework prefix
    LATEST_TAG=$(git tag -l "${FRAMEWORK_TAG_PREFIX}*" | sort -V | tail -1)
    if [ -z "$LATEST_TAG" ]; then
        echo "❌ Error: No tags found for framework $FRAMEWORK_NAME"
        exit 1
    fi
    LATEST_VERSION=$(echo "$LATEST_TAG" | sed "s/${FRAMEWORK_TAG_PREFIX}//")
fi

echo "📦 Latest version: $LATEST_VERSION ($LATEST_TAG)"

# Check if update is needed
if [ "$CURRENT_TAG" = "$LATEST_TAG" ]; then
    echo "✅ Already on latest version ($LATEST_VERSION)"
    exit 0
fi

# Check-only mode
if [ "$CHECK_ONLY" = "--check-only" ]; then
    echo "ℹ️  Update available: $CURRENT_VERSION → $LATEST_VERSION"
    echo "   Run without --check-only to update"
    exit 0
fi

# Confirm update
echo ""
echo "🔄 Update available: $CURRENT_VERSION → $LATEST_VERSION"
read -p "Continue with update? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Update cancelled"
    exit 1
fi

# Perform update
echo "🔄 Updating to $LATEST_TAG..."
cd "$SUBMODULE_PATH"
git checkout "$LATEST_TAG"

# Update parent repository
cd ../..
git add "$SUBMODULE_PATH"
git commit -m "Auto-update $FRAMEWORK_NAME: $CURRENT_VERSION → $LATEST_VERSION" || {
    echo "⚠️  Warning: Could not commit update (may already be staged)"
}

echo "✅ Update complete: $FRAMEWORK_NAME $CURRENT_VERSION → $LATEST_VERSION"

