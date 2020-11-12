from pathlib import Path
import fileinput

# the original structure had all of the RST files in the same folder as the images folder
# The files have been moved to subfolders, breaking the image links
# This converts the links to look at the root folder for the images folder

for path in Path('content_build').rglob('*.mdx'):
  levels = len(str(path.parent).split('/')) - 2
  for line in fileinput.input(files=[str(path)], inplace=1):
    print(line.replace("images", "../" * levels + "images"), end="")
