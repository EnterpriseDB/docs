---
title: text_to_speech_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/text_to_speech_task/
lastModified: 2026-05-22T19:45:14+05:30
---

# text\_to\_speech\_task

<span id="griptape.tasks.text_to_speech_task.TextToSpeechTask"></span>

Bases:
[`BaseAudioGenerationTask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_audio_generation_task/#griptape.tasks.base_audio_generation_task.BaseAudioGenerationTask "BaseAudioGenerationTask (griptape.tasks.base_audio_generation_task.BaseAudioGenerationTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/text\_to\_speech\_task.py</code>

</summary>

```python
@define
class TextToSpeechTask(BaseAudioGenerationTask):
    DEFAULT_INPUT_TEMPLATE = "{{ args[0] }}"

    _input: Union[str, TextArtifact, Callable[[BaseTask], TextArtifact]] = field(default=DEFAULT_INPUT_TEMPLATE)
    text_to_speech_driver: BaseTextToSpeechDriver = field(
        default=Factory(lambda: Defaults.drivers_config.text_to_speech_driver), kw_only=True
    )

    @property
    def input(self) -> TextArtifact:
        if isinstance(self._input, TextArtifact):
            return self._input
        if isinstance(self._input, Callable):
            return self._input(self)
        return TextArtifact(J2().render_from_string(self._input, **self.full_context))

    @input.setter
    def input(self, value: TextArtifact) -> None:
        self._input = value

    def try_run(self) -> AudioArtifact:
        audio_artifact = self.text_to_speech_driver.run_text_to_audio(prompts=[self.input.to_text()])

        if self.output_dir or self.output_file:
            self._write_to_file(audio_artifact)

        return audio_artifact
```

</details>

- `DEFAULT_INPUT_TEMPLATE = '{{ args[0] }}'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.text_to_speech_task.TextToSpeechTask.DEFAULT_INPUT_TEMPLATE"></span>

- `_input = field(default=DEFAULT_INPUT_TEMPLATE)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.text_to_speech_task.TextToSpeechTask._input"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.text_to_speech_task.TextToSpeechTask.input"></span>

- `text_to_speech_driver = field(default=Factory(lambda: Defaults.drivers_config.text_to_speech_driver), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.text_to_speech_task.TextToSpeechTask.text_to_speech_driver"></span>

<span id="griptape.tasks.text_to_speech_task.TextToSpeechTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/text\_to\_speech\_task.py</code>

</summary>

```python
def try_run(self) -> AudioArtifact:
    audio_artifact = self.text_to_speech_driver.run_text_to_audio(prompts=[self.input.to_text()])

    if self.output_dir or self.output_file:
        self._write_to_file(audio_artifact)

    return audio_artifact
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
