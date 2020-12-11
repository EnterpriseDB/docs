import os
import shutil
import glob
import re
from urllib.parse import urlparse

def process_md(file_path):
    split_path = file_path.split('/')
    split_path.insert(len(split_path)-1, 'barman')
    new_file_path = '/'.join(split_path).replace('.md', '.mdx').replace('.en', '')

    with open(new_file_path, 'w') as new_file:
        with open(file_path, 'r') as md_file:
            copying = False
            previous_line_was_blank = False
            gh_relative_path = file_path.replace('external_sources/barman', '')

            for line in md_file:
                if copying:
                    line_blank = line.strip() == ''
                    if line_blank and not previous_line_was_blank:
                        previous_line_was_blank = True
                        new_file.write(line)
                    elif not line_blank:
                        previous_line_was_blank = False
                        new_file.write(
                            line.replace('<br>', '<br/>')
                        )
                if line.startswith('#') and not copying:
                    copying = True
                    new_file.write("---\ntitle: '{0}'\noriginalFilePath: '{1}'\n---\n\n".format(
                        re.sub(r'#+ ', '', line).strip(),
                        gh_relative_path
                    ))
        os.remove(file_path)

def create_index():
    with open('external_sources/barman/doc/manual/barman/index.mdx', 'w') as index_file:
        index_file.write("---\ntitle: 'Barman Manual'\n---\n\nAutomatically generated index file")

def source_barman():
    print('Pulling barman...')
    os.system('git clone -b master https://github.com/2ndquadrant-it/barman.git external_sources/barman')
    os.system('mkdir external_sources/barman/doc/manual/barman')

    print('Processing barman...')
    files = glob.glob('external_sources/barman/doc/manual/**/*.md', recursive=True)
    for file_path in files:
        process_md(file_path)
    create_index()

if __name__ == '__main__':
    source_barman()
