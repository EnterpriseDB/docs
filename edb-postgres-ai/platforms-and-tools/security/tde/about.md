---
title: Overview
description: Learn about TDE, how it works, what it encrypts, and why to use it.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/
lastModified: 2026-11-02T10:34:55+01:00
---

# Overview

Transparent data encryption (TDE) protects data at rest by encrypting the database files and write-ahead log on disk, so that anyone with access to the underlying storage, such as a backup or a stolen disk, can't read the data without the decryption key. Encryption and decryption happen automatically at the database layer, with no changes required to applications or client drivers.

TDE is one layer of a broader security strategy, not a replacement for access controls, auditing, or encrypted connections.

- [Compatibility](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/support/): You can deploy TDE-enabled servers on several supported database distributions and technologies.
- [Why should you use TDE?](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/why/): Learn about some of the use cases for TDE encryption, and what it doesn't protect against.
- [What's encrypted with TDE?](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/what/): Which data is encrypted when databases are initialized with TDE?
- [How does TDE encrypt data?](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/how/): How does the encryption of data work when TDE is enabled?
- [Choosing a path](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/choosing_a_path/): Find the right page for your TDE scenario, whether you're creating a new cluster, upgrading, or changing Postgres distributions.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
