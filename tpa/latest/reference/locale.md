---
title: Locale
description: Setting the locale for the target instance.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/reference/locale/
lastModified: 2024-06-24T11:42:56+01:00
---

# Locale

For some platform images and environments it might be desirable to
set the region and language settings.

By default, TPAexec will install the `en_US.UTF-8` locale system files.
You can set the desired locale in your `config.yml`:

```yaml
user_locale: en_GB.UTF-8
```

To find supported locales consult the output of the following command:

```shell
localectl list-locales
```

Or the contents of the file /etc/locales.defs on Debian or Ubuntu.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
