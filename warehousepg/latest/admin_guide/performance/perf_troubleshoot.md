---
title: Investigating a Performance Problem
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/perf_troubleshoot/
lastModified: 2026-09-25T15:14:11+01:00
---

# Investigating a Performance Problem

This section provides guidelines for identifying and troubleshooting performance problems in a WarehousePG cluster.

This topic lists steps you can take to help identify the cause of a performance problem. If the problem affects a particular workload or query, you can focus on tuning that particular workload. If the performance problem is system-wide, then hardware problems, system failures, or resource contention may be the cause.

**Parent topic:** [Managing Performance](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/)

<a id="topic2"></a>

## Checking System State

Use the `gpstate` utility to identify failed segments. A WarehousePG cluster will incur performance degradation when segment instances are down because other hosts must pick up the processing responsibilities of the down segments.

Failed segments can indicate a hardware failure, such as a failed disk drive or network card. WarehousePG provides the hardware verification tool `gpcheckperf` to help identify the segment hosts with hardware issues.

<a id="topic3"></a>

## Checking Database Activity

- [Checking for Active Sessions (Workload)](#topic4)
- [Checking for Locks (Contention)](#topic5)
- [Checking Query Status and System Utilization](#topic6)

<a id="topic4"></a>

### Checking for Active Sessions (Workload)

The _pg\_stat\_activity_ system catalog view shows one row per server process; it shows the database OID, database name, process ID, user OID, user name, current query, time at which the current query began execution, time at which the process was started, client address, and port number. To obtain the most information about the current system workload, query this view as the database superuser. For example:

```
SELECT * FROM pg_stat_activity;

```

Note that the information does not update instantaneously.

<a id="topic5"></a>

### Checking for Locks (Contention)

The _pg\_locks_ system catalog view allows you to see information about outstanding locks. If a transaction is holding a lock on an object, any other queries must wait for that lock to be released before they can continue. This may appear to the user as if a query is hanging.

Examine _pg\_locks_ for ungranted locks to help identify contention between database client sessions. _pg\_locks_ provides a global view of all locks in the database system, not only those relevant to the current database. You can join its relation column against `pg_class.oid` to identify locked relations (such as tables), but this works correctly only for relations in the current database. You can join the `pid` column to the `pg_stat_activity.pid` to see more information about the session holding or waiting to hold a lock. For example:

```
SELECT locktype, database, c.relname, l.relation, 
l.transactionid, l.pid, l.mode, l.granted, 
a.query 
        FROM pg_locks l, pg_class c, pg_stat_activity a 
        WHERE l.relation=c.oid AND l.pid=a.pid
        ORDER BY c.relname;

```

If you use resource groups, queries that are waiting will also show in _pg\_locks_. To see how many queries are waiting to run in a resource group, use th&#x65;_&#x67;p\_resgroup\_statu&#x73;_&#x73;ystem catalog view. For example:

```
SELECT * FROM gp_toolkit.gp_resgroup_status;

```

Similarly, if you use resource queues, queries that are waiting in a queue also show in _pg\_locks_. To see how many queries are waiting to run from a resource queue, use th&#x65;_&#x67;p\_resqueue\_statu&#x73;_&#x73;ystem catalog view. For example:

```
SELECT * FROM gp_toolkit.gp_resqueue_status;

```

<a id="topic6"></a>

### Checking Query Status and System Utilization

You can use system monitoring utilities such as `ps`, `top`, `iostat`, `vmstat`, `netstat` and so on to monitor database activity on the hosts in your WarehousePG cluster. These tools can help identify WarehousePG processes (`postgres` processes) currently running on the system and the most resource intensive tasks with regards to CPU, memory, disk I/O, or network activity. Look at these system statistics to identify queries that degrade database performance by overloading the system and consuming excessive resources. WarehousePG's management tool `gpssh` allows you to run these system monitoring commands on several hosts simultaneously.

You can create and use the WarehousePG _session\_level\_memory\_consumption_ view that provides information about the current memory utilization and idle time for sessions that are running queries on WarehousePG. For information about the view, see [Viewing Session Memory Usage Information](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/monitor/).

<a id="topic7"></a>

## Troubleshooting Problem Queries

If a query performs poorly, look at its query plan to help identify problems. The `EXPLAIN` command shows the query plan for a given query. See [Query Profiling](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/query-profiling/) for more information about reading query plans and identifying problems.

When an out of memory event occurs during query execution, the WarehousePG memory accounting framework reports detailed memory consumption of every query running at the time of the event. The information is written to the WarehousePG segment logs.

<a id="topic8"></a>

## Investigating Error Messages

WarehousePG log messages are written to files in the `log` directory within the coordinator's or segment's data directory. Because the coordinator log file contains the most information, you should always check it first. Log files roll over daily and use the naming convention: `gpdb-`_`YYYY`_`-`_`MM`_`-`_`DD_hhmmss.csv`_. To locate the log files on the coordinator host:

```
$ cd $COORDINATOR_DATA_DIRECTORY/log

```

Log lines have the format of:

```
<timestamp> | <user> | <database> | <statement_id> | <con#><cmd#> 
|:-<LOG_LEVEL>: <log_message>

```

You may want to focus your search for `WARNING`, `ERROR`, `FATAL` or `PANIC` log level messages. You can use the WarehousePG utility `gplogfilter` to search through WarehousePG log files. For example, when you run the following command on the coordinator host, it checks for problem log messages in the standard logging locations:

```
$ gplogfilter -t

```

To search for related log entries in the segment log files, you can run `gplogfilter` on the segment hosts using `gpssh`. You can identify corresponding log entries by the _`statement_id`_ or _`con`_`#` (session identifier). For example, to search for log messages in the segment log files containing the string `con6` and save output to a file:

```
gpssh -f seg_hosts_file -e 'source 
/usr/edb/whpg7/greenplum_path.sh ; gplogfilter -f 
con6 /gpdata/*/log/gpdb*.csv' > seglog.out

```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
