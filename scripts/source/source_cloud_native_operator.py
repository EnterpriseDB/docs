import os
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
  iconName: logos/KubernetesMono

navigation:
{0}"""


def rewrite_yaml_links(line):
    match = re.search(r"\[.+\]\((.+)\)", line)
    if match and match[1] and match[1].endswith(".yaml"):
        return line.replace(match[1], match[1].replace("samples/", "../samples/"))
    return line


def index_frontmatter():
    nav = []
    with open("temp_kubernetes/docs/mkdocs.yml") as mkdocs:
        readingNav = False
        for line in mkdocs:
            if "-" not in line:
                readingNav = False
            if line.startswith("nav"):
                readingNav = True
            elif readingNav:
                nav.append(line.replace(".md", ""))
                if "quickstart.md" in line:
                    nav.append("  - interactive_demo\n")

    return INDEX_FRONTMATTER.format("".join(nav))


def process_md(file_path):
    new_file_path = file_path.with_suffix(".mdx")

    with open(new_file_path, "w") as new_file:
        with open(file_path, "r") as md_file:
            copying = False
            quickstart = file_path.name == "quickstart.md"
            paragraph = 0
            gh_relative_path = Path("src/") / file_path.relative_to("temp_kubernetes/build/")

            for line in md_file:
                if quickstart and not line.strip():
                    paragraph = paragraph + 1

                    if paragraph == 2:
                        line = """
<!-- section below inserted by source_cloud_native_opreator.py - changes made here will be lost -->

!!! Tip "Live demonstration"
    Don't want to install anything locally just yet? Try a demonstration directly in your browser:

    [Cloud Native PostgreSQL Operator Interactive Quickstart](interactive_demo)

<!-- end inserted section -->
"""
                elif copying:
                    line = rewrite_yaml_links(line)
                elif line.startswith("#"):
                    copying = True
                    line = STANDARD_FRONTMATTER.format(
                        re.sub(r"#+ ", "", line).strip(),
                        gh_relative_path,
                        index_frontmatter()
                        if new_file_path.name == "index.mdx"
                        else "",
                    )
                elif not line.strip():
                    line = ""
                else:
                    print("File does not begin with title - frontmatter will not be valid: " + file_path)

                new_file.write(line)

        os.remove(file_path)


def source_cloud_native_postgresql_docs():
    os.system("rm -r temp_kubernetes/build")
    os.system("cp -r temp_kubernetes/docs/src temp_kubernetes/build")
    os.system(
        "cp -r merge_sources/kubernetes/cloud_native_postgresql/* temp_kubernetes/build"
    )

    print("Processing cloud_native_postgresql...")
    files = Path("temp_kubernetes/build/").glob("**/*.md")
    for file_path in files:
        process_md(file_path)


if __name__ == "__main__":
    source_cloud_native_postgresql_docs()
