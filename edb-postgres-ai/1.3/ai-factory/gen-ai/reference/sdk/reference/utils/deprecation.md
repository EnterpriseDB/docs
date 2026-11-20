---
title: deprecation
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/utils/deprecation/
lastModified: 2025-11-07T18:06:05Z
---

# deprecation

<span id="griptape.utils.deprecation.DeprecationModuleWrapper"></span>

Bases:

<span title="types.ModuleType">ModuleType</span>

<details>

<summary>

Source Code in <code>griptape/utils/deprecation.py</code>

</summary>

```python
class DeprecationModuleWrapper(ModuleType):
    """Module wrapper that issues a deprecation warning when importing."""

    __ignore_attrs__ = {
        "__file__",
        "__package__",
        "__path__",
        "__doc__",
        "__all__",
        "__name__",
        "__loader__",
        "__spec__",
    }

    def __init__(self, real_module: Any, deprecation_message: str) -> None:
        self._real_module = real_module
        self._deprecation_message = deprecation_message

    def __getattr__(self, name: str) -> Any:
        if name not in self.__ignore_attrs__:
            warnings.warn(
                self._deprecation_message,
                DeprecationWarning,
                stacklevel=2,
            )
        return getattr(self._real_module, name)
```

</details>

- `__ignore_attrs__ = {'__file__', '__package__', '__path__', '__doc__', '__all__', '__name__', '__loader__', '__spec__'}` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.utils.deprecation.DeprecationModuleWrapper.__ignore_attrs__"></span>

- `_deprecation_message = deprecation_message` <small>instance-attribute</small>  <span id="griptape.utils.deprecation.DeprecationModuleWrapper._deprecation_message"></span>

- `_real_module = real_module` <small>instance-attribute</small>  <span id="griptape.utils.deprecation.DeprecationModuleWrapper._real_module"></span>

<span id="griptape.utils.deprecation.DeprecationModuleWrapper.__getattr__"></span>

### **getattr**(name)

<details>

<summary>

Source Code in <code>griptape/utils/deprecation.py</code>

</summary>

```python
def __getattr__(self, name: str) -> Any:
    if name not in self.__ignore_attrs__:
        warnings.warn(
            self._deprecation_message,
            DeprecationWarning,
            stacklevel=2,
        )
    return getattr(self._real_module, name)
```

</details>

<span id="griptape.utils.deprecation.DeprecationModuleWrapper.__init__"></span>

### **init**(real\_module, deprecation\_message)

<details>

<summary>

Source Code in <code>griptape/utils/deprecation.py</code>

</summary>

```python
def __init__(self, real_module: Any, deprecation_message: str) -> None:
    self._real_module = real_module
    self._deprecation_message = deprecation_message
```

</details>

<span id="griptape.utils.deprecation.deprecation_warn"></span>

## deprecation\_warn(message, stacklevel=2)

<details>

<summary>

Source Code in <code>griptape/utils/deprecation.py</code>

</summary>

```python
def deprecation_warn(message: str, stacklevel: int = 2) -> None:
    warnings.simplefilter("always", DeprecationWarning)
    warnings.warn(message, category=DeprecationWarning, stacklevel=stacklevel)
    warnings.simplefilter("default", DeprecationWarning)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
