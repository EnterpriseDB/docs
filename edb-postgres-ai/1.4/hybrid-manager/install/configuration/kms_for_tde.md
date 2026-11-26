---
title: Enabling Key Management Systems (KMS) for TDE
description: Integrate KMS for TDE with Hybrid Manager.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/kms_for_tde/
lastModified: 2026-09-29T15:30:26-07:00
---

# Enabling Key Management Systems (KMS) for TDE

When creating new clusters, you can enable **Transparent Data Encryption (TDE)** to [encrypt the data](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/what/) stored in your databases.

To [secure the data encryption key](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/), you can either enter a passphrase of your choice, or bring your own key from a key management provider such as HashiCorp Vault or AWS Key Management Service.

> **Note**
>
> TDE is available for EDB Postgres Advanced Server and EDB Postgres Extended Server for version 15 and later.

First, ensure the Key Management System provider of your choice has been enabled in the `HybridControlPlane` CR:

- [Adding KMS support](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/kms_for_tde/adding_kms_support/)

Then, configure your Key Management System provider:

- [HashiCorp Vault](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/kms_for_tde/hashicorp/)

- [AWS KMS](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/kms_for_tde/aws_kms/)

- [Azure KMS](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/kms_for_tde/azure_kms/)

- [Google Cloud KMS](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/kms_for_tde/google_cloud_kms/)

If you plan to deploy clusters across multiple data centers or regions, see [TDE across data centers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/multi_dc/tde/) for how TDE behaves for replica clusters and distributed high-availability clusters, and what to plan for when you use a customer-managed key per location.

- [KMS support](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/kms_for_tde/adding_kms_support/): Integrate KMS with Hybrid Manager.
- [HashiCorp Vault key](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/kms_for_tde/hashicorp/): Use a HashiCorp Vault key with Hybrid Manager.
- [AWS KMS](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/kms_for_tde/aws_kms/): Learn about using AWS Key Management Service (KMS) with Hybrid Manager.
- [Azure KMS](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/kms_for_tde/azure_kms/): Learn about using Azure Key Vault (KMS) with Hybrid Manager.
- [Google Cloud KMS](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/kms_for_tde/google_cloud_kms/): Use Google Cloud Key Management (KMS) with Hybrid Manager.
- [Deleting a key](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/kms_for_tde/deleting_key/): Delete a KMS key with Hybrid Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
