---
title: prompt_image_generation_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/prompt_image_generation_task/
lastModified: 2025-11-07T18:06:05Z
---

# prompt\_image\_generation\_task

<span id="griptape.tasks.prompt_image_generation_task.PromptImageGenerationTask"></span>

Bases:
[`BaseImageGenerationTask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask "BaseImageGenerationTask (griptape.tasks.BaseImageGenerationTask)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.image_generation_driver" title="image_generation_driver = field(default=Factory(lambda: Defaults.drivers_config.image_generation_driver), kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.prompt_image_generation_task.PromptImageGenerationTask.image_generation_driver)"><code class="language-python">image\_generation\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/#griptape.drivers.image_generation.BaseImageGenerationDriver" title="BaseImageGenerationDriver (griptape.drivers.image_generation.BaseImageGenerationDriver)"><code class="language-python">BaseImageGenerationDriver</code></a> | The engine used to generate the image.<br/>                                                       |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rulesets" title="negative_rulesets           property    (griptape.tasks.prompt_image_generation_task.PromptImageGenerationTask.negative_rulesets)"><code class="language-python">negative\_rulesets</code></a>                                                                                                                                                          | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Ruleset]</code></a>                                                                                                                                                                   | List of negatively-weighted rulesets applied to the text prompt, if supported by the driver.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rules" title="negative_rules = field(factory=list, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.prompt_image_generation_task.PromptImageGenerationTask.negative_rules)"><code class="language-python">negative\_rules</code></a>                                                                                                  | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Rule]</code></a>                                                                                                                                                                      | List of negatively-weighted rules applied to the text prompt, if supported by the driver.<br/>    |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_dir" title="output_dir = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.prompt_image_generation_task.PromptImageGenerationTask.output_dir)"><code class="language-python">output\_dir</code></a>                                                          | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                    | If provided, the generated image will be written to disk in output\_dir.<br/>                     |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_file" title="output_file = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.prompt_image_generation_task.PromptImageGenerationTask.output_file)"><code class="language-python">output\_file</code></a>                                                      | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                    | If provided, the generated image will be written to disk as output\_file.<br/>                    |

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_image\_generation\_task.py</code>

</summary>

```python
@define
class PromptImageGenerationTask(BaseImageGenerationTask):
    """Used to generate an image from a text prompt.

    Accepts prompt as input in one of the following formats:
    - template string
    - TextArtifact
    - Callable that returns a TextArtifact.

    Attributes:
        image_generation_driver: The engine used to generate the image.
        negative_rulesets: List of negatively-weighted rulesets applied to the text prompt, if supported by the driver.
        negative_rules: List of negatively-weighted rules applied to the text prompt, if supported by the driver.
        output_dir: If provided, the generated image will be written to disk in output_dir.
        output_file: If provided, the generated image will be written to disk as output_file.
    """

    DEFAULT_INPUT_TEMPLATE = "{{ args[0] }}"

    _input: Union[str, TextArtifact, Callable[[BaseTask], TextArtifact]] = field(
        default=DEFAULT_INPUT_TEMPLATE, alias="input"
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

    def try_run(self) -> ImageArtifact:
        image_artifact = self.image_generation_driver.run_text_to_image(
            prompts=self._get_prompts(self.input.to_text()),
            negative_prompts=self._get_negative_prompts(),
        )

        if self.output_dir or self.output_file:
            self._write_to_file(image_artifact)

        return image_artifact
```

</details>

- `DEFAULT_INPUT_TEMPLATE = '{{ args[0] }}'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.prompt_image_generation_task.PromptImageGenerationTask.DEFAULT_INPUT_TEMPLATE"></span>

- `_input = field(default=DEFAULT_INPUT_TEMPLATE, alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.prompt_image_generation_task.PromptImageGenerationTask._input"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.prompt_image_generation_task.PromptImageGenerationTask.input"></span>

<span id="griptape.tasks.prompt_image_generation_task.PromptImageGenerationTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_image\_generation\_task.py</code>

</summary>

```python
def try_run(self) -> ImageArtifact:
    image_artifact = self.image_generation_driver.run_text_to_image(
        prompts=self._get_prompts(self.input.to_text()),
        negative_prompts=self._get_negative_prompts(),
    )

    if self.output_dir or self.output_file:
        self._write_to_file(image_artifact)

    return image_artifact
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
