#!/bin/sh

cd "${0%/*}"

./convert.sh

rsync -a --delete content_build/pem/ docs/pem/8.1.0/pem_online_help/

rm docs/pem/8.1.0/pem_online_help/release_notes*.mdx

cd ..

node scripts/normalize/titleRefs.js "product_docs/docs/pem/8.1.0/pem_online_help/**/*.mdx"
node scripts/normalize/slashEscapedLessThan.js "product_docs/docs/pem/8.1.0/pem_online_help/**/*.mdx"
node scripts/normalize/markdown.js "product_docs/docs/**/*.mdx" "product_docs/docs/pem/8.1.0/**/*.mdx"