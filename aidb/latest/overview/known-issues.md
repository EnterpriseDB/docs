---
title: Known issues
description: Known limitations in the current release of AIDB.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/overview/known-issues/
lastModified: 2026-10-14T19:31:41+05:30
---

# Known issues

- Limited air-gapped support. The built-in CPU model runtimes (Candle and llama.cpp) run fully offline once their model files are available locally, but any pipeline step or agent tool that calls out to a remote model provider still needs outbound network access to that provider. See [Configuring AIDB](https://www.enterprisedb.com/docs/aidb/latest/install/configure/#configuring-proxy-settings).
- A model credential holds one secret. To use a different API key, create another credential and models that use it. See [Model credentials](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/credentials/).
- Access to models is granted per credential. A role that can use a credential can use every model that uses it.
- Model credentials can't be renamed. To use another name, create a new credential and recreate the models with it.
- Members of a group role that owns a credential, and superusers, can read its secret. Superusers can read every credential's secret, but only the owner, or a role that has the owner role's privileges, can change or delete a credential. Keep credentials owned by individual roles.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
