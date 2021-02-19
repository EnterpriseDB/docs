import os
import shutil
import glob
import re
from urllib.parse import urlparse

gh_tree_base_url = 'https://github.com/EnterpriseDB/edb-k8s-doc/tree/master/'

def rewrite_any_relative_links(line, gh_relative_path):
    match = re.search(r'\[.+\]\((.+)\)', line)
    if match and match[1]:
        domain = urlparse(match[1]).netloc
        if not domain and not match[1].startswith('#') and not 'github.com' in match[1]:
            split_path = gh_relative_path.split('/')
            dot_dot_count = len(re.findall(r'\.\./', match[1]))
            gh_relative_folder_path = '/'.join(split_path[0:len(split_path) - 1 - dot_dot_count])
            new_link = gh_tree_base_url+gh_relative_folder_path+'/'+match[1].replace('../', '')
            return re.sub(r'\]\(.+\)', ']({})'.format(new_link), line)
    return line

def process_md(file_path):
    if file_path.endswith('README.md'):
        new_file_path = file_path.replace('README.md', 'index.mdx')
    else:
        new_file_path = file_path.replace('.md', '.mdx')

    with open(new_file_path, 'w') as new_file:
        with open(file_path, 'r') as md_file:
            copying = False
            previous_line_was_blank = False
            gh_relative_path = file_path.replace('external_sources/cloud_native_operator/kubernetes/', '')

            for line in md_file:
                if copying:
                    # line_blank = line.strip() == ''
                    # if line_blank and not previous_line_was_blank:
                    #     previous_line_was_blank = True
                    #     new_file.write(line)
                    # elif not line_blank:
                    #     previous_line_was_blank = False
                    #     new_file.write(
                    #         rewrite_any_relative_links(
                    #             line.replace('<br>', '<br/>'),
                    #             gh_relative_path
                    #         )
                    #     )
                    new_file.write(line)
                if line.startswith('#') and not copying:
                    copying = True
                    new_file.write("---\ntitle: '{0}'\noriginalFilePath: '{1}'\n---\n\n".format(
                        re.sub(r'#+ ', '', line).strip(),
                        gh_relative_path
                    ))
        os.remove(file_path)

def source_cloud_native_operator_docs():
    # print('Pulling cloud_native_operator...')
    # os.system('git clone -b master https://github.com/EnterpriseDB/edb-k8s-doc.git external_sources/cloud_native_operator/kubernetes')

    print('Processing cloud_native_operator...')
    files = glob.glob('external_sources/cloud_native_operator/cloud_native_operator/**/*.md', recursive=True)
    for file_path in files:
        process_md(file_path)

if __name__ == '__main__':
    source_cloud_native_operator_docs()
