---
title: Artifacts
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/artifacts/
lastModified: 2025-11-07T18:06:05Z
---

# Artifacts

## Overview

**[Artifacts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/base_artifact/)** are the core data structure in Gen AI Builder. They are used to encapsulate data and enhance it with metadata.

## Text

[TextArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/text_artifact/)s store textual data. They offer methods such as [token\_count()](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/text_artifact/#griptape.artifacts.text_artifact.TextArtifact.token_count) for counting tokens with a tokenizer, and [generate\_embedding()](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/text_artifact/#griptape.artifacts.text_artifact.TextArtifact.generate_embedding) for creating text embeddings. You can also access the embedding via the [embedding](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/text_artifact/#griptape.artifacts.text_artifact.TextArtifact.embedding) property.

When `TextArtifact`s are returned from Tools, they will be stored in [Task Memory](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/structures/task-memory/) if the Tool has set `off_prompt=True`.

## Blob

[BlobArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/blob_artifact/)s store binary large objects (blobs).

When `BlobArtifact`s are returned from Tools, they will be stored in [Task Memory](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/structures/task-memory/) if the Tool has set `off_prompt=True`.

### Image

[ImageArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/image_artifact/)s store image data. This includes binary image data along with metadata such as MIME type and dimensions. They are a subclass of [BlobArtifacts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/artifacts/#blob).

### Url

[UrlArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/url_artifact/)s store URLs pointing to resources.

### Image Url

[ImageUrlArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/image_url_artifact/)s store URLs pointing to images. They are a subclass of [UrlArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/artifacts/#url).

### Audio

[AudioArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/audio_artifact/)s store audio content. This includes binary audio data and metadata such as format, and duration. They are a subclass of [BlobArtifacts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/artifacts/#blob).

## List

[ListArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/list_artifact/)s store lists of Artifacts.

When `ListArtifact`s are returned from Tools, their elements will be stored in [Task Memory](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/structures/task-memory/) if the element is either a `TextArtifact` or a `BlobArtifact` and the Tool has set `off_prompt=True`.

## Info

[InfoArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/info_artifact/)s store small pieces of textual information. These are useful for conveying messages about the execution or results of an operation, such as "No results found" or "Operation completed successfully."

## JSON

[JsonArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/json_artifact/)s store JSON-serializable data. Any data assigned to the `value` property is processed using `json.dumps(json.loads(value))`.

## Error

[ErrorArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/error_artifact/)s store exception information, providing a structured way to convey errors.

## Action

[ActionArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/action_artifact/)s represent actions taken by an LLM. Currently, the only supported action type is [ToolAction](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/common/actions/tool_action/), which is used to execute a [Tool](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/tools/).

## Generic

[GenericArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/generic_artifact/)s provide a flexible way to pass data that does not fit into any other artifact category. While not generally recommended, they can be useful for specific use cases. For instance, see talking to a video, which demonstrates using a `GenericArtifact` to pass a Gemini-specific video file.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
