---
title: Postgres Workload Report
product: Postgres Workload Report
version: "1"
url: https://www.enterprisedb.com/docs/pwr/latest/
lastModified: 2025-04-22T14:39:17Z
---

# Postgres Workload Report

Postgres Workload Report (PWR) is a Python-based tool used for building PostgreSQL workload reports in HTML, Markdown, DOCX, and PDF mode. These reports mimic the reports provided by the Automatic Workload Repository (AWR) reporting tool from Oracle.

Using a Postgres connection, you can execute Postgres Workload Report from any machine with access to the server for which you want a report. Postgres Workload Report uses Lasso for collecting data, so Lasso is a prerequisite. The `edb-pwr` package has an explicit dependency on `edb-lasso` being installed.

On the Postgres server, you must have `edb_wait_states` version 1.2 or later installed and loaded. You must also create the extension,
preferably on the main database, so the `edb_wait_states` functions are available for Postgres Workload Report to collect saved snapshot data.

- [Release notes](https://www.enterprisedb.com/docs/pwr/latest/rel_notes/): Release notes for Postgres Workload Report
- [Installing](https://www.enterprisedb.com/docs/pwr/latest/installing/): How to install Postgres Workload Report
- [Configuring](https://www.enterprisedb.com/docs/pwr/latest/configuring/): How to configure Postgres Workload Report after installation
- [Using](https://www.enterprisedb.com/docs/pwr/latest/using/): How to use Postgres Workload Report

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
