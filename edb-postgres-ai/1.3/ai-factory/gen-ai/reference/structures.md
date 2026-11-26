---
title: What are Structures?
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/structures/
lastModified: 2026-03-17T02:16:04Z
---

# What are Structures?

Gen AI Builder Structures are Python applications that use the [Gen AI Builder SDK](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/) to bring LLMs into your software environment. You can create Structures in the form of agents, sequential task pipelines, and parallelized workflows.

Structures can invoke other Structures, enabling Agents to interact with other Agents to create multi-agent systems, or to invoke pipelines or workflows.

Typically, developers can easily write and debug their software locally. However, they would then need to find someplace else to host it for testing and production. With Gen AI Builder Structures, you can start on your laptop, and then deploy them directly to Gen AI Builder to run them at scale.

- [Getting Started with Structures](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/structures/getting-started-with-structures/): When building AI-powered software, prompting or chatting with an LLM directly will only take you so far. You'll want programmatic control over application logic and the flow of data. In other words, you'll want to run code.
- [Creating a Structure](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/structures/create-structure/): You can host your Gen AI Builder SDK Agents, Pipelines, and Workflows on Gen AI Builder. This allows you to run your Structures without needing to manage infrastructure.
- [Structure Config YAML](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/structures/structure-config/): Overview
- [Running Your Structure](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/structures/run-structure/): Once your Structure is created and deployed, you can run your Structure one of three ways outlined below. You may view the details of any of your runs, no matter how you created them, in the Runs tab of your Structure.
- [Structure Run Events](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/structures/structure-run-events/): Running a Structure will result in Events being created for that Structure Run. Events are used to report data about the progress of your Structure Run. There are two types of Events: SYSTEM Events and USER Events.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
