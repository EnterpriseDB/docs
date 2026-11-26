---
title: PGD compatibility
description: Compatibility of EDB Postgres Distributed with different versions of PostgreSQL
product: EDB Postgres Distributed (PGD)
version: 6.0.2
url: https://www.enterprisedb.com/docs/pgd/6/compatibility/
lastModified: 2025-08-21T21:20:29Z
---

# PGD compatibility

## PGD compatibility with PostgreSQL versions

The following table shows the major versions of PostgreSQL that EDB Postgres Distributed (PGD) is compatible with.

| PGD 6                                         | Postgres Version |
| --------------------------------------------- | ---------------- |
| [6](https://www.enterprisedb.com/docs/pgd/6/) | 17.5.0+          |
| [6](https://www.enterprisedb.com/docs/pgd/6/) | 16.9.0+          |
| [6](https://www.enterprisedb.com/docs/pgd/6/) | 15.13.0+         |
| [6](https://www.enterprisedb.com/docs/pgd/6/) | 14.18.0+         |

EDB recommends that you use the latest minor version of any Postgres major version with a supported PGD.

## PGD compatibility with operating systems and architectures

The following tables show the versions of EDB Postgres Distributed and their compatibility with various operating systems and architectures.

### Linux

| Operating System                   | x86\_64<br/>(amd64) | ppc64le | arm64/<br/>aarch64 |
| ---------------------------------- | ------------------- | ------- | ------------------ |
| RHEL 8                             | Yes                 | Yes     |                    |
| RHEL 9                             | Yes                 | Yes     | Yes                |
| Oracle Linux 8                     | Yes                 |         |                    |
| Oracle Linux 9                     | Yes                 |         |                    |
| Rocky Linux/AlmaLinux              | Yes                 |         |                    |
| SUSE Linux Enterprise Server 15SP6 | Yes                 | Yes     |                    |
| Ubuntu 22.04                       | Yes                 |         |                    |
| Ubuntu 24.04                       | Yes                 |         |                    |
| Debian 12                          | Yes                 |         | Yes                |

> **Note**
>
> See [PGD 5 Compatibility](https://www.enterprisedb.com/docs/pgd/5.8/compatibility/) for previous versions of PGD.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
