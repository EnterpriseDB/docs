#!/bin/sh

for i in content/**/*.rst ; do python3 scripts/pre_pandoc_script.py ${i%}; echo \"$i\" && pandoc --wrap=none $i -f rst -t gfm --atx-headers -o ${i%.*}.mdx ; done ; python3 scripts/post_pandoc_script.py
