---
title: Using pg_cron
product: pg_cron
version: 1.6.4
url: https://www.enterprisedb.com/docs/pg_extensions/pg_cron/using/
lastModified: 2025-07-16T08:42:41-05:00
---

# Using pg\_cron

Use `pg_cron` to schedule various database maintenance and management tasks.

## Viewing the job status

```shell
select * from cron.job_run_details order by start_time desc limit 10;
```

## Purging the `cron.job_run_details` table

```shell
SELECT cron.schedule('0 0 * * *', $$DELETE 
    FROM cron.job_run_details 
    WHERE end_time < now() - interval '14 days'$$);
```

For more information on using `pg_cron`, see the [pg\_cron documentation](https://github.com/citusdata/pg_cron).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
