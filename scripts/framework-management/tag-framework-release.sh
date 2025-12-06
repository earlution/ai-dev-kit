#!/bin/bash
# tag-framework-release.sh
# Tags a framework release in Git

set -e

# Parse arguments
FRAMEWORK_NAME=""
VERSION=""
MESSAGE=""

while [[ $# -gt 0 ]]; do
  case $1 in
    --framework)
      FRAMEWORK_NAME="$2"
      shift 2
      ;;
    --version)
      VERSION="$2"
      shift 2
      ;;
    --message)
      MESSAGE="$2"
      shift 2
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Validate inputs
if [ -z "$FRAMEWORK_NAME" ] || [ -z "$VERSION" ]; then
  echo "Usage: $0 --framework <name> --version <version> [--message <message>]"
  echo ""
  echo "Example:"
  echo "  $0 --framework numbering-versioning --version 2.0.0 --message \"Release v2.0.0\""
  exit 1
fi

# Validate version format (MAJOR.MINOR.PATCH)
if ! echo "$VERSION" | grep -qE '^[0-9]+\.[0-9]+\.[0-9]+$'; then
  echo "Error: Version must be in format MAJOR.MINOR.PATCH (e.g., 2.0.0)"
  exit 1
fi

# Construct tag name
TAG_NAME="${FRAMEWORK_NAME}-v${VERSION}"

# Check if tag already exists
if git rev-parse "$TAG_NAME" >/dev/null 2>&1; then
  echo "Error: Tag $TAG_NAME already exists"
  exit 1
fi

# Default message
if [ -z "$MESSAGE" ]; then
  MESSAGE="Release ${FRAMEWORK_NAME} v${VERSION}"
fi

# Create annotated tag
git tag -a "$TAG_NAME" -m "$MESSAGE"

# Push tag to remote
git push origin "$TAG_NAME"

echo "✅ Tagged ${TAG_NAME} successfully"
echo "   Tag: ${TAG_NAME}"
echo "   Message: ${MESSAGE}"

