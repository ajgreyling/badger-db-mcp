#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
echo "Bumping patch version (last digit)..."
pnpm run bump:version
echo "Publishing..."
pnpm publish "$@"
