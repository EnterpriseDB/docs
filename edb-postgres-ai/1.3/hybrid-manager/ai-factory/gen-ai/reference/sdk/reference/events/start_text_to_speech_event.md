---
title: start_text_to_speech_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/start_text_to_speech_event/
lastModified: 2026-05-22T19:45:14+05:30
---

# start\_text\_to\_speech\_event

<span id="griptape.events.start_text_to_speech_event.StartTextToSpeechEvent"></span>

Bases:
[`BaseTextToSpeechEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_text_to_speech_event/#griptape.events.base_text_to_speech_event.BaseTextToSpeechEvent "BaseTextToSpeechEvent (griptape.events.base_text_to_speech_event.BaseTextToSpeechEvent)")

<details>

<summary>

Source Code in <code>griptape/events/start\_text\_to\_speech\_event.py</code>

</summary>

```python
@define
class StartTextToSpeechEvent(BaseTextToSpeechEvent):
    prompts: list[str] = field(kw_only=True, metadata={"serializable": True})
```

</details>

- `prompts = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.start_text_to_speech_event.StartTextToSpeechEvent.prompts"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
