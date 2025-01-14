#!/usr/bin/env python3
import os
import re
from argparse import ArgumentParser, ArgumentTypeError
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from subprocess import run
from typing import List
import frontmatter
import hashlib

BASE_DIR = Path(__file__).resolve().parent

ANSI_BLUE = "\033[34m"
ANSI_STOP = "\033[0m"
ANSI_YELLOW = "\033[33m"


def main(args):
    doc_path, index_meta, product, version, mdx_file, html_file, cover_file, pdf_file, pdf_hash_file = setup(args)

    files = list_files(doc_path, index_meta)
    if len(files) == 0:
        print(f"{ANSI_YELLOW}skipping {pdf_file}{ANSI_STOP}")
        return

    print(f"{ANSI_BLUE}building {pdf_file}{ANSI_STOP}", flush=True)
    with open(mdx_file, "w") as output:
        resource_search_paths = {doc_path, *combine_mdx(files, output)}

    if hash_check(pdf_file, pdf_hash_file, mdx_file):
        mdx_file.unlink()
        print(f"{ANSI_YELLOW}skipping {pdf_file} - content unchanged{ANSI_STOP}")
        return
    
    try:
    
        output = run(
                [
                    "node",
                    "--max-old-space-size=4096",
                    BASE_DIR / "cleanup_combined_markdown.mjs",
                    mdx_file
                ]
            )
        output.check_returncode()

        # TODO: Pick up refactoring from this point
        title = get_title(doc_path) or product

        print("generating docs html")
        output = run(
            [
                "pandoc",
                mdx_file,
                "--from=gfm",
                "--self-contained",
                "--highlight-style=tango",
                f"--include-in-header={BASE_DIR / 'pdf-script.html'}",
                f"--css={BASE_DIR / 'pdf-styles.css'}",
                f"--resource-path={':'.join((str(p) for p in resource_search_paths))}",
                f"--output={html_file}",
            ]
        )
        output.check_returncode()

        if not html_file.exists():
            mdx_file.unlink()
            raise Exception(f"\033[91m html file failed to generate for {mdx_file} \033[0m")

        if args.generate_html_only:
            run(["open", html_file])
        else:
            print("generating cover page")
            data = (BASE_DIR / "cover.html").read_text()
            data = data.replace("[PRODUCT]", title)
            data = data.replace("[VERSION]", version)
            cover_file.write_text(data)

            header_footer_common = [
                "--header-font-name",
                "Signika",
                "--header-font-size",
                "8",
                "--header-spacing",
                "7",
                "--footer-font-name",
                "Signika",
                "--footer-font-size",
                "8",
                "--footer-spacing",
                "7",
                "--footer-left",
                f"Copyright © 2009 - {datetime.now().year} EnterpriseDB Corporation. "
                "All rights reserved.",
            ]

            header_footer_options = [
                "--header-right",
                "[doctitle]",
                "--footer-right",
                "[page]",
            ]

            print("converting html to pdf")
            output = run(
                [
                    "wkhtmltopdf",
                    "--log-level",
                    "error",
                    "--title",
                    title,
                    "--margin-top",
                    "15mm",
                    "--margin-bottom",
                    "15mm",
                    *header_footer_common,
                    cover_file,
                    "--footer-right",
                    f"Built at {datetime.utcnow().replace(microsecond=0).isoformat()}",
                    "toc",
                    "--xsl-style-sheet",
                    "scripts/pdf/toc-style.xsl",
                    *header_footer_options,
                    html_file,
                    *header_footer_options,
                    pdf_file,
                ]
            )
            output.check_returncode()

        if args.open_pdf:
            run(["open", pdf_file])

    finally:
        mdx_file.unlink(missing_ok=True)
        if not args.generate_html_only:
            html_file.unlink(missing_ok=True)
            cover_file.unlink(missing_ok=True)


def setup(args):
    doc_path = args.doc_path
    index_meta = load_index_metadata(doc_path)
    directoryDefaults = index_meta.get("directoryDefaults", None) or {}
    product = directoryDefaults.get("product", None) or index_meta.get("product", None) or (doc_path.parts[-2] if len(doc_path.parts) >= 4 else doc_path.parts[-1])
    version = directoryDefaults.get("version", None) or index_meta.get("version", None) or (doc_path.parts[-1] if len(doc_path.parts) >= 4 else '')

    _file_prefix = product + (version and "_v" + version or "") + "_documentation"

    mdx_file = doc_path / f"{_file_prefix}.mdx"
    html_file = doc_path / f"{_file_prefix}.html"
    cover_file = doc_path / f"{_file_prefix}_cover.html"
    pdf_file = doc_path / f"{_file_prefix}.pdf"
    pdf_hash_file = doc_path / f"{_file_prefix}.pdf-hash"

    for f in [mdx_file, html_file, cover_file]:
        f.unlink(missing_ok=True)

    return doc_path, index_meta, product, version, mdx_file, html_file, cover_file, pdf_file, pdf_hash_file


