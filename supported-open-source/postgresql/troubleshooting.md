---
title: Installation troubleshooting
product: PostgreSQL
url: https://www.enterprisedb.com/docs/supported-open-source/postgresql/troubleshooting/
lastModified: 2023-07-05T09:18:52-04:00
---

# Installation troubleshooting

## Multi-byte characters in user name

If your system user name or machine name contains non-ASCII characters, the installation may fail. Make sure your user name or machine name don't include multi-byte characters.

## Installation log files

If you encounter problems during installation, consult the installation log file `install-postgresql.log` created in:

- `/tmp` on Mac OS X
- `%TEMP%` on Windows

> **Warning**
>
> The log file might contain the superuser password specified during the installation. Obscure the password before sharing the log with anyone.

If you can't resolve the problem after reviewing the log file, search the self-service content available at the [EDB website](https://www.enterprisedb.com/postgres-tutorials) for a solution. If you still can't resolve the issue, send details of the problem, along with system details and any appropriate parts of the installation logfile, to <support@enterprisedb.com>.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
