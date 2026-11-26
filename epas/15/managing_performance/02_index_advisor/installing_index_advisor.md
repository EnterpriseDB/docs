---
title: Installing Index Advisor
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/managing_performance/02_index_advisor/installing_index_advisor/
lastModified: 2024-06-26T10:43:05-04:00
---

# Installing Index Advisor

Install Index Advisor using the following command:

```shell
  sudo <package-manager> -y install edb-as15-server-indexadvisor
```

Where:

```
- `<package-manager>`is the package manager used with your operating system:

  | Package manager | Operating system                 |
  | --------------- | -------------------------------- |
  | dnf             | RHEL 8/9 and derivatives         |
  | apt-get         | Debian 10/11 and derivatives     |
```

For example, to install Index Advisor on a RHEL 9 platform:

```shell
sudo dnf -y install edb-as15-server-indexadvisor
```

> **Note**
>
> Index Advisor is not available on the SLES operating system.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
