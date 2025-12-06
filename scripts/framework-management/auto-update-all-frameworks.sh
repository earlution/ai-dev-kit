#!/bin/bash
# Auto-update all framework dependencies
#
# Usage:
#   ./auto-update-all-frameworks.sh [--check-only] [--backend <backend>]
#
# Examples:
#   ./auto-update-all-frameworks.sh
#   ./auto-update-all-frameworks.sh --check-only
#   ./auto-update-all-frameworks.sh --backend git-submodule

set -euo pipefail

CHECK_ONLY="${1:-}"
BACKEND="${2:-git-submodule}"

# Configuration
CONFIG_FILE=".vibe-dev-kit.yaml"

if [ ! -f "$CONFIG_FILE" ]; then
    echo "❌ Error: Configuration file not found: $CONFIG_FILE"
    exit 1
fi

# Parse frameworks from config (simplified - would use yq in production)
FRAMEWORKS=$(grep -E "^\s+[a-z-]+:" "$CONFIG_FILE" | sed 's/://' | sed 's/^[[:space:]]*//' || echo "")

if [ -z "$FRAMEWORKS" ]; then
    echo "⚠️  No frameworks found in configuration"
    exit 0
fi

echo "🔍 Checking for framework updates..."
echo ""

UPDATES_AVAILABLE=0
UPDATES_APPLIED=0

for FRAMEWORK in $FRAMEWORKS; do
    echo "📦 Checking $FRAMEWORK..."
    
    if [ "$BACKEND" = "git-submodule" ]; then
        if [ "$CHECK_ONLY" = "--check-only" ]; then
            ./auto-update-git-submodule.sh "$FRAMEWORK" "" "--check-only" || true
        else
            if ./auto-update-git-submodule.sh "$FRAMEWORK" "" ""; then
                UPDATES_APPLIED=$((UPDATES_APPLIED + 1))
            fi
        fi
    else
        echo "⚠️  Backend $BACKEND not yet implemented"
    fi
    
    echo ""
done

if [ "$CHECK_ONLY" = "--check-only" ]; then
    echo "ℹ️  Check complete. Run without --check-only to apply updates."
else
    echo "✅ Update process complete: $UPDATES_APPLIED framework(s) updated"
fi

