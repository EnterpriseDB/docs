---
title: Governance
description: Confine what an in-database agent's tools can do, and record every allow/deny decision, using purposes and Postgres roles.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/governance/
lastModified: 2026-11-04T13:59:00+05:30
---

# Governance

By default, an [agent's](https://www.enterprisedb.com/docs/aidb/latest/agents/) tool calls run as whichever Postgres role called `agent_converse`. Governance gives you a way to confine that instead: register a **purpose** — a named policy scope that resolves to exactly one Postgres role — and assign that purpose to an agent. Every tool the agent calls then executes under that role, enforced by Postgres's own privilege system, not by anything the model decides.

## Three roles

Governance splits authority across three roles, each answering a different question.

| Role                        | Question it answers                                                             | Granted                                                                                                                                                                                                |
| --------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `aidb_users`                | Can this user create and invoke agents, and read the purpose registry?          | To any user who should use AIDB. See [Managing user access with the aidb\_users role](https://www.enterprisedb.com/docs/aidb/latest/install/configure/#managing-user-access-with-the-aidb_users-role). |
| `aidb_governance`           | Can this user register, repoint, or retire a purpose, and read the audit trail? | To administrators who author policy.                                                                                                                                                                   |
| The purpose's resolved role | What can a tool call under this purpose actually touch in the database?         | Whatever ordinary `GRANT`s you give that role.                                                                                                                                                         |

`aidb_users` and `aidb_governance` are independent — neither is granted to the other. A governor doesn't need `aidb_users` to administer purposes, and an ordinary `aidb_users` member can't touch the registry no matter what else they hold.

> **Note**
>
> In AIDB 7.7.0, `aidb_governance` doesn't include `SELECT` on `aidb.purpose_registry`. To list purposes, a governor needs either membership in `aidb_users` or an explicit grant:
>
> ```sql
> GRANT SELECT ON aidb.purpose_registry TO your_admin;
> ```

Authoring policy is a coarser question than a per-call membership check, so `create_purpose` doesn't require the governor to hold the role they're mapping a purpose to. A purpose naming a role nobody can invoke is harmless — the check that matters happens later, when an agent using that purpose is actually invoked. See [Enforcement](https://www.enterprisedb.com/docs/aidb/latest/governance/enforcement/) for what happens at that point.

## Example

A governor registers a read-only purpose and a read-write purpose over two roles, then a user creates two agents against them. The agents use two [custom SQL tools](https://www.enterprisedb.com/docs/aidb/latest/tools/custom-sql-tools/), `read_tickets` and `update_tickets`, so the roles need privileges only on the tables those tools query.

```sql
CREATE ROLE sales_tickets_ro;
CREATE ROLE sales_tickets_rw;
GRANT SELECT ON sales_tickets TO sales_tickets_ro;
GRANT SELECT, INSERT, UPDATE ON sales_tickets TO sales_tickets_rw;
-- The tools in this example are custom SQL tools, so the roles only need privileges on the tables the tools query.

SET ROLE sales_governor;  -- a member of aidb_governance
SELECT aidb.create_purpose('sales_support', 'sales_tickets_ro', 'Sales support agent');
SELECT aidb.create_purpose('sales_admin', 'sales_tickets_rw', 'Sales administrator');
RESET ROLE;

SET ROLE sales_user_1;  -- a member of aidb_users only
SELECT aidb.create_agent('ticket_reader', 'Answer questions about sales tickets.', 'my_gpt',
    tools => ARRAY['read_tickets'], purpose => 'sales_support');
SELECT aidb.create_agent('ticket_handler', 'Answer questions and update tickets.', 'my_gpt',
    tools => ARRAY['read_tickets', 'update_tickets'], purpose => 'sales_admin');
RESET ROLE;
```

`ticket_reader`'s calls to `read_tickets` run as `sales_tickets_ro` regardless of who invokes it. `ticket_handler`'s calls run as `sales_tickets_rw`. Neither agent's tool calls run as `sales_user_1`, the role that created them.

If an agent calls native tools instead, the resolved role also needs `USAGE` on schema `aidb` and `EXECUTE` on each tool's function. See [Grants the resolved role needs](https://www.enterprisedb.com/docs/aidb/latest/governance/purposes/#grants-the-resolved-role-needs).

## Viewing decisions in EDB Agent Governance

AIDB enforces purposes itself, inside Postgres. With telemetry enabled, it records each purpose-scoped SQL decision as a span in `aidb_otel.traces`. See [Decision records](https://www.enterprisedb.com/docs/aidb/latest/governance/decision-records/) for the recorded details.

[EDB Agent Governance](https://www.enterprisedb.com/docs/agent-governance/latest/) displays this activity in its dashboard, sessions, and Agents views by reading the source database with a dedicated read-only role. It also covers agents that connect through an external MCP server, such as Airman MCP, using a separate legacy path. For setup and the scope of the data shown, see [Connecting an AIDB database](https://www.enterprisedb.com/docs/agent-governance/latest/connecting_aidb/) and [Architecture and data flow](https://www.enterprisedb.com/docs/agent-governance/latest/architecture/).

- [Purposes](https://www.enterprisedb.com/docs/aidb/latest/governance/purposes/): Register, repoint, and retire purposes — the named policy scopes that agents run under.
- [Enforcement](https://www.enterprisedb.com/docs/aidb/latest/governance/enforcement/): What happens when a purpose-scoped agent runs, what's covered, and how it differs from an ordinary Postgres session.
- [Decision records](https://www.enterprisedb.com/docs/aidb/latest/governance/decision-records/): What AIDB records every time a purpose-scoped tool call is allowed or denied, and how to find a record from a denial.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
