---
title: base_subtask
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/base_subtask/
lastModified: 2025-11-07T18:06:05Z
---

# base\_subtask

- `T = TypeVar('T', bound=BaseArtifact)` <small>module-attribute</small>  <span id="griptape.tasks.base_subtask.T"></span>

- `logger = logging.getLogger(Defaults.logging_config.logger_name)` <small>module-attribute</small>  <span id="griptape.tasks.base_subtask.logger"></span>

<span id="griptape.tasks.base_subtask.BaseSubtask"></span>

Bases:
[`BaseTask[T]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTask "BaseTask (griptape.tasks.BaseTask)")

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

- `children` <small>property</small>  <span id="griptape.tasks.base_subtask.BaseSubtask.children"></span>

- `origin_task` <small>property</small>  <span id="griptape.tasks.base_subtask.BaseSubtask.origin_task"></span>

- `parents` <small>property</small>  <span id="griptape.tasks.base_subtask.BaseSubtask.parents"></span>

<span id="griptape.tasks.base_subtask.BaseSubtask.add_child"></span>

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

<span id="griptape.tasks.base_subtask.BaseSubtask.add_parent"></span>

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

<span id="griptape.tasks.base_subtask.BaseSubtask.add_to_prompt_stack"></span>

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

<span id="griptape.tasks.base_subtask.BaseSubtask.attach_to"></span>

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

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
