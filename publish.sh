#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
echo "Bumping patch version (last digit)..."
pnpm run bump:version
NEW_VERSION=$(node -e "console.log(JSON.parse(require('fs').readFileSync('package.json','utf8')).version)")
git add package.json
git commit -m "chore: bump version to $NEW_VERSION"
echo "Publishing..."
pnpm publish "$@"
