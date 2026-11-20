---
title: no_op_observability_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/observability/no_op_observability_driver/
lastModified: 2025-11-07T18:06:05Z
---

# no\_op\_observability\_driver

<span id="griptape.drivers.observability.no_op_observability_driver.NoOpObservabilityDriver"></span>

Bases:
[`BaseObservabilityDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/observability/#griptape.drivers.observability.BaseObservabilityDriver "BaseObservabilityDriver (griptape.drivers.observability.BaseObservabilityDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/observability/no\_op\_observability\_driver.py</code>

</summary>

```python
@define
class NoOpObservabilityDriver(BaseObservabilityDriver):
    def observe(self, call: Observable.Call) -> Any:
        return call()

    def get_span_id(self) -> Optional[str]:
        return None
```

</details>

<span id="griptape.drivers.observability.no_op_observability_driver.NoOpObservabilityDriver.get_span_id"></span>

### get\_span\_id()

<details>

<summary>

Source Code in <code>griptape/drivers/observability/no\_op\_observability\_driver.py</code>

</summary>

```python
def get_span_id(self) -> Optional[str]:
    return None
```

</details>

<span id="griptape.drivers.observability.no_op_observability_driver.NoOpObservabilityDriver.observe"></span>

### observe(call)

<details>

<summary>

Source Code in <code>griptape/drivers/observability/no\_op\_observability\_driver.py</code>

</summary>

```python
def observe(self, call: Observable.Call) -> Any:
    return call()
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
