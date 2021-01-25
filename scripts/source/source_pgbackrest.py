import os
import shutil
import glob
import re
from urllib.parse import urlparse

def rewrite_any_relative_links(line, file_path):
    match = re.search(r'\[.+\]\((.+)\)', line)
    if match and match[1] and not match[1].endswith('.png'):
        domain = urlparse(match[1]).netloc
        if not domain:
            # this is pretty fragile but it works for the POC
            new_link = match[1].replace('.md', '')
            #if file_path.endswith('index.mdx'):
             #   new_link = 'pgbackrest/' + new_link
            return re.sub(r'\]\(.+\)', ']({})'.format(new_link), line)
    return line    

def process_md(file_path):
    if os.path.islink(file_path):
        os.remove(file_path)
        return

    split_path = file_path.split('/')
    split_path.insert(len(split_path)-1, 'pgbackrest')
    new_file_path = '/'.join(split_path).replace('.md', '.mdx')
    if split_path[-1] == 'README.md':
        new_file_path = new_file_path.replace('README.mdx', 'index.mdx')

    with open(new_file_path, 'w') as new_file:
        with open(file_path, 'r') as md_file:
            copying = False
            previous_line_was_blank = False
            gh_relative_path = file_path.replace('external_sources/pgbackrest', '')

            for line in md_file:
                if copying:
                    line_blank = line.strip() == ''
                    if line_blank and not previous_line_was_blank:
                        previous_line_was_blank = True
                        new_file.write(line)
                    elif not line_blank:
                        previous_line_was_blank = False
                        new_file.write(
                            rewrite_any_relative_links(
                                line.replace('<br>', '<br/>'),
                                new_file_path
                            )
                        )
                if line.startswith('#') and not copying:
                    copying = True
                    new_file.write("---\ntitle: '{0}'\noriginalFilePath: '{1}'\n---\n\n".format(
                        re.sub(r'#+ ', '', line).strip().replace('<br/>', '-'),
                        gh_relative_path
                    ))
        os.remove(file_path)

def source_pgbackrest():
    print('Pulling pgbackrest...')

    # Commented out as the repo is private, use included files for now
    # os.system('git clone -b docs_development git@github.com:EnterpriseDB/pgbackrest-docs.git external_sources/pgbackrest')
    os.system('cp -r temp_pgbackrest/. external_sources/pgbackrest')

    os.system('mkdir external_sources/pgbackrest/docs/pgbackrest')

    print('Processing pgbackrest...')
    files = glob.glob('external_sources/pgbackrest/docs/**/*.md', recursive=True)
    for file_path in files:
        process_md(file_path)
    os.system('mv external_sources/pgbackrest/docs/images external_sources/pgbackrest/docs/pgbackrest/images')

if __name__ == '__main__':
    source_pgbackrest()
