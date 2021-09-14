#!/bin/sh

if [ -z "$NPM_TOKEN" ]
then
  cd icons-pkg || exit
  npm link
  cd ..
  npm link @enterprisedb/icons --legacy-peer-deps
else
  npm config set '//npm.pkg.github.com/:_authToken' '${NPM_TOKEN}' --userconfig .npmrc
  npm config set '@enterprisedb:registry' 'https://npm.pkg.github.com' --userconfig .npmrc
  npm install --legacy-peer-deps
fi
