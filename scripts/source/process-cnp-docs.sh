#!/bin/bash

if [ -z $1 ] || [ -z $2 ]
then
  echo "the path to the source and destination checkouts must be provided"
  exit 1
fi

# convert inputs to actual directory names, in case a relative path is passed in.
SOURCE_CHECKOUT=`cd $1 && pwd`
DESTINATION_CHECKOUT=`cd $2 && pwd`

cd $DESTINATION_CHECKOUT/scripts/fileProcessor
npm install --production

cd $DESTINATION_CHECKOUT/product_docs/docs/postgres_for_kubernetes/1/
node $DESTINATION_CHECKOUT/scripts/source/files-to-ignore.mjs \
  "$DESTINATION_CHECKOUT/product_docs/docs/postgres_for_kubernetes/1/" \
  > $SOURCE_CHECKOUT/files-to-ignore.txt

cd $SOURCE_CHECKOUT/docs

node $DESTINATION_CHECKOUT/scripts/fileProcessor/main.mjs \
  -f "src/**/quickstart.md" \
  -p cnp/add-quickstart-content

node $DESTINATION_CHECKOUT/scripts/fileProcessor/main.mjs \
  -f "src/**/*.md" \
  -p "cnp/update-yaml-links" \
  -p "cnp/add-frontmatters" \
  -p "cnp/rename-to-mdx"

rsync -av --delete --exclude-from=$SOURCE_CHECKOUT/files-to-ignore.txt src/ $DESTINATION_CHECKOUT/product_docs/docs/postgres_for_kubernetes/1/
