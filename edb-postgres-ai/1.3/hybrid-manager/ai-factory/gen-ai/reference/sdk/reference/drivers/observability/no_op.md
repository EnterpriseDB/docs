---
title: no_op
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/observability/no_op/
lastModified: 2026-05-22T19:45:14+05:30
---

# no\_op

- `__all__ = ['NoOpObservabilityDriver']` <small>module-attribute</small>  <span id="griptape.drivers.observability.no_op.__all__"></span>

<span id="griptape.drivers.observability.no_op.NoOpObservabilityDriver"></span>

Bases:
[`BaseObservabilityDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/observability/#griptape.drivers.observability.BaseObservabilityDriver "BaseObservabilityDriver (griptape.drivers.observability.BaseObservabilityDriver)")

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

<span id="griptape.drivers.observability.no_op.NoOpObservabilityDriver.get_span_id"></span>

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

<span id="griptape.drivers.observability.no_op.NoOpObservabilityDriver.observe"></span>

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
