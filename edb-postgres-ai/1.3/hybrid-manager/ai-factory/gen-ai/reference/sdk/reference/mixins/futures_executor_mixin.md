---
title: futures_executor_mixin
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/futures_executor_mixin/
lastModified: 2026-05-22T19:45:14+05:30
---

# futures\_executor\_mixin

<span id="griptape.mixins.futures_executor_mixin.FuturesExecutorMixin"></span>

Bases:

<span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/mixins/futures\_executor\_mixin.py</code>

</summary>

```python
@define(slots=False, kw_only=True)
class FuturesExecutorMixin(ABC):
    create_futures_executor: Callable[[], futures.Executor] = field(
        default=Factory(lambda: lambda: futures.ThreadPoolExecutor()),
    )

    _futures_executor: futures.Executor = field(
        default=Factory(
            lambda self: self.create_futures_executor(),
            takes_self=True,
        ),
        alias="futures_executor",
    )

    @property
    def futures_executor(self) -> futures.Executor:
        self.__raise_deprecation_warning()
        return self._futures_executor

    @futures_executor.setter
    def futures_executor(self, value: futures.Executor) -> None:
        self.__raise_deprecation_warning()
        self._futures_executor = value

    def __raise_deprecation_warning(self) -> None:
        warnings.warn(
            "`FuturesExecutorMixin.futures_executor` is deprecated and will be removed in a future release. Use `FuturesExecutorMixin.create_futures_executor` instead.",
            DeprecationWarning,
            stacklevel=2,
        )
```

</details>

- `_futures_executor = field(default=Factory(lambda self: self.create_futures_executor(), takes_self=True), alias='futures_executor')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.futures_executor_mixin.FuturesExecutorMixin._futures_executor"></span>

- `create_futures_executor = field(default=Factory(lambda: lambda: futures.ThreadPoolExecutor()))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.futures_executor_mixin.FuturesExecutorMixin.create_futures_executor"></span>

- `futures_executor` <small>property</small> <small>writable</small>  <span id="griptape.mixins.futures_executor_mixin.FuturesExecutorMixin.futures_executor"></span>

<span id="griptape.mixins.futures_executor_mixin.FuturesExecutorMixin.__raise_deprecation_warning"></span>

### \_\_raise\_deprecation\_warning()

<details>

<summary>

Source Code in <code>griptape/mixins/futures\_executor\_mixin.py</code>

</summary>

```python
def __raise_deprecation_warning(self) -> None:
    warnings.warn(
        "`FuturesExecutorMixin.futures_executor` is deprecated and will be removed in a future release. Use `FuturesExecutorMixin.create_futures_executor` instead.",
        DeprecationWarning,
        stacklevel=2,
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
