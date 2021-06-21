#!/bin/zsh

for i in content/**/*.rst ; do python3 scripts/pre_pandoc_script.py ${i%}; echo \"$i\" && pandoc --wrap=none $i -f rst -t gfm --markdown-headings=atx -o ${i%.*}.mdx ; done ; python3 scripts/post_pandoc_script.py
