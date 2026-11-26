---
title: pg_authid
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_authid/
lastModified: 2026-09-25T15:14:11+01:00
---

# pg\_authid

The `pg_authid` table contains information about database authorization identifiers (roles). A role subsumes the concepts of users and groups. A user is a role with the `rolcanlogin` flag set. Any role (with or without `rolcanlogin`) may have other roles as members. See [pg\_auth\_members](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_auth_members/).

Since this catalog contains passwords, it must not be publicly readable. [pg\_roles](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/pg_roles/) is a publicly readable view on `pg_authid` that blanks out the password field.

Because user identities are system-wide, `pg_authid` is shared across all databases in a WarehousePG cluster: there is only one copy of `pg_authid` per system, not one per database.

| column              | type        | references | description                                                                                                                                                          |
| ------------------- | ----------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `oid`               | oid         |            | Row identifier                                                                                                                                                       |
| `rolname`           | name        |            | Role name                                                                                                                                                            |
| `rolsuper`          | boolean     |            | Role has superuser privileges                                                                                                                                        |
| `rolinherit`        | boolean     |            | Role automatically inherits privileges of roles it is a member of                                                                                                    |
| `rolcreaterole`     | boolean     |            | Role may create more roles                                                                                                                                           |
| `rolcreatedb`       | boolean     |            | Role may create databases                                                                                                                                            |
| `rolcanlogin`       | boolean     |            | Role may log in. That is, this role can be given as the initial session authorization identifier                                                                     |
| `rolreplication`    | boolean     |            | Role is a replication role. That is, this role can initiate streaming replication and set/unset the system backup mode using `pg_start_backup` and `pg_stop_backup`. |
| `rolbypassrls`      | boolean     |            | Roles bypasses every row-level security policy.                                                                                                                      |
| `rolconnlimit`      | int4        |            | For roles that can log in, this sets maximum number of concurrent connections this role can make. `-1` means no limit                                                |
| `rolpassword`       | text        |            | Password (possibly encrypted); NULL if none. The format depends on the form of encryption used. See note below.                                                      |
| `rolvaliduntil`     | timestamptz |            | Password expiry time (only used for password authentication); NULL if no expiration                                                                                  |
| `rolresqueue`       | oid         |            | Object ID of the associated resource queue ID in _pg\_resqueue_                                                                                                      |
| `rolcreaterextgpfd` | boolean     |            | Privilege to create read external tables with the `gpfdist` or `gpfdists` protocol                                                                                   |
| `rolcreaterexhttp`  | boolean     |            | Privilege to create read external tables with the `http` protocol                                                                                                    |
| `rolcreatewextgpfd` | boolean     |            | Privilege to create write external tables with the `gpfdist` or `gpfdists` protocol                                                                                  |
| `rolresgroup`       | oid         |            | Object ID of the associated resource group ID in _pg\_resgroup_                                                                                                      |

> **Note**
>
> The `rolpassword` format depends on how the password is hashed.
>
> For an MD5-hashed password, the `rolpassword` column begins with the string `md5` followed by a 32-character hexadecimal MD5 hash. WarehousePG calculates the hash from the user's password concatenated with their user name. For example, if user `joe` has password `xyzzy`, WarehousePG stores the md5 hash of `xyzzyjoe`.
>
> For a password hashed with SCRAM-SHA-256, the `rolpassword` column has the format:
>
> ```
> SCRAM-SHA-256$<iteration count>:<salt>$<StoredKey>:<ServerKey>
> ```
>
> where `<salt>`, `<StoredKey>`, and `<ServerKey>` are in base64-encoded format. This format is the same as the one specified by [RFC 5803](https://tools.ietf.org/html/rfc5803).
>
> A password that doesn't follow either of these formats is unencrypted.

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
