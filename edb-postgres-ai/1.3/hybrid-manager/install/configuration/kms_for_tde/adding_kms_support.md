---
title: Adding KMS support
description: Integrate KMS with Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/configuration/kms_for_tde/adding_kms_support/
lastModified: 2026-02-02T19:56:11-05:00
---

# Adding KMS support

When you deploy the Hybrid Manager (HM), the bootstrap kit configuration (`values.yaml`) includes the capability of using passphrases or HashiCorp Vault keys for TDE implementation by default:

```shell
  # - transparentDataEncryptionMethods: List of TDE Encryption Methods for the agent.
  #     Supported options: passphrase, aws_kms, gcp_kms, hashicorp_vault.
  #     Default values: passphrase, hashicorp_vault.
  transparentDataEncryptionMethods:
    - passphrase
    - hashicorp_vault
```

If you want to use a different Key Management System for TDE, you can edit this section during installation. Alternatively, you can add the key provider after installing the Hybrid Manager. In that case, you'll have to reapply the helm chart with the altered `values.yaml` to populate the system with the new configuration.
See the installation guides for infrastructure-specific instructions on how to apply the helm chart.

## HashiCorp Vault

The Hybrid Manager configuration includes support for HashiCorp out of the box.

## AWS KMS

To use Amazon's KMS, Amazon Key Management Service, add `aws_kms` to the list:

```shell
  # - transparentDataEncryptionMethods: List of TDE Encryption Methods for the agent.
  #     Supported options: passphrase, aws_kms, gcp_kms, hashicorp_vault.
  #     Default values: passphrase, hashicorp_vault.
  transparentDataEncryptionMethods:
    - passphrase
    - hashicorp_vault
    - aws_kms
```

## Google KMS

If you want to use Google's KMS, Cloud Key Management Service, add `gcp_kms` to the list:

```shell
  # - transparentDataEncryptionMethods: List of TDE Encryption Methods for the agent.
  #     Supported options: passphrase, aws_kms, gcp_kms, hashicorp_vault.
  #     Default values: passphrase, hashicorp_vault.
  transparentDataEncryptionMethods:
    - passphrase
    - hashicorp_vault
    - gcp_kms
```

## Next steps

- [Configure HashiCorp Vault as the KMS for TDE](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/configuration/kms_for_tde/hashicorp/)
- [Configure AWS Key Management Service as the KMS for TDE](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/configuration/kms_for_tde/aws_kms/)
- [Configure Google Cloud Key Management Service as the KMS for TDE](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/configuration/kms_for_tde/google_cloud_kms/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
