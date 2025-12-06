#!/bin/bash
# list-framework-tags.sh
# Lists all tags for a framework

FRAMEWORK_NAME=$1

if [ -z "$FRAMEWORK_NAME" ]; then
  echo "Usage: $0 <framework-name>"
  echo ""
  echo "Example:"
  echo "  $0 numbering-versioning"
  exit 1
fi

echo "Tags for ${FRAMEWORK_NAME}:"
echo ""

# List tags matching framework name pattern
TAGS=$(git tag -l "${FRAMEWORK_NAME}-v*" | sort -V)

if [ -z "$TAGS" ]; then
  echo "  No tags found for ${FRAMEWORK_NAME}"
else
  for TAG in $TAGS; do
    # Extract version from tag
    VERSION=$(echo "$TAG" | sed "s/${FRAMEWORK_NAME}-v//")
    
    # Get tag date
    DATE=$(git log -1 --format=%ai "$TAG" 2>/dev/null | cut -d' ' -f1 || echo "N/A")
    
    # Get tag message (first line)
    MESSAGE=$(git tag -l --format='%(contents:subject)' "$TAG" 2>/dev/null || echo "N/A")
    
    echo "  ${VERSION} - ${DATE} - ${MESSAGE}"
  done
fi

