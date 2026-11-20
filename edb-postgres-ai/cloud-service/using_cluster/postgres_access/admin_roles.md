---
title: Admin roles
description: Available admin roles in EDB Postgres AI Cloud Service to perform the administrative tasks.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/postgres_access/admin_roles/
lastModified: 2026-07-23T14:41:41+02:00
---

# Admin roles

## pg\_ba\_admin

So that we can effectively manage the cloud resources and ensure users are protected against security threats, Cloud Service provides a special administrative role, pg\_ba\_admin. The edb\_admin user is a member of the pg\_ba\_admin role. The pg\_ba\_admin role has privileges similar to a Postgres superuser. Like the edb\_admin user, the pg\_ba\_admin role shouldn't be used for day-to-day application operations and access to the role must be controlled carefully. See [pg\_ba\_admin role](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/postgres_access/pg_ba_admin/) for details.

## superuser

Superuser access in Cloud Service is available only where the users are in control of their infrastructure. When using your own cloud account, you can grant the edb\_admin role superuser privileges for a cluster. See [Superuser access](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/creating_cluster/creating_a_cluster/#superuser-access).

When granting superuser privileges, to avoid degrading service or compromising availability, ensure you limit the number of connections used by superusers. Cloud Service reserves and requires a few superuser connections for the readiness probe for these reasons:

- To check if the database is up and able to accept connections
- For creating specific roles required in PostgreSQL instances and some extensions

> **Note**
>
> Superuser privileges allow you to make Postgres configuration changes using `ALTER SYSTEM` queries. We recommend that you don't do this because it might lead to an unpredictable or unrecoverable state of the cluster. In addition, `ALTER SYSTEM` changes aren't replicated across the cluster.

For distributed high-availability clusters, there's no superuser access option. Use the edb\_admin role for most superuser level activities. Unsafe activities aren't available to the edb\_admin role.

Distributed high-availability clusters also have a bdr\_superuser role. This isn't a general superuser but a specific user/role that has privileges and access to all the bdr schemas and functions. For more information, see [bdr\_superuser](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/security/roles/).

See the [PostgreSQL documentation on superusers](https://www.postgresql.org/docs/current/role-attributes.html) for best practices.

## Notes on the edb\_admin role

- Changes to system configuration (GUCs) made by edb\_admin or other Postgres users don't persist through a reboot or maintenance. Use the Console to modify system configuration.

- You have to remember your edb\_admin password, as EDB doesn't have access to it. If you forget it, you can set a new one in the Console on the Edit Cluster page.

- Don't use the edb\_admin user or the edb\_admin database in your applications. Instead, use `CREATE USER; GRANT; CREATE DATABASE.`

- Cloud Service stores all database-level authentication securely and directly in PostgreSQL. The `edb_admin` user password is `SCRAM-SHA-256` hashed prior to storage. This hash, even if compromised, can't be replayed by an attacker to gain access to the system.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
