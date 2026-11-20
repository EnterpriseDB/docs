---
title: SQL functions
description: Guide to using the standalone SQL functions available in AIDB for chunking, parsing, OCR, summarization, AI inference, and reranking. These functions can be called directly in SQL queries or used as building blocks in custom AI workflows.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/sql-functions/
lastModified: 2026-08-26T21:11:52+05:30
---

# SQL functions

AIDB functions are available as standalone SQL functions that you can call directly in queries for one-off transformations, testing and exploration, or to build custom workflows outside of the pipeline framework.

Each page here focuses on usage context and examples. For terse parameter tables and return types, see the API reference:

- Transformation functions (`chunk_text`, `parse_html`, `parse_pdf`, `perform_ocr`, `summarize_text`) are in [Reference → Functions](https://www.enterprisedb.com/docs/aidb/latest/reference/functions/).
- Inference functions (`encode_text`, `generate_text`, `rerank_text`) are in [Reference → Models](https://www.enterprisedb.com/docs/aidb/latest/reference/models/#inference-functions).

| Page                                                                                                  | Functions                                                  | What it covers                                                         |
| ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------- |
| [Chunking](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/chunk-text/)                   | `aidb.chunk_text()`                                        | Splitting text into segments for LLM context windows                   |
| [Parsing](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/parse/)                         | `aidb.parse_html()`, `aidb.parse_pdf()`                    | Extracting readable text from HTML and PDF inputs                      |
| [OCR](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/perform-ocr/)                       | `aidb.perform_ocr()`                                       | Extracting text from images using an OCR-capable model                 |
| [Summarization](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/summarize-text/)          | `aidb.summarize_text()`, `aidb.summarize_text_aggregate()` | Generating and aggregating AI-powered text summaries                   |
| [Encoding and generating](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/encode-decode/) | `aidb.encode_text()`, `aidb.generate_text()`, and variants | Embedding text and images into vectors and generating text completions |
| [Reranking](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/rerank-text/)                 | `aidb.rerank_text()`                                       | Scoring and reordering candidate passages by relevance                 |

> **Note**
>
> To use these operations as steps inside a pipeline, see [Pipeline steps](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/pipeline-steps/).

- [Text chunking](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/chunk-text/): The chunking step divides long text into smaller segments based on configurable parameters, optimizing it for processing by LLMs and embedding in knowledge bases.
- [Data parsing](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/parse/): The parsing step extracts structured text from various formats (like HTML and PDF) using AI models, preparing it for downstream processing in the pipeline.
- [Performing OCR](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/perform-ocr/): The OCR step extracts text from images using AI models, enabling the conversion of visual data into searchable text for indexing in knowledge bases.
- [Summarization](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/summarize-text/): Use aidb.summarize\_text() and aidb.summarize\_text\_aggregate() to generate concise summaries of text data using AI language models, with support for chunking, custom prompts, and iterative reduction.
- [AI inference](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/encode-decode/): SQL functions for invoking AI models directly — encoding text or images into vectors, generating text with language models, and configuring inference parameters.
- [Text reranking](https://www.enterprisedb.com/docs/aidb/latest/sql-functions/rerank-text/): The rerank function scores and reorders a set of candidate text results by relevance to a query using a reranking model, improving the quality of retrieval results.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
