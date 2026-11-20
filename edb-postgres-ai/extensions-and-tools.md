---
title: EDB Postgres AI Extensions and Tools
description: Extensions and tools available for EDB Postgres AI.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/extensions-and-tools/
lastModified: 2026-09-30T22:23:49+05:30
---

# EDB Postgres AI Extensions and Tools

EDB Postgres AI provides a variety of extensions and tools to help you get the most out of your database. These extensions and tools are designed to help you manage your database, improve performance, and integrate with other systems.

## Extensions

EDB Postgres AI supports a variety of extensions that you can use to extend the capability of your database. These extensions include:

View the full table of supported extensions in the [Supported Extensions table](https://www.enterprisedb.com/docs/pg_extensions/).

## Tools

EDB Postgres AI provides a variety of tools to help you manage and develop with your database. These tools include:

- [Agent](https://www.enterprisedb.com/docs/tools/agent/) - A monitoring and management tool that collects information from your database instances.
- [EDB SQL Patch](https://www.enterprisedb.com/docs/tools/edb_sqlpatch/) - A tool that helps you manage and apply patches to your database.
- [alteruser](https://www.enterprisedb.com/docs/tools/alteruser_utility/) - A tool that allows you to change the properties of a database user.
- [Language Pack](https://www.enterprisedb.com/docs/language_pack/latest/) - A set of tools for developing applications in different languages.

## Extensions overview

- [Postgres extensions available by deployment](https://www.enterprisedb.com/docs/pg_extensions/): EDB offers a wide range of Postgres extensions across our various distributions and deployment platforms. Support at EDB means that a support ticket can be filed for any issue encountered while using a listed extension.

## Supported on EDB Postgres AI

- [EDB Advanced Storage Pack](https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/): EDB Advanced Storage Pack provides advanced storage options for Postgres databases in the form of table access method (TAM) extensions. These storage options can enhance the performance and reliability of databases without requiring application changes.
- [EDB Postgres Tuner](https://www.enterprisedb.com/docs/pg_extensions/pg_tuner/): EDB Postgres Tuner is a PostgreSQL extension that automates 15+ years of EDB Postgres tuning experience.
- [EDB Query Advisor](https://www.enterprisedb.com/docs/pg_extensions/query_advisor/): EDB Query Advisor is a Postgres extension that includes the Index Advisor and the Statistics Advisor.
- [EDB Wait States](https://www.enterprisedb.com/docs/pg_extensions/wait_states/): EDB Wait States is a tool for analyzing performance and tuning by allowing the collection and querying of wait event data. Wait events, introduced in PostgreSQL 9.6, are recorded alongside other session activity and provide a snapshot of whether a session is waiting for I/O, CPU, IPC, locks, or timeouts. Snapshots of this information are gathered by the EDB Wait States background worker (BGW) at regular intervals.
- [PostGIS](https://www.enterprisedb.com/docs/postgis/latest/): EDB Postgres PostGIS Version 3 documentation and release notes.
- [pgaudit](https://www.enterprisedb.com/docs/pg_extensions/pgaudit/): pgaudit is an extension released as open source software under the PostgreSQL license.
- [PG Failover Slots](https://www.enterprisedb.com/docs/pg_extensions/pg_failover_slots/): PG Failover Slots (pgfailoverslots) is an extension released as open source software under the PostgreSQL License. If you have logical replication publications on Postgres databases that are also part of a streaming replication architecture,
- [PG Squeeze](https://www.enterprisedb.com/docs/pg_extensions/pg_squeeze/): PG Squeeze (pg\_squeeze) is an extension released as open source software under the PostgreSQL License.
- [pgvector](https://www.enterprisedb.com/docs/pg_extensions/pgvector/): pgvector is an open-source Postgres extension for storing, querying, and indexing vector embeddings, supported on EDB Postgres Advanced Server, EDB Postgres Extended Server, community PostgreSQL, and WarehousePG.
- [pg\_textsearch](https://www.enterprisedb.com/docs/pg_extensions/pg_textsearch/): pgtextsearch is a third-party extension developed and maintained upstream by TigerData and released as open source software under the PostgreSQL License. EDB packages, tests, and distributes pg\_textsearch but doesn't own or modify its source.
- [set\_user](https://www.enterprisedb.com/docs/pg_extensions/set_user/): setuser is an open source PostgreSQL extension that provides controlled privilege escalation with enhanced audit logging. It allows unprivileged users to switch to other roles, including superuser, while ensuring all privilege transitions are logged for audit purposes. EDB packages setuser for EDB Postgres Advanced Server only.
- [SQL Profiler](https://www.enterprisedb.com/docs/pg_extensions/sqlprofiler/): SQL Profiler is a tool that allows you to track execution statistics of all SQL statements executed on a server by specific users and on specific databases. Its primary purpose is to capture SQL statements sent to a Postgres server to help a DBA analyze a set of SQL traffic and:
- [EDB SPL Check](https://www.enterprisedb.com/docs/pg_extensions/spl_check/): EDB SPL Check is a code analysis tool for SPL on EDB Postgres Advanced Server. Using only the internal PostgreSQL parser, it identifies errors that can occur at runtime. In addition, it parses the SQL inside your routines and identifies errors that are usually missed when executing CREATE PROCEDURE/FUNCTION/PACKAGE. Similarly, it identifies errors that are usually missed when executing CREATE PACKAGE/OBJECT TYPES/COMPOUND TRIGGER.
- [EDB Job Scheduler](https://www.enterprisedb.com/docs/pg_extensions/edb_job_scheduler/): EDB Job Scheduler is an extension that runs the job scheduler as a background process for the DBMSSCHEDULER and DBMSJOB packages.
- [edb\_stat\_monitor - Query performance monitoring](https://www.enterprisedb.com/docs/pg_extensions/edb_stat_monitor/): EDB Stat Monitor is an extension that provides query performance monitoring for EDB Postgres Advanced Server and PostgreSQL. It collects and stores statistics about query execution, allowing you to analyze and optimize query performance.

## Tools

- [EDB SQL Patch](https://www.enterprisedb.com/docs/tools/edb_sqlpatch/): How to use edb\_sqlpatch to perform automated adjustments to your EDB Postgres Advanced Server's databases
- [Alteruser utility](https://www.enterprisedb.com/docs/tools/alteruser_utility/): How to use the alteruser utility to alter a PostgreSQL role in your EDB Postgres Advanced Server databases
- [EDB Postgres Language Pack](https://www.enterprisedb.com/docs/language_pack/latest/): How to use the language pack installer to install Perl, Tcl/TK, and Python without installing supporting software from third-party vendors
- [Agent](https://www.enterprisedb.com/docs/tools/agent/): How to use the Agent to monitor and manage your EDB Postgres databases
- [pgRouting](https://www.enterprisedb.com/docs/pg_extensions/pgrouting/): pgRouting is an extension released as open source software under the PostgreSQL License.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
