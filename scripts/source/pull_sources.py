import os
import shutil
import json

from source_docs import *

ANSI_RED = '\033[31m'
ANSI_STOP = '\033[0m'

DEV_SOURCES_TO_FUNCTION = {
    'source_docs': source_docs
}

def wipe_sources():
    if os.path.exists('sources'):
        print('Wiping sources...')
        shutil.rmtree('sources')

if os.environ.get('CLEAN_SOURCE_ALL'):
    print('CLEAN_SOURCE_ALL = true, sourcing everything!')

    wipe_sources()
    source_docs()

elif os.path.exists('dev-sources.json'):
    print(ANSI_RED + 'Pulling fresh sources will completely destroy any changes you have made inside the `source/` folder.' + ANSI_STOP)
    response = input('Do you want to continue (y/n)? ')

    if response.strip() != 'y':
        sys.exit('User canceled process.')

    wipe_sources()
    print('Sourcing using your local config, `dev-sources.json`...')
    with open('dev-sources.json') as dev_sources_json:
        sources = json.load(dev_sources_json)
    for source, val in sources.items():
        if val:
            source_function = DEV_SOURCES_TO_FUNCTION[source]
            if source_function:
                source_function()

else:
    raise Exception(ANSI_RED + 'Configure sources with `yarn config-sources`, or set CLEAN_SOURCE_ALL to `true`.' + ANSI_STOP)
