---
title: Tools in Gen AI Builder
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/tools/
lastModified: 2026-05-22T19:45:14+05:30
---

# Tools in Gen AI Builder

## Overview

One of the most powerful features of Gen AI Builder is the ability to use tools that interact with the outside world. Tools give the LLM abilities to invoke APIs, reference data sets, and expand their capabilities beyond simple text generation.

Many of our [Prompt Drivers](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/drivers/) leverage the native function calling built into LLMs. For models that do not support this, Gen AI Builder provides its own implementation using the [ReAct](https://arxiv.org/abs/2210.03629) technique.

You can switch between these strategies by setting `use_native_tools` to `True` (LLM-native tool calling) or `False` (Gen AI Builder tool calling) on your [Prompt Driver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/drivers/).

## Custom Tools

See [Custom Tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/tools/custom-tools/) for more information on building your own tools.

## Tool Output and Task Memory

Output artifacts from all tool activities (except `InfoArtifact` and `ErrorArtifact`) are stored in short-term `TaskMemory`. To disable this behavior, set the `off_prompt` tool parameter to `False`.

## Using Tools in Pipelines

Gen AI Builder provides a set of official tools for accessing and processing data. You can also [build your own tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/tools/custom-tools/).

Here is an example of a Pipeline using tools:

### Code

```python
from griptape.structures import Pipeline
from griptape.tasks import PromptTask
from griptape.tools import FileManagerTool, PromptSummaryTool, WebScraperTool

pipeline = Pipeline()

pipeline.add_tasks(
    PromptTask(
        "Load https://www.griptape.ai, summarize it, and store it in a file called griptape.txt",
        tools=[
            WebScraperTool(off_prompt=True),
            FileManagerTool(off_prompt=True),
            PromptSummaryTool(off_prompt=False),
        ],
    ),
)

pipeline.run()

```

### Logs

```text
User: Thinking...
Assistant: Hello! How can I assist you today?
User: Exiting...

```

- [Custom Tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/tools/custom-tools/): Overview
- [Official Tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/tools/official-tools/): Overview

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
