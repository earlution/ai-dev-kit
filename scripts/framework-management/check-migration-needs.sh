#!/bin/bash
# check-migration-needs.sh
# Checks migration needs for framework update

set -e

FRAMEWORK_NAME=""
FROM_VERSION=""
TO_VERSION=""
PROJECT_PATH="."

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --framework)
      FRAMEWORK_NAME="$2"
      shift 2
      ;;
    --from)
      FROM_VERSION="$2"
      shift 2
      ;;
    --to)
      TO_VERSION="$2"
      shift 2
      ;;
    --project-path)
      PROJECT_PATH="$2"
      shift 2
      ;;
    *)
      echo "Unknown option: $1"
      exit 1
      ;;
  esac
done

# Validate inputs
if [ -z "$FRAMEWORK_NAME" ] || [ -z "$FROM_VERSION" ] || [ -z "$TO_VERSION" ]; then
  echo "Usage: $0 --framework <name> --from <version> --to <version> [--project-path <path>]"
  exit 1
fi

echo "🔍 Checking migration needs for $FRAMEWORK_NAME: $FROM_VERSION → $TO_VERSION"

# Extract MAJOR version numbers
FROM_MAJOR=$(echo $FROM_VERSION | cut -d. -f1)
TO_MAJOR=$(echo $TO_VERSION | cut -d. -f1)

# Check if MAJOR version update
if [ "$FROM_MAJOR" != "$TO_MAJOR" ]; then
  echo "⚠️  MAJOR version update detected: $FROM_VERSION → $TO_VERSION"
  echo "📋 Migration guide required: packages/frameworks/$FRAMEWORK_NAME/MIGRATION_GUIDE_v$TO_VERSION.md"
  
  # Check if migration guide exists
  MIGRATION_GUIDE="packages/frameworks/$FRAMEWORK_NAME/MIGRATION_GUIDE_v$TO_VERSION.md"
  if [ -f "$MIGRATION_GUIDE" ]; then
    echo "✅ Migration guide found: $MIGRATION_GUIDE"
  else
    echo "❌ Migration guide not found: $MIGRATION_GUIDE"
    echo "   Please create migration guide before proceeding"
  fi
  
  # Scan for deprecated features (placeholder)
  echo "🔍 Scanning for deprecated features..."
  echo "   (Deprecation scanning not yet implemented)"
  
  # Generate migration report
  echo "📊 Migration Report:"
  echo "   - Update Type: MAJOR"
  echo "   - Migration Required: Yes"
  echo "   - Estimated Difficulty: High"
  echo "   - Recommended: Review migration guide before updating"
else
  FROM_MINOR=$(echo $FROM_VERSION | cut -d. -f2)
  TO_MINOR=$(echo $TO_VERSION | cut -d. -f2)
  
  if [ "$FROM_MINOR" != "$TO_MINOR" ]; then
    echo "✅ MINOR version update: $FROM_VERSION → $TO_VERSION"
    echo "✅ Backward compatible - no migration required"
  else
    echo "✅ PATCH version update: $FROM_VERSION → $TO_VERSION"
    echo "✅ Backward compatible - no migration required"
  fi
fi

echo ""
echo "✅ Migration check complete"

