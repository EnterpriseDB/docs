---
title: Installing in an air-gapped environment
description: How to install EDB packages in an air-gapped environment
product: EDB repositories and downloading
url: https://www.enterprisedb.com/docs/repos/working_with_repos/installing_airgapped/
lastModified: 2024-07-18T17:07:16-04:00
---

# Installing in an air-gapped environment

For air-gapped installations, you need to download the packages and their dependencies from the EDB repository and then transfer them to the air-gapped environment. For details on how to download packages, see [Building local mirrors](https://www.enterprisedb.com/docs/repos/working_with_repos/building_local_mirrors/), which shows how you can create a directory that contains all the packages and their dependencies that you need to install.

It's the directory created by this process that you can then transfer to the air-gapped environment. In the air-gapped environment, you can then create a local repository and install the packages from there.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
