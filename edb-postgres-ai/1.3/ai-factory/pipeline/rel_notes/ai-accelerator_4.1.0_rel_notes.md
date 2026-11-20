---
title: AI Accelerator - Pipelines 4.1.0 release notes
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/rel_notes/ai-accelerator_4.1.0_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# AI Accelerator - Pipelines 4.1.0 release notes

Released: 19 May 2025

This is a minor release that includes enhancements to the preparer pipeline and the model API providers.

## Highlights

- Automatic unnesting of Preparer results for operations that transform the shape of data.
- Batch processing for embeddings with external models.

## Enhancements

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Automatic unnesting of Preparer results for operations that transform the shape of data.</summary><p>The preparer pipeline for operations that transform the shape of their input data with an additional dimension now unnest their result collections.
This allows the output of preparers to be consumed much more easily by other preparers or knowledge bases.
Unnested results are returned with a new <code>part_id</code> column to track the new dimension. There is also a new <code>unique_id</code> column to uniquely identify the combination of the source key and part_id.</p>
</details></td></tr>
<tr><td><details><summary>Batch processing for embeddings with external models.</summary><p>The external model providers <code>embeddings</code>, <code>openai_embeddings</code>, and <code>nim_embeddings</code> can now send a batch of inputs in a single request, rather than multiple concurrent requests.
This can improve performance and hardware utilization. The feature is fully configurable and can also be disabled.</p>
</details></td></tr>
<tr><td><details><summary>Change output column for <code>chunk_text()</code> primitive function.</summary><p>The enumeration column returned by the <code>chunk_text()</code> primitive function is now <code>part_id</code> instead of <code>chunk_id</code> to match the other Preparer primitives/operations.</p>
</details></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
