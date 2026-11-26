---
title: base_tokenizer
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tokenizers/base_tokenizer/
lastModified: 2025-11-07T18:06:05Z
---

# base\_tokenizer

<span id="griptape.tokenizers.base_tokenizer.BaseTokenizer"></span>

Bases:

<span title="abc.ABC">ABC</span>,  [`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")

<details>

<summary>

Source Code in <code>griptape/tokenizers/base\_tokenizer.py</code>

</summary>

```python
@define()
class BaseTokenizer(ABC, SerializableMixin):
    DEFAULT_MAX_INPUT_TOKENS = 4096
    DEFAULT_MAX_OUTPUT_TOKENS = 1000
    MODEL_PREFIXES_TO_MAX_INPUT_TOKENS = {}
    MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS = {}

    model: str = field(kw_only=True, metadata={"serializable": True})
    stop_sequences: list[str] = field(default=Factory(list), kw_only=True, metadata={"serializable": True})
    _max_input_tokens: Optional[int] = field(
        kw_only=True, default=None, alias="max_input_tokens", metadata={"serializable": True}
    )
    _max_output_tokens: Optional[int] = field(
        kw_only=True, default=None, alias="max_output_tokens", metadata={"serializable": True}
    )

    @lazy_property()
    def max_input_tokens(self) -> int:
        return self._default_max_input_tokens()

    @lazy_property()
    def max_output_tokens(self) -> int:
        return self._default_max_output_tokens()

    def __attrs_post_init__(self) -> None:
        if self.model is not None:
            if self.max_input_tokens is None:
                self.max_input_tokens = self._default_max_input_tokens()

            if self.max_output_tokens is None:
                # TODO(collin): https://github.com/griptape-ai/griptape/issues/1844
                self.max_output_tokens = self._default_max_output_tokens()

    def count_input_tokens_left(self, text: str) -> int:
        diff = self.max_input_tokens - self.count_tokens(text)

        if diff > 0:
            return diff
        return 0

    def count_output_tokens_left(self, text: str) -> int:
        diff = self.max_output_tokens - self.count_tokens(text)

        if diff > 0:
            return diff
        return 0

    @abstractmethod
    def count_tokens(self, text: str) -> int: ...

    def _default_max_input_tokens(self) -> int:
        tokens = next(
            (
                max_tokens
                for model_prefix, max_tokens in self.MODEL_PREFIXES_TO_MAX_INPUT_TOKENS.items()
                if model_prefix in self.model
            ),
            None,
        )

        if tokens is None:
            logging.warning(
                "Model %s not found in MODEL_PREFIXES_TO_MAX_INPUT_TOKENS, using default value of %s.",
                self.model,
                self.DEFAULT_MAX_INPUT_TOKENS,
            )
            return self.DEFAULT_MAX_INPUT_TOKENS
        return tokens

    def _default_max_output_tokens(self) -> int:
        tokens = next(
            (
                max_tokens
                for model_prefix, max_tokens in self.MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS.items()
                if model_prefix in self.model
            ),
            None,
        )

        if tokens is None:
            logging.debug(
                "Model %s not found in MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS, using default value of %s.",
                self.model,
                self.DEFAULT_MAX_OUTPUT_TOKENS,
            )
            return self.DEFAULT_MAX_OUTPUT_TOKENS
        return tokens
```

</details>

- `DEFAULT_MAX_INPUT_TOKENS = 4096` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.base_tokenizer.BaseTokenizer.DEFAULT_MAX_INPUT_TOKENS"></span>

- `DEFAULT_MAX_OUTPUT_TOKENS = 1000` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.base_tokenizer.BaseTokenizer.DEFAULT_MAX_OUTPUT_TOKENS"></span>

- `MODEL_PREFIXES_TO_MAX_INPUT_TOKENS = {}` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.base_tokenizer.BaseTokenizer.MODEL_PREFIXES_TO_MAX_INPUT_TOKENS"></span>

- `MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS = {}` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.base_tokenizer.BaseTokenizer.MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS"></span>

- `_max_input_tokens = field(kw_only=True, default=None, alias='max_input_tokens', metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.base_tokenizer.BaseTokenizer._max_input_tokens"></span>

- `_max_output_tokens = field(kw_only=True, default=None, alias='max_output_tokens', metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.base_tokenizer.BaseTokenizer._max_output_tokens"></span>

- `model = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.base_tokenizer.BaseTokenizer.model"></span>

- `stop_sequences = field(default=Factory(list), kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tokenizers.base_tokenizer.BaseTokenizer.stop_sequences"></span>

<span id="griptape.tokenizers.base_tokenizer.BaseTokenizer.__attrs_post_init__"></span>

### **attrs\_post\_init**()

<details>

<summary>

Source Code in <code>griptape/tokenizers/base\_tokenizer.py</code>

</summary>

```python
def __attrs_post_init__(self) -> None:
    if self.model is not None:
        if self.max_input_tokens is None:
            self.max_input_tokens = self._default_max_input_tokens()

        if self.max_output_tokens is None:
            # TODO(collin): https://github.com/griptape-ai/griptape/issues/1844
            self.max_output_tokens = self._default_max_output_tokens()
```

</details>

<span id="griptape.tokenizers.base_tokenizer.BaseTokenizer._default_max_input_tokens"></span>

### \_default\_max\_input\_tokens()

<details>

<summary>

Source Code in <code>griptape/tokenizers/base\_tokenizer.py</code>

</summary>

```python
def _default_max_input_tokens(self) -> int:
    tokens = next(
        (
            max_tokens
            for model_prefix, max_tokens in self.MODEL_PREFIXES_TO_MAX_INPUT_TOKENS.items()
            if model_prefix in self.model
        ),
        None,
    )

    if tokens is None:
        logging.warning(
            "Model %s not found in MODEL_PREFIXES_TO_MAX_INPUT_TOKENS, using default value of %s.",
            self.model,
            self.DEFAULT_MAX_INPUT_TOKENS,
        )
        return self.DEFAULT_MAX_INPUT_TOKENS
    return tokens
```

</details>

<span id="griptape.tokenizers.base_tokenizer.BaseTokenizer._default_max_output_tokens"></span>

### \_default\_max\_output\_tokens()

<details>

<summary>

Source Code in <code>griptape/tokenizers/base\_tokenizer.py</code>

</summary>

```python
def _default_max_output_tokens(self) -> int:
    tokens = next(
        (
            max_tokens
            for model_prefix, max_tokens in self.MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS.items()
            if model_prefix in self.model
        ),
        None,
    )

    if tokens is None:
        logging.debug(
            "Model %s not found in MODEL_PREFIXES_TO_MAX_OUTPUT_TOKENS, using default value of %s.",
            self.model,
            self.DEFAULT_MAX_OUTPUT_TOKENS,
        )
        return self.DEFAULT_MAX_OUTPUT_TOKENS
    return tokens
```

</details>

<span id="griptape.tokenizers.base_tokenizer.BaseTokenizer.count_input_tokens_left"></span>

### count\_input\_tokens\_left(text)

<details>

<summary>

Source Code in <code>griptape/tokenizers/base\_tokenizer.py</code>

</summary>

```python
def count_input_tokens_left(self, text: str) -> int:
    diff = self.max_input_tokens - self.count_tokens(text)

    if diff > 0:
        return diff
    return 0
```

</details>

<span id="griptape.tokenizers.base_tokenizer.BaseTokenizer.count_output_tokens_left"></span>

### count\_output\_tokens\_left(text)

<details>

<summary>

Source Code in <code>griptape/tokenizers/base\_tokenizer.py</code>

</summary>

```python
def count_output_tokens_left(self, text: str) -> int:
    diff = self.max_output_tokens - self.count_tokens(text)

    if diff > 0:
        return diff
    return 0
```

</details>

<span id="griptape.tokenizers.base_tokenizer.BaseTokenizer.count_tokens"></span>

### count\_tokens(text)abstractmethod

<details>

<summary>

Source Code in <code>griptape/tokenizers/base\_tokenizer.py</code>

</summary>

```python
@abstractmethod
def count_tokens(self, text: str) -> int: ...
```

</details>

<span id="griptape.tokenizers.base_tokenizer.BaseTokenizer.max_input_tokens"></span>

### max\_input\_tokens()

<details>

<summary>

Source Code in <code>griptape/tokenizers/base\_tokenizer.py</code>

</summary>

```python
@lazy_property()
def max_input_tokens(self) -> int:
    return self._default_max_input_tokens()
```

</details>

<span id="griptape.tokenizers.base_tokenizer.BaseTokenizer.max_output_tokens"></span>

### max\_output\_tokens()

<details>

<summary>

Source Code in <code>griptape/tokenizers/base\_tokenizer.py</code>

</summary>

```python
@lazy_property()
def max_output_tokens(self) -> int:
    return self._default_max_output_tokens()
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
