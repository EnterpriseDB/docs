---
title: Customizing secrets
description: Learn how to customize and manage secrets for Hybrid Manager.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/customizing_secrets/
lastModified: 2026-11-05T19:23:14Z
---

# Customizing secrets

By default, Hybrid Manager (HM) includes pre-configured secrets to facilitate a quick, out-of-the-box installation. However, these default secrets aren't intended for production use. For any live environment, you must create custom secrets to ensure your installation remains secure and unique.

HM secrets are categorized by installation scenarios. Depending on which installation scenarios you have enabled, you must configure the corresponding secrets below.

| Scenario      | Feature                                | Key secrets                                                        | Docs                                                                                                                                                            |
| ------------- | -------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `core`        | Core platform (always enabled)         | Bootstrap Fernet key, admin credentials, system database passwords | [Core secrets](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/customizing_secrets/core_secrets/)                 |
| `ai`          | GenAI Builder                          | Fernet key, NVIDIA NGC credentials, HuggingFace token              | [GenAI Builder secrets](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/customizing_secrets/genai_secrets/)       |
| `chatbot`     | Chat Agent                             | Model endpoints and API keys                                       | [Chat Agent secrets](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/customizing_secrets/chatbot_secrets/)        |
| `analytics`   | Catalog                                | Confounding key                                                    | [Catalog secrets](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/customizing_secrets/lakehouse_catalog_secrets/) |
| `dbaas`       | Database-as-a-Service                  | None — No install-time secrets of its own.                         | —                                                                                                                                                               |
| `pgd`         | Distributed High Availability clusters | None — No install-time secrets of its own.                         | —                                                                                                                                                               |
| `marketplace` | App marketplace                        | None — No install-time secrets of its own.                         | —                                                                                                                                                               |

To create the secrets for your selected scenarios, pass the same scenarios to `edbctl` with `--scenario`. See [Create component secrets](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/environment_prep/#create-component-secrets) and [Keeping your scenario selection consistent](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/planning_arch/#keeping-your-scenario-selection-consistent).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
