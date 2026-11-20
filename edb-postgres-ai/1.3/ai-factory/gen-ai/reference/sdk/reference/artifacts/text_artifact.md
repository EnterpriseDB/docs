---
title: text_artifact
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/text_artifact/
lastModified: 2025-11-07T18:06:05Z
---

# text\_artifact

<span id="griptape.artifacts.text_artifact.TextArtifact"></span>

Bases:
[`BaseArtifact`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/artifacts/#griptape.artifacts.BaseArtifact "BaseArtifact (griptape.artifacts.BaseArtifact)")

<details>

<summary>

Source Code in <code>griptape/artifacts/text\_artifact.py</code>

</summary>

```python
@define
class TextArtifact(BaseArtifact):
    value: str = field(converter=str, metadata={"serializable": True})
    embedding: Optional[list[float]] = field(default=None, kw_only=True)

    def __add__(self, other: BaseArtifact) -> TextArtifact:
        return TextArtifact(self.value + other.value)

    def __bool__(self) -> bool:
        return bool(self.value.strip())

    def to_text(self) -> str:
        return self.value

    def generate_embedding(self, driver: BaseEmbeddingDriver) -> list[float]:
        embedding = driver.embed(str(self.value))

        if self.embedding is None:
            self.embedding = []
        self.embedding.clear()
        self.embedding.extend(embedding)

        return self.embedding

    def token_count(self, tokenizer: BaseTokenizer) -> int:
        return tokenizer.count_tokens(str(self.value))
```

</details>

- `embedding = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.text_artifact.TextArtifact.embedding"></span>

- `value = field(converter=str, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.artifacts.text_artifact.TextArtifact.value"></span>

<span id="griptape.artifacts.text_artifact.TextArtifact.__add__"></span>

### **add**(other)

<details>

<summary>

Source Code in <code>griptape/artifacts/text\_artifact.py</code>

</summary>

```python
def __add__(self, other: BaseArtifact) -> TextArtifact:
    return TextArtifact(self.value + other.value)
```

</details>

<span id="griptape.artifacts.text_artifact.TextArtifact.__bool__"></span>

### **bool**()

<details>

<summary>

Source Code in <code>griptape/artifacts/text\_artifact.py</code>

</summary>

```python
def __bool__(self) -> bool:
    return bool(self.value.strip())
```

</details>

<span id="griptape.artifacts.text_artifact.TextArtifact.generate_embedding"></span>

### generate\_embedding(driver)

<details>

<summary>

Source Code in <code>griptape/artifacts/text\_artifact.py</code>

</summary>

```python
def generate_embedding(self, driver: BaseEmbeddingDriver) -> list[float]:
    embedding = driver.embed(str(self.value))

    if self.embedding is None:
        self.embedding = []
    self.embedding.clear()
    self.embedding.extend(embedding)

    return self.embedding
```

</details>

<span id="griptape.artifacts.text_artifact.TextArtifact.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/artifacts/text\_artifact.py</code>

</summary>

```python
def to_text(self) -> str:
    return self.value
```

</details>

<span id="griptape.artifacts.text_artifact.TextArtifact.token_count"></span>

### token\_count(tokenizer)

<details>

<summary>

Source Code in <code>griptape/artifacts/text\_artifact.py</code>

</summary>

```python
def token_count(self, tokenizer: BaseTokenizer) -> int:
    return tokenizer.count_tokens(str(self.value))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
