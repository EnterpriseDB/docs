---
title: footnote_prompt_response_rag_module
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/response/footnote_prompt_response_rag_module/
lastModified: 2026-05-22T19:45:14+05:30
---

# footnote\_prompt\_response\_rag\_module

<span id="griptape.engines.rag.modules.response.footnote_prompt_response_rag_module.FootnotePromptResponseRagModule"></span>

Bases:
[`PromptResponseRagModule`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/#griptape.engines.rag.modules.PromptResponseRagModule "PromptResponseRagModule (griptape.engines.rag.modules.PromptResponseRagModule)")

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/response/footnote\_prompt\_response\_rag\_module.py</code>

</summary>

```python
@define(kw_only=True)
class FootnotePromptResponseRagModule(PromptResponseRagModule):
    def default_generate_system_template(self, context: RagContext, artifacts: list[TextArtifact]) -> str:
        return J2("engines/rag/modules/response/footnote_prompt/system.j2").render(
            text_chunk_artifacts=artifacts,
            references=utils.references_from_artifacts(artifacts),
            before_system_prompt="\n\n".join(context.before_query),
            after_system_prompt="\n\n".join(context.after_query),
        )
```

</details>

<span id="griptape.engines.rag.modules.response.footnote_prompt_response_rag_module.FootnotePromptResponseRagModule.default_generate_system_template"></span>

### default\_generate\_system\_template(context, artifacts)

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/response/footnote\_prompt\_response\_rag\_module.py</code>

</summary>

```python
def default_generate_system_template(self, context: RagContext, artifacts: list[TextArtifact]) -> str:
    return J2("engines/rag/modules/response/footnote_prompt/system.j2").render(
        text_chunk_artifacts=artifacts,
        references=utils.references_from_artifacts(artifacts),
        before_system_prompt="\n\n".join(context.before_query),
        after_system_prompt="\n\n".join(context.after_query),
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
