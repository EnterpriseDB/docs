---
title: Customizing secrets
description: Learn how to customize and manage secrets for Hybrid Manager.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/customizing_secrets/
lastModified: 2026-10-14T12:38:41+05:30
---

# Customizing secrets

By default, Hybrid Manager (HM) includes pre-configured secrets to facilitate a quick, out-of-the-box installation. However, these default secrets aren't intended for production use. For any live environment, you must create custom secrets to ensure your installation remains secure and unique.

HM secrets are categorized by installation scenarios. Depending on which installation scenarios you have enabled, you must configure the corresponding secrets below.

| Scenario      | Feature                              | Key secrets                                                        | Docs                                                                                                                                                                 |
| ------------- | ------------------------------------ | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `core`        | Core platform (always enabled)       | Bootstrap Fernet key, admin credentials, system database passwords | [Core secrets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/customizing_secrets/core_secrets/)                         |
| `ai`          | GenAI Builder                        | Fernet key, NVIDIA NGC credentials, HuggingFace token              | [GenAI Builder secrets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/customizing_secrets/genai_secrets/)               |
| `analytics`   | Catalog                              | Confounding key                                                    | [Catalog secrets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/customizing_secrets/lakehouse_catalog_secrets/)         |
| `migration`   | Migration Portal                     | DB accounts, Copilot HTTP/Metrics auth                             | [Migration Portal secrets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/customizing_secrets/migration_portal_secrets/) |
| `dbaas`       | Database-as-a-Service                | None — No install-time secrets of its own.                         | —                                                                                                                                                                    |
| `marketplace` | App marketplace (HM 1.4.2 and later) | TODO (confirm with engineering): install-time secrets, if any.     | —                                                                                                                                                                    |

To create the secrets for your selected scenarios, pass the same scenarios to `edbctl` with `--scenario`. See [Create component secrets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/environment_prep/#create-component-secrets) and [Planning your selection](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/planning_arch/#planning-your-selection).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
