---
title: DBMS_JOB
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/
lastModified: 2023-02-14T16:10:29+05:30
---

# DBMS\_JOB

The `DBMS_JOB` package lets you create, schedule, and manage jobs. A job runs a stored procedure that was previously stored in the database. The `SUBMIT` procedure creates and stores a job definition. A job identifier is assigned to a job with a stored procedure and the attributes describing when and how often to run the job.

This package relies on the pgAgent scheduler. By default, the EDB Postgres Advanced Server installer installs pgAgent, but you must start the pgAgent service manually before using `DBMS_JOB`. If you attempt to use this package to schedule a job after uninstalling pgAgent, `DBMS_JOB` reports an error. `DBMS_JOB` verifies that pgAgent is installed but doesn't verify that the service is running.

EDB Postgres Advanced Server's implementation of `DBMS_JOB` is a partial implementation when compared to Oracle's version. The following table lists the supported `DBMS_JOB` procedures.

| Function/procedure                                               | Return type | Description                                                                                                                                                 |
| ---------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BROKEN(job, broken [, next_date ])`                             | n/a         | Specify that a given job is either broken or not broken.                                                                                                    |
| `CHANGE(job, what, next_date, interval, instance, force)`        | n/a         | Change the job’s parameters.                                                                                                                                |
| `INTERVAL(job, interval)`                                        | n/a         | Set the execution frequency by means of a date function that is recalculated each time the job is run. This value becomes the next date/time for execution. |
| `NEXT_DATE(job, next_date)`                                      | n/a         | Set the next date/time to run the job.                                                                                                                      |
| `REMOVE(job)`                                                    | n/a         | Delete the job definition from the database.                                                                                                                |
| `RUN(job)`                                                       | n/a         | Force execution of a job even if it's marked broken.                                                                                                        |
| `SUBMIT(job OUT, what [, next_date [, interval [, no_parse ]]])` | n/a         | Create a job and store its definition in the database.                                                                                                      |
| `WHAT(job, what)`                                                | n/a         | Change the stored procedure run by a job.                                                                                                                   |

Before using `DBMS_JOB`, a database superuser must create the pgAgent and `DBMS_JOB` extension. Use the psql client to connect to a database and invoke the command:

```text
CREATE EXTENSION pgagent;
CREATE EXTENSION dbms_job;
```

When and how often a job runs depends on two interacting parameters: `next_date` and `interval`. The `next_date` parameter is a date/time value that specifies the next date/time to execute the job. The `interval` parameter is a string that contains a date function that evaluates to a date/time value.

Before the job executes, the expression in the `interval` parameter is evaluated. The resulting value replaces the `next_date` value stored with the job. The job is then executed. In this manner, the expression in `interval` is repeatedly reevaluated before each job executes, supplying the `next_date` date/time for the next execution.

> **Note**
>
> To start the pgAgent server and execute the job, the database user must be the same user that created a job and schedule.

The following examples use the stored procedure `job_proc`. The procedure inserts a timestamp into the table `jobrun`, which contains a single column, `VARCHAR2`.

```text
CREATE TABLE jobrun (
    runtime VARCHAR2(40)
);

CREATE OR REPLACE PROCEDURE job_proc
IS
BEGIN
    INSERT INTO jobrun VALUES ('job_proc run at ' || TO_CHAR(SYSDATE,
        'yyyy-mm-dd hh24:mi:ss'));
END;
```

- [BROKEN](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/01_broken/): The BROKEN procedure sets the state of a job to either broken or not broken. You can execute a broken job only by using the RUN procedure.
- [CHANGE](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/02_change/): The CHANGE procedure modifies certain job attributes including the stored procedure to run, the next date/time the job runs, and how often it runs.
- [INTERVAL](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/03_interval/): The INTERVAL procedure sets how often to run a job.
- [NEXT\_DATE](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/04_next_date/): The NEXT\_DATE procedure sets the date/time to run the job next.
- [REMOVE](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/05_remove/): The REMOVE proceduzre deletes the specified job from the database. You must resubmit the job using the SUBMIT procedure to execute it again. The stored procedure that was associated with the job isn't deleted.
- [RUN](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/06_run/): The RUN procedure forces the job to run even if its state is broken.
- [SUBMIT](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/07_submit/): The SUBMIT procedure creates a job definition and stores it in the database. A job consists of:
- [WHAT](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/05_dbms_job/08_what/): The WHAT procedure changes the stored procedure that the job executes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
