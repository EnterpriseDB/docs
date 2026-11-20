---
title: EDB Postgres AI for ClickHouse® 26.3.58.5 release notes
description: Release notes for EDB Postgres AI for ClickHouse 26.3.58.5, including the Kubernetes operator, pg_stat_ch, and pg_clickhouse updates.
product: EDB Postgres AI for ClickHouse
version: "26.3"
url: https://www.enterprisedb.com/docs/clickhouse/26.3/release_notes/rel_notes26_3_58_5/
lastModified: 2026-11-02T13:02:55+01:00
---

# EDB Postgres AI for ClickHouse® 26.3.58.5 release notes

Released: 2 November 2026

EDB Postgres AI for ClickHouse® 26.3.58.5 updates the ClickHouse server, the Kubernetes operator, pg\_stat\_ch, and introduces pg\_clickhouse as a tracked component.

## ClickHouse® server

| Type           | Description                                                                                                                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Upstream merge | Updated to the open-source [ClickHouse 26.3.58.5](https://github.com/ClickHouse/ClickHouse/releases/tag/v26.3.58.5-lts) LTS release, from [26.3.37.3](https://github.com/ClickHouse/ClickHouse/releases/tag/v26.3.37.3-lts). |
| Bug fix        | Fixed pods crash-looping with `Couldn't create necessary directory` when a disk is added to the ClickHouse configuration before its volume is mounted.                                                                       |
| Change         | The `default` user is passwordless again, and the image uses the upstream entrypoint, which reads the `CLICKHOUSE_*` environment variables.                                                                                  |
| Change         | Removed the ClickHouse Cloud password-reset hint, and its `clickhouse.cloud` link, from the authentication failure message for the `default` user.                                                                           |
| Bug fix        | Fixed Debian dependency pins and keeper and server package metadata so EDB packages install correctly with `apt`.                                                                                                            |
| Bug fix        | Fixed a startup failure on ppc64le under emulation, caused by the bundled libunwind corrupting callee-saved vector registers.                                                                                                |

## Kubernetes operator

| Type   | Description                                                                                                                |
| ------ | -------------------------------------------------------------------------------------------------------------------------- |
| Change | The operator's default ClickHouse and Keeper image is now `edb-clickhouse-server:26.3.37.3-1edb2`, from `26.3.22.7-1edb1`. |

## pg\_stat\_ch

| Type    | Description                                                                                                                                                                                                                                                                                                                                                                             |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature | Added Debian `.deb` packages alongside the RPM packages. Debian 12 (bookworm) packages for EDB Postgres Extended Server and EDB Postgres Advanced Server aren't published for Postgres 18. See [Compatibility](https://www.enterprisedb.com/docs/clickhouse/26.3/overview/compatibility/) and [Known issues](https://www.enterprisedb.com/docs/clickhouse/26.3/overview/known_issues/). |

## MCP server

There are no updates to the MCP server in this release.

## pg\_clickhouse

| Type           | Description                                                                                                                                                                                                                                                                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Upstream merge | Initial EDB packaging of `pg_clickhouse`, EDB's build of the open-source [pg\_clickhouse](https://github.com/ClickHouse/pg_clickhouse) Postgres extension, at upstream `0.11.0`, packaged as `0.11.0-1edb2`. This first release is for trial only. See [Querying ClickHouse from Postgres with pg\_clickhouse](https://www.enterprisedb.com/docs/clickhouse/26.3/querying_from_postgres/). |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
