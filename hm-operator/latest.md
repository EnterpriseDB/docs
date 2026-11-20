---
title: Hybrid Manager operator
description: Release notes and HM version compatibility for the EDB Hybrid Manager (HM) operator.
product: Hybrid Manager operator
version: "2"
url: https://www.enterprisedb.com/docs/hm-operator/latest/
lastModified: 2026-11-02T23:20:16+05:30
---

# Hybrid Manager operator

The Hybrid Manager (HM) operator is the Kubernetes operator that installs and manages Hybrid Manager. It reconciles the `HybridControlPlane` custom resource, deploying and upgrading the HM components that make up your control plane.

From version 2.0.0, the operator is released independently of HM, with its own version number and its own release cadence. A single `2.x` operator supports a range of HM versions, so you can upgrade the operator without upgrading HM, and vice versa.

- [Release notes](https://www.enterprisedb.com/docs/hm-operator/latest/rel_notes/) — what changed in each operator release.
- [Compatibility matrix](https://www.enterprisedb.com/docs/hm-operator/latest/compatibility_matrix/) — which operator version to run with which HM version.

For installation and upgrade instructions, see the Hybrid Manager documentation:

- [Installing Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/install_hm/)
- [Installing the HM operator on air-gapped OpenShift](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/openshift_operator_airgapped/)
- [Migrating from bootstrap to the HM operator](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/upgrading_hm/migrate_bootstrap_to_operator/)

* [Release notes](https://www.enterprisedb.com/docs/hm-operator/latest/rel_notes/): Release notes for the EDB Hybrid Manager (HM) operator.
  - [Version 2.3.0](https://www.enterprisedb.com/docs/hm-operator/latest/rel_notes/hm-operator_2.3.0_rel_notes/)
  - [Version 2.2.0](https://www.enterprisedb.com/docs/hm-operator/latest/rel_notes/hm-operator_2.2.0_rel_notes/)
  - [Version 2.1.0](https://www.enterprisedb.com/docs/hm-operator/latest/rel_notes/hm-operator_2.1.0_rel_notes/)
  - [Version 2.0.0](https://www.enterprisedb.com/docs/hm-operator/latest/rel_notes/hm-operator_2.0.0_rel_notes/)
* [Compatibility matrix](https://www.enterprisedb.com/docs/hm-operator/latest/compatibility_matrix/): Supported combinations of Hybrid Manager operator versions and Hybrid Manager versions.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
