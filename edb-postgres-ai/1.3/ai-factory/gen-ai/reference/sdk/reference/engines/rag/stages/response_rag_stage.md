---
title: response_rag_stage
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/engines/rag/stages/response_rag_stage/
lastModified: 2025-11-07T18:06:05Z
---

# response\_rag\_stage

<span id="griptape.engines.rag.stages.response_rag_stage.ResponseRagStage"></span>

Bases:
[`BaseRagStage`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/engines/rag/stages/#griptape.engines.rag.stages.BaseRagStage "BaseRagStage (griptape.engines.rag.stages.BaseRagStage)")

<details>

<summary>

Source Code in <code>griptape/engines/rag/stages/response\_rag\_stage.py</code>

</summary>

```python
@define(kw_only=True)
class ResponseRagStage(BaseRagStage):
    response_modules: list[BaseResponseRagModule] = field()

    @property
    def modules(self) -> list[BaseRagModule]:
        ms = []

        ms.extend(self.response_modules)

        return ms

    def run(self, context: RagContext) -> RagContext:
        logging.info("ResponseRagStage: running %s retrieval modules in parallel", len(self.response_modules))

        with self.create_futures_executor() as futures_executor:
            results = utils.execute_futures_list(
                [futures_executor.submit(with_contextvars(r.run), context) for r in self.response_modules]
            )

        context.outputs = results

        return context
```

</details>

- `modules` <small>property</small>  <span id="griptape.engines.rag.stages.response_rag_stage.ResponseRagStage.modules"></span>

- `response_modules = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.stages.response_rag_stage.ResponseRagStage.response_modules"></span>

<span id="griptape.engines.rag.stages.response_rag_stage.ResponseRagStage.run"></span>

### run(context)

<details>

<summary>

Source Code in <code>griptape/engines/rag/stages/response\_rag\_stage.py</code>

</summary>

```python
def run(self, context: RagContext) -> RagContext:
    logging.info("ResponseRagStage: running %s retrieval modules in parallel", len(self.response_modules))

    with self.create_futures_executor() as futures_executor:
        results = utils.execute_futures_list(
            [futures_executor.submit(with_contextvars(r.run), context) for r in self.response_modules]
        )

    context.outputs = results

    return context
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
