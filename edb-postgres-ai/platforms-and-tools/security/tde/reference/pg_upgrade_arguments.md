---
title: pg_upgrade TDE options
description: Learn about the pg_upgrade options for upgrading TDE-encrypted clusters.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/pg_upgrade_arguments/
lastModified: 2026-11-02T10:46:12+01:00
---

# pg\_upgrade TDE options

These arguments to [pg\_upgrade](https://www.postgresql.org/docs/current/pgupgrade.html) help with upgrading encrypted clusters.

## Option: `--copy-by-block`

Copies files to the new cluster block by block instead of the default, which is to copy the whole file at once. This option is the same as the default mode but slower. It does, however, support upgrades between clusters with different encryption settings.

You must use this option when upgrading between clusters with different encryption settings, that is, unencrypted to encrypted, encrypted to unencrypted, or both encrypted with different keys. While copying files to the new cluster, it decrypts them and reencrypts them with the keys and settings of the new cluster.

If the old cluster is encrypted and the new cluster was initialized as unencrypted, this option decrypts the data from the old cluster and copies it to the new cluster unencrypted. If the old cluster is unencrypted and the new cluster was initialized as encrypted, this option encrypts the data from the old cluster and places it into the new cluster encrypted.

See the description of the [initdb `--copy-key-from=<file>` option](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/) for information on copying a key from an existing cluster when preparing a new cluster as a target for `pg_upgrade`.

### Supported values

The `--copy-by-block` option doesn't require specifying any values.

See [Adding encryption and upgrading with pg\_upgrade](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/upgrading/) or [Migrating from PostgreSQL to Enterprise Postgres](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/postgres_to_extended/) for `--copy-by-block` usage examples.

## Option: `--key-unwrap-command=<command>`

Provides the command to unwrap (decrypt) the data encryption key and access the files to copy. It must be the same unwrap command you specified when initializing the cluster.

### Supported values

`<command>` is customizable, but it must contain the placeholder `%p`, which specifies the file to read the wrapped key from. The command must write the unwrapped key to its standard output. Use the special value `-` if you don't want to apply any key unwrapping command. See [Choosing a key protection mechanism](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/) for more information.

If you don't use this option, `pg_upgrade` falls back on the environment variable `PGDATAKEYUNWRAPCMD`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
