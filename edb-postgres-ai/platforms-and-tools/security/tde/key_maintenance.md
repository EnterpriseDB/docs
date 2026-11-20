---
title: Maintaining the data encryption key
description: Learn how to protect or rotate the data encryption key on an already TDE-enabled cluster.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/key_maintenance/
lastModified: 2026-11-02T10:35:00+01:00
---

# Maintaining the data encryption key

Revisit how an already TDE-enabled cluster's data encryption key is protected: add protection you skipped at creation time, or rotate the key or passphrase currently in use.

- [Protecting an existing key](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/key_maintenance/protecting_existing_key/) shows how to add a protection mechanism to a key that was left unprotected when the cluster was created.

- [Rotating the key](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/key_maintenance/key_rotation/) shows how to change the passphrase or key-store wrapping key currently protecting your data encryption key.

If you're choosing a protection mechanism for a new cluster instead, see [Choosing a key protection mechanism](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/).

- [Protecting an existing key](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/key_maintenance/protecting_existing_key/): Learn how to enable a mechanism to protect the data encryption key on an existing TDE-enabled database cluster.
- [Rotating the key](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/key_maintenance/key_rotation/): Learn how to rotate your data encryption key.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
