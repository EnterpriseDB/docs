#!/bin/sh
set -x

[ "$NODE_ENV" != "production" ] && husky install || true
