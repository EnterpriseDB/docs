---
title: runnable_mixin
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/runnable_mixin/
lastModified: 2026-05-22T19:45:14+05:30
---

# runnable\_mixin

- `T = TypeVar('T', bound='RunnableMixin')` <small>module-attribute</small>  <span id="griptape.mixins.runnable_mixin.T"></span>

<span id="griptape.mixins.runnable_mixin.RunnableMixin"></span>

Bases:

<span title="abc.ABC">ABC</span>,  [`Generic[T]`](#griptape.mixins.runnable_mixin.T "typing.Generic")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/runnable_mixin/#griptape.mixins.runnable_mixin.RunnableMixin.on_before_run" title="on_before_run = field(kw_only=True, default=None)           class-attribute       instance-attribute    (griptape.mixins.runnable_mixin.RunnableMixin.on_before_run)"><code class="language-python">on\_before\_run</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/runnable_mixin/#griptape.mixins.runnable_mixin.T" title="T = TypeVar('T', bound='RunnableMixin')           module-attribute    (griptape.mixins.runnable_mixin.T)"><code class="language-python">Optional\[Callable\[\[T], None]]</code></a> | Optional callback that is called at the very beginning of the `run` method.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/runnable_mixin/#griptape.mixins.runnable_mixin.RunnableMixin.on_after_run" title="on_after_run = field(kw_only=True, default=None)           class-attribute       instance-attribute    (griptape.mixins.runnable_mixin.RunnableMixin.on_after_run)"><code class="language-python">on\_after\_run</code></a>     | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/runnable_mixin/#griptape.mixins.runnable_mixin.T" title="T = TypeVar('T', bound='RunnableMixin')           module-attribute    (griptape.mixins.runnable_mixin.T)"><code class="language-python">Optional\[Callable\[\[T], None]]</code></a> | Optional callback that is called at the very end of the `run` method.<br/>       |

<details>

<summary>

Source Code in <code>griptape/mixins/runnable\_mixin.py</code>

</summary>

```python
@define()
class RunnableMixin(ABC, Generic[T]):
    """Mixin for classes that can be "run".

    Implementing classes should pass themselves as the generic type to ensure that the correct type is used in the callbacks.

    Attributes:
        on_before_run: Optional callback that is called at the very beginning of the `run` method.
        on_after_run: Optional callback that is called at the very end of the `run` method.
    """

    on_before_run: Optional[Callable[[T], None]] = field(kw_only=True, default=None)
    on_after_run: Optional[Callable[[T], None]] = field(kw_only=True, default=None)

    def before_run(self, *args, **kwargs) -> Any:
        if self.on_before_run is not None:
            self.on_before_run(cast("T", self))

    @abstractmethod
    def run(self, *args, **kwargs) -> Any: ...

    def after_run(self, *args, **kwargs) -> Any:
        if self.on_after_run is not None:
            self.on_after_run(cast("T", self))
```

</details>

- `on_after_run = field(kw_only=True, default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.runnable_mixin.RunnableMixin.on_after_run"></span>

- `on_before_run = field(kw_only=True, default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.runnable_mixin.RunnableMixin.on_before_run"></span>

<span id="griptape.mixins.runnable_mixin.RunnableMixin.after_run"></span>

### after\_run(\*args, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/mixins/runnable\_mixin.py</code>

</summary>

```python
def after_run(self, *args, **kwargs) -> Any:
    if self.on_after_run is not None:
        self.on_after_run(cast("T", self))
```

</details>

<span id="griptape.mixins.runnable_mixin.RunnableMixin.before_run"></span>

### before\_run(\*args, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/mixins/runnable\_mixin.py</code>

</summary>

```python
def before_run(self, *args, **kwargs) -> Any:
    if self.on_before_run is not None:
        self.on_before_run(cast("T", self))
```

</details>

<span id="griptape.mixins.runnable_mixin.RunnableMixin.run"></span>

### run(\*args, \*\*kwargs)abstractmethod

<details>

<summary>

Source Code in <code>griptape/mixins/runnable\_mixin.py</code>

</summary>

```python
@abstractmethod
def run(self, *args, **kwargs) -> Any: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
