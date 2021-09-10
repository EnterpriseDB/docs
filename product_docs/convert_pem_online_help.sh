#!/bin/sh

cd "${0%/*}"

./convert.sh

rm content_build/pem/release_notes*.mdx
rm content_build/pem/pem_release_notes*.mdx

# eliminate absolute paths
grep -rli '<img' * | xargs -i@ sed -i 's/<img src="\/..\/images\//<img src="..\/images\//' @
# eliminate figures
grep -rli '<img' * | xargs -i@ sed -i -E 's/<figure><img src="([^"]+)" class="align-center" alt="([^"]+)" \/><figcaption aria-hidden="true"><em>[^<]+<\/em><\/figcaption><\/figure>/!\[\2](\1)/' @
# eliminate HTML images
grep -rli '<img' * | xargs -i@ sed -i -E 's/<img src="([^"]+)" class="align-center" alt="([^"]+)" \/>/!\[\2](\1)/' @

rsync -a --delete content_build/pem/ docs/pem/8/pem_online_help/

cd ..

node scripts/normalize/titleRefs.js "product_docs/docs/pem/8/pem_online_help/**/*.mdx"
node scripts/normalize/slashEscapedLessThan.js "product_docs/docs/pem/8/pem_online_help/**/*.mdx"
node scripts/normalize/markdown.js "product_docs/docs/**/*.mdx" "product_docs/docs/pem/8/**/*.mdx"
python scripts/legacy_redirects/add_legacy_redirects.py
