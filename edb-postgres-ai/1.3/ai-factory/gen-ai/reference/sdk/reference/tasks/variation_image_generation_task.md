---
title: variation_image_generation_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/variation_image_generation_task/
lastModified: 2025-11-07T18:06:05Z
---

# variation\_image\_generation\_task

<span id="griptape.tasks.variation_image_generation_task.VariationImageGenerationTask"></span>

Bases:
[`BaseImageGenerationTask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask "BaseImageGenerationTask (griptape.tasks.BaseImageGenerationTask)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                                                                                                                               | Description                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/variation_image_generation_task/#griptape.tasks.variation_image_generation_task.VariationImageGenerationTask.image_generation_driver" title="image_generation_driver = field(default=Factory(lambda: Defaults.drivers_config.image_generation_driver), kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.variation_image_generation_task.VariationImageGenerationTask.image_generation_driver)"><code class="language-python">image\_generation\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/#griptape.drivers.image_generation.BaseImageGenerationDriver" title="BaseImageGenerationDriver (griptape.drivers.image_generation.BaseImageGenerationDriver)"><code class="language-python">BaseImageGenerationDriver</code></a> | The engine used to generate the image.<br/>                                                       |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rulesets" title="negative_rulesets           property    (griptape.tasks.variation_image_generation_task.VariationImageGenerationTask.negative_rulesets)"><code class="language-python">negative\_rulesets</code></a>                                                                                                                                                                                                                               | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Ruleset]</code></a>                                                                                                                                                                   | List of negatively-weighted rulesets applied to the text prompt, if supported by the driver.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rules" title="negative_rules = field(factory=list, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.variation_image_generation_task.VariationImageGenerationTask.negative_rules)"><code class="language-python">negative\_rules</code></a>                                                                                                                                                                       | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Rule]</code></a>                                                                                                                                                                      | List of negatively-weighted rules applied to the text prompt, if supported by the driver.<br/>    |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_dir" title="output_dir = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.variation_image_generation_task.VariationImageGenerationTask.output_dir)"><code class="language-python">output\_dir</code></a>                                                                                                                               | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                    | If provided, the generated image will be written to disk in output\_dir.<br/>                     |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_file" title="output_file = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.variation_image_generation_task.VariationImageGenerationTask.output_file)"><code class="language-python">output\_file</code></a>                                                                                                                           | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                    | If provided, the generated image will be written to disk as output\_file.<br/>                    |

<details>

<summary>

Source Code in <code>griptape/tasks/variation\_image\_generation\_task.py</code>

</summary>

```python
@define
class VariationImageGenerationTask(BaseImageGenerationTask):
    """A task that generates a variation of an image using a prompt.

    Accepts a text prompt and image as
    input in one of the following formats:
    - tuple of (template string, ImageArtifact)
    - tuple of (TextArtifact, ImageArtifact)
    - Callable that returns a tuple of (TextArtifact, ImageArtifact).

    Attributes:
        image_generation_driver: The engine used to generate the image.
        negative_rulesets: List of negatively-weighted rulesets applied to the text prompt, if supported by the driver.
        negative_rules: List of negatively-weighted rules applied to the text prompt, if supported by the driver.
        output_dir: If provided, the generated image will be written to disk in output_dir.
        output_file: If provided, the generated image will be written to disk as output_file.
    """

    image_generation_driver: BaseImageGenerationDriver = field(
        default=Factory(lambda: Defaults.drivers_config.image_generation_driver),
        kw_only=True,
    )
    _input: Union[tuple[Union[str, TextArtifact], ImageArtifact], Callable[[BaseTask], ListArtifact], ListArtifact] = (
        field(default=None, alias="input")
    )

    @property
    def input(self) -> ListArtifact:
        if isinstance(self._input, ListArtifact):
            return self._input
        if isinstance(self._input, tuple):
            if isinstance(self._input[0], TextArtifact):
                input_text = self._input[0]
            else:
                input_text = TextArtifact(J2().render_from_string(self._input[0], **self.full_context))

            return ListArtifact([input_text, self._input[1]])
        if isinstance(self._input, Callable):
            return self._input(self)
        raise ValueError("Input must be a tuple of (text, image) or a callable that returns such a tuple.")

    @input.setter
    def input(self, value: tuple[str | TextArtifact, ImageArtifact] | Callable[[BaseTask], ListArtifact]) -> None:
        self._input = value

    def try_run(self) -> ImageArtifact:
        prompt_artifact = self.input[0]

        image_artifact = self.input[1]
        if not isinstance(image_artifact, ImageArtifact):
            raise ValueError("Image must be an ImageArtifact.")

        output_image_artifact = self.image_generation_driver.run_image_variation(
            prompts=self._get_prompts(prompt_artifact.to_text()),
            negative_prompts=self._get_negative_prompts(),
            image=image_artifact,
        )

        if self.output_dir or self.output_file:
            self._write_to_file(output_image_artifact)

        return output_image_artifact
```

</details>

- `_input = field(default=None, alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.variation_image_generation_task.VariationImageGenerationTask._input"></span>

- `image_generation_driver = field(default=Factory(lambda: Defaults.drivers_config.image_generation_driver), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.variation_image_generation_task.VariationImageGenerationTask.image_generation_driver"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.variation_image_generation_task.VariationImageGenerationTask.input"></span>

<span id="griptape.tasks.variation_image_generation_task.VariationImageGenerationTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/variation\_image\_generation\_task.py</code>

</summary>

```python
def try_run(self) -> ImageArtifact:
    prompt_artifact = self.input[0]

    image_artifact = self.input[1]
    if not isinstance(image_artifact, ImageArtifact):
        raise ValueError("Image must be an ImageArtifact.")

    output_image_artifact = self.image_generation_driver.run_image_variation(
        prompts=self._get_prompts(prompt_artifact.to_text()),
        negative_prompts=self._get_negative_prompts(),
        image=image_artifact,
    )

    if self.output_dir or self.output_file:
        self._write_to_file(output_image_artifact)

    return output_image_artifact
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
