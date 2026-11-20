---
title: Configuring SOPs
description: Configure necessary and optional features for your Hybrid manager installation.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/
lastModified: 2026-10-23T21:05:43+05:30
---

# Configuring SOPs

- [Syncing images to a local private registry](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/sync_images/): Mirror EDB Postgres AI container images to your internal registry for security, reliability, and air-gapped or disconnected environments.
- [In-cluster container registry](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/in_cluster_registry/): How to enable and use the Hybrid-Manager-internal container registry embedded in the EDB Postgres AI Operator as an alternative to a private registry external to HM.
- [Operator on air-gapped OpenShift](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/openshift_operator_airgapped/): Install and upgrade the Hybrid Manager operator through OLM/OperatorHub on disconnected or air-gapped OpenShift, either by mirroring the Red Hat certified catalog with oc-mirror or by building your own catalog from the EDB-published bundle.
- [Configuring image discovery](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/image_discovery/): Configure the HM-internal beacon agent to automatically discover and register available Postgres container images from your private registry.
- [Customizing secrets](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/customizing_secrets/): Learn how to customize and manage secrets for Hybrid Manager.
- [Implementing TLS](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/cert-man/): Learn how create custom certificates and manage certificates for securing the Hybrid Manager Portal with TLS.
- [Configuring object storage](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/object_storage/): Learn how to create and configure the object storage secret for Hybrid Manager across all supported providers, including S3-compatible storage.
- [Deploying HM across multiple data centers](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/multi_dc/): Learn how to set up multiple data centers (multi-DC) with Hybrid Manager to support the deployment of database clusters across multiple geographical locations.
- [Enabling KMS for TDE](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/kms_for_tde/): Integrate KMS for TDE with Hybrid Manager.
- [Service mesh memory](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/optimize_mesh_memory/): Configure Istio memory limits for optimal performance based on your Postgres cluster workload.
- [API audit logging](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/enable_api_audit_logging/): Manage structured audit logging for authenticated HM API requests.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
