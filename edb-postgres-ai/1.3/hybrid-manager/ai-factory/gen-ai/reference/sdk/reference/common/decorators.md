---
title: decorators
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/decorators/
lastModified: 2026-05-22T19:45:14+05:30
---

# decorators

- `P = ParamSpec('P')` <small>module-attribute</small>  <span id="griptape.common.decorators.P"></span>

- `T = TypeVar('T')` <small>module-attribute</small>  <span id="griptape.common.decorators.T"></span>

<span id="griptape.common.decorators.observable"></span>

<details>

<summary>

Source Code in <code>griptape/common/decorators.py</code>

</summary>

```python
def observable(wrapped: Optional[Callable[P, T] | Any] = None, **dkwargs: Any) -> Any:
    if wrapped is None:
        return functools.partial(observable, **dkwargs)

    if not callable(wrapped):
        raise ValueError("Non-callable positional argument passed. Use kwargs to pass arguments to the decorator.")

    @wrapt.decorator
    def wrapper(wrapped: Callable[P, T], instance: Any, args: Any, kwargs: Any) -> T:
        from griptape.common.observable import Observable
        from griptape.observability.observability import Observability

        return cast(
            "T",
            Observability.observe(
                Observable.Call(
                    func=wrapped,
                    instance=instance,
                    args=args,
                    kwargs=kwargs,
                    decorator_args=(),
                    decorator_kwargs=dkwargs,
                )
            ),
        )

    return wrapper(wrapped)  # pyright: ignore[reportCallIssue]
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
