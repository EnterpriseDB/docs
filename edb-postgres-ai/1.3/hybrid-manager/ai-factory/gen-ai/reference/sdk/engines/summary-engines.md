---
title: Summary Engine
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/engines/summary-engines/
lastModified: 2026-05-22T19:45:14+05:30
---

# Summary Engine

## Overview

Summary engines are used to summarize text and collections of [TextArtifact](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/text_artifact/)s.

## Prompt

Used to summarize texts with LLMs. You can set a custom [prompt\_driver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/summary/prompt_summary_engine/#griptape.engines.summary.prompt_summary_engine.PromptSummaryEngine.prompt_driver), [generate\_system\_template](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/summary/prompt_summary_engine/#griptape.engines.summary.prompt_summary_engine.PromptSummaryEngine.generate_system_template), [generate\_user\_template](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/summary/prompt_summary_engine/#griptape.engines.summary.prompt_summary_engine.PromptSummaryEngine.generate_user_template), and [chunker](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/summary/prompt_summary_engine/#griptape.engines.summary.prompt_summary_engine.PromptSummaryEngine.chunker).

Use the [summarize\_artifacts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/summary/prompt_summary_engine/#griptape.engines.summary.prompt_summary_engine.PromptSummaryEngine.summarize_artifacts) method to summarize a list of artifacts or [summarize\_text](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/summary/base_summary_engine/#griptape.engines.summary.base_summary_engine.BaseSummaryEngine.summarize_text) to summarize an arbitrary string.

```python
import requests

from griptape.drivers.prompt.openai import OpenAiChatPromptDriver
from griptape.engines import PromptSummaryEngine
from griptape.loaders import PdfLoader

response = requests.get("https://arxiv.org/pdf/1706.03762.pdf")
engine = PromptSummaryEngine(
    prompt_driver=OpenAiChatPromptDriver(model="gpt-3.5-turbo"),
)

artifact = PdfLoader().parse(response.content)

engine.summarize_artifacts(artifact)

```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
