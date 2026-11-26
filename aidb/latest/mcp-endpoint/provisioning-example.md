---
title: "Example: provisioning two agents with different permissions"
description: A worked example that provisions two MCP agents with different grants on the same table.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/provisioning-example/
lastModified: 2026-11-26T13:15:29+05:30
---

# Example: provisioning two agents with different permissions

This example provisions two agents with different permissions on the same data. `agent_alice` can read a table and `agent_bob` can read and write it. Both can list and call the tools in the catalog, and Postgres denies whichever tool body the role isn't allowed to run. See [Configuring your agent role](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/configuring-agent-roles/) for what each grant below is for.

The steps below set up a schema and two profile roles, create two agent roles with different grants, register three example tools, then show what each agent can and can't do, and how to revoke access afterward.

## Before you begin

- Use PostgreSQL 16 or later. The endpoint doesn't start on earlier versions.
- Create the database with UTF-8 encoding. `CREATE EXTENSION aidb` fails on any other encoding. See [Prerequisites](https://www.enterprisedb.com/docs/aidb/latest/install/install/#prerequisites).
- Install AIDB and run `CREATE EXTENSION aidb` in the database the endpoint serves. See [Installing AIDB](https://www.enterprisedb.com/docs/aidb/latest/install/install/).
- Enable the endpoint and restart Postgres. The first time you turn the endpoint on, a reload isn't enough. See [Enabling the endpoint](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/enabling-the-endpoint/).
- Make sure no `trust` or `peer` line in `pg_hba.conf` matches the agent roles. The endpoint refuses connections that Postgres admits without a password. See [Passwords are always checked](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/configuring-agent-roles/#passwords-are-always-checked).

## Walkthrough

### Allowing the agent roles in pg\_hba.conf

Add `local` lines for the agent roles above any catch-all `local` line, so they match first. Then reload Postgres.

```
# pg_hba.conf
local   all   agent_alice   scram-sha-256
local   all   agent_bob     scram-sha-256
```

```sql
SELECT pg_reload_conf();
```

### Creating the data and the profile roles

Connect as a superuser or as the owner of the objects to the default database. That's the first database listed in `edb.endpoints_mcp_database`, or in `edb.endpoints_database` when the MCP setting is empty.

```sql
CREATE SCHEMA demo;
CREATE TABLE demo.orders (id SERIAL PRIMARY KEY, item TEXT NOT NULL, amount NUMERIC NOT NULL);
INSERT INTO demo.orders (item, amount) VALUES ('widget', 9.99), ('gadget', 19.99);
CREATE ROLE app_readonly NOLOGIN;
CREATE ROLE app_writer NOLOGIN;
GRANT USAGE ON SCHEMA demo TO app_readonly, app_writer;
GRANT SELECT ON demo.orders TO app_readonly;
GRANT SELECT, INSERT ON demo.orders TO app_writer;
GRANT USAGE, SELECT ON SEQUENCE demo.orders_id_seq TO app_writer;
```

`app_writer` needs `SELECT` as well as `INSERT`, because the `add_order` tool below uses `INSERT ... RETURNING id`. Without `SELECT`, the call fails with `permission denied for table orders`.

### Creating the agent roles

```sql
CREATE ROLE agent_alice LOGIN INHERIT PASSWORD 'alice_secret';   -- replace with real passwords
CREATE ROLE agent_bob   LOGIN INHERIT PASSWORD 'bob_secret';
GRANT aidb_users, app_readonly TO agent_alice;
GRANT aidb_users, app_writer   TO agent_bob;
```

`INHERIT` (the default) lets the agent use the profile role's privileges without a `SET ROLE`.

### Registering the tools

Any member of `aidb_users` (or a superuser) can register a tool with `aidb.create_sql_tool()`. The connect-as-superuser session from the previous step will do. Registering a tool only parses the SQL statement — it doesn't check privileges on the objects it touches. Those privileges are checked when an agent calls the tool, not when it's registered. The three tools registered below are specific to this walkthrough, since they reference `demo.orders`. Registering tools isn't a prerequisite for using the MCP server itself — `execute_sql` is available with nothing registered, and catalog tools are entirely optional. See [Custom SQL tools](https://www.enterprisedb.com/docs/aidb/latest/tools/custom-sql-tools/) for the full `aidb.create_sql_tool()` reference.

```sql
SELECT aidb.create_sql_tool(
    'list_orders',
    'List all orders',
    'SELECT id, item, amount FROM demo.orders ORDER BY id',
    '[]'::JSONB
);

SELECT aidb.create_sql_tool(
    'add_order',
    'Insert an order',
    'INSERT INTO demo.orders (item, amount) VALUES (${item}, ${amount}) RETURNING id',
    aidb.tool_params(
        aidb.tool_param('item', 'TEXT', 'Item name'),
        aidb.tool_param('amount', 'NUMERIC', 'Item price')
    ),
    read_only => false
);

SELECT aidb.create_sql_tool(
    'whoami',
    'Report the role the tool runs as',
    'SELECT current_user::TEXT AS who',
    '[]'::JSONB
);
```

### Checking what each agent sees

See [What an agent can do once provisioned](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/connecting-a-client/#what-an-agent-can-do-once-provisioned) for what these behaviors mean in general. After the [MCP handshake](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/connecting-a-client/), calls made with `-u agent_alice:alice_secret` and `-u agent_bob:bob_secret` behave as follows.

| Call                                             | `agent_alice`                                       | `agent_bob`                               |
| ------------------------------------------------ | --------------------------------------------------- | ----------------------------------------- |
| `tools/list`                                     | `execute_sql`, `list_orders`, `add_order`, `whoami` | Same                                      |
| `tools/call` `list_orders`                       | The two seeded rows                                 | Same                                      |
| `tools/call` `add_order` with an item and amount | `isError` with `permission denied for table orders` | The new row's `id`, such as `[{"id": 3}]` |
| `tools/call` `whoami`                            | `[{"who": "agent_alice"}]`                          | `[{"who": "agent_bob"}]`                  |
| `tools/call` with a wrong password               | `isError` with `password authentication failed`     | Same                                      |

Catalog tools return a JSON array of row objects, the same shape `aidb.run_tool()` returns in SQL. Both agents see `add_order` in the listing, since the [catalog lists every tool](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/#what-tools-the-endpoint-surfaces) regardless of the caller's grants. The denial comes from Postgres when Alice's connection tries the `INSERT`, and no row is written.

Arguments are bound as query parameters, so an `item` such as `'); DROP TABLE demo.orders; --` is stored as that string. Arguments the tool didn't declare are rejected. For example, passing `execute_as_role` to `list_orders` returns `unknown argument 'execute_as_role'`, so an agent can't ask a tool to run as someone else.

### Revoking an agent

See [Revoking an agent](https://www.enterprisedb.com/docs/aidb/latest/mcp-endpoint/configuring-agent-roles/#revoking-an-agent) for the general steps. Applied to this example:

```sql
REVOKE app_writer FROM agent_bob;                 -- Bob can still read
ALTER ROLE agent_alice NOLOGIN;                   -- Alice can't connect at all
DROP ROLE agent_alice;                            -- after reassigning or dropping anything Alice owns
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
