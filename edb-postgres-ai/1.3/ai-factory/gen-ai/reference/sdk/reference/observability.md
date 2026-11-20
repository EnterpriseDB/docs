---
title: observability
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/observability/
lastModified: 2025-11-07T18:06:05Z
---

# observability

- `__all__ = ['Observability']` <small>module-attribute</small>  <span id="griptape.observability.__all__"></span>

<span id="griptape.observability.Observability"></span>

<details>

<summary>

Source Code in <code>griptape/observability/observability.py</code>

</summary>

```python
@define
class Observability:
    observability_driver: BaseObservabilityDriver = field(kw_only=True)

    @staticmethod
    def get_global_driver() -> Optional[BaseObservabilityDriver]:
        return _global_observability_driver

    @staticmethod
    def set_global_driver(driver: Optional[BaseObservabilityDriver]) -> None:
        global _global_observability_driver  # noqa: PLW0603
        _global_observability_driver = driver

    @staticmethod
    def observe(call: Observable.Call) -> Any:
        driver = Observability.get_global_driver() or _no_op_observability_driver
        return driver.observe(call)

    @staticmethod
    def get_span_id() -> Optional[str]:
        driver = Observability.get_global_driver() or _no_op_observability_driver
        return driver.get_span_id()

    def __enter__(self) -> None:
        if Observability.get_global_driver() is not None:
            raise ValueError("Observability driver already set.")
        Observability.set_global_driver(self.observability_driver)
        self.observability_driver.__enter__()

    def __exit__(
        self,
        exc_type: Optional[type[BaseException]],
        exc_value: Optional[BaseException],
        exc_traceback: Optional[TracebackType],
    ) -> bool:
        Observability.set_global_driver(None)
        self.observability_driver.__exit__(exc_type, exc_value, exc_traceback)
        return False
```

</details>

- `observability_driver = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.observability.Observability.observability_driver"></span>

<span id="griptape.observability.Observability.__enter__"></span>

### **enter**()

<details>

<summary>

Source Code in <code>griptape/observability/observability.py</code>

</summary>

```python
def __enter__(self) -> None:
    if Observability.get_global_driver() is not None:
        raise ValueError("Observability driver already set.")
    Observability.set_global_driver(self.observability_driver)
    self.observability_driver.__enter__()
```

</details>

<span id="griptape.observability.Observability.__exit__"></span>

### **exit**(exc\_type, exc\_value, exc\_traceback)

<details>

<summary>

Source Code in <code>griptape/observability/observability.py</code>

</summary>

```python
def __exit__(
    self,
    exc_type: Optional[type[BaseException]],
    exc_value: Optional[BaseException],
    exc_traceback: Optional[TracebackType],
) -> bool:
    Observability.set_global_driver(None)
    self.observability_driver.__exit__(exc_type, exc_value, exc_traceback)
    return False
```

</details>

<span id="griptape.observability.Observability.get_global_driver"></span>

### get\_global\_driver()staticmethod

<details>

<summary>

Source Code in <code>griptape/observability/observability.py</code>

</summary>

```python
@staticmethod
def get_global_driver() -> Optional[BaseObservabilityDriver]:
    return _global_observability_driver
```

</details>

<span id="griptape.observability.Observability.get_span_id"></span>

### get\_span\_id()staticmethod

<details>

<summary>

Source Code in <code>griptape/observability/observability.py</code>

</summary>

```python
@staticmethod
def get_span_id() -> Optional[str]:
    driver = Observability.get_global_driver() or _no_op_observability_driver
    return driver.get_span_id()
```

</details>

<span id="griptape.observability.Observability.observe"></span>

### observe(call)staticmethod

<details>

<summary>

Source Code in <code>griptape/observability/observability.py</code>

</summary>

```python
@staticmethod
def observe(call: Observable.Call) -> Any:
    driver = Observability.get_global_driver() or _no_op_observability_driver
    return driver.observe(call)
```

</details>

<span id="griptape.observability.Observability.set_global_driver"></span>

### set\_global\_driver(driver)staticmethod

<details>

<summary>

Source Code in <code>griptape/observability/observability.py</code>

</summary>

```python
@staticmethod
def set_global_driver(driver: Optional[BaseObservabilityDriver]) -> None:
    global _global_observability_driver  # noqa: PLW0603
    _global_observability_driver = driver
```

</details>

- [Observability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/observability/observability/): -   globalobservability\_driver = None module-attribute

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
