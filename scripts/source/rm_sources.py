import os
import shutil

ANSI_RED = '\033[31m'
ANSI_STOP = '\033[0m'

if os.path.exists('docs'):
    if not os.system('cd docs && test -n "$(git status --porcelain)"'):
        print(ANSI_RED + """
You have local changes to your docs folder! Leaving your changes untouched...
To update docs, either delete the folder, or check-in your changes.
""" + ANSI_STOP)
    else:
        shutil.rmtree('docs')

if not os.path.exists('docs'):
    os.makedirs('docs/docs/dummy/1')
    os.system('touch docs/docs/dummy/1/.keep')
