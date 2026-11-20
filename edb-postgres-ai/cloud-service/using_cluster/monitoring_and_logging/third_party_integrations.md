---
title: Third-party monitoring integrations
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/third_party_integrations/
lastModified: 2025-06-16T21:34:03Z
---

# Third-party monitoring integrations

Cloud Service provides support for third-party monitoring integrations for using both your own account and Cloud Service's account.

Monitoring integrations are configured at the project level in Cloud Service. You can't turn these integrations on or off for individual clusters. An admin or a project owner can set up an integration. You can set up only one integration per project.

By default, all the integrations are disabled. After creating the project, enable an integration using the **Integrations** tab.

All the metrics collected from all the clusters in the project are sent to the integrated tool and displayed in the Cloud Service **Monitoring and logging** tab [using Cloud Service Observability](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/monitoring_using_biganimal_observability/). The collected logs are exported to the object storage by default.

You can enable in-app inbox or email notifications so that you're notified if third-party monitoring integration fails. For more information, see [Managing notifications](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/notifications/#managing-notifications).

The third-party integrations available in Cloud Service are:

- [Datadog](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/third_party_integrations/datadog/)
- [New Relic](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/third_party_integrations/newrelic/)

## Metric naming

When metrics from Cloud Service are exported to third-party monitoring services, they're renamed according to the naming conventions of the target platform.

The following table provides a mapping between [Cloud Service metric names](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/metrics/)
and the name that metric will be assigned when exported to a third-party service.

> **Note: Kubernetes metrics**
>
> In addition to these metrics, which pertain to the Postgres instances, Cloud Service also exports metrics from the underlying Kubernetes infrastructure. These are prefixed with `k8s.`.

