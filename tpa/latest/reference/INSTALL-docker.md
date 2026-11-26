---
title: Running TPA in a Docker container
description: How to run TPA itself from within a Docker container, for systems where TPA is not supported natively.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/reference/INSTALL-docker/
lastModified: 2025-11-26T13:14:02+01:00
---

# Running TPA in a Docker container

If you are using a system for which there are no [TPA
packages](https://www.enterprisedb.com/docs/tpa/latest/INSTALL/) available, and it's difficult to run TPA after
[installing from source](https://www.enterprisedb.com/docs/tpa/latest/INSTALL-repo/) (for example, because it's not
easy to obtain a working Python 3.12+ interpreter), your last resort may
be to build a Docker image and run TPA inside a Docker container.

Please note that you do not need to run TPA in a Docker container in
order to [deploy to Docker containers](https://www.enterprisedb.com/docs/tpa/latest/platform-docker/). It's always
preferable to run TPA directly if you can (even on MacOS X).

## Quickstart

You must have Docker installed and working on your system already.

Run the following commands to clone the tpaexec source repository from Github
and build a new Docker image named `tpa/tpaexec`:

```shell
git clone ssh://git@github.com/EnterpriseDB/tpa.git
cd tpa
docker build -f docker/Dockerfile --build-arg TPA_VER=$(git describe) -t tpaexec:latest .
```

Double-check the created image:

```shell
docker image ls tpaexec
```

```output
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
tpaexec      latest    3943dec4d660   20 minutes ago   658MB
```

```shell
docker run --rm tpaexec info
```

```output
# TPAexec v23.38.0-38-g4dc030dc1
tpaexec=/usr/local/bin/tpaexec
TPA_DIR=/opt/EDB/TPA
PYTHON=/opt/EDB/TPA/tpa-venv/bin/python3 (v3.13.5, venv)
TPA_VENV=/opt/EDB/TPA/tpa-venv
ANSIBLE=/opt/EDB/TPA/tpa-venv/bin/ansible (v2.16.14)
```

Then you need to setup an alias for `tpaexec` on the shell session you are
running:

```shell
alias tpaexec="docker run --rm -v $PWD:/work -v /var/run/docker.sock:/var/run/docker.sock tpaexec"
```

Now you can run commands like:

```shell
tpaexec configure cluster -a M1 --postgresql 15 --failover-manager patroni --platform docker
tpaexec deploy cluster
```

## Installing Docker

Please consult the
[Docker documentation](https://docs.docker.com) if you need help to
[install Docker](https://docs.docker.com/install) and
[get started](https://docs.docker.com/get-started/) with it.

On MacOS X, you can [install "Docker Desktop for
Mac"](https://hub.docker.com/editions/community/docker-ce-desktop-mac/)
and launch Docker from the application menu.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
