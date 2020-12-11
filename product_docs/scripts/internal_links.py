from pathlib import Path
import re
import fileinput

links = {}

def clean_up_key(key):
  new_key = key.replace("(", "").replace(")", "").replace(".", "_")
  if key[-1] == "_":
    new_key = new_key[0:-1]
  return new_key

# Scan all of the files in the content_build folder to find any registered links
# If found, each tag is added as a key and the path is added as a value to the lnks object

for path in Path('content_build').rglob('*.mdx'):
    root_path_array = str(path.parent).split('/')[2:]
    root_path = "/".join(root_path_array)
    if len(root_path_array) > 0:
      root_path = root_path + "/"

    f = path.open()
    for line in f.readlines():
      if "registered_link" in line:
        id = "#" + line.split('"')[1]
        if str(path.stem.startswith("index")):
          links[id] = root_path + id
        else:
          links[id] = root_path + str(path.stem) + id



# Now that all of the links in the object, scan all of the files again to replace the
# references with links

total = 0

for path in Path('content_build').rglob('*.mdx'):

    # finding depth of link to know how far to back out to root

    path_total = 0

    depth = len(str(path.parent).split('/')) - 2
    if path.name == 'index.mdx':
      depth -= 1
    if depth < 0:
      depth = 0
    depth_prefix = "../" * depth

    f = path.open()
    for line in fileinput.input(files=[str(path)], inplace=1):
      new_line = line

      # convert registered links to paths
      if "](#" in new_line:
        tags = re.findall('\[[.0-9a-zA-Z\s\-]*\]\((#.*?)\)', new_line)
        for tag in tags:
          clean_tag = clean_up_key(tag)
          if clean_tag in links:
            new_line = new_line.replace(tag, depth_prefix + links[clean_tag])
            path_total += 1
      print(new_line, end="")
    if path_total > 0:
      print(str(path_total) + " internal links converted in:\n" + str(path.parent) + "/" + str(path.stem))
      total += path_total

print(str(total) + " total internal links converted")



