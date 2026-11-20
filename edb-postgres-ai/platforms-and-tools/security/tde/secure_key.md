---
title: Choosing a key protection mechanism
description: Learn how to secure your data with an encryption key.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/
lastModified: 2026-11-02T10:35:00+01:00
---

# Choosing a key protection mechanism

When you initialize a new cluster with `initdb` while enabling TDE, you must choose how to protect the data encryption key that TDE generates.

## Data encryption key

TDE generates a data encryption key when you initialize the database cluster with `initdb`, and stores it in a file, `pg_encryption/key.bin`, under the data directory. This file contains several keys used for different purposes at runtime; the data key itself is a single sequence of random bytes within it.

If you don't perform any further action, this file contains the key in plaintext, which isn't secure. Anyone with access to the encrypted data directory has access to the plaintext key, which defeats the purpose of encryption.

## Choosing a mechanism to protect the key

To secure the data encryption key, you must specify a wrap and an unwrap command that provides TDE with a data encryption protection mechanism, either as [initdb options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/) or as environment variables. You can set this parameter only at server start.

See [Protecting the data encryption key](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/how/#protecting-the-data-encryption-key) to compare your options before choosing one:

- [Protect the data key with a passphrase](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/passphrase/). A wrapping key is derived from the passphrase and used to encrypt the data key. Not recommended for production environments.

- [Protect the data key with a wrapping key stored in a key management system](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/key_store/) or key store. This second key is also called the key-wrapping key or master key.

- You can also choose to [disable the data encryption key wrapping](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/disabling_key/). Only do this for test environments, as it leaves the TDE key unprotected. If you chose to leave your key unwrapped, you can add protection later, see [Protecting an existing key](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/key_maintenance/protecting_existing_key/).

Each option's page shows the exact wrap and unwrap commands to use for that mechanism, both as environment variables and as `initdb` command-line arguments.

- [Using a passphrase](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/passphrase/): Learn how to secure your encryption key with a passphrase.
- [Using a key store](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/key_store/): Learn how to secure your encryption key with a KMS key.
- [Disabling the key wrapping](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/disabling_key/): Learn how to omit using a wrapping key.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
