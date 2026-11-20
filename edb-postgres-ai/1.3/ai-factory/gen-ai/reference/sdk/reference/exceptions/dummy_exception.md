---
title: dummy_exception
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/exceptions/dummy_exception/
lastModified: 2025-11-07T18:06:05Z
---

# dummy\_exception

<span id="griptape.exceptions.dummy_exception.DummyError"></span>

Bases:

<span title="Exception">Exception</span>

<details>

<summary>

Source Code in <code>griptape/exceptions/dummy\_exception.py</code>

</summary>

```python
class DummyError(Exception):
    def __init__(self, dummy_class_name: str, dummy_method_name: str) -> None:
        message = (
            f"You have attempted to use a {dummy_class_name}'s {dummy_method_name} method. "
            "This likely originated from using a `DriversConfig` without providing a Driver required for this feature."
        )

        super().__init__(message)
```

</details>

<span id="griptape.exceptions.dummy_exception.DummyError.__init__"></span>

### **init**(dummy\_class\_name, dummy\_method\_name)

<details>

<summary>

Source Code in <code>griptape/exceptions/dummy\_exception.py</code>

</summary>

```python
def __init__(self, dummy_class_name: str, dummy_method_name: str) -> None:
    message = (
        f"You have attempted to use a {dummy_class_name}'s {dummy_method_name} method. "
        "This likely originated from using a `DriversConfig` without providing a Driver required for this feature."
    )

    super().__init__(message)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
