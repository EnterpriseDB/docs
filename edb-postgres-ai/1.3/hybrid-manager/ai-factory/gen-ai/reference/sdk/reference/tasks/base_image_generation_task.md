---
title: base_image_generation_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_image_generation_task/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_image\_generation\_task

- `logger = logging.getLogger(Defaults.logging_config.logger_name)` <small>module-attribute</small>  <span id="griptape.tasks.base_image_generation_task.logger"></span>

<span id="griptape.tasks.base_image_generation_task.BaseImageGenerationTask"></span>

Bases:
[`ArtifactFileOutputMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin "ArtifactFileOutputMixin (griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin)")
,  [`RuleMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/rule_mixin/#griptape.mixins.rule_mixin.RuleMixin "RuleMixin (griptape.mixins.rule_mixin.RuleMixin)")
,  [`BaseTask[ImageArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTask "BaseTask (griptape.tasks.BaseTask)")
, <span title="abc.ABC">ABC</span>

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Type                                                                                                                                                                                                            | Description                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_image_generation_task/#griptape.tasks.base_image_generation_task.BaseImageGenerationTask.negative_rulesets" title="negative_rulesets           property    (griptape.tasks.base_image_generation_task.BaseImageGenerationTask.negative_rulesets)"><code class="language-python">negative\_rulesets</code></a>                                                         | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Ruleset]</code></a> | List of negatively-weighted rulesets applied to the text prompt, if supported by the driver.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_image_generation_task/#griptape.tasks.base_image_generation_task.BaseImageGenerationTask.negative_rules" title="negative_rules = field(factory=list, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.base_image_generation_task.BaseImageGenerationTask.negative_rules)"><code class="language-python">negative\_rules</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Rule]</code></a>    | List of negatively-weighted rules applied to the text prompt, if supported by the driver.<br/>    |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_dir" title="output_dir = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.base_image_generation_task.BaseImageGenerationTask.output_dir)"><code class="language-python">output\_dir</code></a>               | `Optional[str]`                                                                                                                                                                                                 | If provided, the generated image will be written to disk in output\_dir.<br/>                     |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_file" title="output_file = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.base_image_generation_task.BaseImageGenerationTask.output_file)"><code class="language-python">output\_file</code></a>           | `Optional[str]`                                                                                                                                                                                                 | If provided, the generated image will be written to disk as output\_file.<br/>                    |

<details>

<summary>

Source Code in <code>griptape/tasks/base\_image\_generation\_task.py</code>

</summary>

```python
@define
class BaseImageGenerationTask(ArtifactFileOutputMixin, RuleMixin, BaseTask[ImageArtifact], ABC):
    """Provides a base class for image generation-related tasks.

    Attributes:
        negative_rulesets: List of negatively-weighted rulesets applied to the text prompt, if supported by the driver.
        negative_rules: List of negatively-weighted rules applied to the text prompt, if supported by the driver.
        output_dir: If provided, the generated image will be written to disk in output_dir.
        output_file: If provided, the generated image will be written to disk as output_file.
    """

    DEFAULT_NEGATIVE_RULESET_NAME = "Negative Ruleset"

    image_generation_driver: BaseImageGenerationDriver = field(
        default=Factory(lambda: Defaults.drivers_config.image_generation_driver),
        kw_only=True,
    )
    _negative_rulesets: list[Ruleset] = field(factory=list, kw_only=True, alias="negative_rulesets")
    negative_rules: list[Rule] = field(factory=list, kw_only=True)

    @property
    def negative_rulesets(self) -> list[Ruleset]:
        negative_rulesets = self._negative_rulesets

        if self.negative_rules:
            negative_rulesets.append(Ruleset(name=self.DEFAULT_NEGATIVE_RULESET_NAME, rules=self.negative_rules))

        return negative_rulesets

    def _read_from_file(self, path: str) -> ImageArtifact:
        logger.info("Reading image from %s", os.path.abspath(path))
        return ImageLoader().load(Path(path))

    def _get_prompts(self, prompt: str) -> list[str]:
        return [prompt, *[rule.value for ruleset in self.rulesets for rule in ruleset.rules]]

    def _get_negative_prompts(self) -> list[str]:
        return [rule.value for ruleset in self.negative_rulesets for rule in ruleset.rules]
```

</details>

- `DEFAULT_NEGATIVE_RULESET_NAME = 'Negative Ruleset'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.base_image_generation_task.BaseImageGenerationTask.DEFAULT_NEGATIVE_RULESET_NAME"></span>

- `_negative_rulesets = field(factory=list, kw_only=True, alias='negative_rulesets')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.base_image_generation_task.BaseImageGenerationTask._negative_rulesets"></span>

- `image_generation_driver = field(default=Factory(lambda: Defaults.drivers_config.image_generation_driver), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.base_image_generation_task.BaseImageGenerationTask.image_generation_driver"></span>

- `negative_rules = field(factory=list, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.base_image_generation_task.BaseImageGenerationTask.negative_rules"></span>

- `negative_rulesets` <small>property</small>  <span id="griptape.tasks.base_image_generation_task.BaseImageGenerationTask.negative_rulesets"></span>

<span id="griptape.tasks.base_image_generation_task.BaseImageGenerationTask._get_negative_prompts"></span>

### \_get\_negative\_prompts()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_image\_generation\_task.py</code>

</summary>

```python
def _get_negative_prompts(self) -> list[str]:
    return [rule.value for ruleset in self.negative_rulesets for rule in ruleset.rules]
```

</details>

<span id="griptape.tasks.base_image_generation_task.BaseImageGenerationTask._get_prompts"></span>

### \_get\_prompts(prompt)

<details>

<summary>

Source Code in <code>griptape/tasks/base\_image\_generation\_task.py</code>

</summary>

```python
def _get_prompts(self, prompt: str) -> list[str]:
    return [prompt, *[rule.value for ruleset in self.rulesets for rule in ruleset.rules]]
```

</details>

<span id="griptape.tasks.base_image_generation_task.BaseImageGenerationTask._read_from_file"></span>

### \_read\_from\_file(path)

<details>

<summary>

Source Code in <code>griptape/tasks/base\_image\_generation\_task.py</code>

</summary>

```python
def _read_from_file(self, path: str) -> ImageArtifact:
    logger.info("Reading image from %s", os.path.abspath(path))
    return ImageLoader().load(Path(path))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
