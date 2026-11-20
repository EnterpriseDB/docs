---
title: retrieval_rag_stage
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/stages/retrieval_rag_stage/
lastModified: 2026-05-22T19:45:14+05:30
---

# retrieval\_rag\_stage

<span id="griptape.engines.rag.stages.retrieval_rag_stage.RetrievalRagStage"></span>

Bases:
[`BaseRagStage`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/stages/#griptape.engines.rag.stages.BaseRagStage "BaseRagStage (griptape.engines.rag.stages.BaseRagStage)")

<details>

<summary>

Source Code in <code>griptape/engines/rag/stages/retrieval\_rag\_stage.py</code>

</summary>

```python
@define(kw_only=True)
class RetrievalRagStage(BaseRagStage):
    retrieval_modules: list[BaseRetrievalRagModule] = field()
    rerank_module: Optional[BaseRerankRagModule] = field(default=None)
    max_chunks: Optional[int] = field(default=None)

    @property
    def modules(self) -> list[BaseRagModule]:
        ms = []

        ms.extend(self.retrieval_modules)

        if self.rerank_module is not None:
            ms.append(self.rerank_module)

        return ms

    def run(self, context: RagContext) -> RagContext:
        logging.info("RetrievalRagStage: running %s retrieval modules in parallel", len(self.retrieval_modules))

        with self.create_futures_executor() as futures_executor:
            results = utils.execute_futures_list(
                [futures_executor.submit(with_contextvars(r.run), context) for r in self.retrieval_modules]
            )

        # flatten the list of lists
        results = list(itertools.chain.from_iterable(results))

        # deduplicate the list
        chunks_before_dedup = len(results)
        results = list({str(c.value): c for c in results}.values())
        chunks_after_dedup = len(results)

        logging.info(
            "RetrievalRagStage: deduplicated %s chunks (%s - %s)",
            chunks_before_dedup - chunks_after_dedup,
            chunks_before_dedup,
            chunks_after_dedup,
        )

        context.text_chunks = [a for a in results if isinstance(a, TextArtifact)]

        if self.rerank_module:
            logging.info("RetrievalRagStage: running rerank module on %s chunks", chunks_after_dedup)

            context.text_chunks = [a for a in self.rerank_module.run(context) if isinstance(a, TextArtifact)]

        if self.max_chunks:
            context.text_chunks = context.text_chunks[: self.max_chunks]

        return context
```

</details>

- `max_chunks = field(default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.stages.retrieval_rag_stage.RetrievalRagStage.max_chunks"></span>

- `modules` <small>property</small>  <span id="griptape.engines.rag.stages.retrieval_rag_stage.RetrievalRagStage.modules"></span>

- `rerank_module = field(default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.stages.retrieval_rag_stage.RetrievalRagStage.rerank_module"></span>

- `retrieval_modules = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.stages.retrieval_rag_stage.RetrievalRagStage.retrieval_modules"></span>

<span id="griptape.engines.rag.stages.retrieval_rag_stage.RetrievalRagStage.run"></span>

### run(context)

<details>

<summary>

Source Code in <code>griptape/engines/rag/stages/retrieval\_rag\_stage.py</code>

</summary>

```python
def run(self, context: RagContext) -> RagContext:
    logging.info("RetrievalRagStage: running %s retrieval modules in parallel", len(self.retrieval_modules))

    with self.create_futures_executor() as futures_executor:
        results = utils.execute_futures_list(
            [futures_executor.submit(with_contextvars(r.run), context) for r in self.retrieval_modules]
        )

    # flatten the list of lists
    results = list(itertools.chain.from_iterable(results))

    # deduplicate the list
    chunks_before_dedup = len(results)
    results = list({str(c.value): c for c in results}.values())
    chunks_after_dedup = len(results)

    logging.info(
        "RetrievalRagStage: deduplicated %s chunks (%s - %s)",
        chunks_before_dedup - chunks_after_dedup,
        chunks_before_dedup,
        chunks_after_dedup,
    )

    context.text_chunks = [a for a in results if isinstance(a, TextArtifact)]

    if self.rerank_module:
        logging.info("RetrievalRagStage: running rerank module on %s chunks", chunks_after_dedup)

        context.text_chunks = [a for a in self.rerank_module.run(context) if isinstance(a, TextArtifact)]

    if self.max_chunks:
        context.text_chunks = context.text_chunks[: self.max_chunks]

    return context
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
