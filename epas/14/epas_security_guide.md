---
title: EDB Postgres Advanced Server Security Features
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_security_guide/
lastModified: 2023-02-14T16:10:29+05:30
---

# EDB Postgres Advanced Server Security Features

This guide describes features that provide added security to EDB Postgres Advanced Server installations. It is not a comprehensive guide to the security functionality provided by PostgreSQL that is built into EDB Postgres Advanced Server.

- [SQL/Protect](https://www.enterprisedb.com/docs/epas/14/epas_security_guide/02_protecting_against_sql_injection_attacks/#protecting_against_sql_injection_attacks) provides protection from SQL injection attacks.
- [Virtual Private Database](https://www.enterprisedb.com/docs/epas/14/epas_security_guide/03_virtual_private_database/#virtual_private_database) provides fine-grained access control for sensitive data.
- [sslutils](https://www.enterprisedb.com/docs/epas/14/epas_security_guide/04_sslutils/#sslutils) is a Postgres extension that allows you to generate SSL certificates.
- [Data redaction](https://www.enterprisedb.com/docs/epas/14/epas_security_guide/05_data_redaction/#data_redaction) functionality allows you to dynamically mask portions of data.

For information about Postgres authentication and security features, consult the [PostgreSQL core documentation](https://www.postgresql.org/docs/).

- [Protecting against SQL injection attacks](https://www.enterprisedb.com/docs/epas/14/epas_security_guide/02_protecting_against_sql_injection_attacks/): EDB Postgres Advanced Server provides protection against SQL injection attacks. A SQL injection attack is an attempt to compromise a database by running SQL statements whose results provide clues to the attacker as to the content, structure, or security of that database.
- [Virtual private database](https://www.enterprisedb.com/docs/epas/14/epas_security_guide/03_virtual_private_database/): Virtual Private Database is a type of fine-grained access control using security policies. Fine-grained access control means that access to data can be controlled down to specific rows as defined by the security policy.
- [sslutils](https://www.enterprisedb.com/docs/epas/14/epas_security_guide/04_sslutils/): sslutils is a Postgres extension that provides SSL certificate generation functions to EDB Postgres Advanced Server for use by the EDB Postgres Enterprise Manager server. sslutils is installed by using the edb-asxx-server-sslutils RPM package where xx is the EDB Postgres Advanced Server version number.
- [Data redaction](https://www.enterprisedb.com/docs/epas/14/epas_security_guide/05_data_redaction/): Data redaction limits sensitive data exposure by dynamically changing data as it is displayed for certain users.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
