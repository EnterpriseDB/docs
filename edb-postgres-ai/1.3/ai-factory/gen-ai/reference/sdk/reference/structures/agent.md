---
title: agent
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/structures/agent/
lastModified: 2025-11-07T18:06:05Z
---

# agent

<span id="griptape.structures.agent.Agent"></span>

Bases:
[`Structure`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/structures/#griptape.structures.Structure "Structure (griptape.structures.Structure)")

<details>

<summary>

Source Code in <code>griptape/structures/agent.py</code>

</summary>

```python
@define
class Agent(Structure):
    input: Union[str, list, tuple, BaseArtifact, Callable[[BaseTask], BaseArtifact]] = field(
        default=lambda task: task.full_context["args"][0] if task.full_context["args"] else TextArtifact(value=""),
    )
    stream: Optional[bool] = field(default=None, kw_only=True)
    prompt_driver: Optional[BasePromptDriver] = field(default=None, kw_only=True)
    output_schema: Optional[Union[Schema, type[BaseModel]]] = field(default=None, kw_only=True)
    tools: list[BaseTool] = field(factory=list, kw_only=True)
    max_meta_memory_entries: Optional[int] = field(default=20, kw_only=True)
    fail_fast: bool = field(default=False, kw_only=True)
    _tasks: list[Union[BaseTask, list[BaseTask]]] = field(
        factory=list, kw_only=True, alias="tasks", metadata={"serializable": True}
    )

    @fail_fast.validator  # pyright: ignore[reportAttributeAccessIssue]
    def validate_fail_fast(self, _: Attribute, fail_fast: bool) -> None:  # noqa: FBT001
        if fail_fast:
            raise ValueError("Agents cannot fail fast, as they can only have 1 task.")

    @prompt_driver.validator  # pyright: ignore[reportAttributeAccessIssue, reportOptionalMemberAccess]
    def validate_prompt_driver(self, _: Attribute, prompt_driver: Optional[BasePromptDriver]) -> None:
        if prompt_driver is not None and self.stream is not None:
            warnings.warn(
                "`Agent.prompt_driver` is set, but `Agent.stream` was provided. `Agent.stream` will be ignored. This will be an error in the future.",
                UserWarning,
                stacklevel=2,
            )

    @_tasks.validator  # pyright: ignore[reportAttributeAccessIssue]
    def validate_tasks(self, _: Attribute, tasks: list) -> None:
        if tasks and self.prompt_driver is not None:
            warnings.warn(
                "`Agent.tasks` is set, but `Agent.prompt_driver` was provided. `Agent.prompt_driver` will be ignored. This will be an error in the future.",
                UserWarning,
                stacklevel=2,
            )

    def __attrs_post_init__(self) -> None:
        super().__attrs_post_init__()

        if len(self.tasks) == 0:
            self._init_task()

    @property
    def task(self) -> BaseTask:
        return self.tasks[0]

    def add_task(self, task: BaseTask) -> BaseTask:
        self._tasks.clear()

        task.preprocess(self)

        self._tasks.append(task)

        return task

    def add_tasks(self, *tasks: BaseTask | list[BaseTask]) -> list[BaseTask]:
        if len(tasks) > 1:
            raise ValueError("Agents can only have one task.")
        return super().add_tasks(*tasks)

    @observable
    def try_run(self, *args) -> Agent:
        self.task.run()

        return self

    def _init_task(self) -> None:
        if self.stream is None:
            with validators.disabled():
                self.stream = Defaults.drivers_config.prompt_driver.stream

        if self.prompt_driver is None:
            with validators.disabled():
                prompt_driver = evolve(Defaults.drivers_config.prompt_driver, stream=self.stream)
                self.prompt_driver = prompt_driver
        else:
            prompt_driver = self.prompt_driver

        task = PromptTask(
            self.input,
            prompt_driver=prompt_driver,
            tools=self.tools,
            output_schema=self.output_schema,
            max_meta_memory_entries=self.max_meta_memory_entries,
        )

        self.add_task(task)
```

</details>

- `_tasks = field(factory=list, kw_only=True, alias='tasks', metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.structures.agent.Agent._tasks"></span>

- `fail_fast = field(default=False, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.structures.agent.Agent.fail_fast"></span>

- `input = field(default=lambda task: task.full_context['args'][0] if task.full_context['args'] else TextArtifact(value=''))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.structures.agent.Agent.input"></span>

- `max_meta_memory_entries = field(default=20, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.structures.agent.Agent.max_meta_memory_entries"></span>

- `output_schema = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.structures.agent.Agent.output_schema"></span>

- `prompt_driver = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.structures.agent.Agent.prompt_driver"></span>

- `stream = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.structures.agent.Agent.stream"></span>

- `task` <small>property</small>  <span id="griptape.structures.agent.Agent.task"></span>

- `tools = field(factory=list, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.structures.agent.Agent.tools"></span>

<span id="griptape.structures.agent.Agent.__attrs_post_init__"></span>

### **attrs\_post\_init**()

<details>

<summary>

Source Code in <code>griptape/structures/agent.py</code>

</summary>

```python
def __attrs_post_init__(self) -> None:
    super().__attrs_post_init__()

    if len(self.tasks) == 0:
        self._init_task()
```

</details>

<span id="griptape.structures.agent.Agent._init_task"></span>

### \_init\_task()

<details>

<summary>

Source Code in <code>griptape/structures/agent.py</code>

</summary>

```python
def _init_task(self) -> None:
    if self.stream is None:
        with validators.disabled():
            self.stream = Defaults.drivers_config.prompt_driver.stream

    if self.prompt_driver is None:
        with validators.disabled():
            prompt_driver = evolve(Defaults.drivers_config.prompt_driver, stream=self.stream)
            self.prompt_driver = prompt_driver
    else:
        prompt_driver = self.prompt_driver

    task = PromptTask(
        self.input,
        prompt_driver=prompt_driver,
        tools=self.tools,
        output_schema=self.output_schema,
        max_meta_memory_entries=self.max_meta_memory_entries,
    )

    self.add_task(task)
```

</details>

<span id="griptape.structures.agent.Agent.add_task"></span>

### add\_task(task)

<details>

<summary>

Source Code in <code>griptape/structures/agent.py</code>

</summary>

```python
def add_task(self, task: BaseTask) -> BaseTask:
    self._tasks.clear()

    task.preprocess(self)

    self._tasks.append(task)

    return task
```

</details>

<span id="griptape.structures.agent.Agent.add_tasks"></span>

### add\_tasks(\*tasks)

<details>

<summary>

Source Code in <code>griptape/structures/agent.py</code>

</summary>

```python
def add_tasks(self, *tasks: BaseTask | list[BaseTask]) -> list[BaseTask]:
    if len(tasks) > 1:
        raise ValueError("Agents can only have one task.")
    return super().add_tasks(*tasks)
```

</details>

<span id="griptape.structures.agent.Agent.try_run"></span>

### try\_run(\*args)

<details>

<summary>

Source Code in <code>griptape/structures/agent.py</code>

</summary>

```python
@observable
def try_run(self, *args) -> Agent:
    self.task.run()

    return self
```

</details>

<span id="griptape.structures.agent.Agent.validate_fail_fast"></span>

### validat&#x65;_&#x66;ail\_fast(_, fail\_fast)

<details>

<summary>

Source Code in <code>griptape/structures/agent.py</code>

</summary>

```python
@fail_fast.validator  # pyright: ignore[reportAttributeAccessIssue]
def validate_fail_fast(self, _: Attribute, fail_fast: bool) -> None:  # noqa: FBT001
    if fail_fast:
        raise ValueError("Agents cannot fail fast, as they can only have 1 task.")
```

</details>

<span id="griptape.structures.agent.Agent.validate_prompt_driver"></span>

### validat&#x65;_&#x70;rompt\_driver(_, prompt\_driver)

<details>

<summary>

Source Code in <code>griptape/structures/agent.py</code>

</summary>

```python
@prompt_driver.validator  # pyright: ignore[reportAttributeAccessIssue, reportOptionalMemberAccess]
def validate_prompt_driver(self, _: Attribute, prompt_driver: Optional[BasePromptDriver]) -> None:
    if prompt_driver is not None and self.stream is not None:
        warnings.warn(
            "`Agent.prompt_driver` is set, but `Agent.stream` was provided. `Agent.stream` will be ignored. This will be an error in the future.",
            UserWarning,
            stacklevel=2,
        )
```

</details>

<span id="griptape.structures.agent.Agent.validate_tasks"></span>

### validat&#x65;_&#x74;asks(_, tasks)

<details>

<summary>

Source Code in <code>griptape/structures/agent.py</code>

</summary>

```python
@_tasks.validator  # pyright: ignore[reportAttributeAccessIssue]
def validate_tasks(self, _: Attribute, tasks: list) -> None:
    if tasks and self.prompt_driver is not None:
        warnings.warn(
            "`Agent.tasks` is set, but `Agent.prompt_driver` was provided. `Agent.prompt_driver` will be ignored. This will be an error in the future.",
            UserWarning,
            stacklevel=2,
        )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
