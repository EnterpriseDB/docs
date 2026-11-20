---
title: AI Accelerator - Pipelines 2.2.1 release notes
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/rel_notes/ai-accelerator_2.2.1_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# AI Accelerator - Pipelines 2.2.1 release notes

Released: 13 March 2025

In this release, we're introducing our second Pipeline Data Preparation, also known as "preparer." Our first Pipeline, the "Retriever," launched with the initial release of AIDB, enabling automated embedding computation, semantic search, and RAG support.

These predefined Pipelines are at the core of AIDB, providing end-to-end automation for common AI application workflows. With the addition of preparer, we expand this automation further—allowing data to be pre-processed and optimized for use in Pipelines like the Retriever.

As always, we also include enhancements to existing functionality.

## Highlights

- The new Data Preparation Pipeline allows automated chunking, parsing and summarizing of data to make it ready for use in AI Applications.

## Features

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Introduced preparer, A New Pipeline for Data Preparation</summary><p>The new preparer pipeline supports automated chunking, parsing and summarizing of data to make it ready for use in AI Applications.</p>
</details></td></tr>
</tbody></table>

## Enhancements

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Added support for HTTP basic authentication in OpenAI Model adapters</summary><p>The OpenAI Model Adapters (e.g. <code>completions</code> or <code>embeddings</code>) now support &quot;HTTP Basic authentication&quot; via the credential field <code>basic_auth</code>. Previously, only &quot;Bearer authentication&quot; via <code>api_key</code> was supported.</p>
</details></td></tr>
<tr><td><details><summary>Added a Postgresql view for configured Models</summary><p>The Models configured in AIDB can now be listed as a view <code>aidb.models</code> rather than needing a function call as before (<code>aidb.list_models()</code>).</p>
</details></td></tr>
<tr><td><details><summary>Added autodetection for Model dimensions when using external Models over an API</summary><p>Model dimensions for external models (via e.g. <code>completions</code> or <code>embeddings</code> model adapter) no longer need to be explicitly configured. AIDB will now auto-detect the number of dimensions of the returned embeddings/vectors.</p>
</details></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
