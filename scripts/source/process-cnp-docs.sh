#!/bin/bash

if [ -z $1 ] || [ -z $2 ]
then
  echo "the path to the source and destination checkouts must be provided"
  exit 1
fi

CWD=`pwd`

# convert inputs to actual directory names, in case a relative path is passed in.
SOURCE_CHECKOUT=`cd $1 && pwd`
DESTINATION_CHECKOUT=`cd $2 && pwd`

cd $DESTINATION_CHECKOUT/scripts/fileProcessor
npm ci

cd $SOURCE_CHECKOUT

# create a temporary worktree to avoid messing up source repo (for local work; CI doesn't care)
git worktree add --detach ./docs-import

cd $DESTINATION_CHECKOUT/product_docs/docs/postgres_for_kubernetes/1/
node $DESTINATION_CHECKOUT/scripts/source/files-to-ignore.mjs \
  "$DESTINATION_CHECKOUT/product_docs/docs/postgres_for_kubernetes/1/" \
  > $SOURCE_CHECKOUT/docs-import/files-to-ignore.txt

cd $SOURCE_CHECKOUT/docs-import/docs

# grab key bit of source for use in docs
cp $SOURCE_CHECKOUT/docs-import/config/manager/default-monitoring.yaml $SOURCE_CHECKOUT/docs-import/docs/src/

node $DESTINATION_CHECKOUT/scripts/fileProcessor/main.mjs \
  -f "src/**/quickstart.md" \
  -p cnp/add-quickstart-content

node $DESTINATION_CHECKOUT/scripts/fileProcessor/main.mjs \
  -f "src/**/*.md" \
  -p "cnp/add-frontmatters" \
  -p "cnp/flatten-appendices" \
  -p "cnp/replace-github-urls" \
  -p "cnp/update-links" \
  -p "cnp/update-yaml-links" \
  -p "cnp/rewrite-mdextra-anchors" \
  -p "cnp/cleanup-html" \
  -p "cnp/rename-to-mdx"

node $DESTINATION_CHECKOUT/scripts/source/merge-indexes.mjs \
  "$SOURCE_CHECKOUT/docs-import/docs/src/index.mdx" \
  "$DESTINATION_CHECKOUT/product_docs/docs/postgres_for_kubernetes/1/index.mdx" \
  "$SOURCE_CHECKOUT/docs-import/docs/src/index.mdx" \
  >> $SOURCE_CHECKOUT/docs-import/files-to-ignore.txt

rsync -av --delete --exclude-from=$SOURCE_CHECKOUT/docs-import/files-to-ignore.txt src/ $DESTINATION_CHECKOUT/product_docs/docs/postgres_for_kubernetes/1/

# cleanup: remove worktree
cd $SOURCE_CHECKOUT
git worktree remove --force ./docs-import
cd $CWD
