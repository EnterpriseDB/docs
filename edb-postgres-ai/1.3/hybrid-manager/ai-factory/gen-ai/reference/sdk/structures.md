---
title: Agents
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/
lastModified: 2026-05-22T19:45:14+05:30
---

# Agents

## Overview

An [Agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/structures/agent/) is the quickest way to get started with Gen AI Builder.
Agents take in [tools](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/structures/agent/#griptape.structures.agent.Agent.tools) and [input](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/structures/agent/#griptape.structures.agent.Agent.input)
directly, which the agent uses to add a [Prompt Task](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/tasks/#prompt-task).

You can access the final output of the Agent by using the [output](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/structures/structure/#griptape.structures.structure.Structure.output) attribute.

### Agent Tools

#### Code

```python
from griptape.structures import Agent
from griptape.tools import CalculatorTool

agent = Agent(input="Calculate the following: {{ args[0] }}", tools=[CalculatorTool()])

agent.run("what's 13^7?")
print("Answer:", agent.output)

```

#### Logs

```text
[02/27/25 20:27:58] INFO     PromptTask b01ef6f2df44408ab55cc6c9f4e8bc1c        
                             Input: Calculate the following: what's 13^7?       
[02/27/25 20:27:59] INFO     Subtask 55f186e0ce5040f6a8e91f6bd2f75f77           
                             Actions: [                                         
                               {                                                
                                 "tag": "call_EkyljA8FEDA2R8TZktNu8nAs",        
                                 "name": "CalculatorTool",                      
                                 "path": "calculate",                           
                                 "input": {                                     
                                   "values": {                                  
                                     "expression": "13**7"                      
                                   }                                            
                                 }                                              
                               }                                                
                             ]                                                  
                    INFO     Subtask 55f186e0ce5040f6a8e91f6bd2f75f77           
                             Response: 62748517                                 
[02/27/25 20:28:00] INFO     PromptTask b01ef6f2df44408ab55cc6c9f4e8bc1c        
                             Output: The result of \(13^7\) is 62,748,517.      
Answer: The result of \(13^7\) is 62,748,517.

```

### Agent Input

#### Code

```python
from griptape.structures import Agent

agent = Agent(
    input="Write me a {{ args[0] }} about {{ args[1] }} and {{ args[2] }}",
)

agent.run("Haiku", "Skateboards", "Programming")

```

#### Logs

```text
[02/27/25 20:27:49] INFO     PromptTask 883015011f22460082f152115126353b        
                             Input: Write me a Haiku about Skateboards and      
                             Programming                                        
[02/27/25 20:27:50] INFO     PromptTask 883015011f22460082f152115126353b        
                             Output: Wheels spin on pavement,                   
                             Code flows like a river's path—                    
                             Balance in both worlds.                            

```

- [Pipelines](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/pipelines/): Overview
- [Workflows](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/workflows/): Overview
- [Tasks](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/tasks/): Overview
- [Task Memory and Off Prompt](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/task-memory/): Overview
- [Conversation Memory](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/conversation-memory/): Overview
- [Rulesets](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/rulesets/): Overview
- [Configs](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/configs/): Overview
- [Observability](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/structures/observability/): Overview

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
