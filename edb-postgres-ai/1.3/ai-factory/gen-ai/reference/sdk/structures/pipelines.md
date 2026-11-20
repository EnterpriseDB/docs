---
title: Pipelines
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/structures/pipelines/
lastModified: 2025-11-07T18:06:05Z
---

# Pipelines

## Overview

A [Pipeline](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/structures/pipeline/) is very similar to an [Agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/structures/agent/), but allows for multiple tasks.

You can access the final output of the Pipeline by using the [output](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/structures/structure/#griptape.structures.structure.Structure.output) attribute.

## Context

Pipelines have access to the following [context](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/structures/pipeline/#griptape.structures.pipeline.Pipeline.context) variables in addition to the [base context](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/structures/tasks/#context).

- `task_outputs`: dictionary containing mapping of all task IDs to their outputs.
- `parent_output`: output from the parent task if one exists, otherwise `None`.
- `parent`: parent task if one exists, otherwise `None`.
- `child`: child task if one exists, otherwise `None`.

## Pipeline

### Code

```python
from griptape.structures import Pipeline
from griptape.tasks import PromptTask

pipeline = Pipeline()

pipeline.add_tasks(
    # take the first argument from the pipeline `run` method
    PromptTask("{{ args[0] }}"),
    # take the output from the previous task and insert it into the prompt
    PromptTask("Say the following like a pirate: {{ parent_output }}"),
)

pipeline.run("Write me a haiku about sailing.")

```

### Logs

```text
[02/27/25 20:26:03] INFO     PromptTask 36e59dad4dca4eb887934532b2369534        
                             Input: Write me a haiku about sailing.             
[02/27/25 20:26:04] INFO     PromptTask 36e59dad4dca4eb887934532b2369534        
                             Output: Wind whispers softly,                      
                             Canvas wings embrace the sea—                      
                             Freedom's course unfolds.                          
                    INFO     PromptTask 43d09fca2813415082bccedfe518b125        
                             Input: Say the following like a pirate: Wind       
                             whispers softly,                                   
                             Canvas wings embrace the sea—                      
                             Freedom's course unfolds.                          
                    INFO     PromptTask 43d09fca2813415082bccedfe518b125        
                             Output: Arrr, the wind be whisperin' soft-like,    
                             Canvas wings be huggin' the briny deep—            
                             Freedom's course be unfurlin', aye!                

```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
