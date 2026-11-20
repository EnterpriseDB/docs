---
title: AI Accelerator - Pipelines 4.3.0 release notes
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/pipeline/rel_notes/ai-accelerator_4.3.0_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# AI Accelerator - Pipelines 4.3.0 release notes

Released: 4 July 2025

This is a minor release that includes bug fixes and small enhancements.

## Highlights

- This is the first release that supports in-place update via `ALTER EXTENSION aidb UPDATE;` with all settings and pipelines remaining in place.
- Two new LLMs are now supported; "Llama instruct" as a new built-in model and external Google Gemini via a new model provider.

## Enhancements

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Added support for Google Gemini</summary><p>Now <code>aidb</code> can access Gemini text models.</p></details></td></tr>
<tr><td><details><summary>Added support for local Llama</summary><p>Now <code>aidb</code> can execute local Llama instruct models.</p></details></td></tr>
<tr><td><details><summary>Removed excessive log messages that caused performance impact.</summary><p>The live processing modes on the knowledge base pipeline used to log each processed record. This is now no longer the case. Printing and streaming these logs often took more time that processing itself.</p></details></td></tr>
<tr><td><details><summary>Fixed a bug that prevented users from using certain strings as names for pipelines.</summary><p>Strings with capital letters in them were not supported as names for pipelines. This is now fixed.</p></details></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
