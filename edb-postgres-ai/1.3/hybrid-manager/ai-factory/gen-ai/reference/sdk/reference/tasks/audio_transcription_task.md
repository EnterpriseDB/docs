---
title: audio_transcription_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/audio_transcription_task/
lastModified: 2026-05-22T19:45:14+05:30
---

# audio\_transcription\_task

<span id="griptape.tasks.audio_transcription_task.AudioTranscriptionTask"></span>

Bases:
[`BaseAudioInputTask[TextArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_audio_input_task/#griptape.tasks.base_audio_input_task.BaseAudioInputTask "BaseAudioInputTask (griptape.tasks.base_audio_input_task.BaseAudioInputTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/audio\_transcription\_task.py</code>

</summary>

```python
@define
class AudioTranscriptionTask(BaseAudioInputTask[TextArtifact]):
    audio_transcription_driver: BaseAudioTranscriptionDriver = field(
        default=Factory(lambda: Defaults.drivers_config.audio_transcription_driver),
        kw_only=True,
    )

    def try_run(self) -> TextArtifact:
        return self.audio_transcription_driver.run(self.input)
```

</details>

- `audio_transcription_driver = field(default=Factory(lambda: Defaults.drivers_config.audio_transcription_driver), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.audio_transcription_task.AudioTranscriptionTask.audio_transcription_driver"></span>

<span id="griptape.tasks.audio_transcription_task.AudioTranscriptionTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/audio\_transcription\_task.py</code>

</summary>

```python
def try_run(self) -> TextArtifact:
    return self.audio_transcription_driver.run(self.input)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
