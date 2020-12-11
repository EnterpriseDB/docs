from pathlib import Path
import re

print('running substitutions')
for path in Path('content_build').rglob('*.mdx'):
  # print('substituting in {0}'.format(path))

  # read file into memory
  mdx_file = open(path, 'r')
  mdx_contents = mdx_file.read()
  mdx_file.close()

  # make substitutions
  mdx_contents = re.sub(r'(<div[^>]*class="[">]*\bindex\b[">]*"[^>]*>)([\s\S]*?)(<\/div>)', '', mdx_contents)

  # write out changes
  mdx_file = open(path, 'w')
  mdx_file.write(mdx_contents)
  mdx_file.close()
