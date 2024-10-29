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

# grab some information about what we're importing
CURRENT_TAG=`git describe --exact-match --tags`
LATEST_TAG=`git tag | sort -V -r | head -n 1`

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

# Archive API docs
API_REF_DIR="$DESTINATION_CHECKOUT/product_docs/docs/postgres_for_kubernetes/1/pg4k.v1"
CURRENT_API_REF="$API_REF_DIR/$CURRENT_TAG.mdx"
mv "$DESTINATION_CHECKOUT/product_docs/docs/postgres_for_kubernetes/1/pg4k.v1.mdx" "$CURRENT_API_REF"
# TODO: just install yq
node "$DESTINATION_CHECKOUT/scripts/source/update-yaml.mjs" "$CURRENT_API_REF" \
  title="API Reference - $CURRENT_TAG" \
  navTitle="$CURRENT_TAG"
if [ $CURRENT_TAG == $LATEST_TAG ]
then
  API_REF_INDEX="$API_REF_DIR/index.mdx"
  cp "$CURRENT_API_REF" "$API_REF_INDEX"
  node "$DESTINATION_CHECKOUT/scripts/source/update-yaml.mjs" "$API_REF_INDEX" \
    navTitle="API Reference" \
    navigation=[`ls "$API_REF_DIR" | grep ^v | sed -e 's/\.mdx$//' | sort -V -r |  paste -sd "," - `]
fi 
node "$DESTINATION_CHECKOUT/scripts/source/update-yaml.mjs" "$CURRENT_API_REF" \
  originalFilePath=null

# cleanup: remove worktree
cd $SOURCE_CHECKOUT
git worktree remove --force ./docs-import
cd $CWD
