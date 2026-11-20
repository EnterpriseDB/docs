---
title: Interacting programmatically with HM
description: Learn how to use the API and MCP tools to perform management tasks with Hybrid Manager.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/interacting_programmatically/
lastModified: 2026-07-23T19:28:07Z
---

# Interacting programmatically with HM

System administrators and developers can use the EDB Postgres AI Hybrid Manager (HM) API to integrate directly with HM for management tasks. These tasks involve managing clusters - (provisioning, deprovisioning, and scaling), automating administrative operations, and handling migrations.

For more information, see API docs from the EDB Postgres AI Portal:

![API Docs](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/edb-postgres-ai/1.4/hybrid-manager/images/api_docs.png)

1. Go to your Hybrid Manager console URL and log in with your credentials.
2. Look for an `API` link at the bottom of the page.
3. Select the `API` link to open the interactive API explorer.

You can view all available endpoints, see required parameters, and even execute sample requests directly from your browser.

## Access Key

An access key provides secure, programmatic access to the HM API. It enables users to authenticate and interact with HM services without requiring interactive login each time.

Key purposes:

- Authentication — Verifies the identity of the user or system calling the API.

- Automation — Allows scripts, tools, or applications to securely perform tasks such as provisioning clusters, scaling, or monitoring—without manual intervention.

- Access control — Ties actions to a specific user or machine, enabling audit trails and permission enforcement.

- Security — Avoids the need to embed usernames and passwords in automation scripts.

For more information, see [Create and manage Access key](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/interacting_programmatically/access_key/)

- [Access key](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/interacting_programmatically/access_key/): Learn how to create and use an API access key with Hybrid Manager.
- [Using Access Key](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/interacting_programmatically/using_access_key/): How to use the Access key to authenticate the requests.
- [Using API](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/interacting_programmatically/using_the_hm_api/): Use the API to perform management tasks like cluster provisioning, deprovisioning, and scaling, with Hybrid Manager.
- [Using MCP tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/interacting_programmatically/using_mcp_tools/): Connect AI agents and LLM-based workflows to Hybrid Manager using the MCP server.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
