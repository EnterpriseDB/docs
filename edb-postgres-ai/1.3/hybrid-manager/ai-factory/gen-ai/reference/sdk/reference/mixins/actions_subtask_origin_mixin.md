---
title: actions_subtask_origin_mixin
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/actions_subtask_origin_mixin/
lastModified: 2026-05-22T19:45:14+05:30
---

# actions\_subtask\_origin\_mixin

<span id="griptape.mixins.actions_subtask_origin_mixin.ActionsSubtaskOriginMixin"></span>

<details>

<summary>

Source Code in <code>griptape/mixins/actions\_subtask\_origin\_mixin.py</code>

</summary>

```python
@define(slots=False)
class ActionsSubtaskOriginMixin:
    @abstractmethod
    def find_tool(self, tool_name: str) -> BaseTool: ...

    @abstractmethod
    def find_memory(self, memory_name: str) -> TaskMemory: ...

    @abstractmethod
    def find_subtask(self, subtask_id: str) -> BaseSubtask: ...

    @abstractmethod
    def add_subtask(self, subtask: BaseSubtask) -> BaseSubtask: ...

    @abstractmethod
    def actions_schema(self) -> Schema: ...

    def _actions_schema_for_tools(self, tools: list[BaseTool]) -> Schema:
        action_schemas = []

        for tool in tools:
            for activity_schema in tool.activity_schemas():
                action_schema = activity_schema.schema
                tag_key = Literal("tag", description="Unique tag name for action execution.")

                action_schema[tag_key] = str

                action_schemas.append(action_schema)

        return Schema(description="JSON schema for an array of actions.", schema=action_schemas)
```

</details>

<span id="griptape.mixins.actions_subtask_origin_mixin.ActionsSubtaskOriginMixin._actions_schema_for_tools"></span>

### \_actions\_schema\_for\_tools(tools)

<details>

<summary>

Source Code in <code>griptape/mixins/actions\_subtask\_origin\_mixin.py</code>

</summary>

```python
def _actions_schema_for_tools(self, tools: list[BaseTool]) -> Schema:
    action_schemas = []

    for tool in tools:
        for activity_schema in tool.activity_schemas():
            action_schema = activity_schema.schema
            tag_key = Literal("tag", description="Unique tag name for action execution.")

            action_schema[tag_key] = str

            action_schemas.append(action_schema)

    return Schema(description="JSON schema for an array of actions.", schema=action_schemas)
```

</details>

<span id="griptape.mixins.actions_subtask_origin_mixin.ActionsSubtaskOriginMixin.actions_schema"></span>

### actions\_schema()abstractmethod

<details>

<summary>

Source Code in <code>griptape/mixins/actions\_subtask\_origin\_mixin.py</code>

</summary>

```python
@abstractmethod
def actions_schema(self) -> Schema: ...
```

</details>

<span id="griptape.mixins.actions_subtask_origin_mixin.ActionsSubtaskOriginMixin.add_subtask"></span>

### add\_subtask(subtask)abstractmethod

<details>

<summary>

Source Code in <code>griptape/mixins/actions\_subtask\_origin\_mixin.py</code>

</summary>

```python
@abstractmethod
def add_subtask(self, subtask: BaseSubtask) -> BaseSubtask: ...
```

</details>

<span id="griptape.mixins.actions_subtask_origin_mixin.ActionsSubtaskOriginMixin.find_memory"></span>

### find\_memory(memory\_name)abstractmethod

<details>

<summary>

Source Code in <code>griptape/mixins/actions\_subtask\_origin\_mixin.py</code>

</summary>

```python
@abstractmethod
def find_memory(self, memory_name: str) -> TaskMemory: ...
```

</details>

<span id="griptape.mixins.actions_subtask_origin_mixin.ActionsSubtaskOriginMixin.find_subtask"></span>

### find\_subtask(subtask\_id)abstractmethod

<details>

<summary>

Source Code in <code>griptape/mixins/actions\_subtask\_origin\_mixin.py</code>

</summary>

```python
@abstractmethod
def find_subtask(self, subtask_id: str) -> BaseSubtask: ...
```

</details>

<span id="griptape.mixins.actions_subtask_origin_mixin.ActionsSubtaskOriginMixin.find_tool"></span>

### find\_tool(tool\_name)abstractmethod

<details>

<summary>

Source Code in <code>griptape/mixins/actions\_subtask\_origin\_mixin.py</code>

</summary>

```python
@abstractmethod
def find_tool(self, tool_name: str) -> BaseTool: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
