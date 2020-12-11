import fileinput
import re

def clean_up_ref(ref):
  new_ref = ref.replace("(", "").replace(")", "").replace("_>", ">").replace("/","_")
  return new_ref

def extract_target(line):
  target = line.replace(".. _", "").replace(":\n", "").replace("(", "").replace(")", "").replace("/","_").replace(".","_")
  if target[-1] == "_":
    target = target[0:-1]
  return target


for line in fileinput.input(inplace=1):
  new_line = line.replace("™", "").replace("®", "")
  if line.startswith('.. _'):
    target = extract_target(line)
    print('.. raw:: html\n\n<div id="' + target + '" class="registered_link"></div>\n')
  elif not line.startswith(".. tabularcolumns"):
    ref_links = re.findall('\:ref\:\`[.0-9a-zA-Z\s\-]*\<(.*?\>\`)', line)

    for ref in ref_links:
      new_line = new_line.replace(ref, "#" + clean_up_ref(ref) + "_")
    new_line = new_line.replace(":ref:", "")
    print(new_line, end="")
