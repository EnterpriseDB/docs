from pathlib import Path
import os
import shutil
import re

class Node:
    def __init__(self, filename):
        self.filename = filename
        self.items = []

def number_prefix(int):
  result = str(int) + "_"
  if int < 10:
    result = "0" + result
  return result

# return an array of Nodes that are included in page's ToC section
def extract_table_of_contents(readfile):
  parsingTOC = False
  toc = []
  tocItems = {}
  for line in readfile.readlines():
    # stop processing TOC if the line isn't indented, and isn't a blank line
    if re.match(r'^\S+', line):
      parsingTOC = False

    # if we're parsing the TOC and the line seems to be a TOC entry
    if parsingTOC and len(line) > 4 and ":" not in line and "newpage" not in line:
      filename = line.replace(" ", "").replace("\n", "")
      if not filename in tocItems:
        toc.append(Node(filename))
        tocItems[filename] = "1"

    # start processing TOC when we see toctree
    if "toctree" in line:
      parsingTOC = True
  return toc

# recursive function for building ToC tree
def scan_node_for_toc(path, root):
  g = open(path, "r")
  toc = extract_table_of_contents(g)
  if len(toc) > 0:
    for idx, item in enumerate(toc):
      item_path = root + item.filename + ".rst"
      subToc = scan_node_for_toc(item_path, root)
      if len(subToc) > 0:
        toc[idx].items = subToc
  return toc

def count_tree_items(tree):
  total = len(tree.items)
  for leaf in tree.items:
    total += count_tree_items(leaf)
  return total

def print_tree_items(tree, depth):
  print(">" * depth + " " + tree.filename)
  for leaf in tree.items:
    print_tree_items(leaf, depth + 1)

# use ToC to move files to correct folder, building a new one if necessary
def process_node(node, root_path, result_path, index):
  source = root_path + node.filename + ".mdx"
  if len(node.items) == 0:
    destination = result_path + number_prefix(index) + node.filename.replace("%", "") + ".mdx"
    dest = shutil.copyfile(source, destination) 
  else:
    folder_path = result_path + number_prefix(index) + node.filename
    os.mkdir(folder_path)
    destination = folder_path + "/index.mdx"
    dest = shutil.copyfile(source, destination)
    idx = 1
    for sub_node in node.items:
      process_node(sub_node, root_path, folder_path + "/", idx)
      idx += 1

for path in Path('content').rglob('index.rst'):
    root_path = str(path.parents[0]) + '/'
    content_path = str(path.parents[2]) + '/'
    f = path.open()

    # get top level of ToC
    toc = extract_table_of_contents(f)

    # get sub-levels of ToC
    for idx, item in enumerate(toc):
      item_path = root_path + item.filename + ".rst"
      subToc = scan_node_for_toc(item_path, root_path)
      if len(subToc) > 0:
        toc[idx].items = subToc

    # Print ToC structure and check to see how many files logged in ToC
    total = len(toc)
    for node in toc:
      print_tree_items(node, 0)
      total += count_tree_items(node)
    print(str(total) + " files logged in ToC")

    result_path = content_path + "content_build"
    dest_path = result_path + "/" + path.parts[-2]

    # clear out previous results, if any
    if os.path.exists(dest_path):
      shutil.rmtree(dest_path)

    # create build folder, if needed
    if not os.path.exists(result_path):
      try:
        os.mkdir(result_path)
      except OSError:
        print ("Creation of the directory %s failed" % result_path)
      else:
        print ("Successfully created the directory %s " % result_path)

    # create destination folder within build folder
    try:
      os.mkdir(dest_path)
    except OSError:
      print ("Creation of the directory %s failed" % dest_path)
    else:
      print ("Successfully created the directory %s " % dest_path)

    # copy images folder to destination folder
    if os.path.exists(root_path + "images"):
      shutil.copytree(root_path + "images", dest_path + "/images")

    # copy index over
    shutil.copyfile(root_path + "index.mdx", dest_path + "/index.mdx") 
    
    # process nodes in ToC to move mdx files to correct folder in destination folder
    idx = 1

    for node in toc:
      process_node(node, root_path, dest_path + "/", idx)
      idx += 1

    # remove conclusion
    conclusion_path = '{0}/{1}conclusion.mdx'.format(dest_path, number_prefix(idx-1))
    if os.path.exists(conclusion_path):
      print("removed conclusion.mdx")
      os.remove(conclusion_path)
