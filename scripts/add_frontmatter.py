import fileinput
from pathlib import Path

# Cleaning up the MDX files after Pandoc has converted from RST to MDX
# The original files had the registered link (for internal links) at the top of the file
# These needed to be after the frontmatter so the if and elif take care of this
# The rest is removing lots of extra characters from conversion
print('adding frontmatter')

for path in Path('content').rglob('*.mdx'):
  copying = False
  top_url_line = ""
  for line in fileinput.input(files=[str(path)], inplace=1):
    if line.startswith('# ') and not copying:
      title = line.replace("# ", "").replace("\n", "").replace("`", "").replace("\*", "*")
      print("---")
      print('title: "' + title + '"')
      print('---')
      print()
      print(top_url_line)
      copying = True
    elif not copying:
      if "registered\_link" in line:
        top_url_line = line.replace("\\", "")
      else:
        continue
    elif line.startswith('##'):
      print(line.replace("`", "").replace("\*", "*").replace("\_", "_"), end="")
    elif "registered\_link" in line:
      print(line.replace("\\",""), end="")
    elif line.startswith("<table"):
      print('<div class="table-with-scroll">\n<table>')
    elif line.startswith("</table>"):
      print('</table>\n</div>')
    else:
      print(line.replace("\_", "_").replace("\*", "*"), end="")
