---
title: Invoking agents
description: Run an AIDB agent with aidb.agent_converse(), manage multi-turn conversations, and control read-only mode, debug output, and budgets.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/agents/conversing-with-agents/
lastModified: 2026-11-26T13:15:29+05:30
---

# Invoking agents

`aidb.agent_converse()` sends a prompt to an agent and runs its reasoning loop — think, optionally call tools, observe, repeat — until it produces an answer or hits a limit:

```sql
SELECT * FROM aidb.agent_converse(
    agent_name      => 'db_helper',
    prompt          => 'How many rows are in the orders table?',
    conversation_id => NULL,  -- optional; continue an existing conversation by id. Default: NULL (starts a new conversation)
    read_only       => NULL,  -- optional; force read-only mode on/off. Default: NULL (auto: on for a read replica, off otherwise)
    output_type     => NULL,  -- optional; override the agent's structured output schema for this call. Default: NULL (use the agent's own configuration)
    debug           => NULL   -- optional; also emit every action as a NOTICE. Default: NULL (false)
);

```

```output title="Output"
              message               |           conversation_id           | error
-------------------------------------+--------------------------------------+-------
 The orders table has 4,213 rows.   | 8f14e45f-ceea-467e-9575-a3d1a2c1a123 |
(1 row)
```

