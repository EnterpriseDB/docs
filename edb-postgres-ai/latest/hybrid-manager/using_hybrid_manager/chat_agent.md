---
title: EDB Hybrid Manager Chat Agent
description: Use Chat Agent to operate Hybrid Manager in plain language — browse your estate, provision Postgres clusters, troubleshoot performance, and consult the docs without leaving the HM console.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/
lastModified: 2026-11-02T16:15:32+01:00
---

# EDB Hybrid Manager Chat Agent

The EDB Hybrid Manager (HM) **Chat Agent** is a conversational assistant that helps you operate HM in plain language. Ask it about your estate, provision and inspect Postgres clusters, look up active alerts, troubleshoot performance, and consult the HM documentation — all without leaving the HM console.

## Supported operations

Chat Agent covers estate browsing, cluster lifecycle management, monitoring and alerts, configuration recommendations, cluster health reports, Oracle-to-Postgres SQL translation, Data Migration Service status, and documentation Q\&A — all scoped to your HM permissions.

For the complete catalog with example prompts and scope boundaries, see [What the Chat Agent can do](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/capabilities/).

## Model-dependent capabilities

Chat Agent's effective capability scales with the strength of the model your administrator configures. A small model answers HM documentation questions. Stronger models add estate browsing, monitoring, Postgres cluster lifecycle management, cluster health reports, and schema design recommendations. See [Model strength tiers](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/configure/#model-strength-tiers) for guidance on model selection.

## Documentation scope

Chat Agent answers HM questions from a versioned documentation snapshot shipped with each release. For details on citation behavior and the knowledge cutoff, see [HM documentation Q\&A](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/capabilities/#hm-documentation-qa).

## Reply preferences

Chat Agent can remember how you like replies to be written: language, tone, structure, length, and technical depth. Set a preference once and it applies to every conversation that follows. See [User communication preferences](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/user_preferences/).

## Next steps

- [What the Chat Agent can do](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/capabilities/) — full capability catalog grouped by area, with example prompts.
- [Configure the Chat Agent](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/configure/) — for HM administrators connecting model endpoints and choosing a model.
- [User communication preferences](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/user_preferences/) — save standing reply preferences across conversations.
- [Security and data handling](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/security_and_data/) — authorization model, audit, and how your data is treated.
- [Troubleshooting](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/troubleshooting/) — common issues and how to resolve them.

* [Capabilities](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/capabilities/): Catalog of Chat Agent capabilities in Hybrid Manager — estate browsing, Postgres Cluster lifecycle management, monitoring, recommendations, SQL, migrations, and documentation Q\&A — with example prompts.
* [Configuring the Chat Agent](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/configure/): Prerequisites, model setup, supported providers, and model selection guidance for configuring the Hybrid Manager Chat Agent.
* [User preferences](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/user_preferences/): Set standing reply preferences for Chat Agent conversations.
* [Security and data handling](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/security_and_data/): How the Hybrid Manager Chat Agent authorizes actions, scopes data to projects, handles secrets, audits activity, and stores conversations.
* [Schema design recommendations](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/schema_design_recommendations/): Get schema design recommendations via the HM chatbot.
* [Troubleshooting](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/chat_agent/troubleshooting/): Common issues with the Hybrid Manager Chat Agent and how to resolve them — from a missing sparkle icon to permission errors and stalled responses.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
