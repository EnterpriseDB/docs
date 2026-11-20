---
title: Gen AI Builder Reference
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/
lastModified: 2026-05-22T17:25:47+02:00
---

# Gen AI Builder Reference

Gen AI Builder provides managed services for your AI app stack. Deploy and scale end-to-end solutions, from LLM-powered data prep and retrieval to AI Agents, Pipelines, and Workflows.

## Build Your Own RAG Pipeline

Connect to your data with [Data Sources](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/data-sources/), store files in [Data Lakes](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/data-lakes/), and prepare them for retrieval with [Knowledge Bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/knowledge-bases/create-knowledge-base/).

## Host and Run Your Code

Have Gen AI Builder code? Have existing code with another LLM framework? You can host your Python code using [Structures](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/structures/create-structure/) whether it uses the Gen AI Builder SDK or not.

## Augment Agents with Tools

Expand the capabilities of your agents with custom Tools they can use. These Tools allow them to call services or perform custom logic, bridging the gap between the LLM and your application. Tools can even be used to augment other applications like [OpenAI's GPTs via OpenAI Actions](https://platform.openai.com/docs/actions/introduction). See [Tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/tools/) to get started.

## Store Configuration for LLM Agents

[Rules and Rulesets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/rules/) enable rapid and collabortive iteration for managing LLM behavior. [Threads and Messages](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/threads/) allow for persisted and editable conversation memory across any LLM invocation.

## APIs

All of our features can be called via API with a Gen AI Builder API Key. See the [API Reference](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/api/) for detailed information.

- [API Reference](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/api/): Scroll down for example requests and responses.
- [What are Assistants?](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/assistants/): AI applications don't always need to be complex to get the job done. Sometimes, all you need is a quick way to give an LLM secure access to your data. If you'd like to build a simple chat app that has access to your data sources, create an Assistant.
- [Data Lake](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/data-lakes/): Data Lakes provide a cloud storage solution integrated into Gen AI Builder. Comprised of Bucket and Asset resources, Data Lakes can be accessed using Gen AI Builder with the GriptapeCloudFileManagerDriver. In Gen AI Builder, Data Lakes can be used as a Data Source type.
- [What are Data Sources?](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/data-sources/): All AI-powered software applications require data to perform their jobs. A significant amount of information is encoded into Large language models (LLMs) during training, so basic applications may not need anything other than a user's input 'prompt' to generate useful output.
- [What are Knowledge Bases?](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/knowledge-bases/): Knowledge Bases are collections of Data Sources that applications can query to retrieve information. Knowledge Bases enable you control which Data Sources can be accessed by applications. Once you have created the Data Source(s) you need, add them to a Knowledge Base so that your application, such as a Gen AI Builder Assistant or an Agent in a Structure, can access them.
- [What are Retrievers?](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/retrievers/): Retrievers provide retrieval augmented generation capabilities within Gen AI Builder. They are a fully-managed implementation of the RAG Engine within the Gen AI Builder SDK.
- [Create a Ruleset](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/rules/): A Ruleset can be created to store sets of rules and pull them in dynamically for faster iteration on LLM behavior in a deployed environment. A Ruleset takes a list of Rules. A Ruleset can be given an alias so it can be referenced by a user-provided unique identifier:
- [Gen AI Builder reference](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/): Gen AI Builder is a Python framework designed to simplify the development of generative AI applications. It offers a set of straightforward, flexible abstractions for working with areas such as Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and much more.
- [What are Structures?](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/structures/): Gen AI Builder Structures are Python applications that use the Gen AI Builder SDK to bring LLMs into your software environment. You can create Structures in the form of agents, sequential task pipelines, and parallelized workflows.
- [Create a Thread](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/threads/): A Thread can be created to store conversation history across any LLM invocation. A Thread contains a list of Messages. Messages can be updated and deleted, in order to control how the LLM recalls past conversations.
- [Create a Tool](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/tools/): You can host your Gen AI Builder SDK Tools on Gen AI Builder. This allows you to run your Tools without needing to manage infrastructure.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
