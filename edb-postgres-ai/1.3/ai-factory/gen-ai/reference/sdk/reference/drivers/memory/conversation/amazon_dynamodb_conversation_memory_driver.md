---
title: amazon_dynamodb_conversation_memory_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/amazon_dynamodb_conversation_memory_driver/
lastModified: 2025-11-07T18:06:05Z
---

# amazon\_dynamodb\_conversation\_memory\_driver

<span id="griptape.drivers.memory.conversation.amazon_dynamodb_conversation_memory_driver.AmazonDynamoDbConversationMemoryDriver"></span>

Bases:
[`BaseConversationMemoryDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/memory/conversation/#griptape.drivers.memory.conversation.BaseConversationMemoryDriver "BaseConversationMemoryDriver (griptape.drivers.memory.conversation.BaseConversationMemoryDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/memory/conversation/amazon\_dynamodb\_conversation\_memory\_driver.py</code>

</summary>

```python
@define
class AmazonDynamoDbConversationMemoryDriver(BaseConversationMemoryDriver):
    session: boto3.Session = field(default=Factory(lambda: import_optional_dependency("boto3").Session()), kw_only=True)
    table_name: str = field(kw_only=True, metadata={"serializable": True})
    partition_key: str = field(kw_only=True, metadata={"serializable": True})
    value_attribute_key: str = field(kw_only=True, metadata={"serializable": True})
    partition_key_value: str = field(kw_only=True, metadata={"serializable": True})
    sort_key: Optional[str] = field(default=None, metadata={"serializable": True})
    sort_key_value: Optional[str | int] = field(default=None, metadata={"serializable": True})
    _table: Optional[Table] = field(default=None, kw_only=True, alias="table", metadata={"serializable": False})

    @lazy_property()
    def table(self) -> Table:
        return self.session.resource("dynamodb").Table(self.table_name)

    def store(self, runs: list[Run], metadata: dict) -> None:
        self.table.update_item(
            Key=self._get_key(),
            UpdateExpression="set #attr = :value",
            ExpressionAttributeNames={"#attr": self.value_attribute_key},
            ExpressionAttributeValues={
                ":value": json.dumps(self._to_params_dict(runs, metadata)),
            },
        )

    def load(self) -> tuple[list[Run], dict[str, Any]]:
        response = self.table.get_item(Key=self._get_key())

        if "Item" in response and self.value_attribute_key in response["Item"]:
            memory_dict = json.loads(str(response["Item"][self.value_attribute_key]))
            return self._from_params_dict(memory_dict)
        return [], {}

    def _get_key(self) -> dict[str, str | int]:
        key: dict[str, str | int] = {self.partition_key: self.partition_key_value}

        if self.sort_key is not None and self.sort_key_value is not None:
            key[self.sort_key] = self.sort_key_value

        return key
```

</details>

- `_table = field(default=None, kw_only=True, alias='table', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.memory.conversation.amazon_dynamodb_conversation_memory_driver.AmazonDynamoDbConversationMemoryDriver._table"></span>

- `partition_key = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.memory.conversation.amazon_dynamodb_conversation_memory_driver.AmazonDynamoDbConversationMemoryDriver.partition_key"></span>

- `partition_key_value = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.memory.conversation.amazon_dynamodb_conversation_memory_driver.AmazonDynamoDbConversationMemoryDriver.partition_key_value"></span>

- `session = field(default=Factory(lambda: import_optional_dependency('boto3').Session()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.memory.conversation.amazon_dynamodb_conversation_memory_driver.AmazonDynamoDbConversationMemoryDriver.session"></span>

- `sort_key = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.memory.conversation.amazon_dynamodb_conversation_memory_driver.AmazonDynamoDbConversationMemoryDriver.sort_key"></span>

- `sort_key_value = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.memory.conversation.amazon_dynamodb_conversation_memory_driver.AmazonDynamoDbConversationMemoryDriver.sort_key_value"></span>

- `table_name = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.memory.conversation.amazon_dynamodb_conversation_memory_driver.AmazonDynamoDbConversationMemoryDriver.table_name"></span>

- `value_attribute_key = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.memory.conversation.amazon_dynamodb_conversation_memory_driver.AmazonDynamoDbConversationMemoryDriver.value_attribute_key"></span>

<span id="griptape.drivers.memory.conversation.amazon_dynamodb_conversation_memory_driver.AmazonDynamoDbConversationMemoryDriver._get_key"></span>

### \_get\_key()

<details>

<summary>

Source Code in <code>griptape/drivers/memory/conversation/amazon\_dynamodb\_conversation\_memory\_driver.py</code>

</summary>

```python
def _get_key(self) -> dict[str, str | int]:
    key: dict[str, str | int] = {self.partition_key: self.partition_key_value}

    if self.sort_key is not None and self.sort_key_value is not None:
        key[self.sort_key] = self.sort_key_value

    return key
```

</details>

<span id="griptape.drivers.memory.conversation.amazon_dynamodb_conversation_memory_driver.AmazonDynamoDbConversationMemoryDriver.load"></span>

### load()

<details>

<summary>

Source Code in <code>griptape/drivers/memory/conversation/amazon\_dynamodb\_conversation\_memory\_driver.py</code>

</summary>

```python
def load(self) -> tuple[list[Run], dict[str, Any]]:
    response = self.table.get_item(Key=self._get_key())

    if "Item" in response and self.value_attribute_key in response["Item"]:
        memory_dict = json.loads(str(response["Item"][self.value_attribute_key]))
        return self._from_params_dict(memory_dict)
    return [], {}
```

</details>

<span id="griptape.drivers.memory.conversation.amazon_dynamodb_conversation_memory_driver.AmazonDynamoDbConversationMemoryDriver.store"></span>

### store(runs, metadata)

<details>

<summary>

Source Code in <code>griptape/drivers/memory/conversation/amazon\_dynamodb\_conversation\_memory\_driver.py</code>

</summary>

```python
def store(self, runs: list[Run], metadata: dict) -> None:
    self.table.update_item(
        Key=self._get_key(),
        UpdateExpression="set #attr = :value",
        ExpressionAttributeNames={"#attr": self.value_attribute_key},
        ExpressionAttributeValues={
            ":value": json.dumps(self._to_params_dict(runs, metadata)),
        },
    )
```

</details>

<span id="griptape.drivers.memory.conversation.amazon_dynamodb_conversation_memory_driver.AmazonDynamoDbConversationMemoryDriver.table"></span>

### table()

<details>

<summary>

Source Code in <code>griptape/drivers/memory/conversation/amazon\_dynamodb\_conversation\_memory\_driver.py</code>

</summary>

```python
@lazy_property()
def table(self) -> Table:
    return self.session.resource("dynamodb").Table(self.table_name)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
