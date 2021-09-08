#!/bin/sh

if [ -z "$NPM_TOKEN" ]
then
  cd icons-pkg || exit
  npm link
  cd ..
  npm link @enterprisedb/icons --legacy-peer-deps
else
  npm install --legacy-peer-deps
fi
