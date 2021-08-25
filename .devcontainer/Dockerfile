#-------------------------------------------------------------------------------------------------------------
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See https://go.microsoft.com/fwlink/?linkid=2090316 for license information.
#-------------------------------------------------------------------------------------------------------------

# To fully customize the contents of this image, use the following Dockerfile instead:
# https://github.com/microsoft/vscode-dev-containers/blob/master/containers/python-3/.devcontainer/Dockerfile

# [Choice] Python version: 3, 3.8, 3.7, 3.6
ARG VARIANT=3
FROM mcr.microsoft.com/vscode/devcontainers/python:${VARIANT}

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ARG NODE_VERSION="lts/*"
RUN if [ "${INSTALL_NODE}" = "true" ]; then su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"; fi

# [Optional] If your pip requirements rarely change, uncomment this section to add them to the image.
# COPY requirements.txt /tmp/pip-tmp/
# RUN pip3 --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
#    && rm -rf /tmp/pip-tmp

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# latest gatsby
RUN su vscode -c "source /usr/local/share/nvm/nvm.sh \
    && npm install -g gatsby-cli" 2>&1

# Enable docker-in-docker (see: https://github.com/microsoft/vscode-dev-containers/blob/master/script-library/docs/docker-in-docker.md)
COPY library-scripts/*.sh /tmp/library-scripts/
RUN apt-get update \
    && /bin/bash /tmp/library-scripts/docker-in-docker-debian.sh
ENTRYPOINT ["/usr/local/share/docker-init.sh"]
VOLUME [ "/var/lib/docker" ]
CMD ["sleep", "infinity"]
