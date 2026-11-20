---
title: dummy
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/dummy/
lastModified: 2026-05-22T19:45:14+05:30
---

# dummy

- `__all__ = ['DummyTextToSpeechDriver']` <small>module-attribute</small>  <span id="griptape.drivers.text_to_speech.dummy.__all__"></span>

<span id="griptape.drivers.text_to_speech.dummy.DummyTextToSpeechDriver"></span>

Bases:
[`BaseTextToSpeechDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/#griptape.drivers.text_to_speech.BaseTextToSpeechDriver "BaseTextToSpeechDriver (griptape.drivers.text_to_speech.BaseTextToSpeechDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/text\_to\_speech/dummy\_text\_to\_speech\_driver.py</code>

</summary>

```python
@define
class DummyTextToSpeechDriver(BaseTextToSpeechDriver):
    model: None = field(init=False, default=None, kw_only=True)

    def try_text_to_audio(self, prompts: list[str]) -> AudioArtifact:
        raise DummyError(__class__.__name__, "try_text_to_audio")
```

</details>

- `model = field(init=False, default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.dummy.DummyTextToSpeechDriver.model"></span>

<span id="griptape.drivers.text_to_speech.dummy.DummyTextToSpeechDriver.try_text_to_audio"></span>

### try\_text\_to\_audio(prompts)

<details>

<summary>

Source Code in <code>griptape/drivers/text\_to\_speech/dummy\_text\_to\_speech\_driver.py</code>

</summary>

```python
def try_text_to_audio(self, prompts: list[str]) -> AudioArtifact:
    raise DummyError(__class__.__name__, "try_text_to_audio")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
