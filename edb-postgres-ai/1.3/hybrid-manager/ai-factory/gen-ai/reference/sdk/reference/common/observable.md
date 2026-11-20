---
title: observable
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/observable/
lastModified: 2026-05-22T19:45:14+05:30
---

# observable

<span id="griptape.common.observable.Observable"></span>

<details>

<summary>

Source Code in <code>griptape/common/observable.py</code>

</summary>

```python
class Observable:
    @define
    class Call:
        func: Callable = field(kw_only=True)
        instance: Optional[Any] = field(default=None, kw_only=True)
        args: tuple[Any, ...] = field(default=Factory(tuple), kw_only=True)
        kwargs: dict[str, Any] = field(default=Factory(dict), kw_only=True)
        decorator_args: tuple[Any, ...] = field(default=Factory(tuple), kw_only=True)
        decorator_kwargs: dict[str, Any] = field(default=Factory(dict), kw_only=True)

        def __call__(self) -> Any:
            return self.func(*self.args, **self.kwargs)

        @property
        def tags(self) -> Optional[list[str]]:
            return self.decorator_kwargs.get("tags")
```

</details>

<span id="griptape.common.observable.Observable.Call"></span>

### Call

<details>

<summary>

Source Code in <code>griptape/common/observable.py</code>

</summary>

```python
@define
class Call:
    func: Callable = field(kw_only=True)
    instance: Optional[Any] = field(default=None, kw_only=True)
    args: tuple[Any, ...] = field(default=Factory(tuple), kw_only=True)
    kwargs: dict[str, Any] = field(default=Factory(dict), kw_only=True)
    decorator_args: tuple[Any, ...] = field(default=Factory(tuple), kw_only=True)
    decorator_kwargs: dict[str, Any] = field(default=Factory(dict), kw_only=True)

    def __call__(self) -> Any:
        return self.func(*self.args, **self.kwargs)

    @property
    def tags(self) -> Optional[list[str]]:
        return self.decorator_kwargs.get("tags")
```

</details>

- `args = field(default=Factory(tuple), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.observable.Observable.Call.args"></span>

- `decorator_args = field(default=Factory(tuple), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.observable.Observable.Call.decorator_args"></span>

- `decorator_kwargs = field(default=Factory(dict), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.observable.Observable.Call.decorator_kwargs"></span>

- `func = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.observable.Observable.Call.func"></span>

- `instance = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.observable.Observable.Call.instance"></span>

- `kwargs = field(default=Factory(dict), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.observable.Observable.Call.kwargs"></span>

- `tags` <small>property</small>  <span id="griptape.common.observable.Observable.Call.tags"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
