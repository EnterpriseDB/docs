---
title: Version 14.3.0
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_rel_notes/epas14_3_0_rel_notes/
lastModified: 2023-02-14T16:10:29+05:30
---

# Version 14.3.0

EDB Postgres Advanced Server 14.3.0 includes the following bug fixes:

| Type           | Description                                                                                                                           | ID      | Category          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- | ----------------- |
| Upstream merge | Merged with community PostgreSQL 14.3. See the community [Release Notes](https://www.postgresql.org/docs/release/14.3/) for details.  |         |                   |
| Bug fix        | Add syntax check for TABLE(...) clause. \[Support Ticket: #81624]                                                                     | DB-1752 |                   |
| Bug fix        | Add an appropriate cast for const TIMESTAMP and TIMESTAMPTZ to the query pushed to the remote servers. \[Support Ticket: #72928]      | DB-1493 | oci\_dblink       |
| Bug fix        | Do not push expressions to remote servers involving INTERVAL data type since representation in EPAS/PostgreSQL is different.          | DB-1493 | oci\_dblink       |
| Bug fix        | Fix NLS\_TIMESTAMP\_TZ\_FORMAT setting in the remote connection so that timestamptz data gets the correct representation.             | DB-1493 | oci\_dblink       |
| Bug fix        | Add logic of encoding conversion at the time of writing the data on the remote servers.                                               | DB-181  | dblink\_ora       |
| Bug fix        | Fix possible server crash in the partition-wise join when PARALLEL hint is used \[Support Ticket: #81246].                            | DB-1741 |                   |
| Bug fix        | Fix failing EXCHANGE ... PARTITION command for the newly added table when both are in the same transaction \[Support Ticket: #80298]. | DB-1721 | edb\_partitioning |
| Bug fix        | Add restriction to use of include(@) & exclude(-) operator \[Support Ticket: #70399].                                                 | DB-1690 | edb\_audit        |
| Bug fix        | Fix warnings for the pldbgapi during initdb.                                                                                          | DB-1186 |                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
