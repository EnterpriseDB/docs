---
title: EDB Postgres Tuner
product: EDB Postgres Tuner
url: https://www.enterprisedb.com/docs/pg_extensions/pg_tuner/
lastModified: 2026-04-01T20:48:21+05:30
---

# EDB Postgres Tuner

EDB Postgres Tuner is a PostgreSQL extension that automates 15+ years of EDB Postgres tuning experience.

Postgres uses some conservative settings to cover different host sizes. Some of the settings provided by Postgres are unsuitable because they don't take advantage of the available resources. Configuration parameters set by `initdb` don't account for the amount of memory, the number of CPU cores, and the kind of storage devices available to set appropriate values for parameters. Some parameters depend on the workload. The workload provides metrics to use to fine-tune some parameters dynamically.

This extension provides safe recommendations that maximize the use of available resources. It also allows you to control if and when to apply the changes. EDB Postgres Tuner enables you to apply tuning recommendations automatically or view tuning recommendations and selectively apply them. It's now possible to successfully manage demanding Postgres databases without tuning expertise.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
