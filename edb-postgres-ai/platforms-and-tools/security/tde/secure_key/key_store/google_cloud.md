---
title: Using Google Cloud KMS
description: Learn how to secure your encryption key with a Google Cloud KMS key.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/key_store/google_cloud/
lastModified: 2026-11-02T10:35:00+01:00
---

# Using Google Cloud KMS

Protect the data encryption key with a key stored in Google Cloud Key Management Service (KMS).

## Configuration example

Create a key with [Google Cloud KMS](https://cloud.google.com/kms/docs):

```shell
gcloud kms keys create pg-tde-master-1 --location=global --keyring=pg-tde --purpose=encryption
```

Use the `gcloud kms` command with the `pg-tde-master-1` key to wrap and unwrap the data encryption key. You can provide these commands as environment variables or as `initdb` command-line arguments.

### Via environment variable

```shell
PGDATAKEYWRAPCMD='gcloud kms encrypt --plaintext-file=- --ciphertext-file=%p --location=global --keyring=pg-tde --key=pg-tde-master-1'
PGDATAKEYUNWRAPCMD='gcloud kms decrypt --plaintext-file=- --ciphertext-file=%p --location=global --keyring=pg-tde --key=pg-tde-master-1'
```

### Via command argument

```shell
initdb --data-encryption -D /var/lib/edb/as16/data \
  --key-wrap-command='gcloud kms encrypt --plaintext-file=- --ciphertext-file=%p --location=global --keyring=pg-tde --key=pg-tde-master-1' \
  --key-unwrap-command='gcloud kms decrypt --plaintext-file=- --ciphertext-file=%p --location=global --keyring=pg-tde --key=pg-tde-master-1'
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
