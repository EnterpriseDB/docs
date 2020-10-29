import os
import shutil
import glob
import re

def process_md(file_path):
    if file_path.endswith('README.md'):
        new_file_path = file_path.replace('README.md', 'index.mdx')
    else:
        new_file_path = file_path.replace('.md', '.mdx')

    with open(new_file_path, 'w') as new_file:
        with open(file_path, 'r') as md_file:
            copying = False
            previous_line_was_blank = False
            for line in md_file:
                if copying:
                    line_blank = line.strip() == ''
                    if line_blank and not previous_line_was_blank:
                        previous_line_was_blank = True
                        new_file.write(line)
                    elif not line_blank:
                        previous_line_was_blank = False
                        new_file.write(line.replace('<br>', '<br/>'))
                if line.startswith('#') and not copying:
                    copying = True
                    new_file.write("---\ntitle: '{}'\n---\n\n".format(
                        re.sub(r'#+ ', '', line).strip()
                    ))
        os.remove(file_path)

def source_k8s_docs():
    print('Pulling k8s_docs...')
    os.system('git clone -b master https://github.com/EnterpriseDB/edb-k8s-doc.git sources/k8s_docs/docs/k8s/1')

    print('Processing k8s_docs...')
    files = glob.glob('sources/k8s_docs/docs/k8s/1/**/*.md', recursive=True)
    for file_path in files:
        process_md(file_path)
        # print(file_path)

if __name__ == '__main__':
    source_k8s_docs()
