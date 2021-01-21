import os
import shutil
import json
import sys

from source_k8s_docs import source_k8s_docs
from source_barman import source_barman
from source_pgbackrest import source_pgbackrest

ANSI_RED = '\033[31m'
ANSI_STOP = '\033[0m'

DEV_SOURCES_TO_FUNCTION = {
    'k8s_docs': source_k8s_docs,
    'barman': source_barman,
    'pgbackrest': source_pgbackrest,
}

def wipe_sources():
    if os.path.exists('external_sources'):
        print('Wiping sources...')
        shutil.rmtree('external_sources')

def pull_sources():
    arg = None
    if len(sys.argv) > 1:
        arg = sys.argv[1].strip()
    is_build = arg in ['--build', '--force-build']
    force = arg == '--force-build'

    source_filename = 'dev-sources.json'
    if is_build:
        source_filename = 'build-sources.json'

    if os.path.exists(source_filename):
        if not force:
            print(ANSI_RED + 'Pulling fresh sources will completely destroy any changes you have made inside the `external_sources/` folder.' + ANSI_STOP)
            response = input('Do you want to continue (y/n)? ')

            if response.strip() != 'y':
                sys.exit('User canceled process.')

        wipe_sources()
        if not os.path.exists('external_sources'):
            os.mkdir('external_sources')

        print('Sourcing using `{}`...'.format(source_filename))
        with open(source_filename) as dev_sources_json:
            sources = json.load(dev_sources_json)
        for source, val in sources.items():
            if val:
                source_function = DEV_SOURCES_TO_FUNCTION.get(source)
                if source_function:
                    source_function()

    else:
        raise Exception(ANSI_RED + 'Failed to source: `{}` not found! Configure sources with `yarn config-sources`.'.format(source_filename) + ANSI_STOP)

if __name__ == '__main__':
    pull_sources()
