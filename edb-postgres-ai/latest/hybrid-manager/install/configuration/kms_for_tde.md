---
title: Enabling Key Management Systems (KMS) for TDE
description: Integrate KMS for TDE with Hybrid Manager.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/
lastModified: 2026-09-29T15:30:26-07:00
---

# Enabling Key Management Systems (KMS) for TDE

When creating new clusters, you can enable **Transparent Data Encryption (TDE)** to [encrypt the data](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/about/what/) stored in your databases.

To [secure the data encryption key](https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/), you can either enter a passphrase of your choice, or bring your own key from a key management provider such as HashiCorp Vault, AWS Key Management Service, Azure Key Vault, Google Cloud KMS, and more.

> **Note**
>
> TDE is available for EDB Postgres Advanced Server and EDB Postgres Extended Server for version 15 and later.

## What TDE does and doesn't protect against

TDE addresses threats to data at rest: stolen storage media, leaked backup archives, exported snapshots, and compromise of the underlying block-storage subsystem.

TDE doesn't address SQL injection, stolen credentials, application-server compromise, privileged-user abuse, or memory scraping. Those threats are handled by `pg_hba.conf` rules, authentication, TLS, network segmentation, and monitoring.

> **Warning**
>
> You can't remove TDE from a cluster in place. The only way to go from an encrypted cluster to an unencrypted one is a logical migration to a new, non-TDE cluster. All backups are ciphertext and require the KMS key (or passphrase) to restore. Losing the key is unrecoverable and irreversible.

## What Hybrid Manager (HM) encrypts by default

HM clusters are encrypted in transit by default, using TLS certificates issued by CloudNativePG (CNPG) with `hostssl` enforced in `pg_hba.conf`, and encrypted at the storage layer by default, with backing block volumes and object-storage backups using cloud-provider-managed keys. TDE adds a further layer on top of that: Postgres data files are also encrypted, so backups and data-directory copies remain ciphertext even if the underlying storage is separately decrypted. This is the layer that most compliance frameworks — including [PCI-DSS §3.5](https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0_1.pdf), [HIPAA §164.312(a)(2)(iv)](https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-C/section-164.312), and [FedRAMP SC-28](https://csrc.nist.gov/projects/cprt/catalog#/cprt/framework/version/SP_800_53_5_1_1/home?element=SC-28) — specifically require.

## Deciding on a key-per-cluster or key-per-project strategy

The HM project is a management-plane grouping, not a cryptographic boundary. The unit TDE actually operates on is the cluster: each cluster is created against one specific registered key, and that assignment happens at cluster-creation time. When you create a cluster, the console shows a curated list of the keys registered to that project. The real boundary is the underlying KMS role or policy binding, not the HM project.

- You can register multiple keys in a single project.
- Different clusters in the same project can use different keys.
- You can use one key for several clusters within a project.

Decide which strategy fits your workload:

- **One key per cluster** — custody separation for regulated workloads, per-cluster cryptographic decommissioning (destroying one cluster's key renders its data and backups permanently unreadable without affecting other clusters), and least-privilege KMS access scoped to a single cluster's service account.

- **One key per project** — simpler day-to-day operations, fewer keys to rotate and track, and a single blast radius for accidental key deletion. A reasonable default for lower environments or workloads with a single compliance owner.

## Setting up a KMS provider

1. Enable the Key Management System provider of your choice in the `HybridControlPlane` CR:

   - [Enabling KMS in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/adding_kms_support/)

2. Configure your chosen provider:

   - [Adding a HashiCorp Vault key](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/hashicorp/)

   - [Adding an AWS KMS key](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/aws_kms/)

   - [Adding an Azure KMS key](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/azure_kms/)

   - [Adding a Google Cloud KMS key](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/google_cloud_kms/)

If you plan to deploy clusters across multiple data centers or regions, see [TDE across data centers](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/multi_dc/tde/) for how TDE behaves for replica clusters and distributed high-availability clusters, and what to plan for when you use a customer-managed key per location.

- [Enabling KMS in HM](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/adding_kms_support/): Integrate KMS with Hybrid Manager.
- [Adding a HashiCorp Vault key](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/hashicorp/): Use a HashiCorp Vault key with Hybrid Manager.
- [Adding an AWS KMS key](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/aws_kms/): Learn about using AWS Key Management Service (KMS) with Hybrid Manager.
- [Adding an Azure KMS key](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/azure_kms/): Learn about using Azure Key Vault (KMS) with Hybrid Manager.
- [Adding a Google Cloud KMS key](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/google_cloud_kms/): Use Google Cloud Key Management (KMS) with Hybrid Manager.
- [Deleting a key](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/deleting_key/): Delete a KMS key with Hybrid Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