Like [`create_agent`](https://www.enterprisedb.com/docs/aidb/latest/agents/creating-agents/), this never raises for an agent-logic failure (an unknown agent, a mid-loop reasoning failure, a budget that was exceeded) — `error` is populated on the returned row instead, so the call's transaction (and everything already logged for that attempt) still commits.

Pass `output_type` to override the agent's configured output schema for just this call — see [Structured output](https://www.enterprisedb.com/docs/aidb/latest/agents/creating-agents/#structured-output) for how to build one.

## Conversations

Every `agent_converse` call belongs to a conversation, identified by `conversation_id`. Omit it on the first call and AIDB generates one; pass that same id back in on later calls to continue the conversation, with the agent's own prior history as context:

```sql
SELECT * FROM aidb.agent_converse('db_helper', 'And how many are still pending?',
    conversation_id => '8f14e45f-ceea-467e-9575-a3d1a2c1a123');
```

If you'd rather have the id in hand before sending a first prompt (for example, to log it alongside a UI session), mint one upfront with `aidb.start_agent_session()`:

```sql
SELECT * FROM aidb.start_agent_session('db_helper');
SELECT * FROM aidb.agent_converse('db_helper', 'How many rows are in the orders table?',
    conversation_id => '<the id start_agent_session returned>');
```

`start_agent_session` only validates the agent name and hands back a fresh id. A conversation doesn't actually exist until the first `agent_converse` call that uses it.

### Retrieving conversations

`aidb.get_conversation()` returns a conversation's user prompts and final answers, in order. It does not return tool calls or intermediate reasoning steps, which are activity details rather than "the conversation":

```sql
SELECT * FROM aidb.get_conversation('8f14e45f-ceea-467e-9575-a3d1a2c1a123');

```

```output title="Output"
 message_id | task_id | action_type |  role | sender_id |               contents
------------+---------+--------------+-------+-----------+---------------------------------------
 ...        | ...     | user_prompt  | user  | postgres  | How many rows are in the orders table?
 ...        | ...     | answer       | agent | db_helper | The orders table has 4,213 rows.
(2 rows)
```

`aidb.get_message()` retrieves one message's plain-text contents by its `message_id`. Both are backed by the `aidb.conversation_log` view, which you can also query directly; `aidb.conversations` aggregates it into one row per conversation (message count, status, last message). See [Agents reference](https://www.enterprisedb.com/docs/aidb/latest/reference/agents/) for their full column lists.

`aidb.conversation_log` doesn't include tool calls, so an agent that called tools can look like it did nothing. To see every action, including tool calls and their results, query `aidb_internal.action_log`. Each role sees only its own rows:

```sql
SELECT action_type, request_payload, response_payload
FROM aidb_internal.action_log
WHERE conversation_id = '<conversation_id>'
ORDER BY created_at;
```

If an agent never calls a tool, check its model's provider. Some providers send native tool calls and others describe the tools in the prompt. See [Creating agents](https://www.enterprisedb.com/docs/aidb/latest/agents/creating-agents/).

## Read-only mode

Pass `read_only => true` to run an agent without persisting anything — no conversation history is written, and `conversation_id` always comes back `NULL`, so a read-only run can't be resumed later. It's automatic (no need to pass it explicitly) when the database is a read replica.

A read-only run enforces two things at once: every tool call executes under `SET LOCAL transaction_read_only = on` for that statement, and any tool that isn't provably read-only is excluded from what the agent can even see or call in the first place. MCP tools are always excluded in read-only mode, regardless of how they're classified — an external server's own read/write behavior isn't something AIDB can verify. If a [delegation](https://www.enterprisedb.com/docs/aidb/latest/agents/delegation/) happens during a read-only run, the delegate's own sub-call is also forced read-only.

## Debug mode

Pass `debug => true` to also emit every action — model requests/responses, tool calls and their results, reasoning steps — as a Postgres `NOTICE` as it happens, in addition to (not instead of) the normal history written to `aidb_internal.action_log`. This is useful for watching an agent work interactively (`psql` prints `NOTICE` to the terminal by default) or for debugging why it took the path it did.

```sql
SELECT * FROM aidb.agent_converse('db_helper', 'How many rows are in the orders table?', debug => true);

NOTICE:  [agent debug] model_request request={"contents":"Tools available:\n- run_sql_query: ..."} response=null
NOTICE:  [agent debug] tool_call request={"tool_name":"run_sql_query","arguments":{"query":"SELECT count(*) FROM orders"},"call_id":"call_1"} response=null
NOTICE:  [agent debug] tool_response request=null response={"contents":"[{\"count\": 4213}]","call_id":"call_1"}
NOTICE:  [agent debug] answer request=null response={"contents":"The orders table has 4,213 rows."}
```

Each `NOTICE` includes that action's request/response payload — prompts, tool arguments, and results — truncated but **not redacted**. Avoid `debug => true` in contexts where those details (which may include data returned by your own tools) shouldn't be visible to whoever can see the client output or server log. It applies to any delegate sub-calls the run makes, too.

## Budgets and limits

Each `agent_converse` call is capped by four budgets, all optional and set on [`create_agent`/`update_agent`](https://www.enterprisedb.com/docs/aidb/latest/agents/creating-agents/#budgets-iterations-and-timeouts):

| Parameter             | What it caps                                                                                                                                                                                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `input_token_budget`  | Input tokens for the call.                                                                                                                                                                                                                                              |
| `output_token_budget` | Output tokens for the call.                                                                                                                                                                                                                                             |
| `max_iterations`      | Reasoning rounds — one model call plus any tools it calls in that round, not individual tool calls. The call stops after at most 25 rounds, or after `max_iterations` + 4 rounds if that's higher. The extra rounds leave room for the `attempt_complete` grace rounds. |
| `timeout`             | Wall-clock seconds for the whole call, including loading history, compaction, model requests, tool calls, and delegates. Defaults to 300 seconds if unset. See [Timeout](#timeout).                                                                                     |

What happens when a budget is exceeded depends on `budget_strategy`:

| Strategy                     | Behavior                                                                                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `attempt_complete` (default) | Grants 3 extra reasoning rounds once a budget is first exceeded, telling the model its time is running out so it can wrap up — then halts with an error if it still hasn't finished. |
| `error`                      | Halts immediately with an error.                                                                                                                                                     |
| `summarize`                  | Stops immediately and asks the model for a brief status report of what it had done so far, returning that as the answer instead of an error.                                         |
| `ignore`                     | Logs a one-time warning (as a Postgres `WARNING`) and keeps going with no limit.                                                                                                     |

MCP clients can also reach `agent_converse` by calling an agent as a tool. The MCP server limits each call to the agent's `timeout`, stored as `timeout_seconds` in `aidb.agents`. To call an agent from an MCP client, see [Calling agents as tools](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/connecting-a-client/#calling-agents-as-tools) for the arguments, result, and timeout.

To end a call that's waiting on a chat model whose provider never answers, set a Postgres `statement_timeout` or cancel the query, for example with Ctrl+C in `psql`. This works however the call arrives, for the `openai_responses`, `anthropic_messages`, `gemini`, `openai_completions`, `nim_completions`, `openrouter_chat`, and `completions` providers, including their Azure and Bedrock variants. It doesn't work for embedding, reranking, or OCR models.

### Timeout

The timeout is one deadline for the whole `agent_converse` call. Each model request gets only the time that's left. If the model doesn't answer in time, AIDB stops waiting and the call ends with a timeout error. This applies to the `anthropic_messages`, `openai_responses`, `openai_completions`, `nim_completions`, `openrouter_chat`, and `gemini` provider families. It doesn't apply to `llamacpp_generate`.

A tool that hasn't started when the deadline passes is skipped with the error `agent time budget exhausted before this tool could run`. A tool that's already running isn't interrupted.

## Context length

Long conversations are bounded automatically. Once a task's prompt grows past a size threshold, AIDB asks the model to summarize the older part of the history and continues with that summary in place of the original turns. The summary request includes the agent's instructions, so the summary keeps what the agent needs. A `compaction` entry appears in the activity log when this happens (see [debug mode](#debug-mode), or query `aidb_internal.action_log` directly for the full activity history behind a conversation — every model request/response and tool call/response, not just the user-facing messages `aidb.get_conversation()` returns).

The threshold starts at 16,000 characters. To base it on the model's real context window, set `context_window` in the model's config. See [Context window](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/remote-models/#context-window). For `llamacpp_generate` models, AIDB uses the model's `n_ctx` setting.

AIDB always keeps the most recent model response, its tool calls, and their results, so the model sees the data it just asked for. If a tool result is too large to fit, AIDB cuts it in the prompt and ends it with `...(truncated, N bytes total)`, where `N` is the original length. The activity log still has the full result.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
