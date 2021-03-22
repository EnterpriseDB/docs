import os
import shutil
import glob
import re
from urllib.parse import urlparse

STANDARD_FRONTMATTER = """---
title: '{0}'
originalFilePath: '{1}'
product: 'Cloud Native Operator'{2}
---
"""

INDEX_FRONTMATTER = """
indexCards: none
directoryDefaults:
  prevNext: true
  iconName: kubernetes

navigation:
{0}"""

def rewrite_yaml_links(line):
    match = re.search(r'\[.+\]\((.+)\)', line)
    if match and match[1] and match[1].endswith('.yaml'):
        return line.replace(match[1], match[1].replace('samples/', '../samples/'))
    return line   

def index_frontmatter():
    nav = []
    with open('temp_kubernetes/original/mkdocs.yml') as mkdocs:
        readingNav = False
        for line in mkdocs:
            if '-' not in line:
                readingNav = False
            if line.startswith('nav'):
                readingNav = True
            elif readingNav:
                nav.append(line.replace('.md', ''))

    return INDEX_FRONTMATTER.format(''.join(nav))

def process_md(file_path):
    new_file_path = file_path.replace('.md', '.mdx')

    with open(new_file_path, 'w') as new_file:
        with open(file_path, 'r') as md_file:
            copying = False
            previous_line_was_blank = False
            gh_relative_path = file_path.replace('temp_kubernetes/build/', 'src/')

            for line in md_file:
                if copying:
                    new_file.write(rewrite_yaml_links(line))
                if line.startswith('#') and not copying:
                    copying = True
                    new_file.write(STANDARD_FRONTMATTER.format(
                        re.sub(r'#+ ', '', line).strip(),
                        gh_relative_path,
                        index_frontmatter() if new_file_path.split('/')[-1] == 'index.mdx' else ''
                    ))

        os.remove(file_path)

def source_cloud_native_postgresql_docs():
    os.system('rm -r temp_kubernetes/build')
    os.system('cp -r temp_kubernetes/original/src temp_kubernetes/build')

    print('Processing cloud_native_postgresql...')
    files = glob.glob('temp_kubernetes/build/**/*.md', recursive=True)
    for file_path in files:
        process_md(file_path)

if __name__ == '__main__':
    source_cloud_native_postgresql_docs()
