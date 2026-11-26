---
title: singleton_mixin
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/singleton_mixin/
lastModified: 2025-11-07T18:06:05Z
---

# singleton\_mixin

<span id="griptape.mixins.singleton_mixin.SingletonMixin"></span>

<details>

<summary>

Source Code in <code>griptape/mixins/singleton\_mixin.py</code>

</summary>

```python
class SingletonMixin:
    _instance = None

    def __new__(cls, *args, **kwargs) -> Self:
        if not cls._instance:
            cls._instance = super().__new__(cls, *args, **kwargs)
        return cls._instance
```

</details>

- `_instance = None` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.singleton_mixin.SingletonMixin._instance"></span>

<span id="griptape.mixins.singleton_mixin.SingletonMixin.__new__"></span>

### **new**(\*args, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/mixins/singleton\_mixin.py</code>

</summary>

```python
def __new__(cls, *args, **kwargs) -> Self:
    if not cls._instance:
        cls._instance = super().__new__(cls, *args, **kwargs)
    return cls._instance
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
