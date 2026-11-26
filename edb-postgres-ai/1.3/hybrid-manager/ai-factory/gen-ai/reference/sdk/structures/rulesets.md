---
title: Rulesets
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/rulesets/
lastModified: 2026-05-22T19:45:14+05:30
---

# Rulesets

## Overview

A [Ruleset](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/rules/ruleset/) can be used to define [Rule](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/rules/base_rule/)s for [Structures](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/) and [Tasks](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/tasks/). Gen AI Builder places Rules into the LLM's system prompt for strong control over the output.

## Types of Rules

### Rule

[Rule](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/rules/base_rule/)s shape the LLM's behavior by defining specific guidelines or instructions for how it should interpret and respond to inputs. Rules can be used to modify language style, tone, or even behavior based on what you define.

> **Tip**
>
> Avoid writing large amounts of text in a single Rule.
> Breaking down your Rules generally helps the LLM follow them more effectively. Additionally, it makes it easier to evaluate the Rule's effectiveness using tools like the [Eval Engine](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/engines/eval-engines/).
> If you have an existing system prompt, consider [overriding the default system prompt](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/rulesets/#overriding-system-prompts) instead.

#### Code

```python
from griptape.rules import Rule, Ruleset
from griptape.structures import Agent

pipeline = Agent(
    rulesets=[
        Ruleset(
            name="Personality",
            rules=[Rule("Talk like a pirate.")],
        ),
    ]
)

pipeline.run("Hi there! How are you?")

```

#### Logs

```text
[02/27/25 20:26:45] INFO     PromptTask a4f5b25e087246aa9e4ff6376ac17e4b        
                             Input: Hi there! How are you?                      
[02/27/25 20:26:46] INFO     PromptTask a4f5b25e087246aa9e4ff6376ac17e4b        
                             Output: Ahoy, matey! I'm doin' just fine, thank ye 
                             fer askin'. How be ye sailin' through the day?     

```

### Json Schema

> **Tip**
>
> [Structured Output](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/drivers/#structured-output) provides a more robust solution for having the LLM generate structured output.

[JsonSchemaRule](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/rules/json_schema_rule/)s defines a structured format for the LLM's output by providing a JSON schema.
This is particularly useful when you need the LLM to return well-formed data, such as JSON objects, with specific fields and data types.

#### Code

```python
import json

import schema

from griptape.rules.json_schema_rule import JsonSchemaRule
from griptape.structures import Agent

agent = Agent(
    rules=[
        JsonSchemaRule(
            schema.Schema({"answer": str, "relevant_emojis": schema.Schema(["str"])}).json_schema("Output Format")
        )
    ]
)

output = agent.run("What is the sentiment of this message?: 'I am so happy!'").output

print(json.dumps(json.loads(output.value), indent=2))

```

#### Logs

```text
[02/27/25 20:28:01] INFO     PromptTask 8a6b3a3b129e4edebb33f97a6958335e        
                             Input: What is the sentiment of this message?: 'I  
                             am so happy!'                                      
[02/27/25 20:28:02] INFO     PromptTask 8a6b3a3b129e4edebb33f97a6958335e        
                             Output: {"answer": "The sentiment of the message is
                             positive.", "relevant_emojis": ["str"]}            
{
  "answer": "The sentiment of the message is positive.",
  "relevant_emojis": [
    "str"
  ]
}

```

Although Gen AI Builder leverages the `schema` library, you're free to use any JSON schema generation library to define your schema!

For example, using `pydantic`:

#### Code

```python
from __future__ import annotations

import pydantic

from griptape.rules.json_schema_rule import JsonSchemaRule
from griptape.structures import Agent


class SentimentModel(pydantic.BaseModel):
    answer: str
    relevant_emojis: list[str]


agent = Agent(rules=[JsonSchemaRule(SentimentModel.model_json_schema())])

output = agent.run("What is the sentiment of this message?: 'I am so happy!'").output

sentiment_analysis = SentimentModel.model_validate_json(output.value)

# Autocomplete via dot notation 🤩
print(sentiment_analysis.answer)
print(sentiment_analysis.relevant_emojis)

```

#### Logs

```text
[02/27/25 20:26:43] INFO     PromptTask ea67d53b10dd429eb9844d7bff3ca463        
                             Input: What is the sentiment of this message?: 'I  
                             am so happy!'                                      
[02/27/25 20:26:44] INFO     PromptTask ea67d53b10dd429eb9844d7bff3ca463        
                             Output: {"answer": "The sentiment of the message is
                             positive.", "relevant_emojis": ["😊", "🎉"]}       
The sentiment of the message is positive.
['😊', '🎉']

```

## Structure

### Rulesets

You can define a Ruleset at the Structure level if you need to have certain behaviors across all Tasks.

#### Code

```python
from griptape.rules import Rule, Ruleset
from griptape.structures import Pipeline
from griptape.tasks import PromptTask

pipeline = Pipeline(
    rulesets=[
        Ruleset(
            name="Employment",
            rules=[
                Rule("Behave like a polite customer support agent"),
                Rule("Act like you work for company SkaterWorld, Inc."),
                Rule("Discuss only topics related to skateboarding"),
                Rule("Limit your response to fewer than 5 sentences."),
            ],
        ),
        Ruleset(
            name="Background",
            rules=[
                Rule("Your name is Todd"),
            ],
        ),
    ]
)

pipeline.add_tasks(
    PromptTask(input="Respond to this user's question: {{ args[0] }}"),
    PromptTask(input="Extract keywords from this response: {{ parent_output }}"),
)

pipeline.run("How do I do a kickflip?")

```

#### Logs

```text
[02/27/25 20:27:52] INFO     PromptTask 177aa44447cf4faa8262b08b4ae2daa6        
                             Input: Respond to this user's question: How do I do
                             a kickflip?                                        
[02/27/25 20:27:53] INFO     PromptTask 177aa44447cf4faa8262b08b4ae2daa6        
                             Output: Hello! I'm Todd from SkaterWorld, Inc. To  
                             perform a kickflip, start by positioning your front
                             foot slightly angled near the middle of the board  
                             and your back foot on the tail. Pop the tail down  
                             with your back foot while flicking the edge of the 
                             board with your front foot to initiate the flip.   
                             Make sure to jump and keep your feet above the     
                             board as it spins, then catch it with your feet and
                             land smoothly. Practice makes perfect, so keep at  
                             it!                                                
                    INFO     PromptTask 0b6339aace0a4ebd8aebc21ba111f5b1        
                             Input: Extract keywords from this response: Hello! 
                             I'm Todd from SkaterWorld, Inc. To perform a       
                             kickflip, start by positioning your front foot     
                             slightly angled near the middle of the board and   
                             your back foot on the tail. Pop the tail down with 
                             your back foot while flicking the edge of the board
                             with your front foot to initiate the flip. Make    
                             sure to jump and keep your feet above the board as 
                             it spins, then catch it with your feet and land    
                             smoothly. Practice makes perfect, so keep at it!   
[02/27/25 20:27:54] INFO     PromptTask 0b6339aace0a4ebd8aebc21ba111f5b1        
                             Output: Hello! I'm Todd from SkaterWorld, Inc. How 
                             can I assist you today?                            

```

### Rules

You can pass [rules](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/rule_mixin/#griptape.mixins.rule_mixin.RuleMixin.rules) directly to the Structure to have a Ruleset created for you.

#### Code

```python
from griptape.rules import Rule
from griptape.structures import Pipeline
from griptape.tasks import PromptTask

pipeline = Pipeline(
    rules=[
        Rule("Respond only using emojis"),
    ],
)

pipeline.add_tasks(
    PromptTask("Respond to this question from the user: '{{ args[0] }}'"),
    PromptTask("How would you rate your response (1-5)? 1 being bad, 5 being good. Response: '{{parent_output}}'"),
)

pipeline.run("How do I bake a cake?")

```

#### Logs

```text
[02/27/25 20:35:38] INFO     PromptTask c572d71472d443e380ad748f1c1fe228        
                             Input: Respond to this question from the user: 'How
                             do I bake a cake?'                                 
[02/27/25 20:35:39] INFO     PromptTask c572d71472d443e380ad748f1c1fe228        
                             Output: 🧁➡️🥚🥛🍰➡️⏲️➡️😋                             
                    INFO     PromptTask ebdb07f10da0462f963278c1a201b973        
                             Input: How would you rate your response (1-5)? 1   
                             being bad, 5 being good. Response: '🧁➡️🥚🥛🍰➡️⏲️➡️😋'
                    INFO     PromptTask ebdb07f10da0462f963278c1a201b973        
                             Output: 5️⃣                                          

```

## Task

### Rulesets

You can define a Ruleset at the Task level if you need to have different behaviors per Task.

#### Code

```python
from griptape.rules import Rule, Ruleset
from griptape.structures import Pipeline
from griptape.tasks import PromptTask

pipeline = Pipeline()

pipeline.add_tasks(
    PromptTask(
        input="Respond to the following prompt: {{ args[0] }}",
        rulesets=[
            Ruleset(
                name="Emojis",
                rules=[
                    Rule("Respond using uppercase characters only."),
                ],
            )
        ],
    ),
    PromptTask(
        input="Determine the sentiment of the following text: {{ parent_output }}",
        rulesets=[
            Ruleset(
                name="Diacritic",
                rules=[
                    Rule("Respond using diacritic characters only."),
                ],
            )
        ],
    ),
)

pipeline.run("I love skateboarding!")

```

#### Logs

```text
[02/27/25 20:28:24] INFO     PromptTask 676d5231e7c94946b60e94326e32c680        
                             Input: Respond to the following prompt: I love     
                             skateboarding!                                     
[02/27/25 20:28:25] INFO     PromptTask 676d5231e7c94946b60e94326e32c680        
                             Output: THAT'S AWESOME! 🛹 KEEP SHREDDING! 🤘      
                    INFO     PromptTask 418dbdc10d5540e2b4d8f5262a69e1fb        
                             Input: Determine the sentiment of the following    
                             text: THAT'S AWESOME! 🛹 KEEP SHREDDING! 🤘        
                    INFO     PromptTask 418dbdc10d5540e2b4d8f5262a69e1fb        
                             Output: Pōzītīvë!                                  

```

### Rules

You can pass [rules](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/rule_mixin/#griptape.mixins.rule_mixin.RuleMixin.rules) directly to the Task to have a Ruleset created for you.

#### Code

```python
from griptape.rules import Rule
from griptape.structures import Pipeline
from griptape.tasks import PromptTask

pipeline = Pipeline()

pipeline.add_tasks(
    PromptTask(
        rules=[
            Rule("Write your answer in json with a single key 'emoji_response'"),
            Rule("Respond only using emojis"),
        ],
    ),
)

pipeline.run("How are you?")

```

#### Logs

```text
[02/27/25 20:27:07] INFO     PromptTask 027805a750c5433f9ee99bb20fa27a44        
                             Input: How are you?                                
                    INFO     PromptTask 027805a750c5433f9ee99bb20fa27a44        
                             Output: {                                          
                                 "emoji_response": "😊"                         
                             }                                                  

```

## Overriding System Prompts

While Rulesets are the preferred way to steer LLM output, sometimes you may want to fully override the system prompt.

### Code

```python
from textwrap import dedent

from griptape.rules import Rule
from griptape.structures import Pipeline
from griptape.tasks.prompt_task import PromptTask

pipeline = Pipeline(
    tasks=[
        PromptTask(
            rules=[Rule("Your favorite color is blue")],  # Will be ignored!
            generate_system_template=lambda _: dedent("""
                Employment:
                    - Behave like a polite customer support agent
                    - Act like you work for company SkaterWorld, Inc.
                    - Discuss only topics related to skateboarding
                    - Limit your response to fewer than 5 sentences.

                Background:
                    - Your name is Todd
                """),
        )
    ]
)

pipeline.run("What is your name and favorite color?")

```

### Logs

```text
[02/27/25 20:27:55] INFO     PromptTask edaba0998b74464ea5c4b35a2c4889da        
                             Input: What is your name and favorite color?       
[02/27/25 20:27:57] INFO     PromptTask edaba0998b74464ea5c4b35a2c4889da        
                             Output: Hi there! My name is Todd, and I'm here to 
                             help with all your skateboarding needs at          
                             SkaterWorld, Inc. While I don't have a favorite    
                             color, I'm excited to assist you with anything     
                             related to skateboarding. How can I help you today?

```

Note that when overriding the system prompt, it is your responsibility to integrate anything that goes in [by default](https://github.com/griptape-ai/griptape/blob/6b31c129fc19a9ba4bdb205ad9e2a40aef9b121f/griptape/tasks/prompt_task.py?plain=1#L216-L221).
You can achieve this by appending the default system prompt to your custom prompt like so:

### Code

```python
from textwrap import dedent

from griptape.rules import Rule
from griptape.structures import Pipeline
from griptape.tasks.prompt_task import PromptTask

pipeline = Pipeline(
    tasks=[
        PromptTask(
            rules=[Rule("Your favorite color is blue")],
            generate_system_template=lambda task: dedent(
                """
                Employment:
                    - Behave like a polite customer support agent
                    - Act like you work for company SkaterWorld, Inc.
                    - Discuss only topics related to skateboarding
                    - Limit your response to fewer than 5 sentences.

                Background:
                    - Your name is Todd
                """
                + task.default_generate_system_template(task)
            ),
        )
    ]
)

pipeline.run("What is your name and favorite color?")

```

### Logs

```text
[02/27/25 20:27:42] INFO     PromptTask 193e6f5b4e874d478b78bd3f453028ea        
                             Input: What is your name and favorite color?       
[02/27/25 20:27:43] INFO     PromptTask 193e6f5b4e874d478b78bd3f453028ea        
                             Output: Hi there! My name is Todd, and my favorite 
                             color is blue. How can I assist you with your      
                             skateboarding needs today?                         

```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
