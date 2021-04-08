import os
import shutil
import glob
import re
from pathlib import Path

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
                nav.append(line.replace(".md", ""))
                if ("quickstart.md" in line):
                    nav.append("  - interactive\n")

    return INDEX_FRONTMATTER.format("".join(nav))

def process_md(file_path):
    new_file_path = file_path.with_suffix(".mdx")

    with open(new_file_path, 'w') as new_file:
        with open(file_path, 'r') as md_file:
            copying = False
            quickstart = file_path.name == "quickstart.md"
            paragraph = 0
            gh_relative_path = "src/" + str(file_path.relative_to("temp_kubernetes/build/"))

            for line in md_file:
                if not line.strip():
                    paragraph = paragraph+1

                    if quickstart and paragraph == 2:
                        line = """
!!! Tip "Live demonstration"
    Don't want to install anything locally just yet? Try a demonstration directly in your browser:

    [Cloud Native PostgreSQL Operator Interactive Quickstart](interactive/installation_and_deployment/)

"""
                elif copying:
                    line = rewrite_yaml_links(line)
                elif line.startswith("#") and not copying:
                    copying = True
                    line = STANDARD_FRONTMATTER.format(
                        re.sub(r"#+ ", "", line).strip(),
                        gh_relative_path,
                        index_frontmatter() if new_file_path.name == "index.mdx" else ""
                    )

                new_file.write(line)

        os.remove(file_path)

def source_cloud_native_postgresql_docs():
    os.system("rm -r temp_kubernetes/build")
    os.system("cp -r temp_kubernetes/docs/src temp_kubernetes/build")
    os.system("cp -r merge_sources/kubernetes/cloud_native_postgresql/* temp_kubernetes/build")

    print("Processing cloud_native_postgresql...")
    files = Path("temp_kubernetes/build/").glob("**/*.md")
    for file_path in files:
        process_md(file_path)

if __name__ == '__main__':
    source_cloud_native_postgresql_docs()