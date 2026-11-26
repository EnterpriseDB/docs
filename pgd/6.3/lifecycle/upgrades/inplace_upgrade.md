---
title: In-place Postgres or Postgres and PGD major version upgrades
product: EDB Postgres Distributed (PGD)
version: 6.3.1
url: https://www.enterprisedb.com/docs/pgd/6.3/lifecycle/upgrades/inplace_upgrade/
lastModified: 2026-09-17T09:06:10+01:00
---

# In-place Postgres or Postgres and PGD major version upgrades

You can upgrade a PGD node to a newer major version of Postgres or a major version of Postgres and PGD using the command-line utility [pgd node upgrade](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/node/upgrade/).

> **Note**
>
> In previous versions before 5.7.0, the command used for in-place major version upgrades was `bdr_pg_upgrade`.
> However, this command didn't have an option to upgrade both Postgres major versions and PGD versions simultaneously, as `pgd node upgrade` does.

`pgd node upgrade` is a wrapper around the standard [pg\_upgrade](https://www.postgresql.org/docs/current/pgupgrade.html) that
adds PGD-specific logic to the process to ensure a smooth upgrade.

## Terminology

This terminology is used when describing the upgrade process and components involved:

_Postgres cluster_ — The database files, both executables and data, that make up a Postgres database instance on a system when run.

_Old Postgres cluster_ — The existing Postgres cluster to upgrade, the one from which to migrate data.

_New Postgres cluster_ — The new Postgres cluster that data is migrated to.
This Postgres cluster must be one major version ahead of the old cluster.

## Precautions

Standard Postgres major version upgrade precautions apply, including the fact both Postgres clusters must meet
all the requirements for [pg\_upgrade](https://www.postgresql.org/docs/current/pgupgrade.html#id-1.9.5.12.7.).

Additionally, don't use `pgd node upgrade` if other tools are using replication slots and replication origins.
Only PGD slots and origins are restored after the upgrade.

You must meet several prerequisites for `pgd node upgrade`:

- Disconnect applications using the old Postgres cluster. You can, for example,
  redirect them to another node in the PGD cluster.
- Configure peer authentication for both Postgres clusters. `bdr_pg_upgrade`
  requires peer authentication.
- The same or newer version of PGD must be installed on the new cluster.
- The PGD version must be 4.1.0 or later.
- The new cluster must be in a shutdown state.
- You must install PGD packages in the new cluster.
- The new cluster must already be initialized and configured as needed to
  match the old cluster configuration.
- If the new Postgres major version already includes the `output_plugin_libraries` parameter
  (community Postgres 14.24, 15.19, 16.15, 17.11, or 18.6, and later) and the old cluster's
  configuration doesn't already list `bdr` in it, add `bdr` to it in the new cluster's
  configuration now, while the new cluster is still shut down, or PGD's replication slots stop
  working on it. EDB Postgres Extended and EDB Postgres Advanced Server already allow `bdr` by
  default and aren't affected. See [Postgres
  configuration](https://www.enterprisedb.com/docs/pgd/6.3/postgres-configuration/#postgres-settings) for details.
- Databases, tables, and other objects must not exist in the new cluster.

> **Note**
>
> When upgrading to PGD 5.7.0+, you don't need to have both clusters run the same PGD version.
> The new cluster must be running 5.7.0+.
> In that case `pgd node upgrade` will upgrade the PGD version to 5.7.x and upgrade the Postgres major version.

We also recommend having the old Postgres cluster up prior to running `pgd node upgrade`.
The CLI starts the old Postgres cluster if it's shut down.

## Usage

To upgrade to a newer major version of Postgres or Postgres and PGD, you must first install the new version packages.

### `pgd node upgrade` command-line

`pgd node upgrade` passes all parameters to pg\_upgrade.
Therefore, you can specify any parameters supported by [pg\_upgrade](https://www.postgresql.org/docs/current/pgupgrade.html#id-1.9.5.12.6).

#### Synopsis

```plaintext
pgd node <NODE_NAME> upgrade [OPTION] ...
```

#### Options

In addition to the options for pg\_upgrade, you can pass the following parameters
to `pgd node upgrade`.

##### Required parameters

Specify these parameters either in the command line or, for all but the `--database` parameter, in their equivalent environment variable. They're used by `pgd node upgrade`.

- `-b, --old-bindir` — Old Postgres cluster bin directory.
- `-B, --new-bindir`— New Postgres cluster bin directory.
- `-d, --old-datadir` — Old Postgres cluster data directory.
- `-D, --new-datadir` — New Postgres cluster data directory.
- `--database` — PGD database name.

##### Optional parameters

These parameters are optional and are used by `pgd node upgrade`:

- `-p, --old-port` — Old cluster port number.
- `-s, --socketdir` — Directory to use for postmaster sockets during upgrade.
- `--check` — Specify to only perform checks and not modify clusters.

##### Other parameters

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

- Node name of the cluster you want to upgrade is kaolin.
- Old Postgres cluster bin directory is `/usr/lib/postgresql/16/bin`.
- New Postgres cluster bin directory is `/usr/lib/postgresql/17/bin`.
- Old Postgres cluster data directory is `/var/lib/postgresql/16/main`.
- New Postgres cluster data directory is `/var/lib/postgresql/17/main`.
- Database name is `bdrdb`.

You can use the following command to upgrade the cluster:

```
pgd node kaolin upgrade \
--old-bindir /usr/lib/postgresql/16/bin \
--new-bindir /usr/lib/postgresql/17/bin \
--old-datadir /var/lib/postgresql/16/main \
--new-datadir /var/lib/postgresql/17/main \
--database bdrdb
```

### Steps performed

These steps are performed when running `pgd node upgrade`.

> **Note**
>
> When `--check` is supplied as an argument to `pgd node upgrade`, the CLI skips steps that modify the database.

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
