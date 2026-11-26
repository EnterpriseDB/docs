---
title: pgd assess
product: EDB Postgres Distributed (PGD)
version: 5.8.1
url: https://www.enterprisedb.com/docs/pgd/5.8/cli/command_ref/assess/
lastModified: 2025-08-21T21:29:34Z
---

# pgd assess

## Synopsis

The `pgd assess` commands are used to assess the suitability of a Postgres server instance for migration to the EDB Postgres Distributed cluster.

The command must be run with a DSN that connects to the Postgres server instance that you want to assess. The command will check the Postgres server instance for compatibility with the EDB Postgres Distributed cluster, and will provide a report on the compatibility of the Postgres server instance.

## Syntax

```plaintext
pgd assess [OPTIONS]
```

## Options

The assess command has no command specific options.

See also [Global Options](https://www.enterprisedb.com/docs/pgd/5.8/cli/command_ref/#global-options).

## Example

```bash
pgd assess
```

```output title="Output"
Assessment                          Result                     Details
----------------------------------- -------------------------- ---------------------------------------------------------------------
Multiple Databases                  Compatible                 Found only one user database
Sequences                           Compatible                 No user sequences found
Tables with Multiple Unique Indexes Compatible                 No tables with multiple unique indexes found
Materialized Views                  Compatible                 No materialized views found
EPAS Queue Tables                   Compatible                 No EPAS Queue Tables found
LOCK TABLE Usage                    Requires workload analysis Could not analyze LOCK TABLE usage with pg_stat_statements
DDL Command Usage                   Requires workload analysis Cannot be checked automatically at this time
LISTEN/NOTIFY Usage                 Requires workload analysis Could not analyze LISTEN/NOTIFY usage with pg_stat_statements
Row-Level Lock Usage                Requires workload analysis Could not analyze row-level locking commands using pg_stat_statements
Advisory Lock Usage                 Requires workload analysis Could not analyze advisory lock commands using pg_stat_statements
Large Objects                       Compatible                 No large objects found
Trigger/Reference Privileges        Compatible                 No triggers with incompatible privileges found
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
