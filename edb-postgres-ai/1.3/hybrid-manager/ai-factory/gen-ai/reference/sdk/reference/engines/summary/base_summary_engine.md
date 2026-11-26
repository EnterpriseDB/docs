---
title: base_summary_engine
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/engines/summary/base_summary_engine/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_summary\_engine

<span id="griptape.engines.summary.base_summary_engine.BaseSummaryEngine"></span>

Bases:

<span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/engines/summary/base\_summary\_engine.py</code>

</summary>

```python
@define
class BaseSummaryEngine(ABC):
    def summarize_text(self, text: str, *, rulesets: Optional[list[Ruleset]] = None) -> str:
        return self.summarize_artifacts(ListArtifact([TextArtifact(text)]), rulesets=rulesets).value

    @abstractmethod
    def summarize_artifacts(
        self,
        artifacts: ListArtifact,
        *,
        rulesets: Optional[list[Ruleset]] = None,
    ) -> TextArtifact: ...
```

</details>

<span id="griptape.engines.summary.base_summary_engine.BaseSummaryEngine.summarize_artifacts"></span>

### summarize\_artifacts(artifacts, \*, rulesets=None)abstractmethod

<details>

<summary>

Source Code in <code>griptape/engines/summary/base\_summary\_engine.py</code>

</summary>

```python
@abstractmethod
def summarize_artifacts(
    self,
    artifacts: ListArtifact,
    *,
    rulesets: Optional[list[Ruleset]] = None,
) -> TextArtifact: ...
```

</details>

<span id="griptape.engines.summary.base_summary_engine.BaseSummaryEngine.summarize_text"></span>

### summarize\_text(text, \*, rulesets=None)

<details>

<summary>

Source Code in <code>griptape/engines/summary/base\_summary\_engine.py</code>

</summary>

```python
def summarize_text(self, text: str, *, rulesets: Optional[list[Ruleset]] = None) -> str:
    return self.summarize_artifacts(ListArtifact([TextArtifact(text)]), rulesets=rulesets).value
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
