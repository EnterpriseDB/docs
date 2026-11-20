---
title: chunk_separator
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/chunkers/chunk_separator/
lastModified: 2026-05-22T19:45:14+05:30
---

# chunk\_separator

<span id="griptape.chunkers.chunk_separator.ChunkSeparator"></span>

<details>

<summary>

Source Code in <code>griptape/chunkers/chunk\_separator.py</code>

</summary>

```python
@dataclass
class ChunkSeparator:
    value: str
    is_prefix: bool = False
```

</details>

- `is_prefix = False` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.chunkers.chunk_separator.ChunkSeparator.is_prefix"></span>

- `value` <small>instance-attribute</small>  <span id="griptape.chunkers.chunk_separator.ChunkSeparator.value"></span>

<span id="griptape.chunkers.chunk_separator.ChunkSeparator.__init__"></span>

### **init**(value, is\_prefix=False)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
