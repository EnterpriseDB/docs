---
title: dummy
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/dummy/
lastModified: 2025-11-07T18:06:05Z
---

# dummy

- `__all__ = ['DummyPromptDriver']` <small>module-attribute</small>  <span id="griptape.drivers.prompt.dummy.__all__"></span>

<span id="griptape.drivers.prompt.dummy.DummyPromptDriver"></span>

Bases:
[`BasePromptDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/#griptape.drivers.prompt.BasePromptDriver "BasePromptDriver (griptape.drivers.prompt.BasePromptDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/prompt/dummy\_prompt\_driver.py</code>

</summary>

```python
@define
class DummyPromptDriver(BasePromptDriver):
    model: None = field(init=False, default=None, kw_only=True)
    tokenizer: DummyTokenizer = field(default=Factory(lambda: DummyTokenizer()), kw_only=True)

    @observable
    def try_run(self, prompt_stack: PromptStack) -> Message:
        raise DummyError(__class__.__name__, "try_run")

    @observable
    def try_stream(self, prompt_stack: PromptStack) -> Iterator[DeltaMessage]:
        raise DummyError(__class__.__name__, "try_stream")
```

</details>

- `model = field(init=False, default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.prompt.dummy.DummyPromptDriver.model"></span>

- `tokenizer = field(default=Factory(lambda: DummyTokenizer()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.prompt.dummy.DummyPromptDriver.tokenizer"></span>

<span id="griptape.drivers.prompt.dummy.DummyPromptDriver.try_run"></span>

### try\_run(prompt\_stack)

<details>

<summary>

Source Code in <code>griptape/drivers/prompt/dummy\_prompt\_driver.py</code>

</summary>

```python
@observable
def try_run(self, prompt_stack: PromptStack) -> Message:
    raise DummyError(__class__.__name__, "try_run")
```

</details>

<span id="griptape.drivers.prompt.dummy.DummyPromptDriver.try_stream"></span>

### try\_stream(prompt\_stack)

<details>

<summary>

Source Code in <code>griptape/drivers/prompt/dummy\_prompt\_driver.py</code>

</summary>

```python
@observable
def try_stream(self, prompt_stack: PromptStack) -> Iterator[DeltaMessage]:
    raise DummyError(__class__.__name__, "try_stream")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
