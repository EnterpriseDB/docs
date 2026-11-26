---
title: base_audio_generation_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/base_audio_generation_task/
lastModified: 2025-11-07T18:06:05Z
---

# base\_audio\_generation\_task

- `logger = logging.getLogger(Defaults.logging_config.logger_name)` <small>module-attribute</small>  <span id="griptape.tasks.base_audio_generation_task.logger"></span>

<span id="griptape.tasks.base_audio_generation_task.BaseAudioGenerationTask"></span>

Bases:
[`ArtifactFileOutputMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin "ArtifactFileOutputMixin (griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin)")
,  [`RuleMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/rule_mixin/#griptape.mixins.rule_mixin.RuleMixin "RuleMixin (griptape.mixins.rule_mixin.RuleMixin)")
,  [`BaseTask[AudioArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTask "BaseTask (griptape.tasks.BaseTask)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/tasks/base\_audio\_generation\_task.py</code>

</summary>

```python
@define
class BaseAudioGenerationTask(ArtifactFileOutputMixin, RuleMixin, BaseTask[AudioArtifact], ABC):
    def before_run(self) -> None:
        super().before_run()

        logger.info("%s %s\nInput: %s", self.__class__.__name__, self.id, self.input.to_text())

    def after_run(self) -> None:
        super().after_run()

        logger.info(
            "%s %s\nOutput: %s",
            self.__class__.__name__,
            self.id,
            self.output.to_text() if self.output is not None else "",
        )
```

</details>

<span id="griptape.tasks.base_audio_generation_task.BaseAudioGenerationTask.after_run"></span>

### after\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_audio\_generation\_task.py</code>

</summary>

```python
def after_run(self) -> None:
    super().after_run()

    logger.info(
        "%s %s\nOutput: %s",
        self.__class__.__name__,
        self.id,
        self.output.to_text() if self.output is not None else "",
    )
```

</details>

<span id="griptape.tasks.base_audio_generation_task.BaseAudioGenerationTask.before_run"></span>

### before\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_audio\_generation\_task.py</code>

</summary>

```python
def before_run(self) -> None:
    super().before_run()

    logger.info("%s %s\nInput: %s", self.__class__.__name__, self.id, self.input.to_text())
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
