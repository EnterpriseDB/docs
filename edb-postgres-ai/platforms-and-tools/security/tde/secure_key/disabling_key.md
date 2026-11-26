---
title: Disabling the key wrapping
description: Learn how to omit using a wrapping key.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/disabling_key/
lastModified: 2026-11-02T10:35:00+01:00
---

# Disabling the key wrapping

You can disable key wrapping, for example for testing purposes, when initializing the cluster with `initdb`. If you chose to leave your key unwrapped, you can add protection later, see [Protecting an existing key](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/key_maintenance/protecting_existing_key/).

## Using a null wrap and unwrap command

Set the wrap and unwrap commands to the special value `-`, using the `--key-wrap-command=-` and `--key-unwrap-command=-` flags:

```shell
initdb --data-encryption -D /var/lib/edb/as16/data \
  --key-wrap-command=- \
  --key-unwrap-command=-
```

## Using `--no-key-wrap`

The `--no-key-wrap` flag is a shortcut for the preceding option. It sets both the wrap and unwrap commands to `-` for you:

```shell
initdb --data-encryption -D /var/lib/edb/as16/data --no-key-wrap
```

With either option, TDE generates encryption key files but leaves them unprotected.

For `initdb --data-encryption` to run successfully, you must either specify a wrapping/unwrapping command, set a fallback environment variable with wrapping/unwrapping commands, or disable key wrapping with one of the previous mechanisms. Otherwise, creating an encrypted database cluster fails.

See [initdb TDE options](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/reference/initdb_tde_options/) for full details on these options.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
