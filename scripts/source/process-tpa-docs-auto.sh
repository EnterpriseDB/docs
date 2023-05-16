#!/bin/bash

TPAVERSION=23

if [ -z $1 ]
then
  echo "the path to the source and destination checkouts must be provided"
  exit 1
fi


# Get the TPAexec tree into /tmp/tpaexecforimport
SOURCE_CHECKOUT="/tmp/tpaexecforimport"
rm -rf $SOURCE_CHECKOUT
git clone https://github.com/EnterpriseDB/tpaexec.git $SOURCE_CHECKOUT

# convert inputs to actual directory names, in case a relative path is passed in.
DESTINATION_CHECKOUT=`cd $1 && pwd`

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

# Tidy up
rm -rf $SOURCE_CHECKOUT
