---
title: Create a Structure in Gen AI Builder
description: How to create a Structure in Gen AI Builder by deploying an agent, pipeline, or workflow from a Zip file.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/create-structure/
lastModified: 2026-03-17T02:16:04Z
---

# Create a Structure in Gen AI Builder

> Prerequisite: Access to the Hybrid Manager UI with AI Factory enabled. See [AI Factory in Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/).

## Who is this for

Platform users building advanced AI workflows in **Gen AI Builder** in **Hybrid Manager AI Factory**.
Typical users include developers, AI architects, and data engineers.

## What you will accomplish

You will create a **Structure** in Gen AI Builder by deploying an agent, pipeline, or workflow packaged as a Zip file.
You will configure your Structure for execution in AI Factory.

## Why create a Structure

- Structures power **advanced AI workflows** beyond basic conversation.
- They enable:
- **Data transformation** for Data Sources.
- **Task execution** via Tools in Assistants.
- **Custom Retrieval pipelines**.
- **Integration with external APIs** and services.
- Reusable business logic components across AI Factory applications.

For background, see:

- [Structures](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/structures/)
- [AI Factory Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/)
- [Hybrid Manager: Using Gen AI Builder](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/)

## Complexity and time to complete

- **Complexity**: Moderate
- **Estimated time**: 10–20 minutes

## When to create a Structure

- When building **custom Tools** callable by Assistants.
- When transforming or enriching data in Data Source pipelines.
- When implementing complex **AI pipelines** that require multi-step logic.
- When integrating external **APIs**, **systems**, or **business workflows**.

## Pre-requisites

- Structure packaged as a **Zip file**:
- Includes Structure code and dependencies.
- Contains Structure configuration (typically YAML).
- Uploaded to your configured **Data Lake**.

## How to create a Structure

### 1. Navigate to Structures

- In Gen AI Builder console, go to **Structures**.

### 2. Create a new Structure

- Click **Create Structure**.

### 3. Select creation method

- Choose **Create Structure from Zip file**.

### 4. Configure Structure fields

#### Name (required)

- Provide a clear, unique name.
- Example: `PGFT_TransactionCategorizer`

#### Description (optional)

- Describe what the Structure does.
- Example: `Categorizes financial transactions using PGFT business logic.`

### 5. Configure Data Lake parameters

#### Bucket Id (required)

- Select the **Data Lake bucket** where your Structure Zip file is stored.

#### Asset Path (required)

- Provide the full path to your Zip file inside the selected bucket.
- Example: `griptape-structures/transaction_categorizer.zip`

### 6. Configure Structure Config parameters

#### Structure Config File (recommended)

- Enter the relative path inside the Zip to your Structure Config file.
- Example: `structure_config.yaml`

### 7. Configure environment variables (optional)

You can define environment variables that will be available to the Structure.

#### Add individual variables

- **Type:** Variable or Secret.
- **Name:** Example: `API_KEY`
- **Value:** Example: `your_actual_api_key_here`

#### Import .env file

- Optionally paste contents of a `.env` file to bulk import variables.

### 8. Finalize creation

- Click **Create**.

The system will:

- Unzip your file.
- Set up the runtime environment.
- Make the Structure available in AI Factory.

### 9. Verify deployment

- Your Structure will appear in the **Structures** list.
- Monitor **deployment status**.
- You can now:
- Run the Structure manually via the console or API.
- Use the Structure as a **Tool** in Assistants.
- Use the Structure in **Data Source pipelines**.

## Example scenario: Deploy a Transaction Categorizer Structure

1. Package Griptape Structure `TransactionCategorizer`.
2. Upload to Data Lake:

- Bucket: `pgai-structures`
- Path: `transaction_categorizer/transaction_categorizer.zip`

3. Create Structure:

- Name: `PGFT_TransactionCategorizer`
- Description: `Categorizes financial transactions.`
- Bucket Id: `pgai-structures`
- Asset Path: `transaction_categorizer/transaction_categorizer.zip`
- Structure Config File: `structure_config.yaml`

4. Add env variables:

- Name: `MODEL_API_KEY`
- Value: `your_key_here`

5. Click **Create**.

Next steps:

- Run the Structure to verify behavior.
- Assign the Structure as a **Tool** to Assistants.
- Use the Structure in Data Source pipelines if applicable.

## SDK reference

- [Agents and Structures](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/structures/)
- [Tasks, Pipelines, Workflows](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/structures/)
- [Tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/tools/)
- [RAG Engines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/engines/)

## Troubleshooting

### Structure fails to deploy

- Verify Zip file contents:
- Structure code is valid.
- Structure Config file is present and correctly referenced.
- Confirm the **Data Lake path** is correct and accessible.

### Environment variables not working

- Confirm variables are entered correctly.
- If using Secrets, ensure Secrets are properly configured.

### Structure not appearing as a Tool

- Verify the Structure implements a **Tool-compatible interface**.
- Confirm the Structure is published and available for Tool assignment.

### Structure errors at runtime

- Review Structure logs in Gen AI Builder console.
- Verify external API endpoints and credentials.
- Check Structure Config settings.

## Best practices

- Use modular, reusable Structure design.
- Externalize configuration via environment variables.
- Implement **robust error handling**.
- Monitor execution performance — validate latency and throughput.
- Version your Structure artifacts in Data Lake.

## Related topics

- [Structures](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/structures/)
- [Working with Structures](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/structures/)
- [Create an Assistant](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/create-assistant/)
- [Rulesets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/rulesets/)
- [Knowledge Bases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/knowledge-bases/)
- [AI Factory Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/concepts/)
- [Hybrid Manager: Using Gen AI Builder](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/)

---

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
