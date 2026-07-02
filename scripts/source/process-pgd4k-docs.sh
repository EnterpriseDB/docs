#!/bin/bash

if [ -z $1 ] || [ -z $2 ]
then
  echo "the path to the source and destination checkouts must be provided"
  exit 1
fi

# convert inputs to actual directory names, in case a relative path is passed in.
SOURCE_CHECKOUT=`cd $1 && pwd`
DESTINATION_CHECKOUT=`cd $2 && pwd`

if [ -z $3 ]
then
  DESTINATION_PATH=$DESTINATION_CHECKOUT/product_docs/docs/postgres_distributed_for_kubernetes/1/
else
  DESTINATION_PATH=$DESTINATION_CHECKOUT/product_docs/docs/postgres_distributed_for_kubernetes/$3/
fi

cd $DESTINATION_CHECKOUT/scripts/fileProcessor
npm install --production

cd $SOURCE_CHECKOUT

# create a temporary worktree to avoid messing up source repo (for local work; CI doesn't care)
git worktree add --detach ./docs-import

cd $DESTINATION_PATH
node $DESTINATION_CHECKOUT/scripts/source/files-to-ignore.mjs \
  "$DESTINATION_PATH" \
  > $SOURCE_CHECKOUT/docs-import/files-to-ignore.txt

cd $SOURCE_CHECKOUT/docs-import/docs

node $DESTINATION_CHECKOUT/scripts/fileProcessor/main.mjs \
  -f "src/**/*.md" \
  -p "pg4k-pgd/convert-rel-notes" \
  -p "cnp/replace-github-urls" \
  -p "pg4k-pgd/replace-beta-urls" \
  -p "pg4k-pgd/update-links" \
  -p "cnp/update-yaml-links" \
  -p "pg4k-pgd/add-frontmatters" \
  -p "cnp/cleanup-html" \
  -p "cnp/rename-to-mdx"

node $DESTINATION_CHECKOUT/scripts/source/merge-indexes.mjs \
  "$SOURCE_CHECKOUT/docs-import/docs/src/index.mdx" \
  "${DESTINATION_PATH}index.mdx" \
  "$SOURCE_CHECKOUT/docs-import/docs/src/index.mdx" \
  >> $SOURCE_CHECKOUT/docs-import/files-to-ignore.txt

rsync -av --delete --exclude-from=$SOURCE_CHECKOUT/docs-import/files-to-ignore.txt src/ $DESTINATION_PATH

# cleanup: remove worktree
cd $SOURCE_CHECKOUT
git worktree remove --force ./docs-import
cd $CWD
