---
title: serializable_mixin
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/
lastModified: 2026-05-22T19:45:14+05:30
---

# serializable\_mixin

- `T = TypeVar('T', bound='SerializableMixin')` <small>module-attribute</small>  <span id="griptape.mixins.serializable_mixin.T"></span>

<span id="griptape.mixins.serializable_mixin.SerializableMixin"></span>

Bases:
[`Generic[T]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.T "typing.Generic")

<details>

<summary>

Source Code in <code>griptape/mixins/serializable\_mixin.py</code>

</summary>

```python
@define(slots=False)
class SerializableMixin(Generic[T]):
    type: str = field(
        default=Factory(lambda self: self.__class__.__name__, takes_self=True),
        kw_only=True,
        metadata={"serializable": True},
    )
    module_name: str = field(
        default=Factory(lambda self: self.__class__.__module__, takes_self=True),
        kw_only=True,
        metadata={"serializable": False},
    )

    @classmethod
    def get_schema(
        cls: type[T],
        subclass_name: Optional[str] = None,
        *,
        module_name: Optional[str] = None,
        types_overrides: Optional[dict[str, type]] = None,
        serializable_overrides: Optional[dict[str, bool]] = None,
    ) -> Schema:
        """Generates a Marshmallow schema for the class.

        Args:
            subclass_name: An optional subclass name. Required if the class is abstract.
            module_name: An optional module name. Defaults to the class's module.
            types_overrides: An optional dictionary of field names to override type.
            serializable_overrides: An optional dictionary of field names to override serializable status.
        """
        if ABC in cls.__bases__:
            if subclass_name is None:
                raise ValueError(f"Type field is required for abstract class: {cls.__name__}")

            module_name = module_name or cls.__module__
            subclass_cls = cls._import_cls_rec(module_name, subclass_name)

            schema_class = BaseSchema.from_attrs_cls(
                subclass_cls, types_overrides=types_overrides, serializable_overrides=serializable_overrides
            )
        else:
            schema_class = BaseSchema.from_attrs_cls(
                cls, types_overrides=types_overrides, serializable_overrides=serializable_overrides
            )

        return schema_class()

    @classmethod
    def from_dict(
        cls: type[T],
        data: dict,
        *,
        types_overrides: Optional[dict[str, type]] = None,
        serializable_overrides: Optional[dict[str, bool]] = None,
    ) -> T:
        return cast(
            "T",
            cls.get_schema(
                subclass_name=data.get("type"),
                module_name=data.get("module_name"),
                types_overrides=types_overrides,
                serializable_overrides=serializable_overrides,
            ).load(data),
        )

    @classmethod
    def from_json(
        cls: type[T],
        data: str,
        *,
        types_overrides: Optional[dict[str, type]] = None,
        serializable_overrides: Optional[dict[str, bool]] = None,
    ) -> T:
        return cls.from_dict(
            json.loads(data), types_overrides=types_overrides, serializable_overrides=serializable_overrides
        )

    def __str__(self) -> str:
        return json.dumps(self.to_dict())

    def to_json(
        self,
        *,
        types_overrides: Optional[dict[str, type]] = None,
        serializable_overrides: Optional[dict[str, bool]] = None,
    ) -> str:
        return json.dumps(self.to_dict(types_overrides=types_overrides, serializable_overrides=serializable_overrides))

    def to_dict(
        self,
        *,
        types_overrides: Optional[dict[str, type]] = None,
        serializable_overrides: Optional[dict[str, bool]] = None,
    ) -> dict:
        schema = BaseSchema.from_attrs_cls(
            self.__class__, types_overrides=types_overrides, serializable_overrides=serializable_overrides
        )

        return dict(schema().dump(self))

    @classmethod
    def _import_cls_rec(cls, module_name: str, class_name: str) -> type:
        """Imports a class given a module name and class name.

        Will recursively traverse up the module's path until it finds a
        package that it can import `class_name` from.

        Args:
            module_name: The module name.
            class_name: The class name.

        Returns:
            The imported class if found. Raises `ValueError` if not found.
        """
        try:
            module = import_module(module_name)
            test = getattr(module, class_name, None)
        except ModuleNotFoundError:
            test = None

        if test is None:
            module_dirs = module_name.split(".")[:-1]
            module_name = ".".join(module_dirs)

            if not len(module_dirs):
                raise ValueError(f"Unable to import class: {class_name}")
            return cls._import_cls_rec(module_name, class_name)
        return test
```

</details>

- `module_name = field(default=Factory(lambda self: self.__class__.__module__, takes_self=True), kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.serializable_mixin.SerializableMixin.module_name"></span>

- `type = field(default=Factory(lambda self: self.__class__.__name__, takes_self=True), kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.serializable_mixin.SerializableMixin.type"></span>

<span id="griptape.mixins.serializable_mixin.SerializableMixin.__str__"></span>

### **str**()

<details>

<summary>

Source Code in <code>griptape/mixins/serializable\_mixin.py</code>

</summary>

```python
def __str__(self) -> str:
    return json.dumps(self.to_dict())
```

</details>

<span id="griptape.mixins.serializable_mixin.SerializableMixin._import_cls_rec"></span>

### \_import\_cls\_rec(module\_name, class\_name)classmethod

Imports a class given a module name and class name.

Will recursively traverse up the module's path until it finds a package that it can import `class_name` from.

#### Parameters

| Name          | Type  | Description           | Default    |
| ------------- | ----- | --------------------- | ---------- |
| `module_name` | `str` | The module name.<br/> | `required` |
| `class_name`  | `str` | The class name.<br/>  | `required` |

#### Returns

| Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Description                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin.type" title="type = field(default=Factory(lambda self: self.__class__.__name__, takes_self=True), kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.mixins.serializable_mixin.SerializableMixin.type)"><code class="language-python">type</code></a> | The imported class if found. Raises `ValueError` if not found.<br/> |

<details>

<summary>

Source Code in <code>griptape/mixins/serializable\_mixin.py</code>

</summary>

```python
@classmethod
def _import_cls_rec(cls, module_name: str, class_name: str) -> type:
    """Imports a class given a module name and class name.

    Will recursively traverse up the module's path until it finds a
    package that it can import `class_name` from.

    Args:
        module_name: The module name.
        class_name: The class name.

    Returns:
        The imported class if found. Raises `ValueError` if not found.
    """
    try:
        module = import_module(module_name)
        test = getattr(module, class_name, None)
    except ModuleNotFoundError:
        test = None

    if test is None:
        module_dirs = module_name.split(".")[:-1]
        module_name = ".".join(module_dirs)

        if not len(module_dirs):
            raise ValueError(f"Unable to import class: {class_name}")
        return cls._import_cls_rec(module_name, class_name)
    return test
```

</details>

<span id="griptape.mixins.serializable_mixin.SerializableMixin.from_dict"></span>

### from\_dict(data, \*, types\_overrides=None, serializable\_overrides=None)classmethod

<details>

<summary>

Source Code in <code>griptape/mixins/serializable\_mixin.py</code>

</summary>

```python
@classmethod
def from_dict(
    cls: type[T],
    data: dict,
    *,
    types_overrides: Optional[dict[str, type]] = None,
    serializable_overrides: Optional[dict[str, bool]] = None,
) -> T:
    return cast(
        "T",
        cls.get_schema(
            subclass_name=data.get("type"),
            module_name=data.get("module_name"),
            types_overrides=types_overrides,
            serializable_overrides=serializable_overrides,
        ).load(data),
    )
```

</details>

<span id="griptape.mixins.serializable_mixin.SerializableMixin.from_json"></span>

### from\_json(data, \*, types\_overrides=None, serializable\_overrides=None)classmethod

<details>

<summary>

Source Code in <code>griptape/mixins/serializable\_mixin.py</code>

</summary>

```python
@classmethod
def from_json(
    cls: type[T],
    data: str,
    *,
    types_overrides: Optional[dict[str, type]] = None,
    serializable_overrides: Optional[dict[str, bool]] = None,
) -> T:
    return cls.from_dict(
        json.loads(data), types_overrides=types_overrides, serializable_overrides=serializable_overrides
    )
```

</details>

<span id="griptape.mixins.serializable_mixin.SerializableMixin.get_schema"></span>

### get\_schema(subclass\_name=None, \*, module\_name=None, types\_overrides=None, serializable\_overrides=None)classmethod

Generates a Marshmallow schema for the class.

#### Parameters

| Name                     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Description                                                                 | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- | ------- |
| `subclass_name`          | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | An optional subclass name. Required if the class is abstract.<br/>          | `None`  |
| `module_name`            | `Optional[str]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | An optional module name. Defaults to the class's module.<br/>               | `None`  |
| `types_overrides`        | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin.type" title="type = field(default=Factory(lambda self: self.__class__.__name__, takes_self=True), kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.mixins.serializable_mixin.SerializableMixin.type)"><code class="language-python">Optional\[dict\[str, type]]</code></a> | An optional dictionary of field names to override type.<br/>                | `None`  |
| `serializable_overrides` | `Optional[dict[str, bool]]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | An optional dictionary of field names to override serializable status.<br/> | `None`  |

<details>

<summary>

Source Code in <code>griptape/mixins/serializable\_mixin.py</code>

</summary>

```python
@classmethod
def get_schema(
    cls: type[T],
    subclass_name: Optional[str] = None,
    *,
    module_name: Optional[str] = None,
    types_overrides: Optional[dict[str, type]] = None,
    serializable_overrides: Optional[dict[str, bool]] = None,
) -> Schema:
    """Generates a Marshmallow schema for the class.

    Args:
        subclass_name: An optional subclass name. Required if the class is abstract.
        module_name: An optional module name. Defaults to the class's module.
        types_overrides: An optional dictionary of field names to override type.
        serializable_overrides: An optional dictionary of field names to override serializable status.
    """
    if ABC in cls.__bases__:
        if subclass_name is None:
            raise ValueError(f"Type field is required for abstract class: {cls.__name__}")

        module_name = module_name or cls.__module__
        subclass_cls = cls._import_cls_rec(module_name, subclass_name)

        schema_class = BaseSchema.from_attrs_cls(
            subclass_cls, types_overrides=types_overrides, serializable_overrides=serializable_overrides
        )
    else:
        schema_class = BaseSchema.from_attrs_cls(
            cls, types_overrides=types_overrides, serializable_overrides=serializable_overrides
        )

    return schema_class()
```

</details>

<span id="griptape.mixins.serializable_mixin.SerializableMixin.to_dict"></span>

### to\_dict(\*, types\_overrides=None, serializable\_overrides=None)

<details>

<summary>

Source Code in <code>griptape/mixins/serializable\_mixin.py</code>

</summary>

```python
def to_dict(
    self,
    *,
    types_overrides: Optional[dict[str, type]] = None,
    serializable_overrides: Optional[dict[str, bool]] = None,
) -> dict:
    schema = BaseSchema.from_attrs_cls(
        self.__class__, types_overrides=types_overrides, serializable_overrides=serializable_overrides
    )

    return dict(schema().dump(self))
```

</details>

<span id="griptape.mixins.serializable_mixin.SerializableMixin.to_json"></span>

### to\_json(\*, types\_overrides=None, serializable\_overrides=None)

<details>

<summary>

Source Code in <code>griptape/mixins/serializable\_mixin.py</code>

</summary>

```python
def to_json(
    self,
    *,
    types_overrides: Optional[dict[str, type]] = None,
    serializable_overrides: Optional[dict[str, bool]] = None,
) -> str:
    return json.dumps(self.to_dict(types_overrides=types_overrides, serializable_overrides=serializable_overrides))
```

</details>

<span id="griptape.mixins.serializable_mixin._default"></span>

## \_default(\_self, obj)

<details>

<summary>

Source Code in <code>griptape/mixins/serializable\_mixin.py</code>

</summary>

```python
def _default(_self: Any, obj: Any) -> Any:
    """Fallback method for JSONEncoder to handle custom serialization."""
    return getattr(obj.__class__, "to_dict", getattr(_default, "default"))(obj)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
