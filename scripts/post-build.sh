#!/bin/sh

echo "post-build script starting"
if test -f "public/_redirects"; then
  echo "writing path prefix to public/_redirects"
  printf "\n\n/docs/*  /:splat  200" >> public/_redirects
fi
echo "post-build script complete"