def list_files(doc_path, index_meta, chapter=None, is_root_dir=True):
    chapter = [1] if chapter is None else chapter
    all_files = []
    nav_order = index_meta.get("navigation", {})
    directory_contents = sorted(
        filter(filter_path, doc_path.iterdir()), key=lambda file: put_index_first(file, nav_order)
    )

    for i, entry in enumerate(directory_contents):
        chapter = (
            advance_chapter(
                chapter[:-1] if is_root_dir and len(chapter) > 1 else chapter
            )
            if i != 0
            else [*chapter, 0]
            if entry.is_file()
            else chapter
        )

        if entry.is_file():
            all_files.append(TocItem(filename=entry, chapter=chapter))
        else:
            all_files += list_files(entry, load_index_metadata(entry), chapter, is_root_dir=False)

    return all_files

def hash_check(pdf_file, pdf_hash_file, mdx_file):
    try:
        existingHash = "a"
        newHash = "b"

        if pdf_hash_file.exists():
            existingHash = pdf_hash_file.read_text()
        with mdx_file.open(mode="rb") as output:
            newHash = hashlib.file_digest(output, "md5").hexdigest()

        if pdf_file.exists() and newHash == existingHash: 
            return True       

        pdf_file.unlink(missing_ok=True)
        pdf_hash_file.write_text(newHash)
        return False

    except (FileNotFoundError):
        return False

def combine_mdx(files, output):
    resource_search_paths = set()

    for item in files:
        resource_search_paths.add(item.filename.parent)
        front_matter, content, lines_before_content = parse_mdx(item.filename)
        if re.search("pdfExclude", front_matter): continue

        output.write(f"\n<span data-original-path='{str(item.filename)}:{lines_before_content}'></span>\n\n")
        write_front_matter(front_matter, item.chapter, output)
        write_content(content, output)

    return resource_search_paths


def write_front_matter(front_matter, chapter, output):
    title_marker = "title: "

    for line in [
        line for line in front_matter.split(os.linesep) if title_marker in line
    ]:
        title = strip_quotes(line.replace(title_marker, ""))
        print(f'# {chapter}{"&nbsp;" * 10}{title}', file=output)

    output.write(os.linesep)


def write_content(content, output):
    lines = []
    for line in content.split(os.linesep):
        if "toctree" in line:
            break
        lines.append(line + os.linesep)
    output.writelines(lines)
    output.write(os.linesep)


def advance_chapter(chapter):
    return [*chapter[:-1], chapter[-1] + 1]


def filter_path(path):
    if path.is_dir() and not path.match("*images*"):
        return True
    elif path.suffix in [".mdx", ".md"]:
        _, content, _ = parse_mdx(path)
        no_content = content == "" or (
            len(content.split(os.linesep)) == 1 and "StubCards" in content
        )
        return not no_content
    else:
        return False


def parse_mdx(mdx_file):
    front_matter, _, content = mdx_file.read_text().partition("---")[2].partition("---")
    lines_before_content = front_matter.count('\n') + 1
    for c in content:
        if not c.isspace(): break
        if c == '\n': lines_before_content += 1
    return front_matter.strip(), content.strip(), lines_before_content

def load_index_metadata(path):
    try:
        with open(path / "index.mdx") as indexFile:
            indexMeta, content = frontmatter.parse(indexFile.read())
            return indexMeta
    except (FileNotFoundError):
        return {}


def put_index_first(path, nav_order):
    filename = path.name if path.suffix != ".mdx" else path.stem
    nav_order = nav_order or [filename]
    indice = 0
    if path.name != "index.mdx":
        indice = nav_order.index(filename)+1 if filename in nav_order else len(nav_order)+1
    return f'{indice:03d}_{filename}'


def get_title(doc_path):
    index_path = doc_path / "index.mdx"
    if index_path.exists():
        with open(index_path) as index_file:
            for line in (line for line in index_file if "title: " in line):
                return strip_quotes(line.replace("title: ", ""))
    return None


def strip_quotes(str):
    return str.strip().strip("'").strip('"')


@dataclass
class TocItem:
    filename: Path
    chapter: List[int]

    def __post_init__(self):
        self.chapter = ".".join((str(c) for c in self.chapter if c > 0))


def cli():
    parser = ArgumentParser(
        description=(
            "generate a PDF based on documentation files from a product directory"
        )
    )
    parser.add_argument(
        "doc_path",
        metavar="doc-path",
        type=path_type,
        help="directory path for a specific product's documentation",
    )
    group = parser.add_mutually_exclusive_group()
    group.add_argument(
        "--html",
        dest="generate_html_only",
        action="store_true",
        help="generate the intermediate HTML instead of PDF",
    )
    group.add_argument(
        "--open",
        dest="open_pdf",
        action="store_true",
        help="open the PDF after generation",
    )
    return parser.parse_args()


def path_type(arg):
    p = Path(arg)
    if not (p.exists() and p.is_dir()):
        raise ArgumentTypeError(f'"{arg}" is not a valid directory')
    return p


if __name__ == "__main__":
    main(cli())
