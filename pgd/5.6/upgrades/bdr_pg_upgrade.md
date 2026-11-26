---
title: In-place Postgres major version upgrades
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/upgrades/bdr_pg_upgrade/
lastModified: 2025-02-26T18:09:18Z
---

# In-place Postgres major version upgrades

You can upgrade a PGD node to a newer major version of Postgres using the
command-line utility bdr\_pg\_upgrade.

bdr\_pg\_upgrade is a wrapper around the standard [pg\_upgrade](https://www.postgresql.org/docs/current/pgupgrade.html) that
adds PGD-specific logic to the process to ensure a smooth upgrade.

## Terminology

This terminology is used when describing the upgrade process and components involved:

_Postgres cluster_ — The database files, both executables and data, that make up a Postgres database instance on a system when run.

_Old Postgres cluster_ — The existing Postgres cluster to upgrade, the one from which to migrate data.

_New Postgres cluster_ — The new Postgres cluster that data is migrated to. This Postgres cluster must be one major version ahead of the old cluster.

## Precautions

Standard Postgres major version upgrade precautions apply, including the fact both Postgres clusters must meet
all the requirements for [pg\_upgrade](https://www.postgresql.org/docs/current/pgupgrade.html#id-1.9.5.12.7.).

Additionally, don't use bdr\_pg\_upgrade if other tools are using
replication slots and replication origins. Only PGD slots and origins are
restored after the upgrade.

You must meet several prerequisites for bdr\_pg\_upgrade:

- Disconnect applications using the old Postgres cluster. You can, for example,
  redirect them to another node in the PGD cluster.
- Configure peer authentication for both Postgres clusters. bdr\_pg\_upgrade
  requires peer authentication.
- The same PGD version must be installed on both clusters.
- The PGD version must be 4.1.0 or later. Version 3.7.22 and later is also supported.
- The new cluster must be in a shutdown state.
- You must install PGD packages in the new cluster.
- The new cluster must already be initialized and configured as needed to
  match the old cluster configuration.
- Databases, tables, and other objects must not exist in the new cluster.

We also recommend having the old Postgres cluster up prior to running bdr\_pg\_upgrade.
The CLI starts the old Postgres cluster if it's shut down.

## Usage

To upgrade to a newer major version of Postgres, you must first install the new version.

### bdr\_pg\_upgrade command-line

bdr\_pg\_upgrade passes all parameters to pg\_upgrade. Therefore, you can
specify any parameters supported by [pg\_upgrade](https://www.postgresql.org/docs/current/pgupgrade.html#id-1.9.5.12.6).

#### Synopsis

```shell
bdr_pg_upgrade [OPTION] ...
```

#### Options

In addition to the options for pg\_upgrade, you can pass the following parameters
to bdr\_pg\_upgrade.

**Required parameters**

Specify these parameters either in the command line or, for all but the `--database` parameter, in their equivalent environment variable. They're used by bdr\_pg\_upgrade.

- `-b, --old-bindir` — Old Postgres cluster bin directory.
- `-B, --new-bindir`— New Postgres cluster bin directory.
- `-d, --old-datadir` — Old Postgres cluster data directory.
- `-D, --new-datadir` — New Postgres cluster data directory.
- `--database` — PGD database name.

**Optional parameters**

These parameters are optional and are used by bdr\_pg\_upgrade:

- `-p, --old-port` — Old cluster port number.
- `-s, --socketdir` — Directory to use for postmaster sockets during upgrade.
- `--check` — Specify to only perform checks and not modify clusters.

**Other parameters**

Any other parameter that's not one of the above is passed to pg\_upgrade. pg\_upgrade accepts the following parameters:

- `-j, --jobs` — Number of simultaneous processes or threads to use.
- `-k, --link` — Use hard links instead of copying files to the new cluster.
- `-o, --old-options` — Option to pass to old postgres command. Multiple invocations are appended.
- `-O, --new-options` — Option to pass to new postgres command. Multiple invocations are appended.
- `-N, --no-sync` — Don't wait for all files in the upgraded cluster to be written to disk.
- `-P, --new-port` — New cluster port number.
- `-r, --retain` — Retain SQL and log files even after successful completion.
- `-U, --username` — Cluster's install user name.
- `--clone` — Use efficient file cloning.

#### Environment variables

You can use these environment variables in place of command-line parameters:

- `PGBINOLD` — Old Postgres cluster bin directory.
- `PGBINNEW` — New Postgres cluster bin directory.
- `PGDATAOLD` — Old Postgres cluster data directory.
- `PGDATANEW` — New Postgres cluster data directory.
- `PGPORTOLD` — Old Postgres cluster port number.
- `PGSOCKETDIR` — Directory to use for postmaster sockets during upgrade.

### Example

Given a scenario where:

- Old Postgres cluster bin directory is `/usr/lib/postgresql/13/bin`.
- New Postgres cluster bin directory is `/usr/lib/postgresql/14/bin`.
- Old Postgres cluster data directory is `/var/lib/postgresql/13/main`.
- New Postgres cluster data directory is `/var/lib/postgresql/14/main`.
- Database name is `bdrdb`.

You can use the following command to upgrade the cluster:

```
bdr_pg_upgrade \
--old-bindir /usr/lib/postgresql/13/bin \
--new-bindir /usr/lib/postgresql/14/bin \
--old-datadir /var/lib/postgresql/13/main \
--new-datadir /var/lib/postgresql/14/main \
--database bdrdb
```

### Steps performed

These steps are performed when running bdr\_pg\_upgrade.

> **Note**
>
> When `--check` is supplied as an argument to bdr\_pg\_upgrade, the CLI
> skips steps that modify the database.

#### PGD Postgres checks

| Steps                                           | `--check` supplied |
| :---------------------------------------------- | :----------------: |
| Collecting pre-upgrade new cluster control data |        `run`       |
| Checking new cluster state is shutdown          |        `run`       |
| Checking PGD versions                           |        `run`       |
| Starting old cluster (if shutdown)              |       `skip`       |
| Connecting to old cluster                       |       `skip`       |
| Checking if bdr schema exists                   |       `skip`       |
| Turning DDL replication off                     |       `skip`       |
| Terminating connections to database             |       `skip`       |
| Waiting for all slots to be flushed             |       `skip`       |
| Disconnecting from old cluster                  |       `skip`       |
| Stopping old cluster                            |       `skip`       |
| Starting old cluster with PGD disabled          |       `skip`       |
| Connecting to old cluster                       |       `skip`       |
| Collecting replication origins                  |       `skip`       |
| Collecting replication slots                    |       `skip`       |
| Disconnecting from old cluster                  |       `skip`       |
| Stopping old cluster                            |       `skip`       |

#### pg\_upgrade steps

Standard pg\_upgrade steps are performed.

> **Note**
>
> If supplied, `--check` is passed to pg\_upgrade.

#### PGD post-upgrade steps

| Steps                                                  | `--check` supplied |
| :----------------------------------------------------- | :----------------: |
| Collecting old cluster control data                    |       `skip`       |
| Collecting new cluster control data                    |       `skip`       |
| Advancing LSN of new cluster                           |       `skip`       |
| Starting new cluster with PGD disabled                 |       `skip`       |
| Connecting to new cluster                              |       `skip`       |
| Creating replication origin, repeated for each origin  |       `skip`       |
| Advancing replication origin, repeated for each origin |       `skip`       |
| Creating replication slot, repeated for each slot      |       `skip`       |
| Stopping new cluster                                   |       `skip`       |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
