---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/text_to_speech/tool/
lastModified: 2026-05-22T19:45:14+05:30
---

# tool

<span id="griptape.tools.text_to_speech.tool.TextToSpeechTool"></span>

Bases:
[`ArtifactFileOutputMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin "ArtifactFileOutputMixin (griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin)")
,  [`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                                                                                                                                            | Description                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tools/text_to_speech/tool/#griptape.tools.text_to_speech.tool.TextToSpeechTool.text_to_speech_driver" title="text_to_speech_driver = field(kw_only=True)           class-attribute       instance-attribute    (griptape.tools.text_to_speech.tool.TextToSpeechTool.text_to_speech_driver)"><code class="language-python">text\_to\_speech\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/#griptape.drivers.text_to_speech.BaseTextToSpeechDriver" title="BaseTextToSpeechDriver (griptape.drivers.text_to_speech.BaseTextToSpeechDriver)"><code class="language-python">BaseTextToSpeechDriver</code></a> | The text to audio generation driver used to generate the speech audio.<br/>    |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_dir" title="output_dir = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.text_to_speech.tool.TextToSpeechTool.output_dir)"><code class="language-python">output\_dir</code></a>          | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                 | If provided, the generated audio will be written to disk in output\_dir.<br/>  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_file" title="output_file = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tools.text_to_speech.tool.TextToSpeechTool.output_file)"><code class="language-python">output\_file</code></a>      | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                 | If provided, the generated audio will be written to disk as output\_file.<br/> |

<details>

<summary>

Source Code in <code>griptape/tools/text\_to\_speech/tool.py</code>

</summary>

```python
@define
class TextToSpeechTool(ArtifactFileOutputMixin, BaseTool):
    """A tool that can be used to generate speech from input text.

    Attributes:
        text_to_speech_driver: The text to audio generation driver used to generate the speech audio.
        output_dir: If provided, the generated audio will be written to disk in output_dir.
        output_file: If provided, the generated audio will be written to disk as output_file.
    """

    text_to_speech_driver: BaseTextToSpeechDriver = field(kw_only=True)

    @activity(
        config={
            "description": "Can be used to generate speech from the provided input text.",
            "schema": Schema({Literal("text", description="The literal text to be converted to speech."): str}),
        },
    )
    def text_to_speech(self, params: dict[str, Any]) -> AudioArtifact | ErrorArtifact:
        text = params["values"]["text"]

        output_artifact = self.text_to_speech_driver.run_text_to_audio(prompts=[text])

        if self.output_dir or self.output_file:
            self._write_to_file(output_artifact)

        return output_artifact
```

</details>

- `text_to_speech_driver = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tools.text_to_speech.tool.TextToSpeechTool.text_to_speech_driver"></span>

<span id="griptape.tools.text_to_speech.tool.TextToSpeechTool.text_to_speech"></span>

### text\_to\_speech(params)

<details>

<summary>

Source Code in <code>griptape/tools/text\_to\_speech/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Can be used to generate speech from the provided input text.",
        "schema": Schema({Literal("text", description="The literal text to be converted to speech."): str}),
    },
)
def text_to_speech(self, params: dict[str, Any]) -> AudioArtifact | ErrorArtifact:
    text = params["values"]["text"]

    output_artifact = self.text_to_speech_driver.run_text_to_audio(prompts=[text])

    if self.output_dir or self.output_file:
        self._write_to_file(output_artifact)

    return output_artifact
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
