---
title: Supported versions and platforms
description: Which Postgres versions, variants, and operating system platforms EDB Vector Plus packages support.
product: EDB Vector Plus
version: "0"
url: https://www.enterprisedb.com/docs/vector-plus/latest/overview/supported-platforms/
lastModified: 2026-09-30T22:44:58+05:30
---

# Supported versions and platforms

EDB Vector Plus is available for Postgres 14, 15, 16, 17, and 18, across all three Postgres variants. Each variant depends on the matching server package:

| Distribution                 | Server package the extension depends on |
| ---------------------------- | --------------------------------------- |
| PostgreSQL                   | `postgresql-<V>`                        |
| EDB Postgres Extended        | `edb-postgresextended<V>-server`        |
| EDB Postgres Advanced Server | `edb-as<V>-server`                      |

Packages are available for the following distributions, architectures, and package types:

| Platform             | Version       | amd64 | arm64 | ppc64le | s390x | Package type |
| -------------------- | ------------- | ----- | ----- | ------- | ----- | ------------ |
| EL (RHEL/Rocky/Alma) | 8             | ✓     | —     | ✓       | ✓     | rpm          |
| EL (RHEL/Rocky/Alma) | 9             | ✓     | ✓     | ✓       | ✓     | rpm          |
| SLES                 | 15SP7         | ✓     | —     | ✓       | ✓     | rpm          |
| Debian               | 11 (bullseye) | ✓     | —     | —       | —     | deb          |
| Debian               | 12 (bookworm) | ✓     | ✓     | —       | —     | deb          |
| Ubuntu               | 22.04 (jammy) | ✓     | —     | —       | —     | deb          |
| Ubuntu               | 24.04 (noble) | ✓     | —     | —       | —     | deb          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
