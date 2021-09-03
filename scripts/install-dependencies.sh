#!/bin/sh

if [ -z $NPM_TOKEN ]
then
  cd icons-pkg/
  npm link
  cd ..
  npm link @enterprisedb/icons
else
  npm install
fi
