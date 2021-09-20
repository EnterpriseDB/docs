#!/bin/bash

if [ -z $1 ] || [ -z $2 ]
then
  echo "the path to the source and destination checkouts must be provided"
  exit 1
fi

# convert inputs to actual directory names, in case a relative path is passed in.
SOURCE_CHECKOUT=`cd $1 && pwd`
DESTINATION_CHECKOUT=`cd $2 && pwd`

rm $SOURCE_CHECKOUT/docs/en_US/release_notes*.rst
rm $SOURCE_CHECKOUT/docs/en_US/pem_release_notes*.rst

node $DESTINATION_CHECKOUT/scripts/fileProcessor/main.mjs \
  -f "$SOURCE_CHECKOUT/**/*.rst" \
  -p pandoc/rst-to-mdx
