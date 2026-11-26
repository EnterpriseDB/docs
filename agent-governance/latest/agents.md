---
title: Reviewing agents
description: Review the AI agents registered in an aidb database, their permissions, and how often governance denies them, in EDB Agent Governance.
product: EDB Agent Governance
version: "1"
url: https://www.enterprisedb.com/docs/agent-governance/latest/agents/
lastModified: 2026-11-25T20:55:56+05:30
---

# Reviewing agents

Use the Agents page to see which AI agents are registered in an `aidb` database, what they're allowed to access, and how often governance denies their actions. Select Agents in the cluster sidebar to open it. The page is available only for `aidb` databases; HM and Loki sources don't record agent identities.

The page has two tabs: Roster and Behavior.

## Browsing the roster

Use the Roster tab to see the agents registered in `aidb`, five per page, with their Agent name and Purpose. Use Search... to find an agent, or Filter agents to pick agents by name.

Selecting a row opens Agent Details on the right, with the agent's name and declared purpose, its Permissions, and its Recent Activity. The Permissions section uses Postgres catalogs to show current grants for the role mapped to the agent's purpose. It isn't a history of what the agent accessed. Recent Activity lists the agent's latest sessions with their start time. Select an identifier to open one. View Agent Activity opens Activity filtered to that agent. When the agent has a per-run token budget set in `aidb`, Agent Details also shows Input token budget and Output token budget. An agent without a budget shows neither row.

The viewer connects read-only. Change an agent's permissions in the database.

If the viewer's role can't read the `aidb` agent catalog, the tab shows Agent registry unavailable.

## Reviewing agent behavior

Use the Behavior tab to see, for each agent, its governed actions and denied decisions over the last 7 days. It's a first look at which agents keep being denied, not a verdict. The period shows as a chip above the table. To look at another period, choose a date range of up to 31 days in Filter agents.

The cards at the top count Agents Observed, Governed Actions, agents that Needs Attention, and Denied Actions. The table lists each agent's Actions, Denied Actions, Denial Rate, Denials Per Day, Last Denied date, Tokens in / out, and a Signal:

| Signal                       | Meaning, with the default thresholds                                                                                                           |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| No decisions                 | No allowed or denied decision was recorded for the agent.                                                                                      |
| Not enough data              | Fewer than 10 governed actions, too few to judge.                                                                                              |
| None                         | Less than 5% of actions denied.                                                                                                                |
| Occasional                   | From 5% to less than 20% denied.                                                                                                               |
| Repeated                     | 20% or more denied.                                                                                                                            |
| Privilege escalation blocked | `aidb` refused at least one attempt to switch role, for example `SET ROLE` or `set_config('role', ...)`. Shown ahead of the rate-based signal. |

Tokens in / out counts the model tokens the agent's runs consumed in the period, input and output, as reported by the model provider. The column needs `aidb` 7.10.0 or later. On earlier versions, and until a run reports a count, the cell shows —. Sorting by the column puts agents without a count last.

The table is sorted by signal, so the agents denied most often come first. The Needs Attention card counts agents with Repeated or Privilege escalation blocked. A signal says what happened, not why: a high denial rate can mean an agent asks for more than its purpose allows, or that the grants for its purpose are too narrow for legitimate work. Check the denied steps before acting. To receive a notification when an agent shows the Repeated or Privilege escalation blocked signal, see [Receiving notifications](https://www.enterprisedb.com/docs/agent-governance/latest/notifications/).

Filter agents also narrows the table by agent, by a range of denial rates, and by signal.

Selecting a row opens Agent Behavior on the right, with the agent's purpose, its Decisions (total, approved, and denied actions, and the denial rate), its Denial Reasons, and Objects in Denied Queries. View Agent Activity opens Activity filtered to the agent and the same period.

Objects in Denied Queries lists the tables that the agent's denied queries touched, with a count for each. `aidb` 7.7 doesn't record which object a denial was about, so the list is read from the query text and includes only queries that reference a single table. Queries that reference several tables, or none, aren't counted. If no object can be identified, the section isn't shown.

If the chart value `bff.governanceDecisionsEnabled` is `false`, the table shows only Agent, Groups, Spans, and Tokens in / out, without decision columns or signals.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
