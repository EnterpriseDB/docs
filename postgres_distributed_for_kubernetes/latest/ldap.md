---
title: LDAP authentication
product: EDB Postgres® AI for CloudNativePG™ Global Cluster
version: 2.2.0
url: https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/ldap/
lastModified: 2026-06-22T07:38:49-07:00
---

# LDAP authentication

EDB Postgres® AI for CloudNativePG™ Global Cluster supports LDAP authentication.
LDAP configuration on EDB CloudNativePG Global Cluster relies on the
implementation from PG4K. See the
[PG4K documentation](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/postgresql_conf/#ldap-configuration)
for the full context.

> **Important**
>
> Before you proceed, familiarize yourself with the
> [LDAP authentication feature in the Postgres documentation](https://www.postgresql.org/docs/current/auth-ldap.html).

With LDAP support, only the user authentication is sent to LDAP, so the user must already exist in the PostgreSQL database.

This example shows an LDAP configuration using `simple bind` mode in PGDGroup.
The Postgres server uses `prefix + username + suffix` and password to bind the LDAP
server to achieve the authentication.

```yaml
spec:
  [...]
  cnp:
    postgresql:
      ldap: 
        server: 'ldap-service.ldap.svc.cluster.local'
        bindAsAuth:
          prefix: "uid="
          suffix: ",dc=example,dc=org"
```

This example shows how to configure LDAP using `search+bind` mode in PGDGroup.
In this mode, the Postgres instance is first bound to the LDAP using `bindDN` with its password stored
in the secret `bindPassword`. Then Postgres tries to perform a search under `baseDN` to find a
username that matches the item specified by `searchAttribute`. If a match is found, Postgres finally
verifies the entry and the password against the LDAP server.

```yaml
spec:
  [...]
  cnp:
    postgresql:
    ldap: 
        server: 'ldap-service.ldap.svc.cluster.local'
        bindSearchAuth: 
        baseDN: "dc=example,dc=org"
        bindDN: "cn=admin,dc=example,dc=org"
        searchAttribute: "uid"
        bindPassword:
            name: ldap-bind-password
            key: password
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
