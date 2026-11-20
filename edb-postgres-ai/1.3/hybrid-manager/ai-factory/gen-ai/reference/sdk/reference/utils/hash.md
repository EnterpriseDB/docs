---
title: hash
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/utils/hash/
lastModified: 2026-05-22T19:45:14+05:30
---

# hash

<span id="griptape.utils.hash.bytes_to_hash"></span>

<details>

<summary>

Source Code in <code>griptape/utils/hash.py</code>

</summary>

```python
def bytes_to_hash(data: bytes, hash_algorithm: str = "sha256") -> str:
    m = hashlib.new(hash_algorithm)

    m.update(data)

    return m.hexdigest()
```

</details>

<span id="griptape.utils.hash.str_to_hash"></span>

## str\_to\_hash(text, hash\_algorithm='sha256')

<details>

<summary>

Source Code in <code>griptape/utils/hash.py</code>

</summary>

```python
def str_to_hash(text: str, hash_algorithm: str = "sha256") -> str:
    m = hashlib.new(hash_algorithm)

    m.update(text.encode())

    return m.hexdigest()
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
