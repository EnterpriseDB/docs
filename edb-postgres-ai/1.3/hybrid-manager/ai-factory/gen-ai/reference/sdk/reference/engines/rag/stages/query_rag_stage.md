---
title: query_rag_stage
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/stages/query_rag_stage/
lastModified: 2026-05-22T19:45:14+05:30
---

# query\_rag\_stage

<span id="griptape.engines.rag.stages.query_rag_stage.QueryRagStage"></span>

Bases:
[`BaseRagStage`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/stages/#griptape.engines.rag.stages.BaseRagStage "BaseRagStage (griptape.engines.rag.stages.BaseRagStage)")

<details>

<summary>

Source Code in <code>griptape/engines/rag/stages/query\_rag\_stage.py</code>

</summary>

```python
@define(kw_only=True)
class QueryRagStage(BaseRagStage):
    query_modules: list[BaseQueryRagModule] = field()

    @property
    def modules(self) -> Sequence[BaseRagModule]:
        return self.query_modules

    def run(self, context: RagContext) -> RagContext:
        logging.info("QueryRagStage: running %s query generation modules sequentially", len(self.query_modules))

        [qm.run(context) for qm in self.query_modules]

        return context
```

</details>

- `modules` <small>property</small>  <span id="griptape.engines.rag.stages.query_rag_stage.QueryRagStage.modules"></span>

- `query_modules = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.stages.query_rag_stage.QueryRagStage.query_modules"></span>

<span id="griptape.engines.rag.stages.query_rag_stage.QueryRagStage.run"></span>

### run(context)

<details>

<summary>

Source Code in <code>griptape/engines/rag/stages/query\_rag\_stage.py</code>

</summary>

```python
def run(self, context: RagContext) -> RagContext:
    logging.info("QueryRagStage: running %s query generation modules sequentially", len(self.query_modules))

    [qm.run(context) for qm in self.query_modules]

    return context
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
