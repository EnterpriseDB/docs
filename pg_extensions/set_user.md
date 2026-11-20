---
title: set_user
product: set_user
url: https://www.enterprisedb.com/docs/pg_extensions/set_user/
lastModified: 2026-06-15T11:02:46+05:30
---

# set\_user

set\_user is an open source PostgreSQL extension that provides controlled privilege escalation with enhanced audit logging. It allows unprivileged users to switch to other roles, including superuser, while ensuring all privilege transitions are logged for audit purposes. EDB packages set\_user for EDB Postgres Advanced Server only.

set\_user is particularly useful for meeting compliance requirements (such as the CIS PostgreSQL Benchmark requirement to install the set\_user extension) that mandate auditable superuser access management. By routing privilege escalation through set\_user, direct superuser logins can be disabled while still allowing authorized users to perform administrative tasks.

For more information about `set_user`, see:

- [Installing set\_user](https://www.enterprisedb.com/docs/pg_extensions/set_user/installing/)
- [Configuring set\_user](https://www.enterprisedb.com/docs/pg_extensions/set_user/configuring/)
- [Using set\_user](https://www.enterprisedb.com/docs/pg_extensions/set_user/using/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
