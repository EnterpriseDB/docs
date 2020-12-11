import json

ANSI_STOP = '\033[0m'
ANSI_BLUE = '\033[34m'
ANSI_GREEN = '\033[32m'
ANSI_YELLOW = '\033[33m'
ANSI_RED = '\033[31m'

OPTIONS = [
    { 'name': 'EDB Product Docs', 'key': 'docs' },
    { 'name': 'Kubernetes Docs', 'key': 'k8s_docs' },
    { 'name': 'BaRMan Docs', 'key': 'barman' },
    { 'name': 'pgBackRest Docs', 'key': 'pgbackrest' }
]

BASE_OUTPUT = {
    'docs': False,
    'k8s_docs': False,
    'barman': False,
    'pgbackrest': False,
}

print('Which sources would you like loaded when you run `yarn develop`?')
for i, option in enumerate(OPTIONS):
    print("{0}: {1}".format(i + 1, option['name']))

selections = []
while len(selections) == 0:
    user_input = input('Enter your choices separated by commas, e.g. "1,3": ')

    split_user_input = user_input.strip().split(',')
    for selection_index in split_user_input:
        option = OPTIONS[int(selection_index) - 1]
        if option:
            selections.append(option)

    if len(selections) != len(split_user_input):
        print(ANSI_RED + 'Invalid input' + ANSI_STOP)

for option in selections:
    print(ANSI_BLUE + 'Selected {0}'.format(option['name']) + ANSI_STOP)

with open('dev-sources.json', 'w') as outfile:
    output = BASE_OUTPUT.copy()
    for option in selections:
        output[option['key']] = True
    json.dump(output, outfile)
    print(ANSI_GREEN + 'Wrote to dev-sources.json' + ANSI_STOP)