| Cloud Service metric name                                | Metric name for third-party integrations                          |
| -------------------------------------------------------- | ----------------------------------------------------------------- |
| cnp\_pg\_backends\_waiting\_total                        | postgres.raw\.backends\_waiting\_total                            |
| cnp\_pg\_database\_size\_bytes                           | postgres.raw\.pg\_database\_size\_bytes                           |
| cnp\_pg\_database\_xid\_age                              | postgres.raw\.pg\_database\_xid\_age                              |
| cnp\_pg\_database\_mxid\_age                             | postgres.raw\.pg\_database\_mxid\_age                             |
| cnp\_pg\_postmaster\_start\_time                         | postgres.raw\.pg\_postmaster\_start\_time                         |
| cnp\_pg\_replication\_lag                                | postgres.raw\.pg\_replication\_lag                                |
| cnp\_pg\_replication\_in\_recovery                       | postgres.raw\.pg\_replication\_in\_recovery                       |
| cnp\_pg\_replication\_slots\_active                      | postgres.raw\.pg\_replication\_slots\_active                      |
| cnp\_pg\_replication\_slots\_pg\_wal\_lsn\_diff          | postgres.raw\.pg\_replication\_slots\_pg\_wal\_lsn\_diff          |
| cnp\_pg\_stat\_archiver\_archived\_count                 | postgres.raw\.pg\_stat\_archiver\_archived\_count                 |
| cnp\_pg\_stat\_archiver\_failed\_count                   | postgres.raw\.pg\_stat\_archiver\_failed\_count                   |
| cnp\_pg\_stat\_archiver\_seconds\_since\_last\_archival  | postgres.raw\.pg\_stat\_archiver\_seconds\_since\_last\_archival  |
| cnp\_pg\_stat\_archiver\_seconds\_since\_last\_failure   | postgres.raw\.pg\_stat\_archiver\_seconds\_since\_last\_failure   |
| cnp\_pg\_stat\_archiver\_last\_archived\_time            | postgres.raw\.pg\_stat\_archiver\_last\_archived\_time            |
| cnp\_pg\_stat\_archiver\_last\_failed\_time              | postgres.raw\.pg\_stat\_archiver\_last\_failed\_time              |
| cnp\_pg\_stat\_archiver\_last\_archived\_wal\_start\_lsn | postgres.raw\.pg\_stat\_archiver\_last\_archived\_wal\_start\_lsn |
| cnp\_pg\_stat\_archiver\_last\_failed\_wal\_start\_lsn   | postgres.raw\.pg\_stat\_archiver\_last\_failed\_wal\_start\_lsn   |
| cnp\_pg\_stat\_archiver\_stats\_reset\_time              | postgres.raw\.pg\_stat\_archiver\_stats\_reset\_time              |
| cnp\_pg\_stat\_bgwriter\_checkpoints\_timed              | postgres.raw\.pg\_stat\_bgwriter\_checkpoints\_timed              |
| cnp\_pg\_stat\_bgwriter\_checkpoints\_req                | postgres.raw\.pg\_stat\_bgwriter\_checkpoints\_req                |
| cnp\_pg\_stat\_bgwriter\_checkpoint\_write\_time         | postgres.raw\.pg\_stat\_bgwriter\_checkpoint\_write\_time         |
| cnp\_pg\_stat\_bgwriter\_checkpoint\_sync\_time          | postgres.raw\.pg\_stat\_bgwriter\_checkpoint\_sync\_time          |
| cnp\_pg\_stat\_bgwriter\_buffers\_checkpoint             | postgres.raw\.pg\_stat\_bgwriter\_buffers\_checkpoint             |
| cnp\_pg\_stat\_bgwriter\_buffers\_clean                  | postgres.raw\.pg\_stat\_bgwriter\_buffers\_clean                  |
| cnp\_pg\_stat\_bgwriter\_maxwritten\_clean               | postgres.raw\.pg\_stat\_bgwriter\_maxwritten\_clean               |
| cnp\_pg\_stat\_bgwriter\_buffers\_backend                | postgres.raw\.pg\_stat\_bgwriter\_buffers\_backend                |
| cnp\_pg\_stat\_bgwriter\_buffers\_backend\_fsync         | postgres.raw\.pg\_stat\_bgwriter\_buffers\_backend\_fsync         |
| cnp\_pg\_stat\_bgwriter\_buffers\_alloc                  | postgres.raw\.pg\_stat\_bgwriter\_buffers\_alloc                  |
| cnp\_pg\_stat\_database\_xact\_commit                    | postgres.raw\.pg\_stat\_database\_xact\_commit                    |
| cnp\_pg\_stat\_database\_xact\_rollback                  | postgres.raw\.pg\_stat\_database\_xact\_rollback                  |
| cnp\_pg\_stat\_database\_blks\_read                      | postgres.raw\.pg\_stat\_database\_blks\_read                      |
| cnp\_pg\_stat\_database\_blks\_hit                       | postgres.raw\.pg\_stat\_database\_blks\_hit                       |
| cnp\_pg\_stat\_database\_tup\_returned                   | postgres.raw\.pg\_stat\_database\_tup\_returned                   |
| cnp\_pg\_stat\_database\_tup\_fetched                    | postgres.raw\.pg\_stat\_database\_tup\_fetched                    |
| cnp\_pg\_stat\_database\_tup\_inserted                   | postgres.raw\.pg\_stat\_database\_tup\_inserted                   |
| cnp\_pg\_stat\_database\_tup\_updated                    | postgres.raw\.pg\_stat\_database\_tup\_updated                    |
| cnp\_pg\_stat\_database\_tup\_deleted                    | postgres.raw\.pg\_stat\_database\_tup\_deleted                    |
| cnp\_pg\_stat\_database\_conflicts                       | postgres.raw\.pg\_stat\_database\_conflicts                       |
| cnp\_pg\_stat\_database\_temp\_files                     | postgres.raw\.pg\_stat\_database\_temp\_files                     |
| cnp\_pg\_stat\_database\_temp\_bytes                     | postgres.raw\.pg\_stat\_database\_temp\_bytes                     |
| cnp\_pg\_stat\_database\_deadlocks                       | postgres.raw\.pg\_stat\_database\_deadlocks                       |
| cnp\_pg\_stat\_database\_blk\_read\_time                 | postgres.raw\.pg\_stat\_database\_blk\_read\_time                 |
| cnp\_pg\_stat\_database\_blk\_write\_time                | postgres.raw\.pg\_stat\_database\_blk\_write\_time                |
| cnp\_pg\_stat\_database\_conflicts\_confl\_tablespace    | postgres.raw\.pg\_stat\_database\_conflicts\_confl\_tablespace    |
| cnp\_pg\_stat\_database\_conflicts\_confl\_lock          | postgres.raw\.pg\_stat\_database\_conflicts\_confl\_lock          |
| cnp\_pg\_stat\_database\_conflicts\_confl\_snapshot      | postgres.raw\.pg\_stat\_database\_conflicts\_confl\_snapshot      |
| cnp\_pg\_stat\_database\_conflicts\_confl\_bufferpin     | postgres.raw\.pg\_stat\_database\_conflicts\_confl\_bufferpin     |
| cnp\_pg\_stat\_database\_conflicts\_confl\_deadlock      | postgres.raw\.pg\_stat\_database\_conflicts\_confl\_deadlock      |
| cnp\_pg\_stat\_user\_tables\_seq\_scan                   | postgres.raw\.pg\_stat\_user\_tables\_seq\_scan                   |
| cnp\_pg\_stat\_user\_tables\_seq\_tup\_read              | postgres.raw\.pg\_stat\_user\_tables\_seq\_tup\_read              |
| cnp\_pg\_stat\_user\_tables\_idx\_scan                   | postgres.raw\.pg\_stat\_user\_tables\_idx\_scan                   |
| cnp\_pg\_stat\_user\_tables\_idx\_tup\_fetch             | postgres.raw\.pg\_stat\_user\_tables\_idx\_tup\_fetch             |
| cnp\_pg\_stat\_user\_tables\_n\_tup\_ins                 | postgres.raw\.pg\_stat\_user\_tables\_n\_tup\_ins                 |
| cnp\_pg\_stat\_user\_tables\_n\_tup\_upd                 | postgres.raw\.pg\_stat\_user\_tables\_n\_tup\_upd                 |
| cnp\_pg\_stat\_user\_tables\_n\_tup\_del                 | postgres.raw\.pg\_stat\_user\_tables\_n\_tup\_del                 |
| cnp\_pg\_stat\_user\_tables\_n\_tup\_hot\_upd            | postgres.raw\.pg\_stat\_user\_tables\_n\_tup\_hot\_upd            |
| cnp\_pg\_stat\_user\_tables\_n\_live\_tup                | postgres.raw\.pg\_stat\_user\_tables\_n\_live\_tup                |
| cnp\_pg\_stat\_user\_tables\_n\_dead\_tup                | postgres.raw\.pg\_stat\_user\_tables\_n\_dead\_tup                |
| cnp\_pg\_stat\_user\_tables\_n\_mod\_since\_analyze      | postgres.raw\.pg\_stat\_user\_tables\_n\_mod\_since\_analyze      |
| cnp\_pg\_stat\_user\_tables\_last\_vacuum                | postgres.raw\.pg\_stat\_user\_tables\_last\_vacuum                |
| cnp\_pg\_stat\_user\_tables\_last\_autovacuum            | postgres.raw\.pg\_stat\_user\_tables\_last\_autovacuum            |
| cnp\_pg\_stat\_user\_tables\_last\_analyze               | postgres.raw\.pg\_stat\_user\_tables\_last\_analyze               |
| cnp\_pg\_stat\_user\_tables\_last\_autoanalyze           | postgres.raw\.pg\_stat\_user\_tables\_last\_autoanalyze           |
| cnp\_pg\_stat\_user\_tables\_vacuum\_count               | postgres.raw\.pg\_stat\_user\_tables\_vacuum\_count               |
| cnp\_pg\_stat\_user\_tables\_autovacuum\_count           | postgres.raw\.pg\_stat\_user\_tables\_autovacuum\_count           |
| cnp\_pg\_stat\_user\_tables\_analyze\_count              | postgres.raw\.pg\_stat\_user\_tables\_analyze\_count              |
| cnp\_pg\_stat\_user\_tables\_autoanalyze\_count          | postgres.raw\.pg\_stat\_user\_tables\_autoanalyze\_count          |
| cnp\_pg\_stat\_replication\_backend\_start\_age          | postgres.raw\.pg\_stat\_replication\_backend\_start\_age          |
| cnp\_pg\_stat\_replication\_backend\_xmin\_age           | postgres.raw\.pg\_stat\_replication\_backend\_xmin\_age           |
| cnp\_pg\_stat\_replication\_sent\_diff\_bytes            | postgres.raw\.pg\_stat\_replication\_sent\_diff\_bytes            |
| cnp\_pg\_stat\_replication\_write\_diff\_bytes           | postgres.raw\.pg\_stat\_replication\_write\_diff\_bytes           |
| cnp\_pg\_stat\_replication\_flush\_diff\_bytes           | postgres.raw\.pg\_stat\_replication\_flush\_diff\_bytes           |
| cnp\_pg\_stat\_replication\_replay\_diff\_bytes          | postgres.raw\.pg\_stat\_replication\_replay\_diff\_bytes          |
| cnp\_pg\_stat\_replication\_write\_lag\_seconds          | postgres.raw\.pg\_stat\_replication\_write\_lag\_seconds          |
| cnp\_pg\_stat\_replication\_flush\_lag\_seconds          | postgres.raw\.pg\_stat\_replication\_flush\_lag\_seconds          |
| cnp\_pg\_stat\_replication\_replay\_lag\_seconds         | postgres.raw\.pg\_stat\_replication\_replay\_lag\_seconds         |
| cnp\_pg\_statio\_user\_tables\_heap\_blks\_read          | postgres.raw\.pg\_statio\_user\_tables\_heap\_blks\_read          |
| cnp\_pg\_statio\_user\_tables\_heap\_blks\_hit           | postgres.raw\.pg\_statio\_user\_tables\_heap\_blks\_hit           |
| cnp\_pg\_statio\_user\_tables\_idx\_blks\_read           | postgres.raw\.pg\_statio\_user\_tables\_idx\_blks\_read           |
| cnp\_pg\_statio\_user\_tables\_idx\_blks\_hit            | postgres.raw\.pg\_statio\_user\_tables\_idx\_blks\_hit            |
| cnp\_pg\_statio\_user\_tables\_toast\_blks\_read         | postgres.raw\.pg\_statio\_user\_tables\_toast\_blks\_read         |
| cnp\_pg\_statio\_user\_tables\_toast\_blks\_hit          | postgres.raw\.pg\_statio\_user\_tables\_toast\_blks\_hit          |
| cnp\_pg\_statio\_user\_tables\_tidx\_blks\_read          | postgres.raw\.pg\_statio\_user\_tables\_tidx\_blks\_read          |
| cnp\_pg\_statio\_user\_tables\_tidx\_blks\_hit           | postgres.raw\.pg\_statio\_user\_tables\_tidx\_blks\_hit           |
| cnp\_pg\_settings\_setting                               | postgres.raw\.pg\_settings\_setting                               |
| cnp\_xlog\_insert\_lsn                                   | postgres.raw\.xlog\_insert\_lsn                                   |

- [Datadog](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/third_party_integrations/datadog/): Datadog integration is based on the OpenTelemetry Collector and the Datadog plugin bundled with the OpenTelemetry collector. Once the integration is enabled, BigAnimal configures data planes to send the telemetry to your Datadog account by way of Datadog's cloud receive endpoint.
- [New Relic](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/monitoring_and_logging/third_party_integrations/newrelic/): The New Relic integration is based on the OpenTelemetry Collector, shipping the metrics over the standard OLTP protocol to the New Relic cloud endpoint.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
