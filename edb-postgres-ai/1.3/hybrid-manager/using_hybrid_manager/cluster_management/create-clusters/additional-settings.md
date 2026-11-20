---
title: Backup and security settings
description: Learn about settings for backups and security for Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/cluster_management/create-clusters/additional-settings/
lastModified: 2026-09-29T15:30:26-07:00
---

# Backup and security settings

On the **Additional Settings** tab, you can specify the backup retention period and some security features.

## Backups

Change the default database backup retention period of 30 days using the
**Retention Period** controls in the **Backups** section. You can configure the
retention period in days, weeks, or months. Set a retention period
between 1 and 180 days, 1 and 25 weeks, or 1 and 6 months.

## Security

You can [encrypt your cluster's data](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/what/), if required.

This option is available for EDB Postgres Advanced Server and EDB Postgres Extended Server for versions 15 and later.

Use the **Transparent Data Encryption (TDE)** toggle to enable TDE.

> **Note**
>
> You can't enable, disable, or modify the TDE configuration after the cluster is created.

You can set the following options:

- **Enter a Passphrase**. This option [secures the data encryption key created by Hybrid Manager (HM)](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/#choosing-a-mechanism-to-protect-the-data-encryption-key) with a passphrase when you create a TDE-enabled cluster.

- If the administrator of your HM instance previously [enabled a key from a key management system (KMS)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/configuration/kms_for_tde/adding_kms_support/), you can also select **Customer Key Management**. Then select one of the configured keys to secure the data encryption key created by the Hybrid Manager.

To learn more about TDE, see [Transparent Data Encryption](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
