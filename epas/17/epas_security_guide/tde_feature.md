---
title: Transparent Data Encryption overview
description: Provides an overview of the benefits of the Transparent Data Encryption feature
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/epas_security_guide/tde_feature/
lastModified: 2026-09-29T15:30:26-07:00
---

# Transparent Data Encryption overview

Transparent Data Encryption (TDE) is an optional encryption method that protects data in the database by encrypting the underlying files.

TDE is transparent to authorized users of the database, as no change is required in the applications or existing access policies. It's supported by EDB Postgres Advanced Server and EDB Postgres Extended Server, in versions 15 and above, with high availability.

TDE hardens your organization’s data security with minimum performance overhead and doesn't require additional storage. TDE also enables developers to secure their data using secure encryption algorithms without changing their applications. The feature securely stores individual tablespaces and logs encrypted with their own encryption keys, ensuring security of user data while preserving ease of management for database administrators.

For information about how to enable transparent data encryption and work with the encrypted files, see the [Transparent Data Encryption](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/) documentation.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
