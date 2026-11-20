---
title: output_schema_validation_subtask
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/output_schema_validation_subtask/
lastModified: 2025-11-07T18:06:05Z
---

# output\_schema\_validation\_subtask

- `logger = logging.getLogger(Defaults.logging_config.logger_name)` <small>module-attribute</small>  <span id="griptape.tasks.output_schema_validation_subtask.logger"></span>

<span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask"></span>

Bases:
[`BaseSubtask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/base_subtask/#griptape.tasks.base_subtask.BaseSubtask "BaseSubtask (griptape.tasks.base_subtask.BaseSubtask)")

<details>

<summary>

Source Code in <code>griptape/tasks/output\_schema\_validation\_subtask.py</code>

</summary>

```python
@define
class OutputSchemaValidationSubtask(BaseSubtask):
    _input: BaseArtifact = field(alias="input")
    output_schema: Union[Schema, type[BaseModel]] = field(kw_only=True)
    structured_output_strategy: StructuredOutputStrategy = field(
        default="rule", kw_only=True, metadata={"serializable": True}
    )
    generate_assistant_subtask_template: Callable[[OutputSchemaValidationSubtask], str] = field(
        default=Factory(lambda self: self.default_generate_assistant_subtask_template, takes_self=True),
        kw_only=True,
    )
    generate_user_subtask_template: Callable[[OutputSchemaValidationSubtask], str] = field(
        default=Factory(lambda self: self.default_generate_user_subtask_template, takes_self=True),
        kw_only=True,
    )
    _validation_errors: str | None = field(default=None, init=False)

    @property
    def input(self) -> BaseArtifact:
        return self._input

    @input.setter
    def input(self, value: BaseArtifact) -> None:
        self._input = value

    @property
    def validation_errors(self) -> str | None:
        return self._validation_errors

    def attach_to(self, parent_task: BaseTask) -> None:
        super().attach_to(parent_task)
        try:
            # With `native` or `rule` strategies, the output will be a json string that can be parsed.
            # With the `tool` strategy, the output will already be a `JsonArtifact`.
            if self.structured_output_strategy in ("native", "rule"):
                value_to_validate = (
                    self.input.value if isinstance(self.input.value, str) else json.dumps(self.input.value)
                )
                if isinstance(self.output_schema, Schema):
                    self.output_schema.validate(json.loads(value_to_validate))
                    self.output = JsonArtifact(self.input.value)
                else:
                    model = TypeAdapter(self.output_schema).validate_json(value_to_validate)
                    self.output = ModelArtifact(model)
            else:
                self.output = self.input
        except SchemaError as e:
            self._validation_errors = str(e)
        except ValidationError as e:
            self._validation_errors = str(e.errors())

    def before_run(self) -> None:
        logger.info("%s Validating: %s", self.__class__.__name__, self.input.value)

    def try_run(self) -> BaseArtifact:
        if self._validation_errors is None:
            return self._input
        return ErrorArtifact(
            value=f"Validation error: {self._validation_errors}",
        )

    def after_run(self) -> None:
        if self._validation_errors is None:
            logger.info("%s Validation successful", self.__class__.__name__)
        else:
            logger.error("%s Validation error: %s", self.__class__.__name__, self._validation_errors)

    def add_to_prompt_stack(self, stack: PromptStack) -> None:
        if self.output is None:
            return
        stack.add_assistant_message(self.generate_assistant_subtask_template(self))
        stack.add_user_message(self.generate_user_subtask_template(self))

    def default_generate_assistant_subtask_template(self, subtask: OutputSchemaValidationSubtask) -> str:
        return J2("tasks/prompt_task/assistant_output_schema_validation_subtask.j2").render(
            subtask=subtask,
        )

    def default_generate_user_subtask_template(self, subtask: OutputSchemaValidationSubtask) -> str:
        return J2("tasks/prompt_task/user_output_schema_validation_subtask.j2").render(
            subtask=subtask,
        )
```

</details>

- `_input = field(alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask._input"></span>

- `_validation_errors = field(default=None, init=False)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask._validation_errors"></span>

- `generate_assistant_subtask_template = field(default=Factory(lambda self: self.default_generate_assistant_subtask_template, takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask.generate_assistant_subtask_template"></span>

- `generate_user_subtask_template = field(default=Factory(lambda self: self.default_generate_user_subtask_template, takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask.generate_user_subtask_template"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask.input"></span>

- `output_schema = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask.output_schema"></span>

- `structured_output_strategy = field(default='rule', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask.structured_output_strategy"></span>

- `validation_errors` <small>property</small>  <span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask.validation_errors"></span>

<span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask.add_to_prompt_stack"></span>

### add\_to\_prompt\_stack(stack)

<details>

<summary>

Source Code in <code>griptape/tasks/output\_schema\_validation\_subtask.py</code>

</summary>

```python
def add_to_prompt_stack(self, stack: PromptStack) -> None:
    if self.output is None:
        return
    stack.add_assistant_message(self.generate_assistant_subtask_template(self))
    stack.add_user_message(self.generate_user_subtask_template(self))
```

</details>

<span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask.after_run"></span>

### after\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/output\_schema\_validation\_subtask.py</code>

</summary>

```python
def after_run(self) -> None:
    if self._validation_errors is None:
        logger.info("%s Validation successful", self.__class__.__name__)
    else:
        logger.error("%s Validation error: %s", self.__class__.__name__, self._validation_errors)
```

</details>

<span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask.attach_to"></span>

### attach\_to(parent\_task)

<details>

<summary>

Source Code in <code>griptape/tasks/output\_schema\_validation\_subtask.py</code>

</summary>

```python
def attach_to(self, parent_task: BaseTask) -> None:
    super().attach_to(parent_task)
    try:
        # With `native` or `rule` strategies, the output will be a json string that can be parsed.
        # With the `tool` strategy, the output will already be a `JsonArtifact`.
        if self.structured_output_strategy in ("native", "rule"):
            value_to_validate = (
                self.input.value if isinstance(self.input.value, str) else json.dumps(self.input.value)
            )
            if isinstance(self.output_schema, Schema):
                self.output_schema.validate(json.loads(value_to_validate))
                self.output = JsonArtifact(self.input.value)
            else:
                model = TypeAdapter(self.output_schema).validate_json(value_to_validate)
                self.output = ModelArtifact(model)
        else:
            self.output = self.input
    except SchemaError as e:
        self._validation_errors = str(e)
    except ValidationError as e:
        self._validation_errors = str(e.errors())
```

</details>

<span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask.before_run"></span>

### before\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/output\_schema\_validation\_subtask.py</code>

</summary>

```python
def before_run(self) -> None:
    logger.info("%s Validating: %s", self.__class__.__name__, self.input.value)
```

</details>

<span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask.default_generate_assistant_subtask_template"></span>

### default\_generate\_assistant\_subtask\_template(subtask)

<details>

<summary>

Source Code in <code>griptape/tasks/output\_schema\_validation\_subtask.py</code>

</summary>

```python
def default_generate_assistant_subtask_template(self, subtask: OutputSchemaValidationSubtask) -> str:
    return J2("tasks/prompt_task/assistant_output_schema_validation_subtask.j2").render(
        subtask=subtask,
    )
```

</details>

<span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask.default_generate_user_subtask_template"></span>

### default\_generate\_user\_subtask\_template(subtask)

<details>

<summary>

Source Code in <code>griptape/tasks/output\_schema\_validation\_subtask.py</code>

</summary>

```python
def default_generate_user_subtask_template(self, subtask: OutputSchemaValidationSubtask) -> str:
    return J2("tasks/prompt_task/user_output_schema_validation_subtask.j2").render(
        subtask=subtask,
    )
```

</details>

<span id="griptape.tasks.output_schema_validation_subtask.OutputSchemaValidationSubtask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/output\_schema\_validation\_subtask.py</code>

</summary>

```python
def try_run(self) -> BaseArtifact:
    if self._validation_errors is None:
        return self._input
    return ErrorArtifact(
        value=f"Validation error: {self._validation_errors}",
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
