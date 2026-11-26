---
title: Working with encrypted WAL files
description: Learn how to work with and troubleshoot encrypted WAL files.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/encrypted_files/wal_files/
lastModified: 2026-11-02T10:35:00+01:00
---

# Working with encrypted WAL files

When TDE is enabled, WAL files are encrypted. To read or operate on them directly, you must provide the same decryption mechanism you set up when initializing the cluster.

The examples on this page use the OpenSSL passphrase command from [Using a passphrase](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/passphrase/) to illustrate the syntax. Replace it with whichever unwrap command you actually configured for the cluster. See [Choosing a key protection mechanism](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/) if you haven't chosen a mechanism yet.

## Dumping a TDE-encrypted WAL file

To inspect an encrypted WAL file, run [pg\_waldump](https://www.postgresql.org/docs/current/pgwaldump.html) with the `--data-encryption` and `--key-file-name=<file>` options, using the same encryption configuration you used when initializing the TDE-enabled cluster. Provide the unwrap command either as a command argument or as an environment variable.

### Via command argument

```shell
pg_waldump --data-encryption --key-file-name=pg_encryption/key.bin \
  --key-unwrap-command='openssl enc -d -aes-128-cbc -pbkdf2 -pass pass:<passphrase> -in "%p"'
```

### Via environment variable

```shell
export PGDATAKEYUNWRAPCMD='openssl enc -d -aes-128-cbc -pbkdf2 -pass pass:<passphrase> -in "%p"'
pg_waldump --data-encryption --key-file-name=pg_encryption/key.bin
```

This [cluster initialization example](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/self-managed/#initializing-a-server) shows how to export an environment variable. See [pg\_waldump TDE options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/wal_file_options/#pg_waldump) for details on each option.

## Resetting a corrupt TDE-encrypted WAL file

To reset a corrupt encrypted WAL file, run [pg\_resetwal](https://www.postgresql.org/docs/current/app-pgresetwal.html), providing the same unwrap command you specified when initializing the cluster, either as a command argument or as an environment variable.

### Via command argument

```shell
pg_resetwal --key-unwrap-command='openssl enc -d -aes-128-cbc -pbkdf2 -pass pass:<passphrase> -in "%p"'
```

### Via environment variable

```shell
export PGDATAKEYUNWRAPCMD='openssl enc -d -aes-128-cbc -pbkdf2 -pass pass:<passphrase> -in "%p"'
pg_resetwal
```

See [pg\_resetwal TDE options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/wal_file_options/#pg_resetwal) for details.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
