import os

mtime_opts = ''
if os.environ.get('FORCE_MTIME') == 'true':
    mtime_opts = ' --force'

print('restoring mtime for docs')
os.system('python3 scripts/source/git-restore-mtime.py' + mtime_opts)

if os.path.exists('advocacy_docs/advocacy_docs'):
    print('restoring mtime for advocacy_docs')
    os.system('cd advocacy_docs && python3 ../scripts/source/git-restore-mtime.py' + mtime_opts)
