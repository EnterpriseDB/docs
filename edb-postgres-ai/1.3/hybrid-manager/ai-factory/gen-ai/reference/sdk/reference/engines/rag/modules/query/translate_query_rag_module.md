---
title: translate_query_rag_module
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/query/translate_query_rag_module/
lastModified: 2026-05-22T19:45:14+05:30
---

# translate\_query\_rag\_module

<span id="griptape.engines.rag.modules.query.translate_query_rag_module.TranslateQueryRagModule"></span>

Bases:
[`BaseQueryRagModule`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/rag/modules/#griptape.engines.rag.modules.BaseQueryRagModule "BaseQueryRagModule (griptape.engines.rag.modules.BaseQueryRagModule)")

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/query/translate\_query\_rag\_module.py</code>

</summary>

```python
@define(kw_only=True)
class TranslateQueryRagModule(BaseQueryRagModule):
    prompt_driver: BasePromptDriver = field()
    language: str = field()
    generate_user_template: Callable[[str, str], str] = field(
        default=Factory(lambda self: self.default_generate_user_template, takes_self=True),
    )

    def run(self, context: RagContext) -> RagContext:
        user_prompt = self.generate_user_template(context.query, self.language)
        output = self.prompt_driver.run(self.generate_prompt_stack(None, user_prompt)).to_artifact()

        context.query = output.to_text()

        return context

    def default_generate_user_template(self, query: str, language: str) -> str:
        return J2("engines/rag/modules/query/translate/user.j2").render(query=query, language=language)
```

</details>

- `generate_user_template = field(default=Factory(lambda self: self.default_generate_user_template, takes_self=True))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.modules.query.translate_query_rag_module.TranslateQueryRagModule.generate_user_template"></span>

- `language = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.modules.query.translate_query_rag_module.TranslateQueryRagModule.language"></span>

- `prompt_driver = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.engines.rag.modules.query.translate_query_rag_module.TranslateQueryRagModule.prompt_driver"></span>

<span id="griptape.engines.rag.modules.query.translate_query_rag_module.TranslateQueryRagModule.default_generate_user_template"></span>

### default\_generate\_user\_template(query, language)

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/query/translate\_query\_rag\_module.py</code>

</summary>

```python
def default_generate_user_template(self, query: str, language: str) -> str:
    return J2("engines/rag/modules/query/translate/user.j2").render(query=query, language=language)
```

</details>

<span id="griptape.engines.rag.modules.query.translate_query_rag_module.TranslateQueryRagModule.run"></span>

### run(context)

<details>

<summary>

Source Code in <code>griptape/engines/rag/modules/query/translate\_query\_rag\_module.py</code>

</summary>

```python
def run(self, context: RagContext) -> RagContext:
    user_prompt = self.generate_user_template(context.query, self.language)
    output = self.prompt_driver.run(self.generate_prompt_stack(None, user_prompt)).to_artifact()

    context.query = output.to_text()

    return context
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
