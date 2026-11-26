---
title: Postgres Workload Report 1.0.0 release notes
product: Postgres Workload Report
version: "1"
url: https://www.enterprisedb.com/docs/pwr/latest/rel_notes/100_rel_notes/
lastModified: 2024-02-15T15:31:18-05:00
---

# Postgres Workload Report 1.0.0 release notes

Released: 15 Feb 2024

New features, enhancements, bug fixes, and other changes in Postgres Workload Report 1.0.0 include:

| Type    | Description                                                                                                                                                                                                                                                                                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Feature | Added the `pwr execute` CLI command. The command is used to generate workload reports. While `pwr report` command requires that you run Lasso and provide its data as input, `pwr execute` takes care of an end-to-end execution, that is, it runs Lasso and `pwr report` implicitly. The `pwr execute` command requires edb-lasso (>=4.13.0) and edb\_wait\_states (>=1.2.0). |
| Feature | Added the `pwr report` CLI command. The `pwr report` command is used to generate workload reports. PWR workload reports can be written in one or more of the following formats: HTML, Markdown, PDF, and DOCX.                                                                                                                                                                 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
