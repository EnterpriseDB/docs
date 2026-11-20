---
title: EDB Postgres AI for ClickHouse® 26.3.13.31 release notes
description: Release notes for EDB Postgres AI for ClickHouse 26.3.13.31, the initial release, including the Kubernetes operator.
product: EDB Postgres AI for ClickHouse
version: "26.3"
url: https://www.enterprisedb.com/docs/clickhouse/26.3/release_notes/rel_notes26_3_13_31/
lastModified: 2026-11-02T13:02:55+01:00
---

# EDB Postgres AI for ClickHouse® 26.3.13.31 release notes

Released: 24 June 2026

EDB Postgres AI for ClickHouse® 26.3.13.31 is the initial release, including the Kubernetes operator.

## ClickHouse® server

| Type           | Description                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Upstream merge | Based on the open-source [ClickHouse 26.3.13.31](https://github.com/ClickHouse/ClickHouse/releases/tag/v26.3.13.31-lts) LTS release. |

## Kubernetes operator

| Type           | Description                                                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Upstream merge | Includes the EDB ClickHouse Kubernetes operator `0.27.1+1edb1`, tracking upstream [Altinity clickhouse-operator release-0.27.1](https://github.com/Altinity/clickhouse-operator/releases/tag/release-0.27.1).      |
| Bug fix        | Fixes [CVE-2026-42504](https://nvd.nist.gov/vuln/detail/CVE-2026-42504), [CVE-2026-27145](https://nvd.nist.gov/vuln/detail/CVE-2026-27145), and [CVE-2026-42507](https://nvd.nist.gov/vuln/detail/CVE-2026-42507). |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
