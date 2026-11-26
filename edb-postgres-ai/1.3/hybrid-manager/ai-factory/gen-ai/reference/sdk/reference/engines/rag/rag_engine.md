---
title: rag_engine
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/rag_engine/
lastModified: 2026-05-22T19:45:14+05:30
---

# rag\_engine

<span id="griptape.engines.rag.rag_engine.RagEngine"></span>

<details>

<summary>

Source Code in <code>griptape/engines/rag/rag\_engine.py</code>

</summary>

```python
@define(kw_only=True)
class RagEngine:
    query_stage: Optional[QueryRagStage] = field(default=None)
    retrieval_stage: Optional[RetrievalRagStage] = field(default=None)
    response_stage: Optional[ResponseRagStage] = field(default=None)

    def __attrs_post_init__(self) -> None:
        modules = []

        if self.query_stage is not None:
            modules.extend(self.query_stage.modules)

        if self.retrieval_stage is not None:
            modules.extend(self.retrieval_stage.modules)

        if self.response_stage is not None:
            modules.extend(self.response_stage.modules)

        module_names = [m.name for m in modules]

        if len(module_names) > len(set(module_names)):
            raise ValueError("module names have to be unique")

    def process_query(self, query: str) -> RagContext:
        return self.process(RagContext(query=query))

    def process(self, context: RagContext) -> RagContext:
        if self.query_stage:
            context = self.query_stage.run(context)

        if self.retrieval_stage:
            context = self.retrieval_stage.run(context)

        if self.response_stage:
            context = self.response_stage.run(context)

        return context
```

</details>

- `query_stage = field(default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.rag_engine.RagEngine.query_stage"></span>

- `response_stage = field(default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.rag_engine.RagEngine.response_stage"></span>

- `retrieval_stage = field(default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.rag_engine.RagEngine.retrieval_stage"></span>

<span id="griptape.engines.rag.rag_engine.RagEngine.__attrs_post_init__"></span>

### **attrs\_post\_init**()

<details>

<summary>

Source Code in <code>griptape/engines/rag/rag\_engine.py</code>

</summary>

```python
def __attrs_post_init__(self) -> None:
    modules = []

    if self.query_stage is not None:
        modules.extend(self.query_stage.modules)

    if self.retrieval_stage is not None:
        modules.extend(self.retrieval_stage.modules)

    if self.response_stage is not None:
        modules.extend(self.response_stage.modules)

    module_names = [m.name for m in modules]

    if len(module_names) > len(set(module_names)):
        raise ValueError("module names have to be unique")
```

</details>

<span id="griptape.engines.rag.rag_engine.RagEngine.process"></span>

### process(context)

<details>

<summary>

Source Code in <code>griptape/engines/rag/rag\_engine.py</code>

</summary>

```python
def process(self, context: RagContext) -> RagContext:
    if self.query_stage:
        context = self.query_stage.run(context)

    if self.retrieval_stage:
        context = self.retrieval_stage.run(context)

    if self.response_stage:
        context = self.response_stage.run(context)

    return context
```

</details>

<span id="griptape.engines.rag.rag_engine.RagEngine.process_query"></span>

### process\_query(query)

<details>

<summary>

Source Code in <code>griptape/engines/rag/rag\_engine.py</code>

</summary>

```python
def process_query(self, query: str) -> RagContext:
    return self.process(RagContext(query=query))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
