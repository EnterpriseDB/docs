import fileinput
import re
from pathlib import Path
from html.parser import HTMLParser

# Cleaning up the MDX files after Pandoc has converted from RST to MDX
# The original files had the registered link (for internal links) at the top of the file
# These needed to be after the frontmatter so the if and elif take care of this
# The rest is removing lots of extra characters from conversion
print('adding frontmatter')

def fix_registered_link(line):
  return line.replace("\\", "").replace("&lt;","<").replace("&gt;",">")

class HtmlDataParser(HTMLParser):
  data = list()

  def handle_data(self, data):
    self.data.append(data)

  def reset(self):
    self.data = list()
    return super(HtmlDataParser, self).reset()

for path in Path('content').rglob('*.mdx'):
  copying = False
  top_url_line = ""

  for line in fileinput.input(files=[str(path)], inplace=1, backup=".bak"):
    if line.startswith('# ') and not copying:
      title = line.replace("# ", "").replace("\n", "").replace("`", "")
      data_parser = HtmlDataParser()
      data_parser.feed(title)
      data_parser.close()
      if len(data_parser.data):
        title = data_parser.data[0]
      data_parser.reset()

      print("---")
      print('title: "' + title + '"')
      print('---')
      print()
      print(top_url_line)
      copying = True
    elif not copying:
      if "registered\_link" in line or "registered_link" in line:
        top_url_line = fix_registered_link(line)
      else:
        continue
    elif line.startswith('##'):
      print(line.replace("`", ""), end="")
    elif "registered\_link" in line or "registered_link" in line:
      print(fix_registered_link(line), end="")
    elif "<code>" in line:
      print(line.replace('{', '&#123;').replace('}', '&#125;'), end="")
    else:
      print(line, end="")
