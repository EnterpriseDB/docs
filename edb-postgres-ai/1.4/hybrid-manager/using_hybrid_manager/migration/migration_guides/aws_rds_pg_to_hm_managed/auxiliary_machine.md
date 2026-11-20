---
title: Configuring your auxiliary machine or bastion host
description: Setting up the auxiliary machine that bridges your AWS RDS/Aurora PostgreSQL source and Hybrid Manager, including required agents and pg_dump configuration.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/aws_rds_pg_to_hm_managed/auxiliary_machine/
lastModified: 2026-08-24T10:19:20+02:00
---

# Configuring your auxiliary machine or bastion host

The EDB Postgres AI agent (`beacon-agent`) and the Data Migration Service (DMS) agent (`cdcagent`) can run on the Postgres database server itself or on a separate auxiliary machine or bastion host. In most production environments, running the agents on a dedicated auxiliary machine is preferred — it avoids installing additional software on the database server, and a single agent instance can connect to databases on multiple servers.

## Required software

Ensure you install the following software on your auxiliary machine before running the agents:

> **Note**
>
> If your auxiliary machine is air-gapped and can't reach the EDB repositories directly, see [Building local mirrors](https://www.enterprisedb.com/docs/repos/working_with_repos/building_local_mirrors/) and [Installing in an air-gapped environment](https://www.enterprisedb.com/docs/repos/working_with_repos/installing_airgapped/) before you begin.

- **Java 17 or higher** — required by the DMS agent (`cdcagent`). Verify with `java -version`.

- **EDB Postgres AI agent** (`beacon-agent`) — required for database registration, schema assessment, and schema migration. Check the [beacon-agent version compatibility matrix](https://www.enterprisedb.com/docs/tools/agent/installing/#supported-hm-versions-for-the-edb-postgres-ai-agent). Then [install a compatible version of the EDB Postgres AI agent](https://www.enterprisedb.com/docs/tools/agent/installing/).

- **DMS agent** (`cdcagent`) — handles data migration and change data capture (CDC). Before installing, check the [DMS agent version compatibility matrix](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/cdcagent_compatibility/). Then [install a compatible version of the DMS agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/installing_agent/).

## Configuring the environment

When you enable schema ingestion, `beacon-agent` uses `pg_dump` to extract DDL from your Postgres source. Postgres client tools packages include the `pg_dump` utility — it might already be available on your machine. Verify first:

```shell
pg_dump --version
```

If the command isn't found, [install the client tools](https://www.postgresql.org/download/) that match your source database distribution.

Once installed, ensure your `pg_dump` binary meets two compatibility rules:

- **Version rule** — The `pg_dump` major version must be greater than or equal to the major version of your source database. For example, if your source runs Postgres 16, you need `pg_dump` 16 or later. The agent validates this at startup and reports an error if the versions are incompatible.

- **Distribution rule** — The `pg_dump` binary must come from the same Postgres distribution as the source database. Each distribution's `pg_dump` accesses distribution-specific catalog tables. Using a mismatched binary (for example, community PostgreSQL `pg_dump` against an EDB Postgres Advanced Server source) will fail because the expected catalog objects won't exist.

### Managing multiple Postgres versions on a host

If you have multiple Postgres versions on the same machine, ensure the correct `pg_dump` appears first in your `PATH`:

```shell
which pg_dump
pg_dump --version
```

On Debian and Ubuntu systems, use `update-alternatives` to manage the active version:

```shell
sudo update-alternatives --config pg_dump
```

### Registering databases from multiple distributions or versions

A single `beacon-agent` instance can register databases from different Postgres distributions (for example, community PostgreSQL and EDB Postgres Advanced Server) or different major versions at the same time. Because the version and distribution rules apply per database, each database connection may require a different `pg_dump` binary.

Install all the required `pg_dump` binaries on the auxiliary machine. Later you can use the `pg_bin_path` setting in your `beacon_agent.yaml` configuration file to point each database entry to the correct binary directory. When set, it overrides the system `PATH` lookup for that specific database. When omitted, the agent falls back to the first `pg_dump` found in `PATH`. For example:

```yaml
provider:
  onprem:
    databases:
      - resource_id: "pg16-community"
        dsn: $DSN_PG16
        pg_bin_path: /usr/lib/postgresql/16/bin
        schema:
          enabled: true
      - resource_id: "epas17"
        dsn: $DSN_EPAS17
        pg_bin_path: /usr/edb/as17/bin
        schema:
          enabled: true
```

### Understanding credentials and pgpass behavior

The OS user that runs `beacon-agent` is the same user that executes `pg_dump`. To avoid exposing database credentials in process arguments, the agent writes the password to a temporary `pgpass` file with restrictive permissions (`0600`) and passes a password-free connection string to `pg_dump`. The agent creates the file in the OS temporary directory and removes it automatically after each extraction completes.

> **Note**
>
> If the agent process is killed unexpectedly (for example, by `SIGKILL`), the agent may not clean up the temporary pgpass file. Only the OS user that runs the agent can read the file. The OS removes it on reboot, or on container restart if the agent runs in a container. To check for orphaned files, look for files matching `.pgpass-*` in `/tmp`.

## Next step

[Prepare your Postgres source database](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/self_managed_pg_to_hm_managed/preparing_source_pg/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
