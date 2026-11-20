---
title: Lasso
product: Lasso
version: "4"
url: https://www.enterprisedb.com/docs/lasso/latest/
lastModified: 2026-08-28T13:20:57-04:00
---

# Lasso

EDB developed a small multi-platform application called Lasso. Lasso
can safely gather relevant diagnostics data on a system where Postgres
and other relevant supported software, such as Barman, is running.

You can also run Lasso on systems where Postgres isn't
installed to gather all relevant information about the
underlying operating system.

Consult the specific information for your operating system.

> **Important**
>
> Lasso can't affect your data. It gathers
> statistics and diagnostics information from your Postgres server,
> with imperceptible effects on the workload. _No actual data_ from
> the rows of your Postgres user tables is gathered. \[^1]

\[^1]: Gathered diagnostics data files are available for your inspection.

Lasso is crucial for support operations because it allows EDB's
engineers to have a centralized and standardized source of information
about your system. This ability greatly improves our resolution times and quality of
services.

Please note that when you provide Lasso data to EDB, EDB reserves the right to contact you concerning your licensing needs.

- [Release notes](https://www.enterprisedb.com/docs/lasso/latest/release-notes/): Lasso - Version 4.21.0
- [Installing Lasso](https://www.enterprisedb.com/docs/lasso/latest/install/): EDB distributes the application through the
- [Usage](https://www.enterprisedb.com/docs/lasso/latest/usage/): Lasso uses the libpq environment variables to get the
- [Configuration](https://www.enterprisedb.com/docs/lasso/latest/configuration/): Besides being mandatory for the customer id, the Lasso
- [Security considerations](https://www.enterprisedb.com/docs/lasso/latest/security/): When running queries in the database, Lasso tries to use a role that
- [Report types](https://www.enterprisedb.com/docs/lasso/latest/report-types/): Local/full PostgreSQL report
- [Returning the Lasso report](https://www.enterprisedb.com/docs/lasso/latest/return/): The script produces a TAR file containing the gathered data
- [What do we gather in our Lasso report?](https://www.enterprisedb.com/docs/lasso/latest/collected-data/): A Lasso report is designed to allow any EDB engineer to rapidly
- [Gathered data details](https://www.enterprisedb.com/docs/lasso/latest/describe/): GNU/Linux operating system
- [Servers accepting upload of reports](https://www.enterprisedb.com/docs/lasso/latest/appendix-a/): This information applies only to Lasso executables

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
