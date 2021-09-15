#!/bin/sh
set -x

if [ -z "$NPM_TOKEN" ]
then
  (
    cd icons-pkg || exit
    npm link
  )
  npm link @enterprisedb/icons
else
  npm config set //npm.pkg.github.com/:_authToken "${NPM_TOKEN}" --userconfig .npmrc
  npm config set @enterprisedb:registry https://npm.pkg.github.com --userconfig .npmrc
fi
