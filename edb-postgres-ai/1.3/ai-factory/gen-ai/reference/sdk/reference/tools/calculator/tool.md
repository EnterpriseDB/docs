---
title: tool
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/calculator/tool/
lastModified: 2025-11-07T18:06:05Z
---

# tool

<span id="griptape.tools.calculator.tool.CalculatorTool"></span>

Bases:
[`BaseTool`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tools/#griptape.tools.BaseTool "BaseTool (griptape.tools.BaseTool)")

<details>

<summary>

Source Code in <code>griptape/tools/calculator/tool.py</code>

</summary>

```python
class CalculatorTool(BaseTool):
    @activity(
        config={
            "description": "Can be used for computing simple numerical or algebraic calculations in Python",
            "schema": Schema(
                {
                    Literal(
                        "expression",
                        description="Arithmetic expression parsable in pure Python. Single line only. "
                        "Don't use variables. Don't use any imports or external libraries",
                    ): str,
                },
            ),
        },
    )
    def calculate(self, params: dict) -> BaseArtifact:
        import numexpr  # pyright: ignore[reportMissingImports]

        try:
            expression = params["values"]["expression"]

            return TextArtifact(numexpr.evaluate(expression))
        except Exception as e:
            return ErrorArtifact(f"error calculating: {e}")
```

</details>

<span id="griptape.tools.calculator.tool.CalculatorTool.calculate"></span>

### calculate(params)

<details>

<summary>

Source Code in <code>griptape/tools/calculator/tool.py</code>

</summary>

```python
@activity(
    config={
        "description": "Can be used for computing simple numerical or algebraic calculations in Python",
        "schema": Schema(
            {
                Literal(
                    "expression",
                    description="Arithmetic expression parsable in pure Python. Single line only. "
                    "Don't use variables. Don't use any imports or external libraries",
                ): str,
            },
        ),
    },
)
def calculate(self, params: dict) -> BaseArtifact:
    import numexpr  # pyright: ignore[reportMissingImports]

    try:
        expression = params["values"]["expression"]

        return TextArtifact(numexpr.evaluate(expression))
    except Exception as e:
        return ErrorArtifact(f"error calculating: {e}")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
