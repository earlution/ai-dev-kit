#!/bin/bash
# migrate-framework.sh
# Helps migrate framework to new version

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

echo "🚀 Migrating $FRAMEWORK_NAME from v$FROM_VERSION to v$TO_VERSION"

# Extract MAJOR version numbers
FROM_MAJOR=$(echo $FROM_VERSION | cut -d. -f1)
TO_MAJOR=$(echo $TO_VERSION | cut -d. -f1)

# Check if MAJOR version update
if [ "$FROM_MAJOR" != "$TO_MAJOR" ]; then
  echo "⚠️  MAJOR version update detected - migration required"
  
  # Check if migration guide exists
  MIGRATION_GUIDE="packages/frameworks/$FRAMEWORK_NAME/MIGRATION_GUIDE_v$TO_VERSION.md"
  if [ ! -f "$MIGRATION_GUIDE" ]; then
    echo "❌ Migration guide not found: $MIGRATION_GUIDE"
    echo "   Please create migration guide before proceeding"
    exit 1
  fi
  
  echo "✅ Migration guide found: $MIGRATION_GUIDE"
  echo "📋 Please review migration guide before proceeding"
  echo ""
  read -p "Continue with migration? (y/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Migration cancelled"
    exit 0
  fi
fi

# Create migration branch
BRANCH_NAME="migrate-${FRAMEWORK_NAME}-v${TO_VERSION}"
if git rev-parse --verify "$BRANCH_NAME" >/dev/null 2>&1; then
  echo "⚠️  Branch $BRANCH_NAME already exists"
  read -p "Use existing branch? (y/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Migration cancelled"
    exit 0
  fi
  git checkout "$BRANCH_NAME"
else
  echo "📦 Creating migration branch: $BRANCH_NAME"
  git checkout -b "$BRANCH_NAME"
  git commit --allow-empty -m "Backup before $FRAMEWORK_NAME v$TO_VERSION migration"
fi

# Update framework dependency (placeholder - actual implementation depends on dependency method)
echo "📦 Updating framework dependency..."
echo "   (Dependency update not yet implemented - please update manually)"
echo "   See migration guide for update instructions"

# Apply automated migration steps (placeholder)
echo "🔧 Applying automated migration steps..."
echo "   (Automated migration steps not yet implemented)"
echo "   Please follow migration guide for manual migration steps"

# Generate migration report
echo ""
echo "📊 Migration Status:"
echo "   - Framework: $FRAMEWORK_NAME"
echo "   - From Version: $FROM_VERSION"
echo "   - To Version: $TO_VERSION"
echo "   - Branch: $BRANCH_NAME"
if [ "$FROM_MAJOR" != "$TO_MAJOR" ]; then
  echo "   - Migration Type: MAJOR (breaking changes)"
  echo "   - Migration Guide: $MIGRATION_GUIDE"
else
  echo "   - Migration Type: MINOR/PATCH (backward compatible)"
fi

echo ""
echo "✅ Migration branch created: $BRANCH_NAME"
if [ "$FROM_MAJOR" != "$TO_MAJOR" ]; then
  echo "⚠️  Manual migration steps required (see migration guide)"
fi
echo "📋 Next steps:"
echo "   1. Review migration guide: $MIGRATION_GUIDE"
echo "   2. Update framework dependency"
echo "   3. Apply migration steps"
echo "   4. Test migration"
echo "   5. Commit changes"

