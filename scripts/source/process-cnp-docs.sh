#!/bin/bash

# Process:
# - establish previous tag
# - establish new tag
# - create new branch with new content based on previous tag
#   (allow conflicts to be resolved when merging with latest mainline branch)
# - identify new tag

if [ -z $1 ] || [ -z $2 ]
then
  echo "the path to the source and destination checkouts must be provided"
  exit 1
fi

CWD=`pwd`

# convert inputs to actual directory names, in case a relative path is passed in.
SOURCE_CHECKOUT=`cd $1 && pwd`
DESTINATION_CHECKOUT=`cd $2 && pwd`

function do_import {
  local source=$1
  local dest=$2
  local version=$3
  local cwd=`pwd`

  cd $dest/product_docs/docs/postgres_for_kubernetes/1/
  node "$DESTINATION_CHECKOUT/scripts/source/files-to-ignore.mjs" \
    "$dest/product_docs/docs/postgres_for_kubernetes/1/" \
    > $source/files-to-ignore.txt

  cd $source/docs

  # grab key bit of source for use in docs
  cp $source/config/manager/default-monitoring.yaml $source/docs/src/

  node "$DESTINATION_CHECKOUT/scripts/fileProcessor/main.mjs" \
    -f "src/**/*.md" \
    -p "cnp/add-frontmatters" \
    -p "cnp/flatten-appendices" \
    -p "cnp/replace-github-urls" \
    -p "cnp/update-links" \
    -p "cnp/update-yaml-links" \
    -p "cnp/rewrite-mdextra-anchors" \
    -p "cnp/cleanup-html" \
    -p "cnp/rename-to-mdx" \
    > /dev/null

  node "$DESTINATION_CHECKOUT/scripts/source/merge-indexes.mjs" \
    "$source/docs/src/index.mdx" \
    "$dest/product_docs/docs/postgres_for_kubernetes/1/index.mdx" \
    "$source/docs/src/index.mdx" \
    >> $source/files-to-ignore.txt

  rsync -av --delete --exclude-from=$source/files-to-ignore.txt src/ $dest/product_docs/docs/postgres_for_kubernetes/1/ > /dev/null

  # Archive API docs
  local api_ref_dir="$dest/product_docs/docs/postgres_for_kubernetes/1/pg4k.v1"
  local current_api_ref="$api_ref_dir/$version.mdx"
  mkdir -p "$api_ref_dir"
  mv "$dest/product_docs/docs/postgres_for_kubernetes/1/pg4k.v1.mdx" "$current_api_ref"
  # TODO: just install yq
  node "$DESTINATION_CHECKOUT/scripts/source/update-yaml.mjs" "$current_api_ref" \
    title="API Reference - $version" \
    navTitle="$version" \
    pdfExclude=true
  if [ $version == $LATEST_TAG ]
  then
    local api_ref_index="$api_ref_dir/index.mdx"
    cp "$current_api_ref" "$api_ref_index"
    node "$DESTINATION_CHECKOUT/scripts/source/update-yaml.mjs" "$api_ref_index" \
      navTitle="API Reference" \
      pdfExclude=null \
      navigation=[`ls "$api_ref_dir" | grep ^v | sed -e 's/\.mdx$//' | sort -V -r |  paste -sd "," - `]
  fi 
  node "$DESTINATION_CHECKOUT/scripts/source/update-yaml.mjs" "$current_api_ref" \
    originalFilePath=null

  cd $cwd
}

cd $DESTINATION_CHECKOUT/scripts/fileProcessor
npm ci

# grab some information about what we're importing
cd $SOURCE_CHECKOUT

git fetch --tags

LATEST_TAG=`git tag | sort -V -r | head -n 1`
CURRENT_TAG=`git describe --exact-match --tags || echo "$LATEST_TAG-next"`
CURRENT_TAG_INDEX=`git tag | sort -V -r | grep -n $CURRENT_TAG | cut -d : -f 1 || echo 0`
PREVIOUS_TAGS=`git tag | sort -V -r | head -n $(($CURRENT_TAG_INDEX+30)) | tail -n 30`

cd $DESTINATION_CHECKOUT

git fetch --tags

PREVIOUS_DOCS_TAGS=`git for-each-ref --format='%(refname:short)' refs/tags/product/pg4k | sort -V -r | cut -d / -f 3`
PREVIOUS_TAG=`comm -12 <(echo "$PREVIOUS_DOCS_TAGS" | sort) <(echo "$PREVIOUS_TAGS" | sort) | sort -V -r | head -n 1`
PREVIOUS_COMMIT=`git rev-list -n 1 product/pg4k/$PREVIOUS_TAG || git rev-list -n 1 HEAD`
PREVIOUS_COMMIT_DESC=`git rev-list --format=oneline -n 1 $PREVIOUS_COMMIT`

if [[ -z "$CURRENT_TAG" || -z "$PREVIOUS_TAG" || -z "$PREVIOUS_COMMIT" || -z "$LATEST_TAG" ]] 
then
  echo "Missing context: CURRENT_TAG=$CURRENT_TAG PREVIOUS_TAG=$PREVIOUS_TAG PREVIOUS_COMMIT=$PREVIOUS_COMMIT LATEST_TAG=$LATEST_TAG"
  exit 1
fi 

echo "Applying diff between $PREVIOUS_TAG and $CURRENT_TAG, including local changes since $PREVIOUS_COMMIT_DESC" 
set -e

# create a temporary worktree to avoid messing up source repo (for local work; CI doesn't care)
cd $SOURCE_CHECKOUT
git worktree add --detach ./docs-import

cd $DESTINATION_CHECKOUT

git worktree add --detach ./docs-import

cd $DESTINATION_CHECKOUT/docs-import
git checkout $PREVIOUS_COMMIT
cd $SOURCE_CHECKOUT/docs-import
git checkout $PREVIOUS_TAG

do_import $SOURCE_CHECKOUT/docs-import $DESTINATION_CHECKOUT/docs-import $PREVIOUS_TAG

cd $DESTINATION_CHECKOUT/docs-import
git checkout -b temp/docs-import-$PREVIOUS_TAG
git add product_docs/docs/postgres_for_kubernetes
git commit -m "PG4K import for $PREVIOUS_TAG"

cd $SOURCE_CHECKOUT
git worktree remove --force ./docs-import
git worktree add --detach ./docs-import

do_import $SOURCE_CHECKOUT/docs-import $DESTINATION_CHECKOUT/docs-import $CURRENT_TAG

cd $DESTINATION_CHECKOUT/docs-import

git checkout -b temp/docs-import-$CURRENT_TAG
git add product_docs/docs/postgres_for_kubernetes
git commit -m "PG4K import for $CURRENT_TAG"

cd $DESTINATION_CHECKOUT

git checkout $PREVIOUS_COMMIT

git cherry-pick --no-commit --strategy=ort -X theirs temp/docs-import-$CURRENT_TAG

# cleanup: remove worktree
cd $SOURCE_CHECKOUT
git worktree remove --force ./docs-import

cd $DESTINATION_CHECKOUT

git worktree remove --force ./docs-import

git branch -D temp/docs-import-$CURRENT_TAG
git branch -D temp/docs-import-$PREVIOUS_TAG

cd $CWD

echo "new-tag=product/pg4k/$CURRENT_TAG" >> ${GITHUB_OUTPUT:-"/dev/null"}
