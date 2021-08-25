# Working on Docs in a Docker container using VSCode

If you cannot or do not wish to install the prerequisite versions of Python, Node, Gatsby, etc. on your local machine, _and_ you're fond of using VSCode, then you can skip past the first eleven steps under the "installation" section in the [README](README.md) and work with Docs entirely from within a Docker container managed by VSCode.

## Prerequesites

1. [Docker](https://docs.docker.com/get-docker/) (for MacOS or Windows, that'll be Docker Desktop)
2. [Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)
3. The [Remote Development Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) for VSCode
4. [Git](https://git-scm.com/download)

If you intend to edit using VSCode, I also recommend installing the [MDX extension](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx) - this is not required, but it is handy!

## Installation

1. In VSCode, from the command pallet select the `Remote-Containers: Clone Repository in Container Volume...` command
2. Paste in the URL of this repository, or a GitHub branch URL, or a GitHub PR URL
3. Choose "unique volume" (in most cases this will be what you want)
4. Wait for VSCode to build the container, then open a terminal
5. Run the site locally with `npm run develop`. VSCode will remap port 8000 used within the container to a free port on your machine, which you can view from the Remote Explorer panel in the left sidebar - or ctrl+click the URL that Gatsby prints in the terminal to open directly.

You can create as many distinct containers and volumes as you wish, which can be handy for comparing PRs side-by-side without disturbing your primary work. To browse them (or clean them up) open the "Remote Explorer" tool in VSCode.
