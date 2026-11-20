---
title: Authentication plugin ‘caching_sha2_password’ error
product: MySQL Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/mysql_data_adapter/latest/13_troubleshooting/
lastModified: 2022-06-02T15:22:22-04:00
---

# Authentication plugin ‘caching\_sha2\_password’ error

If you encounter the following error:

```text
ERROR:  failed to connect to MySQL: Authentication plugin ‘caching_sha2_password’ cannot be loaded: /usr/lib64/mysql/plugin/caching_sha2_password.so: cannot open shared  object file: No such file or directory
```

Specify the authentication plugin as `mysql_native_password` and set a cleartext password value. The syntax is:

`ALTER USER 'username'@'host' IDENTIFIED WITH mysql_native_password BY '<password>';`

> **Note**
>
> See the [MySQL 8 documentation](https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html) for more details on this error.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
