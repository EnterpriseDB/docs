---
title: Installing Postgres Workload Report
description: How to install Postgres Workload Report
product: Postgres Workload Report
version: "1"
url: https://www.enterprisedb.com/docs/pwr/latest/installing/
lastModified: 2024-02-22T09:17:45Z
---

# Installing Postgres Workload Report

Postgres Workload Report is provided as a Python source distributed package for all supported operating systems. You can find it in the `enterprise` and `standard` repositories.

The following command installs Postgres Workload Report and, if necessary, also pulls the `edb-lasso` package from the repository and installs it:

```shell
sudo <package-manager> -y install edb-pwr
```

Where `<package-manager>` is the package manager used with your operating system.

| Package manager | Operating system                 |
| --------------- | -------------------------------- |
| apt             | Debian / Ubuntu                  |
| dnf             | RHEL 8/9 and derivatives         |
| yum             | RHEL 7 and derivatives, CentOS 7 |
| zypper          | SLES                             |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
