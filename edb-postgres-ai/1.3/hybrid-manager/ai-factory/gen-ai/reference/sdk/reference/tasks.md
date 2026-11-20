---
title: tasks
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/
lastModified: 2026-05-22T19:45:14+05:30
---

# tasks

- `__all__ = ['ActionsSubtask', 'OutputSchemaValidationSubtask', 'AssistantTask', 'AudioTranscriptionTask', 'BaseAudioGenerationTask', 'BaseImageGenerationTask', 'BaseTask', 'BaseSubtask', 'BaseTextInputTask', 'BranchTask', 'CodeExecutionTask', 'ExtractionTask', 'InpaintingImageGenerationTask', 'OutpaintingImageGenerationTask', 'PromptImageGenerationTask', 'PromptTask', 'RagTask', 'StructureRunTask', 'TextSummaryTask', 'TextToSpeechTask', 'ToolTask', 'ToolkitTask', 'VariationImageGenerationTask']` <small>module-attribute</small>  <span id="griptape.tasks.__all__"></span>

<span id="griptape.tasks.ActionsSubtask"></span>

Bases:
[`BaseSubtask[Union[ListArtifact, ErrorArtifact]]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_subtask/#griptape.tasks.base_subtask.BaseSubtask "BaseSubtask (griptape.tasks.base_subtask.BaseSubtask)")

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
@define
class ActionsSubtask(BaseSubtask[Union[ListArtifact, ErrorArtifact]]):
    THOUGHT_PATTERN = r"(?s)^Thought:\s*(.*?)$"
    ACTIONS_PATTERN = r"(?s)Actions:[^\[]*(\[.*\])"
    ANSWER_PATTERN = r"(?s)^Answer:\s?([\s\S]*)$"

    RESPONSE_STOP_SEQUENCE = "<|Response|>"

    thought: Optional[str] = field(default=None, kw_only=True)
    actions: list[ToolAction] = field(factory=list, kw_only=True)
    output: Optional[BaseArtifact] = field(default=None, init=False)
    generate_assistant_subtask_template: Callable[[ActionsSubtask], str] = field(
        default=Factory(lambda self: self.default_generate_assistant_subtask_template, takes_self=True),
        kw_only=True,
    )
    generate_user_subtask_template: Callable[[ActionsSubtask], str] = field(
        default=Factory(lambda self: self.default_generate_user_subtask_template, takes_self=True),
        kw_only=True,
    )
    response_stop_sequence: str = field(default=RESPONSE_STOP_SEQUENCE, kw_only=True)
    _input: Union[str, list, tuple, BaseArtifact, Callable[[BaseTask], BaseArtifact]] = field(
        default=lambda task: task.full_context["args"][0] if task.full_context["args"] else TextArtifact(value=""),
        alias="input",
    )
    _memory: Optional[TaskMemory] = None
    _origin_task: Optional[BaseTask] = field(default=None, kw_only=True)

    @property
    def input(self) -> TextArtifact | AudioArtifact | ListArtifact:
        return self._process_task_input(self._input)

    @input.setter
    def input(self, value: str | list | tuple | BaseArtifact | Callable[[BaseTask], BaseArtifact]) -> None:
        self._input = value

    def attach_to(self, parent_task: BaseTask) -> None:
        super().attach_to(parent_task)
        self.structure = parent_task.structure

        task_input = self.input
        try:
            if isinstance(task_input, TextArtifact) and task_input.meta.get("is_react_prompt", False):
                self.__init_from_prompt(task_input.to_text())
            else:
                self.__init_from_artifact(task_input)

            # If StructuredOutputTool was used, treat the input to it as the output of the subtask.
            structured_outputs = [a for a in self.actions if isinstance(a.tool, StructuredOutputTool)]
            if structured_outputs:
                output_values = [JsonArtifact(a.input["values"]) for a in structured_outputs]
                if len(structured_outputs) > 1:
                    self.output = ListArtifact(output_values)
                else:
                    self.output = output_values[0]
        except Exception as e:
            logger.error("Subtask %s\nError parsing tool action: %s", self.origin_task.id, e)

            self.output = ErrorArtifact(f"ToolAction input parsing error: {e}", exception=e)

    def before_run(self) -> None:
        EventBus.publish_event(
            StartActionsSubtaskEvent(
                task_id=self.id,
                task_parent_ids=self.parent_ids,
                task_child_ids=self.child_ids,
                task_input=self.input,
                task_output=self.output,
                subtask_parent_task_id=self.origin_task.id,
                subtask_thought=self.thought,
                subtask_actions=self.actions_to_dicts(),
            ),
        )

        parts = [
            f"{self.__class__.__name__} {self.id}",
            *([f"\nThought: {self.thought}"] if self.thought else []),
            f"\nActions: {self.actions_to_json()}",
        ]
        logger.info("".join(parts))

    def try_run(self) -> ListArtifact | ErrorArtifact:
        try:
            if any(isinstance(a.output, ErrorArtifact) for a in self.actions):
                errors = [a.output.value for a in self.actions if isinstance(a.output, ErrorArtifact)]

                self.output = ErrorArtifact("\n\n".join(errors))
            else:
                results = self.run_actions(self.actions)

                actions_output = []
                for result in results:
                    tag, output = result
                    output.name = f"{tag} output"

                    actions_output.append(output)
                self.output = ListArtifact(actions_output)
        except Exception as e:
            logger.debug("Subtask %s\n%s", self.id, e)

            self.output = ErrorArtifact(str(e), exception=e)
        if self.output is not None:
            return self.output
        return ErrorArtifact("no tool output")

    def run_actions(self, actions: list[ToolAction]) -> list[tuple[str, BaseArtifact]]:
        with self.create_futures_executor() as futures_executor:
            return utils.execute_futures_list(
                [futures_executor.submit(with_contextvars(self.run_action), a) for a in actions]
            )

    def run_action(self, action: ToolAction) -> tuple[str, BaseArtifact]:
        if action.tool is not None:
            if action.path is not None:
                output = action.tool.run(getattr(action.tool, action.path), self, action)
            else:
                output = ErrorArtifact("action path not found")
        else:
            output = ErrorArtifact("action name not found")
        action.output = output

        return action.tag, output

    def after_run(self) -> None:
        response = self.output.to_text() if isinstance(self.output, BaseArtifact) else str(self.output)

        EventBus.publish_event(
            FinishActionsSubtaskEvent(
                task_id=self.id,
                task_parent_ids=self.parent_ids,
                task_child_ids=self.child_ids,
                task_input=self.input,
                task_output=self.output,
                subtask_parent_task_id=self.origin_task.id,
                subtask_thought=self.thought,
                subtask_actions=self.actions_to_dicts(),
            ),
        )
        logger.info("%s %s\nResponse: %s", self.__class__.__name__, self.id, response)

    def actions_to_dicts(self) -> list[dict]:
        json_list = []

        for action in self.actions:
            json_dict = {}

            if action.tag:
                json_dict["tag"] = action.tag

            if action.name:
                json_dict["name"] = action.name

            if action.path:
                json_dict["path"] = action.path

            if action.input:
                json_dict["input"] = action.input

            json_list.append(json_dict)

        return json_list

    def actions_to_json(self) -> str:
        return json.dumps(self.actions_to_dicts(), indent=2)

    def add_to_prompt_stack(self, stack: PromptStack) -> None:
        from griptape.tasks import PromptTask

        if isinstance(self.origin_task, PromptTask) and self.origin_task.prompt_driver.use_native_tools:
            action_calls = [
                ToolAction(name=action.name, path=action.path, tag=action.tag, input=action.input)
                for action in self.actions
            ]
            action_results = [
                ToolAction(
                    name=action.name,
                    path=action.path,
                    tag=action.tag,
                    output=action.output if action.output is not None else self.output,
                )
                for action in self.actions
            ]

            stack.add_assistant_message(
                ListArtifact(
                    [
                        *([TextArtifact(self.thought)] if self.thought else []),
                        *[ActionArtifact(a) for a in action_calls],
                    ],
                ),
            )
            stack.add_user_message(
                ListArtifact(
                    [
                        *[ActionArtifact(a) for a in action_results],
                        *([] if self.output else [TextArtifact("Please keep going")]),
                    ],
                ),
            )
        else:
            stack.add_assistant_message(self.generate_assistant_subtask_template(self))
            stack.add_user_message(self.generate_user_subtask_template(self))

    def default_generate_assistant_subtask_template(self, subtask: ActionsSubtask) -> str:
        return J2("tasks/prompt_task/assistant_actions_subtask.j2").render(
            stop_sequence=self.response_stop_sequence,
            subtask=subtask,
        )

    def default_generate_user_subtask_template(self, subtask: ActionsSubtask) -> str:
        return J2("tasks/prompt_task/user_actions_subtask.j2").render(
            stop_sequence=self.response_stop_sequence,
            subtask=subtask,
        )

    def _process_task_input(
        self,
        task_input: Union[str, tuple, list, BaseArtifact, Callable[[BaseTask], BaseArtifact]],
    ) -> Union[TextArtifact, AudioArtifact, ListArtifact]:
        if isinstance(task_input, (TextArtifact, AudioArtifact, ListArtifact)):
            return task_input
        if isinstance(task_input, ActionArtifact):
            return ListArtifact([task_input])
        if isinstance(task_input, Callable):
            return self._process_task_input(task_input(self))
        if isinstance(task_input, str):
            return self._process_task_input(TextArtifact(task_input))
        if isinstance(task_input, (list, tuple)):
            return ListArtifact([self._process_task_input(elem) for elem in task_input])
        raise ValueError(f"Invalid input type: {type(task_input)} ")

    def __init_from_prompt(self, value: str) -> None:
        thought_matches = re.findall(self.THOUGHT_PATTERN, value, re.MULTILINE)
        actions_matches = re.findall(self.ACTIONS_PATTERN, value, re.DOTALL)
        answer_matches = re.findall(self.ANSWER_PATTERN, value, re.MULTILINE)

        self.actions = self.__parse_actions(actions_matches)

        if thought_matches:
            self.thought = thought_matches[-1]

        if not self.actions and self.output is None:
            if answer_matches:
                # A direct answer is provided, set it as the output.
                self.output = TextArtifact(answer_matches[-1])
            else:
                # The LLM failed to follow the ReAct prompt, set the LLM's raw response as the output.
                self.output = TextArtifact(value)

    def __init_from_artifact(self, artifact: TextArtifact | AudioArtifact | ListArtifact) -> None:
        """Parses the input Artifact to extract either a final answer or thought and actions.

        When the input Artifact is a TextArtifact, it is assumed to be the final answer.
        When the input Artifact is a ListArtifact, it is assumed to contain both thought and actions.
        Text Artifacts are parsed as the thought, and ToolAction Artifacts parsed as the actions.

        Args:
            artifact: The input Artifacts.

        Returns:
            None
        """
        # When using native tools, we can assume that a TextArtifact or AudioArtifact is the LLM providing its final answer.
        if isinstance(artifact, (TextArtifact, AudioArtifact)):
            self.output = artifact
            return

        self.actions = [
            self.__process_action_object(artifact.value.to_dict())
            for artifact in artifact.value
            if isinstance(artifact, ActionArtifact)
        ]

        # When parsing from Artifacts we can't determine the thought unless there are also Actions
        if self.actions:
            thoughts = [artifact.value for artifact in artifact.value if isinstance(artifact, TextArtifact)]
            if thoughts:
                self.thought = thoughts[0]
        elif self.output is None:
            self.output = TextArtifact(artifact.to_text())

    def __parse_actions(self, actions_matches: list[str]) -> list[ToolAction]:
        if len(actions_matches) == 0:
            return []
        try:
            data = actions_matches[-1]
            actions_list: list[dict] = json.loads(data, strict=False)

            return [self.__process_action_object(action_object) for action_object in actions_list]
        except json.JSONDecodeError as e:
            logger.debug("Subtask %s\nInvalid actions JSON: %s", self.origin_task.id, e)

            self.output = ErrorArtifact(f"Actions JSON decoding error: {e}", exception=e)

            return []

    def __process_action_object(self, action_object: dict) -> ToolAction:
        # Load action tag; throw exception if the key is not present
        action_tag = action_object["tag"]

        # Load action name; throw exception if the key is not present
        action_name = action_object["name"]

        # Load action method; throw exception if the key is not present
        action_path = action_object["path"]

        # Load optional input value; don't throw exceptions if key is not present
        if "input" in action_object:
            # Some LLMs don't support nested parameters and therefore won't generate "values".
            # So we need to manually add it here.
            if "values" not in action_object["input"]:
                action_object["input"] = {"values": action_object["input"]}

            # The schema library has a bug, where something like `Or(str, None)` doesn't get
            # correctly translated into JSON schema. For some optional input fields LLMs sometimes
            # still provide null value, which trips up the validator. The temporary solution that
            # works is to strip all key-values where value is null.
            action_input = remove_null_values_in_dict_recursively(action_object["input"])
        else:
            action_input = {}

        # Load the action itself
        if isinstance(self.origin_task, ActionsSubtaskOriginMixin):
            tool = self.origin_task.find_tool(action_name)
        else:
            raise Exception("ActionSubtask must be attached to a Task that implements ActionSubtaskOriginMixin.")

        action = ToolAction(tag=action_tag, name=action_name, path=action_path, input=action_input, tool=tool)

        self.__validate_action(action)

        return action

    def __validate_action(self, action: ToolAction) -> None:
        if action.tool is None:
            return

        if action.path is None:
            raise Exception("ToolAction path not found.")
        activity = getattr(action.tool, action.path)

        if activity is None:
            raise Exception("Activity not found.")

        activity_schema = action.tool.activity_schema(activity)

        if activity_schema is None or action.input is None:
            return

        try:
            action.tool.validate_activity_schema(activity_schema, action.input)
        except ValueError as e:
            logger.debug("Subtask %s\nInvalid action JSON: %s", self.origin_task.id, e)

            action.output = ErrorArtifact(f"Activity input JSON validation error: {e}", exception=e)
```

</details>

- `ACTIONS_PATTERN = '(?s)Actions:[^\\[]*(\\[.*\\])'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ActionsSubtask.ACTIONS_PATTERN"></span>

- `ANSWER_PATTERN = '(?s)^Answer:\\s?([\\s\\S]*)$'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ActionsSubtask.ANSWER_PATTERN"></span>

- `RESPONSE_STOP_SEQUENCE = '<|Response|>'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ActionsSubtask.RESPONSE_STOP_SEQUENCE"></span>

- `THOUGHT_PATTERN = '(?s)^Thought:\\s*(.*?)$'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ActionsSubtask.THOUGHT_PATTERN"></span>

- `_input = field(default=lambda task: task.full_context['args'][0] if task.full_context['args'] else TextArtifact(value=''), alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ActionsSubtask._input"></span>

- `_memory = None` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ActionsSubtask._memory"></span>

- `_origin_task = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ActionsSubtask._origin_task"></span>

- `actions = field(factory=list, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ActionsSubtask.actions"></span>

- `generate_assistant_subtask_template = field(default=Factory(lambda self: self.default_generate_assistant_subtask_template, takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ActionsSubtask.generate_assistant_subtask_template"></span>

- `generate_user_subtask_template = field(default=Factory(lambda self: self.default_generate_user_subtask_template, takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ActionsSubtask.generate_user_subtask_template"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.ActionsSubtask.input"></span>

- `output = field(default=None, init=False)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ActionsSubtask.output"></span>

- `response_stop_sequence = field(default=RESPONSE_STOP_SEQUENCE, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ActionsSubtask.response_stop_sequence"></span>

- `thought = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ActionsSubtask.thought"></span>

<span id="griptape.tasks.ActionsSubtask.__init_from_artifact"></span>

### \_\_init\_from\_artifact(artifact)

Parses the input Artifact to extract either a final answer or thought and actions.

When the input Artifact is a TextArtifact, it is assumed to be the final answer. When the input Artifact is a ListArtifact, it is assumed to contain both thought and actions. Text Artifacts are parsed as the thought, and ToolAction Artifacts parsed as the actions.

#### Parameters

| Name       | Type                                                                                                                                                                                                                                                                                                              | Description               | Default    |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------- |
| `artifact` | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/artifacts/#griptape.artifacts.TextArtifact" title="TextArtifact (griptape.artifacts.TextArtifact)"><code class="language-python">TextArtifact \| AudioArtifact \| ListArtifact</code></a> | The input Artifacts.<br/> | `required` |

#### Returns

| Type   | Description |
| ------ | ----------- |
| `None` | None<br/>   |

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def __init_from_artifact(self, artifact: TextArtifact | AudioArtifact | ListArtifact) -> None:
    """Parses the input Artifact to extract either a final answer or thought and actions.

    When the input Artifact is a TextArtifact, it is assumed to be the final answer.
    When the input Artifact is a ListArtifact, it is assumed to contain both thought and actions.
    Text Artifacts are parsed as the thought, and ToolAction Artifacts parsed as the actions.

    Args:
        artifact: The input Artifacts.

    Returns:
        None
    """
    # When using native tools, we can assume that a TextArtifact or AudioArtifact is the LLM providing its final answer.
    if isinstance(artifact, (TextArtifact, AudioArtifact)):
        self.output = artifact
        return

    self.actions = [
        self.__process_action_object(artifact.value.to_dict())
        for artifact in artifact.value
        if isinstance(artifact, ActionArtifact)
    ]

    # When parsing from Artifacts we can't determine the thought unless there are also Actions
    if self.actions:
        thoughts = [artifact.value for artifact in artifact.value if isinstance(artifact, TextArtifact)]
        if thoughts:
            self.thought = thoughts[0]
    elif self.output is None:
        self.output = TextArtifact(artifact.to_text())
```

</details>

<span id="griptape.tasks.ActionsSubtask.__init_from_prompt"></span>

### \_\_init\_from\_prompt(value)

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def __init_from_prompt(self, value: str) -> None:
    thought_matches = re.findall(self.THOUGHT_PATTERN, value, re.MULTILINE)
    actions_matches = re.findall(self.ACTIONS_PATTERN, value, re.DOTALL)
    answer_matches = re.findall(self.ANSWER_PATTERN, value, re.MULTILINE)

    self.actions = self.__parse_actions(actions_matches)

    if thought_matches:
        self.thought = thought_matches[-1]

    if not self.actions and self.output is None:
        if answer_matches:
            # A direct answer is provided, set it as the output.
            self.output = TextArtifact(answer_matches[-1])
        else:
            # The LLM failed to follow the ReAct prompt, set the LLM's raw response as the output.
            self.output = TextArtifact(value)
```

</details>

<span id="griptape.tasks.ActionsSubtask.__parse_actions"></span>

### \_\_parse\_actions(actions\_matches)

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def __parse_actions(self, actions_matches: list[str]) -> list[ToolAction]:
    if len(actions_matches) == 0:
        return []
    try:
        data = actions_matches[-1]
        actions_list: list[dict] = json.loads(data, strict=False)

        return [self.__process_action_object(action_object) for action_object in actions_list]
    except json.JSONDecodeError as e:
        logger.debug("Subtask %s\nInvalid actions JSON: %s", self.origin_task.id, e)

        self.output = ErrorArtifact(f"Actions JSON decoding error: {e}", exception=e)

        return []
```

</details>

<span id="griptape.tasks.ActionsSubtask.__process_action_object"></span>

### \_\_process\_action\_object(action\_object)

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def __process_action_object(self, action_object: dict) -> ToolAction:
    # Load action tag; throw exception if the key is not present
    action_tag = action_object["tag"]

    # Load action name; throw exception if the key is not present
    action_name = action_object["name"]

    # Load action method; throw exception if the key is not present
    action_path = action_object["path"]

    # Load optional input value; don't throw exceptions if key is not present
    if "input" in action_object:
        # Some LLMs don't support nested parameters and therefore won't generate "values".
        # So we need to manually add it here.
        if "values" not in action_object["input"]:
            action_object["input"] = {"values": action_object["input"]}

        # The schema library has a bug, where something like `Or(str, None)` doesn't get
        # correctly translated into JSON schema. For some optional input fields LLMs sometimes
        # still provide null value, which trips up the validator. The temporary solution that
        # works is to strip all key-values where value is null.
        action_input = remove_null_values_in_dict_recursively(action_object["input"])
    else:
        action_input = {}

    # Load the action itself
    if isinstance(self.origin_task, ActionsSubtaskOriginMixin):
        tool = self.origin_task.find_tool(action_name)
    else:
        raise Exception("ActionSubtask must be attached to a Task that implements ActionSubtaskOriginMixin.")

    action = ToolAction(tag=action_tag, name=action_name, path=action_path, input=action_input, tool=tool)

    self.__validate_action(action)

    return action
```

</details>

<span id="griptape.tasks.ActionsSubtask.__validate_action"></span>

### \_\_validate\_action(action)

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def __validate_action(self, action: ToolAction) -> None:
    if action.tool is None:
        return

    if action.path is None:
        raise Exception("ToolAction path not found.")
    activity = getattr(action.tool, action.path)

    if activity is None:
        raise Exception("Activity not found.")

    activity_schema = action.tool.activity_schema(activity)

    if activity_schema is None or action.input is None:
        return

    try:
        action.tool.validate_activity_schema(activity_schema, action.input)
    except ValueError as e:
        logger.debug("Subtask %s\nInvalid action JSON: %s", self.origin_task.id, e)

        action.output = ErrorArtifact(f"Activity input JSON validation error: {e}", exception=e)
```

</details>

<span id="griptape.tasks.ActionsSubtask._process_task_input"></span>

### \_process\_task\_input(task\_input)

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def _process_task_input(
    self,
    task_input: Union[str, tuple, list, BaseArtifact, Callable[[BaseTask], BaseArtifact]],
) -> Union[TextArtifact, AudioArtifact, ListArtifact]:
    if isinstance(task_input, (TextArtifact, AudioArtifact, ListArtifact)):
        return task_input
    if isinstance(task_input, ActionArtifact):
        return ListArtifact([task_input])
    if isinstance(task_input, Callable):
        return self._process_task_input(task_input(self))
    if isinstance(task_input, str):
        return self._process_task_input(TextArtifact(task_input))
    if isinstance(task_input, (list, tuple)):
        return ListArtifact([self._process_task_input(elem) for elem in task_input])
    raise ValueError(f"Invalid input type: {type(task_input)} ")
```

</details>

<span id="griptape.tasks.ActionsSubtask.actions_to_dicts"></span>

### actions\_to\_dicts()

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def actions_to_dicts(self) -> list[dict]:
    json_list = []

    for action in self.actions:
        json_dict = {}

        if action.tag:
            json_dict["tag"] = action.tag

        if action.name:
            json_dict["name"] = action.name

        if action.path:
            json_dict["path"] = action.path

        if action.input:
            json_dict["input"] = action.input

        json_list.append(json_dict)

    return json_list
```

</details>

<span id="griptape.tasks.ActionsSubtask.actions_to_json"></span>

### actions\_to\_json()

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def actions_to_json(self) -> str:
    return json.dumps(self.actions_to_dicts(), indent=2)
```

</details>

<span id="griptape.tasks.ActionsSubtask.add_to_prompt_stack"></span>

### add\_to\_prompt\_stack(stack)

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def add_to_prompt_stack(self, stack: PromptStack) -> None:
    from griptape.tasks import PromptTask

    if isinstance(self.origin_task, PromptTask) and self.origin_task.prompt_driver.use_native_tools:
        action_calls = [
            ToolAction(name=action.name, path=action.path, tag=action.tag, input=action.input)
            for action in self.actions
        ]
        action_results = [
            ToolAction(
                name=action.name,
                path=action.path,
                tag=action.tag,
                output=action.output if action.output is not None else self.output,
            )
            for action in self.actions
        ]

        stack.add_assistant_message(
            ListArtifact(
                [
                    *([TextArtifact(self.thought)] if self.thought else []),
                    *[ActionArtifact(a) for a in action_calls],
                ],
            ),
        )
        stack.add_user_message(
            ListArtifact(
                [
                    *[ActionArtifact(a) for a in action_results],
                    *([] if self.output else [TextArtifact("Please keep going")]),
                ],
            ),
        )
    else:
        stack.add_assistant_message(self.generate_assistant_subtask_template(self))
        stack.add_user_message(self.generate_user_subtask_template(self))
```

</details>

<span id="griptape.tasks.ActionsSubtask.after_run"></span>

### after\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def after_run(self) -> None:
    response = self.output.to_text() if isinstance(self.output, BaseArtifact) else str(self.output)

    EventBus.publish_event(
        FinishActionsSubtaskEvent(
            task_id=self.id,
            task_parent_ids=self.parent_ids,
            task_child_ids=self.child_ids,
            task_input=self.input,
            task_output=self.output,
            subtask_parent_task_id=self.origin_task.id,
            subtask_thought=self.thought,
            subtask_actions=self.actions_to_dicts(),
        ),
    )
    logger.info("%s %s\nResponse: %s", self.__class__.__name__, self.id, response)
```

</details>

<span id="griptape.tasks.ActionsSubtask.attach_to"></span>

### attach\_to(parent\_task)

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def attach_to(self, parent_task: BaseTask) -> None:
    super().attach_to(parent_task)
    self.structure = parent_task.structure

    task_input = self.input
    try:
        if isinstance(task_input, TextArtifact) and task_input.meta.get("is_react_prompt", False):
            self.__init_from_prompt(task_input.to_text())
        else:
            self.__init_from_artifact(task_input)

        # If StructuredOutputTool was used, treat the input to it as the output of the subtask.
        structured_outputs = [a for a in self.actions if isinstance(a.tool, StructuredOutputTool)]
        if structured_outputs:
            output_values = [JsonArtifact(a.input["values"]) for a in structured_outputs]
            if len(structured_outputs) > 1:
                self.output = ListArtifact(output_values)
            else:
                self.output = output_values[0]
    except Exception as e:
        logger.error("Subtask %s\nError parsing tool action: %s", self.origin_task.id, e)

        self.output = ErrorArtifact(f"ToolAction input parsing error: {e}", exception=e)
```

</details>

<span id="griptape.tasks.ActionsSubtask.before_run"></span>

### before\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def before_run(self) -> None:
    EventBus.publish_event(
        StartActionsSubtaskEvent(
            task_id=self.id,
            task_parent_ids=self.parent_ids,
            task_child_ids=self.child_ids,
            task_input=self.input,
            task_output=self.output,
            subtask_parent_task_id=self.origin_task.id,
            subtask_thought=self.thought,
            subtask_actions=self.actions_to_dicts(),
        ),
    )

    parts = [
        f"{self.__class__.__name__} {self.id}",
        *([f"\nThought: {self.thought}"] if self.thought else []),
        f"\nActions: {self.actions_to_json()}",
    ]
    logger.info("".join(parts))
```

</details>

<span id="griptape.tasks.ActionsSubtask.default_generate_assistant_subtask_template"></span>

### default\_generate\_assistant\_subtask\_template(subtask)

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def default_generate_assistant_subtask_template(self, subtask: ActionsSubtask) -> str:
    return J2("tasks/prompt_task/assistant_actions_subtask.j2").render(
        stop_sequence=self.response_stop_sequence,
        subtask=subtask,
    )
```

</details>

<span id="griptape.tasks.ActionsSubtask.default_generate_user_subtask_template"></span>

### default\_generate\_user\_subtask\_template(subtask)

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def default_generate_user_subtask_template(self, subtask: ActionsSubtask) -> str:
    return J2("tasks/prompt_task/user_actions_subtask.j2").render(
        stop_sequence=self.response_stop_sequence,
        subtask=subtask,
    )
```

</details>

<span id="griptape.tasks.ActionsSubtask.run_action"></span>

### run\_action(action)

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def run_action(self, action: ToolAction) -> tuple[str, BaseArtifact]:
    if action.tool is not None:
        if action.path is not None:
            output = action.tool.run(getattr(action.tool, action.path), self, action)
        else:
            output = ErrorArtifact("action path not found")
    else:
        output = ErrorArtifact("action name not found")
    action.output = output

    return action.tag, output
```

</details>

<span id="griptape.tasks.ActionsSubtask.run_actions"></span>

### run\_actions(actions)

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def run_actions(self, actions: list[ToolAction]) -> list[tuple[str, BaseArtifact]]:
    with self.create_futures_executor() as futures_executor:
        return utils.execute_futures_list(
            [futures_executor.submit(with_contextvars(self.run_action), a) for a in actions]
        )
```

</details>

<span id="griptape.tasks.ActionsSubtask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/actions\_subtask.py</code>

</summary>

```python
def try_run(self) -> ListArtifact | ErrorArtifact:
    try:
        if any(isinstance(a.output, ErrorArtifact) for a in self.actions):
            errors = [a.output.value for a in self.actions if isinstance(a.output, ErrorArtifact)]

            self.output = ErrorArtifact("\n\n".join(errors))
        else:
            results = self.run_actions(self.actions)

            actions_output = []
            for result in results:
                tag, output = result
                output.name = f"{tag} output"

                actions_output.append(output)
            self.output = ListArtifact(actions_output)
    except Exception as e:
        logger.debug("Subtask %s\n%s", self.id, e)

        self.output = ErrorArtifact(str(e), exception=e)
    if self.output is not None:
        return self.output
    return ErrorArtifact("no tool output")
```

</details>

<span id="griptape.tasks.AssistantTask"></span>

## AssistantTask

Bases:
[`BaseTextInputTask[TextArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTextInputTask "BaseTextInputTask (griptape.tasks.BaseTextInputTask)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                                                                 | Description                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.AssistantTask.assistant_driver" title="assistant_driver = field(kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.AssistantTask.assistant_driver)"><code class="language-python">assistant\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/assistant/#griptape.drivers.assistant.BaseAssistantDriver" title="BaseAssistantDriver (griptape.drivers.assistant.BaseAssistantDriver)"><code class="language-python">BaseAssistantDriver</code></a> | Driver to run the Assistant.<br/> |

<details>

<summary>

Source Code in <code>griptape/tasks/assistant\_task.py</code>

</summary>

```python
@define
class AssistantTask(BaseTextInputTask[TextArtifact]):
    """Task to run an Assistant.

    Attributes:
        assistant_driver: Driver to run the Assistant.
    """

    assistant_driver: BaseAssistantDriver = field(kw_only=True)

    def try_run(self) -> TextArtifact:
        return self.assistant_driver.run(self.input)
```

</details>

- `assistant_driver = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.AssistantTask.assistant_driver"></span>

<span id="griptape.tasks.AssistantTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/assistant\_task.py</code>

</summary>

```python
def try_run(self) -> TextArtifact:
    return self.assistant_driver.run(self.input)
```

</details>

<span id="griptape.tasks.AudioTranscriptionTask"></span>

## AudioTranscriptionTask

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

- `audio_transcription_driver = field(default=Factory(lambda: Defaults.drivers_config.audio_transcription_driver), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.AudioTranscriptionTask.audio_transcription_driver"></span>

<span id="griptape.tasks.AudioTranscriptionTask.try_run"></span>

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

<span id="griptape.tasks.BaseAudioGenerationTask"></span>

## BaseAudioGenerationTask

Bases:
[`ArtifactFileOutputMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin "ArtifactFileOutputMixin (griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin)")
,  [`RuleMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/rule_mixin/#griptape.mixins.rule_mixin.RuleMixin "RuleMixin (griptape.mixins.rule_mixin.RuleMixin)")
,  [`BaseTask[AudioArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTask "BaseTask (griptape.tasks.BaseTask)")
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

<span id="griptape.tasks.BaseAudioGenerationTask.after_run"></span>

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

<span id="griptape.tasks.BaseAudioGenerationTask.before_run"></span>

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

<span id="griptape.tasks.BaseImageGenerationTask"></span>

## BaseImageGenerationTask

Bases:
[`ArtifactFileOutputMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin "ArtifactFileOutputMixin (griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin)")
,  [`RuleMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/rule_mixin/#griptape.mixins.rule_mixin.RuleMixin "RuleMixin (griptape.mixins.rule_mixin.RuleMixin)")
,  [`BaseTask[ImageArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTask "BaseTask (griptape.tasks.BaseTask)")
, <span title="abc.ABC">ABC</span>

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                            | Description                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rulesets" title="negative_rulesets           property    (griptape.tasks.BaseImageGenerationTask.negative_rulesets)"><code class="language-python">negative\_rulesets</code></a>                                                                                                     | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Ruleset]</code></a> | List of negatively-weighted rulesets applied to the text prompt, if supported by the driver.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rules" title="negative_rules = field(factory=list, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.BaseImageGenerationTask.negative_rules)"><code class="language-python">negative\_rules</code></a>                                             | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Rule]</code></a>    | List of negatively-weighted rules applied to the text prompt, if supported by the driver.<br/>    |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_dir" title="output_dir = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.BaseImageGenerationTask.output_dir)"><code class="language-python">output\_dir</code></a>     | `Optional[str]`                                                                                                                                                                                                 | If provided, the generated image will be written to disk in output\_dir.<br/>                     |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_file" title="output_file = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.BaseImageGenerationTask.output_file)"><code class="language-python">output\_file</code></a> | `Optional[str]`                                                                                                                                                                                                 | If provided, the generated image will be written to disk as output\_file.<br/>                    |

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

- `DEFAULT_NEGATIVE_RULESET_NAME = 'Negative Ruleset'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseImageGenerationTask.DEFAULT_NEGATIVE_RULESET_NAME"></span>

- `_negative_rulesets = field(factory=list, kw_only=True, alias='negative_rulesets')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseImageGenerationTask._negative_rulesets"></span>

- `image_generation_driver = field(default=Factory(lambda: Defaults.drivers_config.image_generation_driver), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseImageGenerationTask.image_generation_driver"></span>

- `negative_rules = field(factory=list, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseImageGenerationTask.negative_rules"></span>

- `negative_rulesets` <small>property</small>  <span id="griptape.tasks.BaseImageGenerationTask.negative_rulesets"></span>

<span id="griptape.tasks.BaseImageGenerationTask._get_negative_prompts"></span>

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

<span id="griptape.tasks.BaseImageGenerationTask._get_prompts"></span>

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

<span id="griptape.tasks.BaseImageGenerationTask._read_from_file"></span>

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

<span id="griptape.tasks.BaseSubtask"></span>

## BaseSubtask

Bases:
[`BaseTask[T]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTask "BaseTask (griptape.tasks.BaseTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/base\_subtask.py</code>

</summary>

```python
@define
class BaseSubtask(BaseTask[T]):
    @property
    def origin_task(self) -> BaseTask:
        if self._origin_task is not None:
            return self._origin_task
        raise Exception("ActionSubtask has no origin task.")

    @property
    def parents(self) -> list[BaseTask]:
        if isinstance(self.origin_task, ActionsSubtaskOriginMixin):
            return [self.origin_task.find_subtask(parent_id) for parent_id in self.parent_ids]
        raise Exception("ActionSubtask must be attached to a Task that implements ActionSubtaskOriginMixin.")

    @property
    def children(self) -> list[BaseTask]:
        if isinstance(self.origin_task, ActionsSubtaskOriginMixin):
            return [self.origin_task.find_subtask(child_id) for child_id in self.child_ids]
        raise Exception("ActionSubtask must be attached to a Task that implements ActionSubtaskOriginMixin.")

    def add_child(self, child: BaseTask) -> BaseTask:
        if child.id not in self.child_ids:
            self.child_ids.append(child.id)
        return child

    def add_parent(self, parent: BaseTask) -> BaseTask:
        if parent.id not in self.parent_ids:
            self.parent_ids.append(parent.id)
        return parent

    def attach_to(self, parent_task: BaseTask) -> None:
        self._origin_task = parent_task

    @abstractmethod
    def add_to_prompt_stack(self, stack: PromptStack) -> None: ...
```

</details>

- `children` <small>property</small>  <span id="griptape.tasks.BaseSubtask.children"></span>

- `origin_task` <small>property</small>  <span id="griptape.tasks.BaseSubtask.origin_task"></span>

- `parents` <small>property</small>  <span id="griptape.tasks.BaseSubtask.parents"></span>

<span id="griptape.tasks.BaseSubtask.add_child"></span>

### add\_child(child)

<details>

<summary>

Source Code in <code>griptape/tasks/base\_subtask.py</code>

</summary>

```python
def add_child(self, child: BaseTask) -> BaseTask:
    if child.id not in self.child_ids:
        self.child_ids.append(child.id)
    return child
```

</details>

<span id="griptape.tasks.BaseSubtask.add_parent"></span>

### add\_parent(parent)

<details>

<summary>

Source Code in <code>griptape/tasks/base\_subtask.py</code>

</summary>

```python
def add_parent(self, parent: BaseTask) -> BaseTask:
    if parent.id not in self.parent_ids:
        self.parent_ids.append(parent.id)
    return parent
```

</details>

<span id="griptape.tasks.BaseSubtask.add_to_prompt_stack"></span>

### add\_to\_prompt\_stack(stack)abstractmethod

<details>

<summary>

Source Code in <code>griptape/tasks/base\_subtask.py</code>

</summary>

```python
@abstractmethod
def add_to_prompt_stack(self, stack: PromptStack) -> None: ...
```

</details>

<span id="griptape.tasks.BaseSubtask.attach_to"></span>

### attach\_to(parent\_task)

<details>

<summary>

Source Code in <code>griptape/tasks/base\_subtask.py</code>

</summary>

```python
def attach_to(self, parent_task: BaseTask) -> None:
    self._origin_task = parent_task
```

</details>

<span id="griptape.tasks.BaseTask"></span>

## BaseTask

Bases:
[`FuturesExecutorMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/futures_executor_mixin/#griptape.mixins.futures_executor_mixin.FuturesExecutorMixin "FuturesExecutorMixin (griptape.mixins.futures_executor_mixin.FuturesExecutorMixin)")
,  [`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")
,  [`RunnableMixin[&#39;BaseTask&#39;]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/runnable_mixin/#griptape.mixins.runnable_mixin.RunnableMixin "RunnableMixin (griptape.mixins.runnable_mixin.RunnableMixin)")
, <span title="abc.ABC">ABC</span>,  [`Generic[T]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_task/#griptape.tasks.base_task.T "typing.Generic")

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
@define
class BaseTask(FuturesExecutorMixin, SerializableMixin, RunnableMixin["BaseTask"], ABC, Generic[T]):
    class State(Enum):
        PENDING = 1
        RUNNING = 2
        FINISHED = 3
        SKIPPED = 4

    id: str = field(default=Factory(lambda: uuid.uuid4().hex), kw_only=True, metadata={"serializable": True})
    state: State = field(default=State.PENDING, kw_only=True, metadata={"serializable": True})
    parent_ids: list[str] = field(factory=list, kw_only=True, metadata={"serializable": True})
    child_ids: list[str] = field(factory=list, kw_only=True, metadata={"serializable": True})
    max_meta_memory_entries: Optional[int] = field(default=20, kw_only=True, metadata={"serializable": True})
    structure: Optional[Structure] = field(default=None, kw_only=True)

    output: Optional[T] = field(default=None, init=False)
    context: dict[str, Any] = field(factory=dict, kw_only=True, metadata={"serializable": True})
    _execution_args: tuple = field(factory=tuple, init=False)

    @property
    def execution_args(self) -> tuple:
        return self._execution_args

    def __rshift__(self, other: BaseTask | list[BaseTask]) -> BaseTask | list[BaseTask]:
        if isinstance(other, list):
            self.add_children(other)
        else:
            self.add_child(other)

        return other

    def __lshift__(self, other: BaseTask | list[BaseTask]) -> BaseTask | list[BaseTask]:
        if isinstance(other, list):
            self.add_parents(other)
        else:
            self.add_parent(other)

        return other

    def __attrs_post_init__(self) -> None:
        if self.structure is not None:
            self.structure.add_task(self)

    @property
    @abstractmethod
    def input(self) -> BaseArtifact: ...

    @property
    def parents(self) -> list[BaseTask]:
        if self.structure is not None:
            return [self.structure.find_task(parent_id) for parent_id in self.parent_ids]
        raise ValueError("Structure must be set to access parents")

    @property
    def children(self) -> list[BaseTask]:
        if self.structure is not None:
            return [self.structure.find_task(child_id) for child_id in self.child_ids]
        raise ValueError("Structure must be set to access children")

    @property
    def parent_outputs(self) -> dict[str, BaseArtifact]:
        return {parent.id: parent.output for parent in self.parents if parent.output}

    @property
    def parents_output_text(self) -> str:
        return "\n".join([parent.output.to_text() for parent in self.parents if parent.output])

    @property
    def meta_memories(self) -> list[BaseMetaEntry]:
        if self.structure is not None and self.structure.meta_memory:
            if self.max_meta_memory_entries:
                return self.structure.meta_memory.entries[: self.max_meta_memory_entries]
            return self.structure.meta_memory.entries
        return []

    def __str__(self) -> str:
        return str(self.output.value) if self.output is not None else ""

    def add_parents(self, parents: list[BaseTask]) -> None:
        for parent in parents:
            self.add_parent(parent)

    def add_parent(self, parent: BaseTask) -> BaseTask:
        if parent.id not in self.parent_ids:
            self.parent_ids.append(parent.id)

        if self.id not in parent.child_ids:
            parent.child_ids.append(self.id)

        if self.structure is not None and parent not in self.structure.tasks:
            self.structure.add_task(parent)

        return self

    def add_children(self, children: list[BaseTask]) -> None:
        for child in children:
            self.add_child(child)

    def add_child(self, child: BaseTask) -> BaseTask:
        if child.id not in self.child_ids:
            self.child_ids.append(child.id)

        if self.id not in child.parent_ids:
            child.parent_ids.append(self.id)

        if self.structure is not None and child not in self.structure.tasks:
            self.structure.add_task(child)

        return self

    def preprocess(self, structure: Structure) -> BaseTask:
        self.structure = structure

        return self

    def is_pending(self) -> bool:
        return self.state == BaseTask.State.PENDING

    def is_finished(self) -> bool:
        return self.state == BaseTask.State.FINISHED

    def is_running(self) -> bool:
        return self.state == BaseTask.State.RUNNING

    def is_skipped(self) -> bool:
        return self.state == BaseTask.State.SKIPPED

    def before_run(self) -> None:
        super().before_run()
        if self.structure is not None:
            EventBus.publish_event(
                StartTaskEvent(
                    task_id=self.id,
                    task_parent_ids=self.parent_ids,
                    task_child_ids=self.child_ids,
                    task_input=self.input,
                    task_output=self.output,
                ),
            )

    def run(self, *args) -> T:
        try:
            self._execution_args = args

            self.state = BaseTask.State.RUNNING

            self.before_run()

            self.output = self.try_run()

            self.after_run()
        except Exception as e:
            logger.exception("%s %s\n%s", self.__class__.__name__, self.id, e)

            self.output = cast("T", ErrorArtifact(str(e), exception=e))
        finally:
            self.state = BaseTask.State.FINISHED

        return self.output

    def after_run(self) -> None:
        super().after_run()
        if self.structure is not None:
            EventBus.publish_event(
                FinishTaskEvent(
                    task_id=self.id,
                    task_parent_ids=self.parent_ids,
                    task_child_ids=self.child_ids,
                    task_input=self.input,
                    task_output=self.output,
                ),
            )

    def can_run(self) -> bool:
        # If this Task has been skipped or is not pending, it should not run
        if self.is_skipped() or not self.is_pending():
            return False

        # If this Task has parents, and _all_ of them are skipped, it should not run
        if self.parents and all(parent.is_skipped() for parent in self.parents):
            self.state = BaseTask.State.SKIPPED
            return False

        # If _all_ this Task's unskipped parents are finished, it should run
        unskipped_parents = [parent for parent in self.parents if not parent.is_skipped()]

        return all(parent.is_finished() for parent in unskipped_parents)

    def reset(self) -> BaseTask:
        self.state = BaseTask.State.PENDING
        self.output = None
        self._execution_args = ()

        return self

    @abstractmethod
    def try_run(self) -> T: ...

    @property
    def full_context(self) -> dict[str, Any]:
        # Need to deep copy so that the serialized context doesn't contain non-serializable data
        context = deepcopy(self.context)
        if self.structure is None:
            context.update({"args": self._execution_args})
        else:
            context.update(self.structure.context(self))

        return context
```

</details>

- `_execution_args = field(factory=tuple, init=False)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTask._execution_args"></span>

- `child_ids = field(factory=list, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTask.child_ids"></span>

- `children` <small>property</small>  <span id="griptape.tasks.BaseTask.children"></span>

- `context = field(factory=dict, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTask.context"></span>

- `execution_args` <small>property</small>  <span id="griptape.tasks.BaseTask.execution_args"></span>

- `full_context` <small>property</small>  <span id="griptape.tasks.BaseTask.full_context"></span>

- `id = field(default=Factory(lambda: uuid.uuid4().hex), kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTask.id"></span>

- `input` <small>abstractmethod</small> <small>property</small>  <span id="griptape.tasks.BaseTask.input"></span>

- `max_meta_memory_entries = field(default=20, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTask.max_meta_memory_entries"></span>

- `meta_memories` <small>property</small>  <span id="griptape.tasks.BaseTask.meta_memories"></span>

- `output = field(default=None, init=False)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTask.output"></span>

- `parent_ids = field(factory=list, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTask.parent_ids"></span>

- `parent_outputs` <small>property</small>  <span id="griptape.tasks.BaseTask.parent_outputs"></span>

- `parents` <small>property</small>  <span id="griptape.tasks.BaseTask.parents"></span>

- `parents_output_text` <small>property</small>  <span id="griptape.tasks.BaseTask.parents_output_text"></span>

- `state = field(default=State.PENDING, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTask.state"></span>

- `structure = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTask.structure"></span>

<span id="griptape.tasks.BaseTask.State"></span>

### State

Bases:

<span title="enum.Enum">Enum</span>

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
class State(Enum):
    PENDING = 1
    RUNNING = 2
    FINISHED = 3
    SKIPPED = 4
```

</details>

- `FINISHED = 3` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTask.State.FINISHED"></span>

- `PENDING = 1` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTask.State.PENDING"></span>

- `RUNNING = 2` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTask.State.RUNNING"></span>

- `SKIPPED = 4` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTask.State.SKIPPED"></span>

<span id="griptape.tasks.BaseTask.__attrs_post_init__"></span>

### **attrs\_post\_init**()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def __attrs_post_init__(self) -> None:
    if self.structure is not None:
        self.structure.add_task(self)
```

</details>

<span id="griptape.tasks.BaseTask.__lshift__"></span>

### **lshift**(other)

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def __lshift__(self, other: BaseTask | list[BaseTask]) -> BaseTask | list[BaseTask]:
    if isinstance(other, list):
        self.add_parents(other)
    else:
        self.add_parent(other)

    return other
```

</details>

<span id="griptape.tasks.BaseTask.__rshift__"></span>

### **rshift**(other)

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def __rshift__(self, other: BaseTask | list[BaseTask]) -> BaseTask | list[BaseTask]:
    if isinstance(other, list):
        self.add_children(other)
    else:
        self.add_child(other)

    return other
```

</details>

<span id="griptape.tasks.BaseTask.__str__"></span>

### **str**()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def __str__(self) -> str:
    return str(self.output.value) if self.output is not None else ""
```

</details>

<span id="griptape.tasks.BaseTask.add_child"></span>

### add\_child(child)

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def add_child(self, child: BaseTask) -> BaseTask:
    if child.id not in self.child_ids:
        self.child_ids.append(child.id)

    if self.id not in child.parent_ids:
        child.parent_ids.append(self.id)

    if self.structure is not None and child not in self.structure.tasks:
        self.structure.add_task(child)

    return self
```

</details>

<span id="griptape.tasks.BaseTask.add_children"></span>

### add\_children(children)

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def add_children(self, children: list[BaseTask]) -> None:
    for child in children:
        self.add_child(child)
```

</details>

<span id="griptape.tasks.BaseTask.add_parent"></span>

### add\_parent(parent)

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def add_parent(self, parent: BaseTask) -> BaseTask:
    if parent.id not in self.parent_ids:
        self.parent_ids.append(parent.id)

    if self.id not in parent.child_ids:
        parent.child_ids.append(self.id)

    if self.structure is not None and parent not in self.structure.tasks:
        self.structure.add_task(parent)

    return self
```

</details>

<span id="griptape.tasks.BaseTask.add_parents"></span>

### add\_parents(parents)

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def add_parents(self, parents: list[BaseTask]) -> None:
    for parent in parents:
        self.add_parent(parent)
```

</details>

<span id="griptape.tasks.BaseTask.after_run"></span>

### after\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def after_run(self) -> None:
    super().after_run()
    if self.structure is not None:
        EventBus.publish_event(
            FinishTaskEvent(
                task_id=self.id,
                task_parent_ids=self.parent_ids,
                task_child_ids=self.child_ids,
                task_input=self.input,
                task_output=self.output,
            ),
        )
```

</details>

<span id="griptape.tasks.BaseTask.before_run"></span>

### before\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def before_run(self) -> None:
    super().before_run()
    if self.structure is not None:
        EventBus.publish_event(
            StartTaskEvent(
                task_id=self.id,
                task_parent_ids=self.parent_ids,
                task_child_ids=self.child_ids,
                task_input=self.input,
                task_output=self.output,
            ),
        )
```

</details>

<span id="griptape.tasks.BaseTask.can_run"></span>

### can\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def can_run(self) -> bool:
    # If this Task has been skipped or is not pending, it should not run
    if self.is_skipped() or not self.is_pending():
        return False

    # If this Task has parents, and _all_ of them are skipped, it should not run
    if self.parents and all(parent.is_skipped() for parent in self.parents):
        self.state = BaseTask.State.SKIPPED
        return False

    # If _all_ this Task's unskipped parents are finished, it should run
    unskipped_parents = [parent for parent in self.parents if not parent.is_skipped()]

    return all(parent.is_finished() for parent in unskipped_parents)
```

</details>

<span id="griptape.tasks.BaseTask.is_finished"></span>

### is\_finished()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def is_finished(self) -> bool:
    return self.state == BaseTask.State.FINISHED
```

</details>

<span id="griptape.tasks.BaseTask.is_pending"></span>

### is\_pending()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def is_pending(self) -> bool:
    return self.state == BaseTask.State.PENDING
```

</details>

<span id="griptape.tasks.BaseTask.is_running"></span>

### is\_running()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def is_running(self) -> bool:
    return self.state == BaseTask.State.RUNNING
```

</details>

<span id="griptape.tasks.BaseTask.is_skipped"></span>

### is\_skipped()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def is_skipped(self) -> bool:
    return self.state == BaseTask.State.SKIPPED
```

</details>

<span id="griptape.tasks.BaseTask.preprocess"></span>

### preprocess(structure)

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def preprocess(self, structure: Structure) -> BaseTask:
    self.structure = structure

    return self
```

</details>

<span id="griptape.tasks.BaseTask.reset"></span>

### reset()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def reset(self) -> BaseTask:
    self.state = BaseTask.State.PENDING
    self.output = None
    self._execution_args = ()

    return self
```

</details>

<span id="griptape.tasks.BaseTask.run"></span>

### run(\*args)

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
def run(self, *args) -> T:
    try:
        self._execution_args = args

        self.state = BaseTask.State.RUNNING

        self.before_run()

        self.output = self.try_run()

        self.after_run()
    except Exception as e:
        logger.exception("%s %s\n%s", self.__class__.__name__, self.id, e)

        self.output = cast("T", ErrorArtifact(str(e), exception=e))
    finally:
        self.state = BaseTask.State.FINISHED

    return self.output
```

</details>

<span id="griptape.tasks.BaseTask.try_run"></span>

### try\_run()abstractmethod

<details>

<summary>

Source Code in <code>griptape/tasks/base\_task.py</code>

</summary>

```python
@abstractmethod
def try_run(self) -> T: ...
```

</details>

<span id="griptape.tasks.BaseTextInputTask"></span>

## BaseTextInputTask

Bases:
[`RuleMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/rule_mixin/#griptape.mixins.rule_mixin.RuleMixin "RuleMixin (griptape.mixins.rule_mixin.RuleMixin)")
,  [`BaseTask[T]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTask "BaseTask (griptape.tasks.BaseTask)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/tasks/base\_text\_input\_task.py</code>

</summary>

```python
@define
class BaseTextInputTask(RuleMixin, BaseTask[T], ABC):
    DEFAULT_INPUT_TEMPLATE = "{{ args[0] }}"

    _input: Union[str, TextArtifact, Callable[[BaseTask], TextArtifact]] = field(
        default=DEFAULT_INPUT_TEMPLATE,
        alias="input",
    )

    @property
    def input(self) -> TextArtifact:
        if isinstance(self._input, TextArtifact):
            return self._input
        if isinstance(self._input, Callable):
            return self._input(self)
        return TextArtifact(J2().render_from_string(self._input, **self.full_context))

    @input.setter
    def input(self, value: str | TextArtifact | Callable[[BaseTask], TextArtifact]) -> None:
        self._input = value

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

- `DEFAULT_INPUT_TEMPLATE = '{{ args[0] }}'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTextInputTask.DEFAULT_INPUT_TEMPLATE"></span>

- `_input = field(default=DEFAULT_INPUT_TEMPLATE, alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BaseTextInputTask._input"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.BaseTextInputTask.input"></span>

<span id="griptape.tasks.BaseTextInputTask.after_run"></span>

### after\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_text\_input\_task.py</code>

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

<span id="griptape.tasks.BaseTextInputTask.before_run"></span>

### before\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_text\_input\_task.py</code>

</summary>

```python
def before_run(self) -> None:
    super().before_run()

    logger.info("%s %s\nInput: %s", self.__class__.__name__, self.id, self.input.to_text())
```

</details>

<span id="griptape.tasks.BranchTask"></span>

## BranchTask

Bases:
[`CodeExecutionTask[Union[InfoArtifact, ListArtifact[InfoArtifact]]]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.CodeExecutionTask "CodeExecutionTask (griptape.tasks.CodeExecutionTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/branch\_task.py</code>

</summary>

```python
@define
class BranchTask(CodeExecutionTask[Union[InfoArtifact, ListArtifact[InfoArtifact]]]):
    on_run: Callable[[BranchTask], Union[InfoArtifact, ListArtifact[InfoArtifact]]] = field(kw_only=True)

    def try_run(self) -> InfoArtifact | ListArtifact[InfoArtifact]:
        result = self.on_run(self)

        if isinstance(result, ListArtifact):
            branch_task_ids = {artifact.value for artifact in result}
        else:
            branch_task_ids = {result.value}

        if not all(branch_task_id in self.child_ids for branch_task_id in branch_task_ids):
            raise ValueError(f"Branch task returned invalid child task id {branch_task_ids}")

        if self.structure is not None:
            children_to_skip = [child for child in self.children if child.id not in branch_task_ids]
            for child in children_to_skip:
                child.state = BaseTask.State.SKIPPED

        return result
```

</details>

- `on_run = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.BranchTask.on_run"></span>

<span id="griptape.tasks.BranchTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/branch\_task.py</code>

</summary>

```python
def try_run(self) -> InfoArtifact | ListArtifact[InfoArtifact]:
    result = self.on_run(self)

    if isinstance(result, ListArtifact):
        branch_task_ids = {artifact.value for artifact in result}
    else:
        branch_task_ids = {result.value}

    if not all(branch_task_id in self.child_ids for branch_task_id in branch_task_ids):
        raise ValueError(f"Branch task returned invalid child task id {branch_task_ids}")

    if self.structure is not None:
        children_to_skip = [child for child in self.children if child.id not in branch_task_ids]
        for child in children_to_skip:
            child.state = BaseTask.State.SKIPPED

    return result
```

</details>

<span id="griptape.tasks.CodeExecutionTask"></span>

## CodeExecutionTask

Bases:
[`BaseTask[T]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_task/#griptape.tasks.base_task.BaseTask "BaseTask (griptape.tasks.base_task.BaseTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/code\_execution\_task.py</code>

</summary>

```python
@define
class CodeExecutionTask(BaseTask[T]):
    DEFAULT_INPUT_TEMPLATE = "{{ args[0] }}"
    _input: Union[str, TextArtifact, Callable[[BaseTask], TextArtifact]] = field(
        default=DEFAULT_INPUT_TEMPLATE,
        alias="input",
    )
    on_run: Callable[[CodeExecutionTask[T]], T] = field(kw_only=True)

    @property
    def input(self) -> TextArtifact:
        if isinstance(self._input, TextArtifact):
            return self._input
        if callable(self._input):
            return self._input(self)
        return TextArtifact(J2().render_from_string(self._input, **self.full_context))

    def try_run(self) -> T:
        return self.on_run(self)
```

</details>

- `DEFAULT_INPUT_TEMPLATE = '{{ args[0] }}'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.CodeExecutionTask.DEFAULT_INPUT_TEMPLATE"></span>

- `_input = field(default=DEFAULT_INPUT_TEMPLATE, alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.CodeExecutionTask._input"></span>

- `input` <small>property</small>  <span id="griptape.tasks.CodeExecutionTask.input"></span>

- `on_run = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.CodeExecutionTask.on_run"></span>

<span id="griptape.tasks.CodeExecutionTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/code\_execution\_task.py</code>

</summary>

```python
def try_run(self) -> T:
    return self.on_run(self)
```

</details>

<span id="griptape.tasks.ExtractionTask"></span>

## ExtractionTask

Bases:
[`BaseTextInputTask[ListArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTextInputTask "BaseTextInputTask (griptape.tasks.BaseTextInputTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/extraction\_task.py</code>

</summary>

```python
@define
class ExtractionTask(BaseTextInputTask[ListArtifact]):
    extraction_engine: BaseExtractionEngine = field(kw_only=True)
    args: dict = field(kw_only=True, factory=dict)

    def try_run(self) -> ListArtifact:
        return self.extraction_engine.extract_artifacts(ListArtifact([self.input]), rulesets=self.rulesets, **self.args)
```

</details>

- `args = field(kw_only=True, factory=dict)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ExtractionTask.args"></span>

- `extraction_engine = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ExtractionTask.extraction_engine"></span>

<span id="griptape.tasks.ExtractionTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/extraction\_task.py</code>

</summary>

```python
def try_run(self) -> ListArtifact:
    return self.extraction_engine.extract_artifacts(ListArtifact([self.input]), rulesets=self.rulesets, **self.args)
```

</details>

<span id="griptape.tasks.InpaintingImageGenerationTask"></span>

## InpaintingImageGenerationTask

Bases:
[`BaseImageGenerationTask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask "BaseImageGenerationTask (griptape.tasks.BaseImageGenerationTask)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.image_generation_driver" title="image_generation_driver = field(default=Factory(lambda: Defaults.drivers_config.image_generation_driver), kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.InpaintingImageGenerationTask.image_generation_driver)"><code class="language-python">image\_generation\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/#griptape.drivers.image_generation.BaseImageGenerationDriver" title="BaseImageGenerationDriver (griptape.drivers.image_generation.BaseImageGenerationDriver)"><code class="language-python">BaseImageGenerationDriver</code></a> | The driver used to generate the image.<br/>                                                       |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rulesets" title="negative_rulesets           property    (griptape.tasks.InpaintingImageGenerationTask.negative_rulesets)"><code class="language-python">negative\_rulesets</code></a>                                                                                                                                                          | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Ruleset]</code></a>                                                                                                                                                                   | List of negatively-weighted rulesets applied to the text prompt, if supported by the driver.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rules" title="negative_rules = field(factory=list, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.InpaintingImageGenerationTask.negative_rules)"><code class="language-python">negative\_rules</code></a>                                                                                                  | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Rule]</code></a>                                                                                                                                                                      | List of negatively-weighted rules applied to the text prompt, if supported by the driver.<br/>    |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_dir" title="output_dir = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.InpaintingImageGenerationTask.output_dir)"><code class="language-python">output\_dir</code></a>                                                          | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk in output\_dir.<br/>                     |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_file" title="output_file = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.InpaintingImageGenerationTask.output_file)"><code class="language-python">output\_file</code></a>                                                      | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk as output\_file.<br/>                    |

<details>

<summary>

Source Code in <code>griptape/tasks/inpainting\_image\_generation\_task.py</code>

</summary>

```python
@define
class InpaintingImageGenerationTask(BaseImageGenerationTask):
    """A task that modifies a select region within an image using a mask.

    Accepts a text prompt, image, and mask as
    input in one of the following formats:
    - tuple of (template string, ImageArtifact, ImageArtifact)
    - tuple of (TextArtifact, ImageArtifact, ImageArtifact)
    - Callable that returns a tuple of (TextArtifact, ImageArtifact, ImageArtifact).

    Attributes:
        image_generation_driver: The driver used to generate the image.
        negative_rulesets: List of negatively-weighted rulesets applied to the text prompt, if supported by the driver.
        negative_rules: List of negatively-weighted rules applied to the text prompt, if supported by the driver.
        output_dir: If provided, the generated image will be written to disk in output_dir.
        output_file: If provided, the generated image will be written to disk as output_file.
    """

    _input: Union[
        tuple[Union[str, TextArtifact], ImageArtifact, ImageArtifact], Callable[[BaseTask], ListArtifact], ListArtifact
    ] = field(default=None, alias="input")

    @property
    def input(self) -> ListArtifact:
        if isinstance(self._input, ListArtifact):
            return self._input
        if isinstance(self._input, tuple):
            if isinstance(self._input[0], TextArtifact):
                input_text = self._input[0]
            else:
                input_text = TextArtifact(J2().render_from_string(self._input[0], **self.full_context))

            return ListArtifact([input_text, self._input[1], self._input[2]])
        if isinstance(self._input, Callable):
            return self._input(self)
        raise ValueError("Input must be a tuple of (text, image, mask) or a callable that returns such a tuple.")

    @input.setter
    def input(
        self,
        value: tuple[str | TextArtifact, ImageArtifact, ImageArtifact] | Callable[[BaseTask], ListArtifact],
    ) -> None:
        self._input = value

    def try_run(self) -> ImageArtifact:
        prompt_artifact = self.input[0]

        image_artifact = self.input[1]
        if not isinstance(image_artifact, ImageArtifact):
            raise ValueError("Image must be an ImageArtifact.")

        mask_artifact = self.input[2]
        if not isinstance(mask_artifact, ImageArtifact):
            raise ValueError("Mask must be an ImageArtifact.")

        output_image_artifact = self.image_generation_driver.run_image_inpainting(
            prompts=self._get_prompts(prompt_artifact.to_text()),
            negative_prompts=self._get_negative_prompts(),
            image=image_artifact,
            mask=mask_artifact,
        )

        if self.output_dir or self.output_file:
            self._write_to_file(output_image_artifact)

        return output_image_artifact
```

</details>

- `_input = field(default=None, alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.InpaintingImageGenerationTask._input"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.InpaintingImageGenerationTask.input"></span>

<span id="griptape.tasks.InpaintingImageGenerationTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/inpainting\_image\_generation\_task.py</code>

</summary>

```python
def try_run(self) -> ImageArtifact:
    prompt_artifact = self.input[0]

    image_artifact = self.input[1]
    if not isinstance(image_artifact, ImageArtifact):
        raise ValueError("Image must be an ImageArtifact.")

    mask_artifact = self.input[2]
    if not isinstance(mask_artifact, ImageArtifact):
        raise ValueError("Mask must be an ImageArtifact.")

    output_image_artifact = self.image_generation_driver.run_image_inpainting(
        prompts=self._get_prompts(prompt_artifact.to_text()),
        negative_prompts=self._get_negative_prompts(),
        image=image_artifact,
        mask=mask_artifact,
    )

    if self.output_dir or self.output_file:
        self._write_to_file(output_image_artifact)

    return output_image_artifact
```

</details>

<span id="griptape.tasks.OutpaintingImageGenerationTask"></span>

## OutpaintingImageGenerationTask

Bases:
[`BaseImageGenerationTask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask "BaseImageGenerationTask (griptape.tasks.BaseImageGenerationTask)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.image_generation_driver" title="image_generation_driver = field(default=Factory(lambda: Defaults.drivers_config.image_generation_driver), kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.OutpaintingImageGenerationTask.image_generation_driver)"><code class="language-python">image\_generation\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/#griptape.drivers.image_generation.BaseImageGenerationDriver" title="BaseImageGenerationDriver (griptape.drivers.image_generation.BaseImageGenerationDriver)"><code class="language-python">BaseImageGenerationDriver</code></a> | The engine used to generate the image.<br/>                                                       |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rulesets" title="negative_rulesets           property    (griptape.tasks.OutpaintingImageGenerationTask.negative_rulesets)"><code class="language-python">negative\_rulesets</code></a>                                                                                                                                                          | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Ruleset]</code></a>                                                                                                                                                                   | List of negatively-weighted rulesets applied to the text prompt, if supported by the driver.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rules" title="negative_rules = field(factory=list, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.OutpaintingImageGenerationTask.negative_rules)"><code class="language-python">negative\_rules</code></a>                                                                                                  | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Rule]</code></a>                                                                                                                                                                      | List of negatively-weighted rules applied to the text prompt, if supported by the driver.<br/>    |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_dir" title="output_dir = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.OutpaintingImageGenerationTask.output_dir)"><code class="language-python">output\_dir</code></a>                                                          | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk in output\_dir.<br/>                     |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_file" title="output_file = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.OutpaintingImageGenerationTask.output_file)"><code class="language-python">output\_file</code></a>                                                      | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk as output\_file.<br/>                    |

<details>

<summary>

Source Code in <code>griptape/tasks/outpainting\_image\_generation\_task.py</code>

</summary>

```python
@define
class OutpaintingImageGenerationTask(BaseImageGenerationTask):
    """A task that modifies an image outside the bounds of a mask.

    Accepts a text prompt, image, and mask as
    input in one of the following formats:
    - tuple of (template string, ImageArtifact, ImageArtifact)
    - tuple of (TextArtifact, ImageArtifact, ImageArtifact)
    - Callable that returns a tuple of (TextArtifact, ImageArtifact, ImageArtifact).

    Attributes:
        image_generation_driver: The engine used to generate the image.
        negative_rulesets: List of negatively-weighted rulesets applied to the text prompt, if supported by the driver.
        negative_rules: List of negatively-weighted rules applied to the text prompt, if supported by the driver.
        output_dir: If provided, the generated image will be written to disk in output_dir.
        output_file: If provided, the generated image will be written to disk as output_file.
    """

    _input: Union[
        tuple[Union[str, TextArtifact], ImageArtifact, ImageArtifact], Callable[[BaseTask], ListArtifact], ListArtifact
    ] = field(default=None, alias="input")

    @property
    def input(self) -> ListArtifact:
        if isinstance(self._input, ListArtifact):
            return self._input
        if isinstance(self._input, tuple):
            if isinstance(self._input[0], TextArtifact):
                input_text = self._input[0]
            else:
                input_text = TextArtifact(J2().render_from_string(self._input[0], **self.full_context))

            return ListArtifact([input_text, self._input[1], self._input[2]])
        if isinstance(self._input, Callable):
            return self._input(self)
        raise ValueError("Input must be a tuple of (text, image, mask) or a callable that returns such a tuple.")

    @input.setter
    def input(
        self,
        value: tuple[str | TextArtifact, ImageArtifact, ImageArtifact] | Callable[[BaseTask], ListArtifact],
    ) -> None:
        self._input = value

    def try_run(self) -> ImageArtifact:
        prompt_artifact = self.input[0]

        image_artifact = self.input[1]
        if not isinstance(image_artifact, ImageArtifact):
            raise ValueError("Image must be an ImageArtifact.")

        mask_artifact = self.input[2]
        if not isinstance(mask_artifact, ImageArtifact):
            raise ValueError("Mask must be an ImageArtifact.")

        output_image_artifact = self.image_generation_driver.run_image_outpainting(
            prompts=self._get_prompts(prompt_artifact.to_text()),
            negative_prompts=self._get_negative_prompts(),
            image=image_artifact,
            mask=mask_artifact,
        )

        if self.output_dir or self.output_file:
            self._write_to_file(output_image_artifact)

        return output_image_artifact
```

</details>

- `_input = field(default=None, alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.OutpaintingImageGenerationTask._input"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.OutpaintingImageGenerationTask.input"></span>

<span id="griptape.tasks.OutpaintingImageGenerationTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/outpainting\_image\_generation\_task.py</code>

</summary>

```python
def try_run(self) -> ImageArtifact:
    prompt_artifact = self.input[0]

    image_artifact = self.input[1]
    if not isinstance(image_artifact, ImageArtifact):
        raise ValueError("Image must be an ImageArtifact.")

    mask_artifact = self.input[2]
    if not isinstance(mask_artifact, ImageArtifact):
        raise ValueError("Mask must be an ImageArtifact.")

    output_image_artifact = self.image_generation_driver.run_image_outpainting(
        prompts=self._get_prompts(prompt_artifact.to_text()),
        negative_prompts=self._get_negative_prompts(),
        image=image_artifact,
        mask=mask_artifact,
    )

    if self.output_dir or self.output_file:
        self._write_to_file(output_image_artifact)

    return output_image_artifact
```

</details>

<span id="griptape.tasks.OutputSchemaValidationSubtask"></span>

## OutputSchemaValidationSubtask

Bases:
[`BaseSubtask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_subtask/#griptape.tasks.base_subtask.BaseSubtask "BaseSubtask (griptape.tasks.base_subtask.BaseSubtask)")

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

- `_input = field(alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.OutputSchemaValidationSubtask._input"></span>

- `_validation_errors = field(default=None, init=False)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.OutputSchemaValidationSubtask._validation_errors"></span>

- `generate_assistant_subtask_template = field(default=Factory(lambda self: self.default_generate_assistant_subtask_template, takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.OutputSchemaValidationSubtask.generate_assistant_subtask_template"></span>

- `generate_user_subtask_template = field(default=Factory(lambda self: self.default_generate_user_subtask_template, takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.OutputSchemaValidationSubtask.generate_user_subtask_template"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.OutputSchemaValidationSubtask.input"></span>

- `output_schema = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.OutputSchemaValidationSubtask.output_schema"></span>

- `structured_output_strategy = field(default='rule', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.OutputSchemaValidationSubtask.structured_output_strategy"></span>

- `validation_errors` <small>property</small>  <span id="griptape.tasks.OutputSchemaValidationSubtask.validation_errors"></span>

<span id="griptape.tasks.OutputSchemaValidationSubtask.add_to_prompt_stack"></span>

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

<span id="griptape.tasks.OutputSchemaValidationSubtask.after_run"></span>

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

<span id="griptape.tasks.OutputSchemaValidationSubtask.attach_to"></span>

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

<span id="griptape.tasks.OutputSchemaValidationSubtask.before_run"></span>

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

<span id="griptape.tasks.OutputSchemaValidationSubtask.default_generate_assistant_subtask_template"></span>

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

<span id="griptape.tasks.OutputSchemaValidationSubtask.default_generate_user_subtask_template"></span>

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

<span id="griptape.tasks.OutputSchemaValidationSubtask.try_run"></span>

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

<span id="griptape.tasks.PromptImageGenerationTask"></span>

## PromptImageGenerationTask

Bases:
[`BaseImageGenerationTask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask "BaseImageGenerationTask (griptape.tasks.BaseImageGenerationTask)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.image_generation_driver" title="image_generation_driver = field(default=Factory(lambda: Defaults.drivers_config.image_generation_driver), kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.PromptImageGenerationTask.image_generation_driver)"><code class="language-python">image\_generation\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/#griptape.drivers.image_generation.BaseImageGenerationDriver" title="BaseImageGenerationDriver (griptape.drivers.image_generation.BaseImageGenerationDriver)"><code class="language-python">BaseImageGenerationDriver</code></a> | The engine used to generate the image.<br/>                                                       |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rulesets" title="negative_rulesets           property    (griptape.tasks.PromptImageGenerationTask.negative_rulesets)"><code class="language-python">negative\_rulesets</code></a>                                                                                                                                                          | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Ruleset]</code></a>                                                                                                                                                                   | List of negatively-weighted rulesets applied to the text prompt, if supported by the driver.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rules" title="negative_rules = field(factory=list, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.PromptImageGenerationTask.negative_rules)"><code class="language-python">negative\_rules</code></a>                                                                                                  | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Rule]</code></a>                                                                                                                                                                      | List of negatively-weighted rules applied to the text prompt, if supported by the driver.<br/>    |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_dir" title="output_dir = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.PromptImageGenerationTask.output_dir)"><code class="language-python">output\_dir</code></a>                                                          | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk in output\_dir.<br/>                     |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_file" title="output_file = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.PromptImageGenerationTask.output_file)"><code class="language-python">output\_file</code></a>                                                      | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk as output\_file.<br/>                    |

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

- `DEFAULT_INPUT_TEMPLATE = '{{ args[0] }}'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptImageGenerationTask.DEFAULT_INPUT_TEMPLATE"></span>

- `_input = field(default=DEFAULT_INPUT_TEMPLATE, alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptImageGenerationTask._input"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.PromptImageGenerationTask.input"></span>

<span id="griptape.tasks.PromptImageGenerationTask.try_run"></span>

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

<span id="griptape.tasks.PromptTask"></span>

## PromptTask

Bases:
[`BaseTask[Union[TextArtifact, AudioArtifact, GenericArtifact, JsonArtifact, ListArtifact, ErrorArtifact]]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTask "BaseTask (griptape.tasks.BaseTask)")
,  [`RuleMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/rule_mixin/#griptape.mixins.rule_mixin.RuleMixin "RuleMixin (griptape.mixins.rule_mixin.RuleMixin)")
,  [`ActionsSubtaskOriginMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/actions_subtask_origin_mixin/#griptape.mixins.actions_subtask_origin_mixin.ActionsSubtaskOriginMixin "ActionsSubtaskOriginMixin (griptape.mixins.actions_subtask_origin_mixin.ActionsSubtaskOriginMixin)")

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
@define
class PromptTask(
    BaseTask[Union[TextArtifact, AudioArtifact, GenericArtifact, JsonArtifact, ListArtifact, ErrorArtifact]],
    RuleMixin,
    ActionsSubtaskOriginMixin,
):
    DEFAULT_MAX_STEPS = 20
    # Stop sequence for chain-of-thought in the framework. Using this "token-like" string to make it more unique,
    # so that it doesn't trigger on accident.
    RESPONSE_STOP_SEQUENCE = "<|Response|>"
    prompt_driver: BasePromptDriver = field(
        default=Factory(lambda: Defaults.drivers_config.prompt_driver), kw_only=True, metadata={"serializable": True}
    )
    output_schema: Optional[Union[Schema, type[BaseModel]]] = field(default=None, kw_only=True)
    generate_system_template: Callable[[PromptTask], str] = field(
        default=Factory(lambda self: self.default_generate_system_template, takes_self=True),
        kw_only=True,
    )
    _conversation_memory: Union[Optional[BaseConversationMemory], NothingType] = field(
        default=Factory(lambda: NOTHING), kw_only=True, alias="conversation_memory"
    )
    _input: Union[str, list, tuple, BaseArtifact, Callable[[BaseTask], BaseArtifact]] = field(
        default=lambda task: task.full_context["args"][0] if task.full_context["args"] else TextArtifact(value=""),
        alias="input",
    )
    tools: list[BaseTool] = field(factory=list, kw_only=True, metadata={"serializable": True})
    max_subtasks: int = field(default=DEFAULT_MAX_STEPS, kw_only=True, metadata={"serializable": True})
    task_memory: Optional[TaskMemory] = field(default=None, kw_only=True)
    subtasks: list[BaseSubtask] = field(factory=list)
    generate_assistant_subtask_template: Callable[[ActionsSubtask], str] = field(
        default=Factory(lambda self: self.default_generate_assistant_subtask_template, takes_self=True),
        kw_only=True,
    )
    generate_user_subtask_template: Callable[[ActionsSubtask], str] = field(
        default=Factory(lambda self: self.default_generate_user_subtask_template, takes_self=True),
        kw_only=True,
    )
    response_stop_sequence: str = field(default=RESPONSE_STOP_SEQUENCE, kw_only=True)
    reflect_on_tool_use: bool = field(default=True, kw_only=True)
    subtask_runners: list[Callable[[BaseArtifact], BaseArtifact]] = field(
        default=Factory(
            lambda self: [self.default_run_actions_subtasks, self.default_run_output_schema_validation_subtasks],
            takes_self=True,
        ),
        kw_only=True,
    )

    @property
    def rulesets(self) -> list:
        default_rules = self.rules
        rulesets = self._rulesets.copy()

        if self.structure is not None:
            if self.structure._rulesets:
                rulesets = self.structure._rulesets + self._rulesets
            if self.structure.rules:
                default_rules = self.structure.rules + self.rules

        if default_rules:
            rulesets.append(Ruleset(name=self.DEFAULT_RULESET_NAME, rules=default_rules))

        return rulesets

    @property
    def input(self) -> BaseArtifact:
        return self._process_task_input(self._input)

    @input.setter
    def input(self, value: str | list | tuple | BaseArtifact | Callable[[BaseTask], BaseArtifact]) -> None:
        self._input = value

    @property
    def conversation_memory(self) -> Optional[BaseConversationMemory]:
        if self._conversation_memory is NOTHING:
            if self.structure is None:
                return None
            return self.structure.conversation_memory
        return self._conversation_memory

    @conversation_memory.setter
    def conversation_memory(self, value: Optional[BaseConversationMemory]) -> None:
        self._conversation_memory = value

    @property
    def prompt_stack(self) -> PromptStack:
        stack = PromptStack(tools=self.tools, output_schema=self.output_schema)
        memory = self.conversation_memory

        system_template = self.generate_system_template(self)
        if system_template:
            stack.add_system_message(system_template)

        stack.add_user_message(self.input)

        if self.output:
            stack.add_assistant_message(self.output.to_text())
        else:
            for s in self.subtasks:
                s.add_to_prompt_stack(stack)

        if memory is not None:
            # inserting at index 1 to place memory right after system prompt
            memory.add_to_prompt_stack(self.prompt_driver, stack, 1 if system_template else 0)

        return stack

    @property
    def tool_output_memory(self) -> list[TaskMemory]:
        unique_memory_dict = {}

        for memories in [tool.output_memory for tool in self.tools if tool.output_memory]:
            for memory_list in memories.values():
                for memory in memory_list:
                    if memory.name not in unique_memory_dict:
                        unique_memory_dict[memory.name] = memory

        return list(unique_memory_dict.values())

    @tools.validator  # pyright: ignore[reportAttributeAccessIssue]
    def validate_tools(self, _: Attribute, tools: list[BaseTool]) -> None:
        tool_names = [t.name for t in tools]

        if len(tool_names) > len(set(tool_names)):
            raise ValueError("tools names have to be unique in task")

    @output_schema.validator  # pyright: ignore[reportAttributeAccessIssue, reportOptionalMemberAccess]
    def validate_output_schema(self, _: Attribute, output_schema: Optional[Union[Schema, type[BaseModel]]]) -> None:
        if (
            output_schema is None
            or isinstance(self.output_schema, Schema)
            or (isinstance(self.output_schema, type) and issubclass(self.output_schema, BaseModel))
        ):
            return
        raise ValueError(f"Unsupported output schema type: {type(self.output_schema)}")

    def __attrs_post_init__(self) -> None:
        super().__attrs_post_init__()
        if self.task_memory:
            self.set_default_tools_memory(self.task_memory)

    output: Optional[BaseArtifact] = field(default=None, init=False)

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
        conversation_memory = self.conversation_memory
        if (
            (self.structure is None or self.structure.conversation_memory_strategy == "per_task")
            and conversation_memory is not None
            and self.output is not None
        ):
            run = Run(input=self.input, output=self.output)

            conversation_memory.add_run(run)

    def try_run(self) -> ListArtifact | TextArtifact | AudioArtifact | GenericArtifact | JsonArtifact | ErrorArtifact:
        self.subtasks.clear()
        if self.response_stop_sequence not in self.prompt_driver.tokenizer.stop_sequences:
            self.prompt_driver.tokenizer.stop_sequences.extend([self.response_stop_sequence])

        output = self.prompt_driver.run(self.prompt_stack).to_artifact(
            meta={"is_react_prompt": not self.prompt_driver.use_native_tools}
        )
        for subtask_runner in self.subtask_runners:
            output = subtask_runner(output)

        if isinstance(output, (ListArtifact, TextArtifact, AudioArtifact, JsonArtifact, ModelArtifact, ErrorArtifact)):
            return output
        raise ValueError(f"Unsupported output type: {type(output)}")

    def preprocess(self, structure: Structure) -> BaseTask:
        super().preprocess(structure)

        if self.task_memory is None and structure.task_memory:
            self.set_default_tools_memory(structure.task_memory)

        return self

    def default_generate_system_template(self, _: PromptTask) -> str:
        schema = self.actions_schema().json_schema("Actions Schema")
        schema["minItems"] = 1  # The `schema` library doesn't support `minItems` so we must add it manually.

        return J2("tasks/prompt_task/system.j2").render(
            rulesets=J2("rulesets/rulesets.j2").render(rulesets=self.rulesets),
            action_names=str.join(", ", [tool.name for tool in self.tools]),
            actions_schema=utils.minify_json(json.dumps(schema)),
            meta_memory=J2("memory/meta/meta_memory.j2").render(meta_memories=self.meta_memories),
            use_native_tools=self.prompt_driver.use_native_tools,
            stop_sequence=self.response_stop_sequence,
            reflect_on_tool_use=self.reflect_on_tool_use,
        )

    def default_generate_assistant_subtask_template(self, subtask: ActionsSubtask) -> str:
        return J2("tasks/prompt_task/assistant_actions_subtask.j2").render(
            stop_sequence=self.response_stop_sequence,
            subtask=subtask,
        )

    def default_generate_user_subtask_template(self, subtask: ActionsSubtask) -> str:
        return J2("tasks/prompt_task/user_actions_subtask.j2").render(
            stop_sequence=self.response_stop_sequence,
            subtask=subtask,
        )

    def actions_schema(self) -> Schema:
        return self._actions_schema_for_tools(self.tools)

    def set_default_tools_memory(self, memory: TaskMemory) -> None:
        self.task_memory = memory

        for tool in self.tools:
            if self.task_memory:
                if tool.input_memory is None:
                    tool.input_memory = [self.task_memory]
                if tool.output_memory is None and tool.off_prompt:
                    tool.output_memory = {getattr(a, "name"): [self.task_memory] for a in tool.activities()}

    def find_subtask(self, subtask_id: str) -> BaseSubtask:
        for subtask in self.subtasks:
            if subtask.id == subtask_id:
                return subtask
        raise ValueError(f"Subtask with id {subtask_id} not found.")

    def add_subtask(self, subtask: BaseSubtask) -> BaseSubtask:
        subtask.attach_to(self)
        subtask.structure = self.structure

        if len(self.subtasks) > 0:
            self.subtasks[-1].add_child(subtask)
            subtask.add_parent(self.subtasks[-1])

        self.subtasks.append(subtask)

        return subtask

    def find_tool(self, tool_name: str) -> BaseTool:
        for tool in self.tools:
            if tool.name == tool_name:
                return tool
        raise ValueError(f"Tool with name {tool_name} not found.")

    def find_memory(self, memory_name: str) -> TaskMemory:
        for memory in self.tool_output_memory:
            if memory.name == memory_name:
                return memory
        raise ValueError(f"Memory with name {memory_name} not found.")

    def default_run_actions_subtasks(self, subtask_input: BaseArtifact) -> BaseArtifact:
        if not self.tools:
            return subtask_input
        subtask = self.add_subtask(
            ActionsSubtask(
                subtask_input,
                # TODO: Remove these fields in Prompt Task in Gen AI Builder 2.0
                generate_user_subtask_template=self.generate_user_subtask_template,
                generate_assistant_subtask_template=self.generate_assistant_subtask_template,
                response_stop_sequence=self.response_stop_sequence,
            )
        )

        while subtask.output is None:
            if len(self.subtasks) >= self.max_subtasks:
                subtask.output = ErrorArtifact(f"Exceeded tool limit of {self.max_subtasks} subtasks per task")
            else:
                subtask.run()

                if self.reflect_on_tool_use:
                    output = self.prompt_driver.run(self.prompt_stack).to_artifact(
                        meta={"is_react_prompt": not self.prompt_driver.use_native_tools}
                    )
                    subtask = self.add_subtask(ActionsSubtask(output))

        return subtask.output

    def default_run_output_schema_validation_subtasks(self, subtask_input: BaseArtifact) -> BaseArtifact:
        if self.output_schema is None:
            return subtask_input
        subtask = self.add_subtask(OutputSchemaValidationSubtask(subtask_input, output_schema=self.output_schema))

        while subtask.output is None:
            if len(self.subtasks) >= self.max_subtasks:
                subtask.output = ErrorArtifact(f"Exceeded tool limit of {self.max_subtasks} subtasks per task")
            else:
                subtask.run()

                output = subtask.output
                output = self.prompt_driver.run(self.prompt_stack).to_artifact(
                    meta={"is_react_prompt": not self.prompt_driver.use_native_tools}
                )
                subtask = self.add_subtask(OutputSchemaValidationSubtask(output, output_schema=self.output_schema))

        return subtask.output

    def _process_task_input(
        self,
        task_input: str | tuple | list | BaseArtifact | Callable[[BaseTask], BaseArtifact],
    ) -> BaseArtifact:
        if isinstance(task_input, TextArtifact):
            return TextArtifact(J2().render_from_string(task_input.value, **self.full_context), meta=task_input.meta)
        if isinstance(task_input, Callable):
            return self._process_task_input(task_input(self))
        if isinstance(task_input, ListArtifact):
            return ListArtifact([self._process_task_input(elem) for elem in task_input.value])
        if isinstance(task_input, BaseArtifact):
            return task_input
        if isinstance(task_input, (list, tuple)):
            return ListArtifact([self._process_task_input(elem) for elem in task_input])
        return self._process_task_input(TextArtifact(task_input))
```

</details>

- `DEFAULT_MAX_STEPS = 20` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.DEFAULT_MAX_STEPS"></span>

- `RESPONSE_STOP_SEQUENCE = '<|Response|>'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.RESPONSE_STOP_SEQUENCE"></span>

- `_conversation_memory = field(default=Factory(lambda: NOTHING), kw_only=True, alias='conversation_memory')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask._conversation_memory"></span>

- `_input = field(default=lambda task: task.full_context['args'][0] if task.full_context['args'] else TextArtifact(value=''), alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask._input"></span>

- `conversation_memory` <small>property</small> <small>writable</small>  <span id="griptape.tasks.PromptTask.conversation_memory"></span>

- `generate_assistant_subtask_template = field(default=Factory(lambda self: self.default_generate_assistant_subtask_template, takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.generate_assistant_subtask_template"></span>

- `generate_system_template = field(default=Factory(lambda self: self.default_generate_system_template, takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.generate_system_template"></span>

- `generate_user_subtask_template = field(default=Factory(lambda self: self.default_generate_user_subtask_template, takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.generate_user_subtask_template"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.PromptTask.input"></span>

- `max_subtasks = field(default=DEFAULT_MAX_STEPS, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.max_subtasks"></span>

- `output = field(default=None, init=False)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.output"></span>

- `output_schema = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.output_schema"></span>

- `prompt_driver = field(default=Factory(lambda: Defaults.drivers_config.prompt_driver), kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.prompt_driver"></span>

- `prompt_stack` <small>property</small>  <span id="griptape.tasks.PromptTask.prompt_stack"></span>

- `reflect_on_tool_use = field(default=True, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.reflect_on_tool_use"></span>

- `response_stop_sequence = field(default=RESPONSE_STOP_SEQUENCE, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.response_stop_sequence"></span>

- `rulesets` <small>property</small>  <span id="griptape.tasks.PromptTask.rulesets"></span>

- `subtask_runners = field(default=Factory(lambda self: [self.default_run_actions_subtasks, self.default_run_output_schema_validation_subtasks], takes_self=True), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.subtask_runners"></span>

- `subtasks = field(factory=list)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.subtasks"></span>

- `task_memory = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.task_memory"></span>

- `tool_output_memory` <small>property</small>  <span id="griptape.tasks.PromptTask.tool_output_memory"></span>

- `tools = field(factory=list, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.PromptTask.tools"></span>

<span id="griptape.tasks.PromptTask.__attrs_post_init__"></span>

### **attrs\_post\_init**()

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def __attrs_post_init__(self) -> None:
    super().__attrs_post_init__()
    if self.task_memory:
        self.set_default_tools_memory(self.task_memory)
```

</details>

<span id="griptape.tasks.PromptTask._process_task_input"></span>

### \_process\_task\_input(task\_input)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def _process_task_input(
    self,
    task_input: str | tuple | list | BaseArtifact | Callable[[BaseTask], BaseArtifact],
) -> BaseArtifact:
    if isinstance(task_input, TextArtifact):
        return TextArtifact(J2().render_from_string(task_input.value, **self.full_context), meta=task_input.meta)
    if isinstance(task_input, Callable):
        return self._process_task_input(task_input(self))
    if isinstance(task_input, ListArtifact):
        return ListArtifact([self._process_task_input(elem) for elem in task_input.value])
    if isinstance(task_input, BaseArtifact):
        return task_input
    if isinstance(task_input, (list, tuple)):
        return ListArtifact([self._process_task_input(elem) for elem in task_input])
    return self._process_task_input(TextArtifact(task_input))
```

</details>

<span id="griptape.tasks.PromptTask.actions_schema"></span>

### actions\_schema()

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def actions_schema(self) -> Schema:
    return self._actions_schema_for_tools(self.tools)
```

</details>

<span id="griptape.tasks.PromptTask.add_subtask"></span>

### add\_subtask(subtask)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def add_subtask(self, subtask: BaseSubtask) -> BaseSubtask:
    subtask.attach_to(self)
    subtask.structure = self.structure

    if len(self.subtasks) > 0:
        self.subtasks[-1].add_child(subtask)
        subtask.add_parent(self.subtasks[-1])

    self.subtasks.append(subtask)

    return subtask
```

</details>

<span id="griptape.tasks.PromptTask.after_run"></span>

### after\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

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
    conversation_memory = self.conversation_memory
    if (
        (self.structure is None or self.structure.conversation_memory_strategy == "per_task")
        and conversation_memory is not None
        and self.output is not None
    ):
        run = Run(input=self.input, output=self.output)

        conversation_memory.add_run(run)
```

</details>

<span id="griptape.tasks.PromptTask.before_run"></span>

### before\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def before_run(self) -> None:
    super().before_run()

    logger.info("%s %s\nInput: %s", self.__class__.__name__, self.id, self.input.to_text())
```

</details>

<span id="griptape.tasks.PromptTask.default_generate_assistant_subtask_template"></span>

### default\_generate\_assistant\_subtask\_template(subtask)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def default_generate_assistant_subtask_template(self, subtask: ActionsSubtask) -> str:
    return J2("tasks/prompt_task/assistant_actions_subtask.j2").render(
        stop_sequence=self.response_stop_sequence,
        subtask=subtask,
    )
```

</details>

<span id="griptape.tasks.PromptTask.default_generate_system_template"></span>

### defaul&#x74;_&#x67;enerate\_system\_template(_)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def default_generate_system_template(self, _: PromptTask) -> str:
    schema = self.actions_schema().json_schema("Actions Schema")
    schema["minItems"] = 1  # The `schema` library doesn't support `minItems` so we must add it manually.

    return J2("tasks/prompt_task/system.j2").render(
        rulesets=J2("rulesets/rulesets.j2").render(rulesets=self.rulesets),
        action_names=str.join(", ", [tool.name for tool in self.tools]),
        actions_schema=utils.minify_json(json.dumps(schema)),
        meta_memory=J2("memory/meta/meta_memory.j2").render(meta_memories=self.meta_memories),
        use_native_tools=self.prompt_driver.use_native_tools,
        stop_sequence=self.response_stop_sequence,
        reflect_on_tool_use=self.reflect_on_tool_use,
    )
```

</details>

<span id="griptape.tasks.PromptTask.default_generate_user_subtask_template"></span>

### default\_generate\_user\_subtask\_template(subtask)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def default_generate_user_subtask_template(self, subtask: ActionsSubtask) -> str:
    return J2("tasks/prompt_task/user_actions_subtask.j2").render(
        stop_sequence=self.response_stop_sequence,
        subtask=subtask,
    )
```

</details>

<span id="griptape.tasks.PromptTask.default_run_actions_subtasks"></span>

### default\_run\_actions\_subtasks(subtask\_input)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def default_run_actions_subtasks(self, subtask_input: BaseArtifact) -> BaseArtifact:
    if not self.tools:
        return subtask_input
    subtask = self.add_subtask(
        ActionsSubtask(
            subtask_input,
            # TODO: Remove these fields in Prompt Task in Gen AI Builder 2.0
            generate_user_subtask_template=self.generate_user_subtask_template,
            generate_assistant_subtask_template=self.generate_assistant_subtask_template,
            response_stop_sequence=self.response_stop_sequence,
        )
    )

    while subtask.output is None:
        if len(self.subtasks) >= self.max_subtasks:
            subtask.output = ErrorArtifact(f"Exceeded tool limit of {self.max_subtasks} subtasks per task")
        else:
            subtask.run()

            if self.reflect_on_tool_use:
                output = self.prompt_driver.run(self.prompt_stack).to_artifact(
                    meta={"is_react_prompt": not self.prompt_driver.use_native_tools}
                )
                subtask = self.add_subtask(ActionsSubtask(output))

    return subtask.output
```

</details>

<span id="griptape.tasks.PromptTask.default_run_output_schema_validation_subtasks"></span>

### default\_run\_output\_schema\_validation\_subtasks(subtask\_input)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def default_run_output_schema_validation_subtasks(self, subtask_input: BaseArtifact) -> BaseArtifact:
    if self.output_schema is None:
        return subtask_input
    subtask = self.add_subtask(OutputSchemaValidationSubtask(subtask_input, output_schema=self.output_schema))

    while subtask.output is None:
        if len(self.subtasks) >= self.max_subtasks:
            subtask.output = ErrorArtifact(f"Exceeded tool limit of {self.max_subtasks} subtasks per task")
        else:
            subtask.run()

            output = subtask.output
            output = self.prompt_driver.run(self.prompt_stack).to_artifact(
                meta={"is_react_prompt": not self.prompt_driver.use_native_tools}
            )
            subtask = self.add_subtask(OutputSchemaValidationSubtask(output, output_schema=self.output_schema))

    return subtask.output
```

</details>

<span id="griptape.tasks.PromptTask.find_memory"></span>

### find\_memory(memory\_name)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def find_memory(self, memory_name: str) -> TaskMemory:
    for memory in self.tool_output_memory:
        if memory.name == memory_name:
            return memory
    raise ValueError(f"Memory with name {memory_name} not found.")
```

</details>

<span id="griptape.tasks.PromptTask.find_subtask"></span>

### find\_subtask(subtask\_id)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def find_subtask(self, subtask_id: str) -> BaseSubtask:
    for subtask in self.subtasks:
        if subtask.id == subtask_id:
            return subtask
    raise ValueError(f"Subtask with id {subtask_id} not found.")
```

</details>

<span id="griptape.tasks.PromptTask.find_tool"></span>

### find\_tool(tool\_name)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def find_tool(self, tool_name: str) -> BaseTool:
    for tool in self.tools:
        if tool.name == tool_name:
            return tool
    raise ValueError(f"Tool with name {tool_name} not found.")
```

</details>

<span id="griptape.tasks.PromptTask.preprocess"></span>

### preprocess(structure)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def preprocess(self, structure: Structure) -> BaseTask:
    super().preprocess(structure)

    if self.task_memory is None and structure.task_memory:
        self.set_default_tools_memory(structure.task_memory)

    return self
```

</details>

<span id="griptape.tasks.PromptTask.set_default_tools_memory"></span>

### set\_default\_tools\_memory(memory)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def set_default_tools_memory(self, memory: TaskMemory) -> None:
    self.task_memory = memory

    for tool in self.tools:
        if self.task_memory:
            if tool.input_memory is None:
                tool.input_memory = [self.task_memory]
            if tool.output_memory is None and tool.off_prompt:
                tool.output_memory = {getattr(a, "name"): [self.task_memory] for a in tool.activities()}
```

</details>

<span id="griptape.tasks.PromptTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
def try_run(self) -> ListArtifact | TextArtifact | AudioArtifact | GenericArtifact | JsonArtifact | ErrorArtifact:
    self.subtasks.clear()
    if self.response_stop_sequence not in self.prompt_driver.tokenizer.stop_sequences:
        self.prompt_driver.tokenizer.stop_sequences.extend([self.response_stop_sequence])

    output = self.prompt_driver.run(self.prompt_stack).to_artifact(
        meta={"is_react_prompt": not self.prompt_driver.use_native_tools}
    )
    for subtask_runner in self.subtask_runners:
        output = subtask_runner(output)

    if isinstance(output, (ListArtifact, TextArtifact, AudioArtifact, JsonArtifact, ModelArtifact, ErrorArtifact)):
        return output
    raise ValueError(f"Unsupported output type: {type(output)}")
```

</details>

<span id="griptape.tasks.PromptTask.validate_output_schema"></span>

### validat&#x65;_&#x6F;utput\_schema(_, output\_schema)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
@output_schema.validator  # pyright: ignore[reportAttributeAccessIssue, reportOptionalMemberAccess]
def validate_output_schema(self, _: Attribute, output_schema: Optional[Union[Schema, type[BaseModel]]]) -> None:
    if (
        output_schema is None
        or isinstance(self.output_schema, Schema)
        or (isinstance(self.output_schema, type) and issubclass(self.output_schema, BaseModel))
    ):
        return
    raise ValueError(f"Unsupported output schema type: {type(self.output_schema)}")
```

</details>

<span id="griptape.tasks.PromptTask.validate_tools"></span>

### validat&#x65;_&#x74;ools(_, tools)

<details>

<summary>

Source Code in <code>griptape/tasks/prompt\_task.py</code>

</summary>

```python
@tools.validator  # pyright: ignore[reportAttributeAccessIssue]
def validate_tools(self, _: Attribute, tools: list[BaseTool]) -> None:
    tool_names = [t.name for t in tools]

    if len(tool_names) > len(set(tool_names)):
        raise ValueError("tools names have to be unique in task")
```

</details>

<span id="griptape.tasks.RagTask"></span>

## RagTask

Bases:
[`BaseTextInputTask[Union[ListArtifact, ErrorArtifact]]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTextInputTask "BaseTextInputTask (griptape.tasks.BaseTextInputTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/rag\_task.py</code>

</summary>

```python
@define
class RagTask(BaseTextInputTask[Union[ListArtifact, ErrorArtifact]]):
    rag_engine: RagEngine = field(kw_only=True, default=Factory(lambda: RagEngine()))

    def try_run(self) -> ListArtifact | ErrorArtifact:
        outputs = self.rag_engine.process_query(self.input.to_text()).outputs

        if len(outputs) > 0:
            return ListArtifact(outputs)
        return ErrorArtifact("empty output")
```

</details>

- `rag_engine = field(kw_only=True, default=Factory(lambda: RagEngine()))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.RagTask.rag_engine"></span>

<span id="griptape.tasks.RagTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/rag\_task.py</code>

</summary>

```python
def try_run(self) -> ListArtifact | ErrorArtifact:
    outputs = self.rag_engine.process_query(self.input.to_text()).outputs

    if len(outputs) > 0:
        return ListArtifact(outputs)
    return ErrorArtifact("empty output")
```

</details>

<span id="griptape.tasks.StructureRunTask"></span>

## StructureRunTask

Bases:
[`BaseTask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_task/#griptape.tasks.base_task.BaseTask "BaseTask (griptape.tasks.base_task.BaseTask)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                                                                                                                                                                       | Description                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.StructureRunTask.structure_run_driver" title="structure_run_driver = field(kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.StructureRunTask.structure_run_driver)"><code class="language-python">structure\_run\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/base_structure_run_driver/#griptape.drivers.structure_run.base_structure_run_driver.BaseStructureRunDriver" title="BaseStructureRunDriver (griptape.drivers.structure_run.base_structure_run_driver.BaseStructureRunDriver)"><code class="language-python">BaseStructureRunDriver</code></a> | Driver to run the Structure.<br/> |

<details>

<summary>

Source Code in <code>griptape/tasks/structure\_run\_task.py</code>

</summary>

```python
@define
class StructureRunTask(BaseTask):
    """Task to run a Structure.

    Attributes:
        structure_run_driver: Driver to run the Structure.
    """

    _input: Union[str, list, tuple, BaseArtifact, Callable[[BaseTask], BaseArtifact]] = field(
        default=lambda task: task.full_context["args"][0] if task.full_context["args"] else TextArtifact(value=""),
    )

    @property
    def input(self) -> BaseArtifact:
        return self._process_task_input(self._input)

    @input.setter
    def input(self, value: str | list | tuple | BaseArtifact | Callable[[BaseTask], BaseArtifact]) -> None:
        self._input = value

    structure_run_driver: BaseStructureRunDriver = field(kw_only=True)

    def try_run(self) -> BaseArtifact:
        if isinstance(self.input, ListArtifact):
            return self.structure_run_driver.run(*self.input.value)
        return self.structure_run_driver.run(self.input)

    def _process_task_input(
        self,
        task_input: str | tuple | list | BaseArtifact | Callable[[BaseTask], BaseArtifact],
    ) -> BaseArtifact:
        if isinstance(task_input, TextArtifact):
            task_input.value = J2().render_from_string(task_input.value, **self.full_context)

            return task_input
        if isinstance(task_input, Callable):
            return self._process_task_input(task_input(self))
        if isinstance(task_input, ListArtifact):
            return ListArtifact([self._process_task_input(elem) for elem in task_input.value])
        if isinstance(task_input, BaseArtifact):
            return task_input
        if isinstance(task_input, (list, tuple)):
            return ListArtifact([self._process_task_input(elem) for elem in task_input])
        return self._process_task_input(TextArtifact(task_input))
```

</details>

- `_input = field(default=lambda task: task.full_context['args'][0] if task.full_context['args'] else TextArtifact(value=''))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.StructureRunTask._input"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.StructureRunTask.input"></span>

- `structure_run_driver = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.StructureRunTask.structure_run_driver"></span>

<span id="griptape.tasks.StructureRunTask._process_task_input"></span>

### \_process\_task\_input(task\_input)

<details>

<summary>

Source Code in <code>griptape/tasks/structure\_run\_task.py</code>

</summary>

```python
def _process_task_input(
    self,
    task_input: str | tuple | list | BaseArtifact | Callable[[BaseTask], BaseArtifact],
) -> BaseArtifact:
    if isinstance(task_input, TextArtifact):
        task_input.value = J2().render_from_string(task_input.value, **self.full_context)

        return task_input
    if isinstance(task_input, Callable):
        return self._process_task_input(task_input(self))
    if isinstance(task_input, ListArtifact):
        return ListArtifact([self._process_task_input(elem) for elem in task_input.value])
    if isinstance(task_input, BaseArtifact):
        return task_input
    if isinstance(task_input, (list, tuple)):
        return ListArtifact([self._process_task_input(elem) for elem in task_input])
    return self._process_task_input(TextArtifact(task_input))
```

</details>

<span id="griptape.tasks.StructureRunTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/structure\_run\_task.py</code>

</summary>

```python
def try_run(self) -> BaseArtifact:
    if isinstance(self.input, ListArtifact):
        return self.structure_run_driver.run(*self.input.value)
    return self.structure_run_driver.run(self.input)
```

</details>

<span id="griptape.tasks.TextSummaryTask"></span>

## TextSummaryTask

Bases:
[`BaseTextInputTask[TextArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTextInputTask "BaseTextInputTask (griptape.tasks.BaseTextInputTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/text\_summary\_task.py</code>

</summary>

```python
@define
class TextSummaryTask(BaseTextInputTask[TextArtifact]):
    summary_engine: BaseSummaryEngine = field(default=Factory(lambda: PromptSummaryEngine()), kw_only=True)

    def try_run(self) -> TextArtifact:
        return TextArtifact(self.summary_engine.summarize_text(self.input.to_text(), rulesets=self.rulesets))
```

</details>

- `summary_engine = field(default=Factory(lambda: PromptSummaryEngine()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.TextSummaryTask.summary_engine"></span>

<span id="griptape.tasks.TextSummaryTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/text\_summary\_task.py</code>

</summary>

```python
def try_run(self) -> TextArtifact:
    return TextArtifact(self.summary_engine.summarize_text(self.input.to_text(), rulesets=self.rulesets))
```

</details>

<span id="griptape.tasks.TextToSpeechTask"></span>

## TextToSpeechTask

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

- `DEFAULT_INPUT_TEMPLATE = '{{ args[0] }}'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.TextToSpeechTask.DEFAULT_INPUT_TEMPLATE"></span>

- `_input = field(default=DEFAULT_INPUT_TEMPLATE)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.TextToSpeechTask._input"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.TextToSpeechTask.input"></span>

- `text_to_speech_driver = field(default=Factory(lambda: Defaults.drivers_config.text_to_speech_driver), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.TextToSpeechTask.text_to_speech_driver"></span>

<span id="griptape.tasks.TextToSpeechTask.try_run"></span>

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

<span id="griptape.tasks.ToolTask"></span>

## ToolTask

Bases:
[`PromptTask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.PromptTask "PromptTask (griptape.tasks.PromptTask)")
,  [`ActionsSubtaskOriginMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/actions_subtask_origin_mixin/#griptape.mixins.actions_subtask_origin_mixin.ActionsSubtaskOriginMixin "ActionsSubtaskOriginMixin (griptape.mixins.actions_subtask_origin_mixin.ActionsSubtaskOriginMixin)")

<details>

<summary>

Source Code in <code>griptape/tasks/tool\_task.py</code>

</summary>

```python
@define
class ToolTask(PromptTask, ActionsSubtaskOriginMixin):
    DEFAULT_MAX_STEPS = 0
    ACTION_PATTERN = r"(?s)[^{]*({.*})"

    tool: BaseTool = field(kw_only=True, metadata={"serializable": True})
    subtask: Optional[ActionsSubtask] = field(default=None, kw_only=True)
    task_memory: Optional[TaskMemory] = field(default=None, kw_only=True)
    tools: list[BaseTool] = field(factory=list, kw_only=True, metadata={"serializable": False})
    max_subtasks: int = field(default=DEFAULT_MAX_STEPS, kw_only=True, metadata={"serializable": False})

    @property
    def prompt_stack(self) -> PromptStack:
        stack = super().prompt_stack
        stack.tools = [self.tool]

        return stack

    def __attrs_post_init__(self) -> None:
        super().__attrs_post_init__()
        if self.task_memory is not None:
            self.set_default_tools_memory(self.task_memory)

    def preprocess(self, structure: Structure) -> ToolTask:
        super().preprocess(structure)

        if self.task_memory is None and structure.task_memory is not None:
            self.set_default_tools_memory(structure.task_memory)

        return self

    def default_generate_system_template(self, _: PromptTask) -> str:
        return J2("tasks/tool_task/system.j2").render(
            rulesets=J2("rulesets/rulesets.j2").render(rulesets=self.rulesets),
            action_schema=utils.minify_json(json.dumps(self.tool.schema())),
            meta_memory=J2("memory/meta/meta_memory.j2").render(meta_memories=self.meta_memories),
            use_native_tools=self.prompt_driver.use_native_tools,
        )

    def actions_schema(self) -> Schema:
        return self._actions_schema_for_tools([self.tool])

    def try_run(self) -> ListArtifact | TextArtifact | ErrorArtifact:
        warnings.warn(
            "`ToolTask` is deprecated and will be removed in a future release. Use `PromptTask` with `reflect_on_tool_use=False` instead.",
            DeprecationWarning,
            stacklevel=2,
        )
        result = self.prompt_driver.run(self.prompt_stack)

        if self.prompt_driver.use_native_tools:
            subtask_input = result.to_artifact(meta={"is_react_prompt": False})
        else:
            action_matches = re.findall(self.ACTION_PATTERN, result.to_text(), re.DOTALL)

            if not action_matches:
                return ErrorArtifact("No action found in prompt output.")
            data = action_matches[-1]
            action_dict = json.loads(data)

            action_dict["tag"] = self.tool.name
            subtask_input = TextArtifact(
                J2("tasks/tool_task/subtask.j2").render(action_json=json.dumps(action_dict)),
                meta={"is_react_prompt": True},
            )

        try:
            subtask = self.add_subtask(ActionsSubtask(subtask_input))

            output = subtask.run()

            if isinstance(output, ListArtifact):
                output = output[0]
        except Exception as e:
            output = ErrorArtifact(f"Error processing tool input: {e}", exception=e)
        return output

    def find_tool(self, tool_name: str) -> BaseTool:
        if self.tool.name == tool_name:
            return self.tool
        raise ValueError(f"Tool with name {tool_name} not found.")

    def find_memory(self, memory_name: str) -> TaskMemory:
        raise NotImplementedError("ToolTask does not support Task Memory.")

    def find_subtask(self, subtask_id: str) -> ActionsSubtask:
        if self.subtask and self.subtask.id == subtask_id:
            return self.subtask
        raise ValueError(f"Subtask with id {subtask_id} not found.")

    def add_subtask(self, subtask: BaseSubtask) -> ActionsSubtask:
        if not isinstance(subtask, ActionsSubtask):
            raise TypeError("Subtask must be an instance of ActionsSubtask.")

        self.subtask = subtask
        self.subtask.attach_to(self)

        return self.subtask

    def set_default_tools_memory(self, memory: TaskMemory) -> None:
        self.task_memory = memory

        if self.task_memory:
            if self.tool.input_memory is None:
                self.tool.input_memory = [self.task_memory]
            if self.tool.output_memory is None and self.tool.off_prompt:
                self.tool.output_memory = {getattr(a, "name"): [self.task_memory] for a in self.tool.activities()}
```

</details>

- `ACTION_PATTERN = '(?s)[^{]*({.*})'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ToolTask.ACTION_PATTERN"></span>

- `DEFAULT_MAX_STEPS = 0` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ToolTask.DEFAULT_MAX_STEPS"></span>

- `max_subtasks = field(default=DEFAULT_MAX_STEPS, kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ToolTask.max_subtasks"></span>

- `prompt_stack` <small>property</small>  <span id="griptape.tasks.ToolTask.prompt_stack"></span>

- `subtask = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ToolTask.subtask"></span>

- `task_memory = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ToolTask.task_memory"></span>

- `tool = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ToolTask.tool"></span>

- `tools = field(factory=list, kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.ToolTask.tools"></span>

<span id="griptape.tasks.ToolTask.__attrs_post_init__"></span>

### **attrs\_post\_init**()

<details>

<summary>

Source Code in <code>griptape/tasks/tool\_task.py</code>

</summary>

```python
def __attrs_post_init__(self) -> None:
    super().__attrs_post_init__()
    if self.task_memory is not None:
        self.set_default_tools_memory(self.task_memory)
```

</details>

<span id="griptape.tasks.ToolTask.actions_schema"></span>

### actions\_schema()

<details>

<summary>

Source Code in <code>griptape/tasks/tool\_task.py</code>

</summary>

```python
def actions_schema(self) -> Schema:
    return self._actions_schema_for_tools([self.tool])
```

</details>

<span id="griptape.tasks.ToolTask.add_subtask"></span>

### add\_subtask(subtask)

<details>

<summary>

Source Code in <code>griptape/tasks/tool\_task.py</code>

</summary>

```python
def add_subtask(self, subtask: BaseSubtask) -> ActionsSubtask:
    if not isinstance(subtask, ActionsSubtask):
        raise TypeError("Subtask must be an instance of ActionsSubtask.")

    self.subtask = subtask
    self.subtask.attach_to(self)

    return self.subtask
```

</details>

<span id="griptape.tasks.ToolTask.default_generate_system_template"></span>

### defaul&#x74;_&#x67;enerate\_system\_template(_)

<details>

<summary>

Source Code in <code>griptape/tasks/tool\_task.py</code>

</summary>

```python
def default_generate_system_template(self, _: PromptTask) -> str:
    return J2("tasks/tool_task/system.j2").render(
        rulesets=J2("rulesets/rulesets.j2").render(rulesets=self.rulesets),
        action_schema=utils.minify_json(json.dumps(self.tool.schema())),
        meta_memory=J2("memory/meta/meta_memory.j2").render(meta_memories=self.meta_memories),
        use_native_tools=self.prompt_driver.use_native_tools,
    )
```

</details>

<span id="griptape.tasks.ToolTask.find_memory"></span>

### find\_memory(memory\_name)

<details>

<summary>

Source Code in <code>griptape/tasks/tool\_task.py</code>

</summary>

```python
def find_memory(self, memory_name: str) -> TaskMemory:
    raise NotImplementedError("ToolTask does not support Task Memory.")
```

</details>

<span id="griptape.tasks.ToolTask.find_subtask"></span>

### find\_subtask(subtask\_id)

<details>

<summary>

Source Code in <code>griptape/tasks/tool\_task.py</code>

</summary>

```python
def find_subtask(self, subtask_id: str) -> ActionsSubtask:
    if self.subtask and self.subtask.id == subtask_id:
        return self.subtask
    raise ValueError(f"Subtask with id {subtask_id} not found.")
```

</details>

<span id="griptape.tasks.ToolTask.find_tool"></span>

### find\_tool(tool\_name)

<details>

<summary>

Source Code in <code>griptape/tasks/tool\_task.py</code>

</summary>

```python
def find_tool(self, tool_name: str) -> BaseTool:
    if self.tool.name == tool_name:
        return self.tool
    raise ValueError(f"Tool with name {tool_name} not found.")
```

</details>

<span id="griptape.tasks.ToolTask.preprocess"></span>

### preprocess(structure)

<details>

<summary>

Source Code in <code>griptape/tasks/tool\_task.py</code>

</summary>

```python
def preprocess(self, structure: Structure) -> ToolTask:
    super().preprocess(structure)

    if self.task_memory is None and structure.task_memory is not None:
        self.set_default_tools_memory(structure.task_memory)

    return self
```

</details>

<span id="griptape.tasks.ToolTask.set_default_tools_memory"></span>

### set\_default\_tools\_memory(memory)

<details>

<summary>

Source Code in <code>griptape/tasks/tool\_task.py</code>

</summary>

```python
def set_default_tools_memory(self, memory: TaskMemory) -> None:
    self.task_memory = memory

    if self.task_memory:
        if self.tool.input_memory is None:
            self.tool.input_memory = [self.task_memory]
        if self.tool.output_memory is None and self.tool.off_prompt:
            self.tool.output_memory = {getattr(a, "name"): [self.task_memory] for a in self.tool.activities()}
```

</details>

<span id="griptape.tasks.ToolTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/tool\_task.py</code>

</summary>

```python
def try_run(self) -> ListArtifact | TextArtifact | ErrorArtifact:
    warnings.warn(
        "`ToolTask` is deprecated and will be removed in a future release. Use `PromptTask` with `reflect_on_tool_use=False` instead.",
        DeprecationWarning,
        stacklevel=2,
    )
    result = self.prompt_driver.run(self.prompt_stack)

    if self.prompt_driver.use_native_tools:
        subtask_input = result.to_artifact(meta={"is_react_prompt": False})
    else:
        action_matches = re.findall(self.ACTION_PATTERN, result.to_text(), re.DOTALL)

        if not action_matches:
            return ErrorArtifact("No action found in prompt output.")
        data = action_matches[-1]
        action_dict = json.loads(data)

        action_dict["tag"] = self.tool.name
        subtask_input = TextArtifact(
            J2("tasks/tool_task/subtask.j2").render(action_json=json.dumps(action_dict)),
            meta={"is_react_prompt": True},
        )

    try:
        subtask = self.add_subtask(ActionsSubtask(subtask_input))

        output = subtask.run()

        if isinstance(output, ListArtifact):
            output = output[0]
    except Exception as e:
        output = ErrorArtifact(f"Error processing tool input: {e}", exception=e)
    return output
```

</details>

<span id="griptape.tasks.ToolkitTask"></span>

## ToolkitTask

Bases:
[`PromptTask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.PromptTask "PromptTask (griptape.tasks.PromptTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/toolkit\_task.py</code>

</summary>

```python
@define
class ToolkitTask(PromptTask):
    def try_run(self) -> ListArtifact | TextArtifact | AudioArtifact | GenericArtifact | JsonArtifact | ErrorArtifact:
        warnings.warn(
            "`ToolkitTask` is deprecated and will be removed in a future release. `PromptTask` is a drop-in replacement.",
            DeprecationWarning,
            stacklevel=2,
        )

        return super().try_run()
```

</details>

<span id="griptape.tasks.ToolkitTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/toolkit\_task.py</code>

</summary>

```python
def try_run(self) -> ListArtifact | TextArtifact | AudioArtifact | GenericArtifact | JsonArtifact | ErrorArtifact:
    warnings.warn(
        "`ToolkitTask` is deprecated and will be removed in a future release. `PromptTask` is a drop-in replacement.",
        DeprecationWarning,
        stacklevel=2,
    )

    return super().try_run()
```

</details>

<span id="griptape.tasks.VariationImageGenerationTask"></span>

## VariationImageGenerationTask

Bases:
[`BaseImageGenerationTask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask "BaseImageGenerationTask (griptape.tasks.BaseImageGenerationTask)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.VariationImageGenerationTask.image_generation_driver" title="image_generation_driver = field(default=Factory(lambda: Defaults.drivers_config.image_generation_driver), kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.VariationImageGenerationTask.image_generation_driver)"><code class="language-python">image\_generation\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/image_generation/#griptape.drivers.image_generation.BaseImageGenerationDriver" title="BaseImageGenerationDriver (griptape.drivers.image_generation.BaseImageGenerationDriver)"><code class="language-python">BaseImageGenerationDriver</code></a> | The engine used to generate the image.<br/>                                                       |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rulesets" title="negative_rulesets           property    (griptape.tasks.VariationImageGenerationTask.negative_rulesets)"><code class="language-python">negative\_rulesets</code></a>                                                                                                                                                               | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Ruleset]</code></a>                                                                                                                                                                   | List of negatively-weighted rulesets applied to the text prompt, if supported by the driver.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseImageGenerationTask.negative_rules" title="negative_rules = field(factory=list, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.VariationImageGenerationTask.negative_rules)"><code class="language-python">negative\_rules</code></a>                                                                                                       | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[Rule]</code></a>                                                                                                                                                                      | List of negatively-weighted rules applied to the text prompt, if supported by the driver.<br/>    |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_dir" title="output_dir = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.VariationImageGenerationTask.output_dir)"><code class="language-python">output\_dir</code></a>                                                               | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk in output\_dir.<br/>                     |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/artifact_file_output_mixin/#griptape.mixins.artifact_file_output_mixin.ArtifactFileOutputMixin.output_file" title="output_file = field(default=None, kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.VariationImageGenerationTask.output_file)"><code class="language-python">output\_file</code></a>                                                           | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                   | If provided, the generated image will be written to disk as output\_file.<br/>                    |

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

- `_input = field(default=None, alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.VariationImageGenerationTask._input"></span>

- `image_generation_driver = field(default=Factory(lambda: Defaults.drivers_config.image_generation_driver), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.VariationImageGenerationTask.image_generation_driver"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.VariationImageGenerationTask.input"></span>

<span id="griptape.tasks.VariationImageGenerationTask.try_run"></span>

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

- [ActionsSubtask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/actions_subtask/): -   logger = logging.getLogger(Defaults.loggingconfig.loggername) module-attribute
- [AssistantTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/assistant_task/): Bases:
- [AudioTranscriptionTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/audio_transcription_task/): Bases:
- [BaseAudioGenerationTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_audio_generation_task/): -   logger = logging.getLogger(Defaults.loggingconfig.loggername) module-attribute
- [BaseAudioInputTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_audio_input_task/): -   T = TypeVar('T', bound=BaseArtifact) module-attribute
- [BaseImageGenerationTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_image_generation_task/): -   logger = logging.getLogger(Defaults.loggingconfig.loggername) module-attribute
- [BaseSubtask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_subtask/): -   T = TypeVar('T', bound=BaseArtifact) module-attribute
- [BaseTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_task/): -   T = TypeVar('T', bound=BaseArtifact) module-attribute
- [BaseTextInputTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_text_input_task/): -   T = TypeVar('T', bound=BaseArtifact) module-attribute
- [BranchTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/branch_task/): Bases:
- [CodeExecutionTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/code_execution_task/): -   T = TypeVar('T', bound=BaseArtifact) module-attribute
- [ExtractionTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/extraction_task/): Bases:
- [InpaintingImageGenerationTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/inpainting_image_generation_task/): Bases:
- [OutpaintingImageGenerationTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/outpainting_image_generation_task/): Bases:
- [OutputSchemaValidationSubtask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/output_schema_validation_subtask/): -   logger = logging.getLogger(Defaults.loggingconfig.loggername) module-attribute
- [PromptImageGenerationTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/prompt_image_generation_task/): Bases:
- [PromptTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/prompt_task/): -   logger = logging.getLogger(Defaults.loggingconfig.loggername) module-attribute
- [RagTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/rag_task/): Bases:
- [StructureRunTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/structure_run_task/): Bases:
- [TextSummaryTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/text_summary_task/): Bases:
- [TextToSpeechTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/text_to_speech_task/): Bases:
- [ToolTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/tool_task/): Bases:
- [ToolkitTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/toolkit_task/): Bases:
- [VariationImageGenerationTask](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/variation_image_generation_task/): Bases:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
