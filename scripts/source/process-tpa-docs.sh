#!/bin/bash

TPAVERSION=23

if [ -z $1 ] || [ -z $2 ]
then
  echo "the path to the source and destination checkouts must be provided"
  exit 1
fi

# convert inputs to actual directory names, in case a relative path is passed in.
SOURCE_CHECKOUT=`cd $1 && pwd`
DESTINATION_CHECKOUT=`cd $2 && pwd`

cd $DESTINATION_CHECKOUT/product_docs/docs/tpa/$TPAVERSION/
node $DESTINATION_CHECKOUT/scripts/source/files-to-ignore.mjs \
  "$DESTINATION_CHECKOUT/product_docs/docs/tpa/$TPAVERSION/" \
  > $SOURCE_CHECKOUT/files-to-ignore.txt

cd $SOURCE_CHECKOUT/docs/

node $DESTINATION_CHECKOUT/scripts/source/tpaexec.js src

node $DESTINATION_CHECKOUT/scripts/source/merge-indexes.mjs \
  "$SOURCE_CHECKOUT/docs/src/index.mdx" \
  "$DESTINATION_CHECKOUT/product_docs/docs/tpa/$TPAVERSION/index.mdx" \
  "$SOURCE_CHECKOUT/docs/src/index.mdx" \
  >> $SOURCE_CHECKOUT/files-to-ignore.txt

node $DESTINATION_CHECKOUT/scripts/source/merge-indexes.mjs \
  "$SOURCE_CHECKOUT/docs/src/reference/index.mdx" \
  "$DESTINATION_CHECKOUT/product_docs/docs/tpa/$TPAVERSION/reference/index.mdx" \
  "$SOURCE_CHECKOUT/docs/src/reference/index.mdx" \
  >> $SOURCE_CHECKOUT/files-to-ignore.txt

rsync -av --delete --exclude="*.md" --exclude="architectures" --exclude="templates" --exclude-from=$SOURCE_CHECKOUT/files-to-ignore.txt src/ $DESTINATION_CHECKOUT/product_docs/docs/tpa/$TPAVERSION/
