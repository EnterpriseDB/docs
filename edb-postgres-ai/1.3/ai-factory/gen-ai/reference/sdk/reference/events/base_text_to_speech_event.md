---
title: base_text_to_speech_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/events/base_text_to_speech_event/
lastModified: 2025-11-07T18:06:05Z
---

# base\_text\_to\_speech\_event

<span id="griptape.events.base_text_to_speech_event.BaseTextToSpeechEvent"></span>

Bases:
[`BaseMediaGenerationEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/events/base_media_generation_event/#griptape.events.base_media_generation_event.BaseMediaGenerationEvent "BaseMediaGenerationEvent (griptape.events.base_media_generation_event.BaseMediaGenerationEvent)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/events/base\_text\_to\_speech\_event.py</code>

</summary>

```python
@define
class BaseTextToSpeechEvent(BaseMediaGenerationEvent, ABC): ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
