#!/bin/bash

if [ -z $1 ] || ! [ -d $1/product_docs/docs ]
then
  echo "provide the path to the content root directory (should contain product_docs/docs and advocacy_docs subdirectories)"
  exit 1
fi

content_root=$1
pdf_script_dir=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

find $content_root '(' -wholename './product_docs/*/index.mdx' \
  -o -wholename './advocacy_docs/*/index.mdx' ')' \
    -exec grep -q 'pdf: true' {} ';' -print0 \
  | $pdf_script_dir/parallel --halt soon,fail=1 --memfree=3G -P 3 -0 \
    python3 $pdf_script_dir/generate_pdf.py {//}
