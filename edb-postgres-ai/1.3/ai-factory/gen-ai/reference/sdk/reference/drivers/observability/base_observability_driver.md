---
title: base_observability_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/observability/base_observability_driver/
lastModified: 2025-11-07T18:06:05Z
---

# base\_observability\_driver

<span id="griptape.drivers.observability.base_observability_driver.BaseObservabilityDriver"></span>

Bases:

<span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/drivers/observability/base\_observability\_driver.py</code>

</summary>

```python
@define
class BaseObservabilityDriver(ABC):
    def __enter__(self) -> None:  # noqa: B027
        pass

    def __exit__(
        self,
        exc_type: Optional[type[BaseException]],
        exc_value: Optional[BaseException],
        exc_traceback: Optional[TracebackType],
    ) -> bool:
        return False

    @abstractmethod
    def observe(self, call: Observable.Call) -> Any: ...

    @abstractmethod
    def get_span_id(self) -> Optional[str]: ...
```

</details>

<span id="griptape.drivers.observability.base_observability_driver.BaseObservabilityDriver.__enter__"></span>

### **enter**()

<details>

<summary>

Source Code in <code>griptape/drivers/observability/base\_observability\_driver.py</code>

</summary>

```python
def __enter__(self) -> None:  # noqa: B027
    pass
```

</details>

<span id="griptape.drivers.observability.base_observability_driver.BaseObservabilityDriver.__exit__"></span>

### **exit**(exc\_type, exc\_value, exc\_traceback)

<details>

<summary>

Source Code in <code>griptape/drivers/observability/base\_observability\_driver.py</code>

</summary>

```python
def __exit__(
    self,
    exc_type: Optional[type[BaseException]],
    exc_value: Optional[BaseException],
    exc_traceback: Optional[TracebackType],
) -> bool:
    return False
```

</details>

<span id="griptape.drivers.observability.base_observability_driver.BaseObservabilityDriver.get_span_id"></span>

### get\_span\_id()abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/observability/base\_observability\_driver.py</code>

</summary>

```python
@abstractmethod
def get_span_id(self) -> Optional[str]: ...
```

</details>

<span id="griptape.drivers.observability.base_observability_driver.BaseObservabilityDriver.observe"></span>

### observe(call)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/observability/base\_observability\_driver.py</code>

</summary>

```python
@abstractmethod
def observe(self, call: Observable.Call) -> Any: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
