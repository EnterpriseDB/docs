import json

ANSI_STOP = '\033[0m'
ANSI_BLUE = '\033[34m'
ANSI_GREEN = '\033[32m'
ANSI_YELLOW = '\033[33m'
ANSI_RED = '\033[31m'

OPTIONS = [
    { 'name': 'Advocacy docs only', 'output': {} },
    { 'name': 'Advocacy docs + Product docs', 'output': { 'source_docs': True } },
]

BASE_OUTPUT = {
    'source_docs': False,
}

print('Which sources would you like loaded when you run `yarn develop`?')
for i, option in enumerate(OPTIONS):
    print("{0}: {1}".format(i + 1, option['name']))

selection = None
while not selection:
    user_input = input('Enter your choice: ')

    for i, option in enumerate(OPTIONS):
        if user_input.strip() == str(i + 1):
            selection = OPTIONS[i]
            break

    if not selection:
        print(ANSI_RED + 'Please enter a number corresponding to an option above' + ANSI_STOP)

print(ANSI_GREEN + '{0}: {1}'.format(i + 1, selection['name']) + ANSI_STOP)
with open('dev-sources.json', 'w') as outfile:
    json.dump({**BASE_OUTPUT, **selection['output']}, outfile)
    print(ANSI_GREEN + 'Wrote to dev-sources.json' + ANSI_STOP)
