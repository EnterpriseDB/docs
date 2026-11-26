---
title: EDB CloudNativePG Cluster 1.28.6 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_28_6_rel_notes/
lastModified: 2026-11-19T15:02:02Z
---

# EDB CloudNativePG Cluster 1.28.6 release notes

Released: 17 November 2026

This release of EDB Postgres® AI for CloudNativePG™ Cluster includes the following:

## Highlights

**PostgreSQL 18.7 is the new default image**: the default operand image is now
`18.7-standard-ubi9`, which fixes several CVEs. It applies only to new
clusters that don't set an image. To get the fixes, update existing clusters
to 18.7, 17.12, 16.16 or 15.20 by changing `imageName` or the `ImageCatalog`.
Before updating, read the [PostgreSQL 18.7
announcement](https://www.postgresql.org/about/news/postgresql-187-1712-1616-1520-1425-and-19-rc-2-released-3442/)
and the release notes it links.
([#11833](https://github.com/cloudnative-pg/cloudnative-pg/pull/11833))

**PostgreSQL 14 is no longer supported**: the PostgreSQL community stopped
fixing PostgreSQL 14 on November 12, 2026, and EDB Postgres for Kubernetes
supports a major version only as long as PostgreSQL does. If you still run
PostgreSQL 14, plan an upgrade to a newer major version. PostgreSQL 15 stops
receiving fixes on November 11, 2027.
([#11935](https://github.com/cloudnative-pg/cloudnative-pg/pull/11935))

## Enhancements

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td><details><summary>Streaming retry for standbys on the WAL archive
</summary><p>PostgreSQL tries streaming only after a restore from the archive fails. If WAL
is produced about as fast as it is restored, that may never happen, and the
standby stays on the archive, with no WAL receiver and no part in synchronous
replication. Now, after 30 seconds of continuous restores, WAL restore fails
on purpose for 5 seconds, so PostgreSQL tries streaming. These failures are
expected and can appear in the logs.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11868">#11868</a></td></tr>
<tr><td><details><summary>Server-side encryption with customer-provided keys (SSE-C)
</summary><p>added <code>sseCustomerKey</code> in <code>s3Credentials</code>, to use SSE-C with S3-compatible
object stores. It works with backups, WAL archiving and recovery.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11711">#11711</a>, <a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11775">#11775</a></td></tr>
<tr><td><code>Backup</code> and <code>ScheduledBackup</code> resources that use the <code>barmanObjectStore</code>
method now return an admission warning about the removal of native Barman
Cloud support in 1.32, as <code>Cluster</code> resources already did.</td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11725">#11725</a></td></tr>
<tr><td>Transient network errors from <code>barman-cloud-wal-restore</code> are now logged (needs
Barman 3.20.0 or later).</td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11541">#11541</a></td></tr>
<tr><td><details><summary>Moved the &quot;Defaulting for ...&quot; operator log lines from info to debug level.
</summary><p>They were printed at every reconciliation and hid other messages.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11790">#11790</a></td></tr>
<tr><td><details><summary><code>kubectl cnp status</code> no longer fails without the <code>pods/exec</code> permission.
</summary><p>It shows <code>not permitted: requires the pods/exec permission</code> instead of the
size and configuration sections.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11687">#11687</a></td></tr>
</tbody></table>

## Security Fixes

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td>Updated <code>golang.org/x/net</code> to v0.62.0, fixing GO-2026-6617, GO-2026-6612,
GO-2026-6611, GO-2026-6610, GO-2026-6603, GO-2026-6860 and GO-2026-6866, and
bumped the other <code>golang.org/x</code> modules.</td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11631">#11631</a>, <a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11867">#11867</a></td></tr>
</tbody></table>

## Changes

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td><details><summary>Updated the default PgBouncer image from 1.25.2 to 1.26.1.
</summary><p>Poolers that use the default image roll out the new version when the operator
is upgraded.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11571">#11571</a>, <a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11704">#11704</a></td></tr>
<tr><td>Updated the <code>barman-cloud</code> library to v0.7.0, which skips failed backups when
it reads the backup catalog.</td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11711">#11711</a></td></tr>
</tbody></table>

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td><details><summary>Fixed enabling a sidecar plugin on a running cluster.
</summary><p>Pods created before that have no sidecar until they are recreated. They logged <code>Unknown plugin</code> errors, their metrics scrapes failed, and a switchover could
wait forever. When the plugin archives WAL, the former primary crash looped
until the Pod was deleted. The operator now recreates it.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11858">#11858</a></td></tr>
<tr><td><details><summary>Fixed replicas created from an online volume snapshot ignoring the <code>backup_label</code> and <code>tablespace_map</code> stored in the snapshot.
</summary><p>PostgreSQL did crash recovery and did not fetch WAL from the archive.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11847">#11847</a></td></tr>
<tr><td><details><summary>Fixed logical decoding stalling while a new replica was bootstrapping, with <code>synchronizeLogicalDecoding</code> enabled.
</summary><p>The replica is now left out of <code>synchronized_standby_slots</code> (or <code>pg_failover_slots.standby_slot_names</code>) until its volume is initialized.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11802">#11802</a></td></tr>
<tr><td><details><summary>Fixed the operator retrying instance status requests that failed with an error
response, as if the failure was a network error.
</summary><p>During a switchover the old primary answers with an error while PostgreSQL is
stopped, so each reconciliation waited about 1.6 seconds, which slowed the
whole switchover. Contributed by @kabbydriver.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11793">#11793</a></td></tr>
<tr><td>Fixed the WAL count and size metrics counting <code>.partial</code>, <code>.backup</code> and <code>.history</code> files.</td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/9967">#9967</a></td></tr>
<tr><td><details><summary>Fixed replicas crash looping with <code>recovery aborted because of insufficient parameter settings</code> after a hot standby parameter such as <code>max_connections</code>
was removed from <code>.spec.postgresql.parameters</code>.
</summary><p>Contributed by @ichibahn.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11236">#11236</a></td></tr>
<tr><td><details><summary>Fixed the instance manager waiting forever on a frozen postmaster, one that
accepts connections but never answers.
</summary><p>This blocked the instance status, the metrics exporter and the check before an
in-tree backup. Local connection attempts to PostgreSQL now time out after 5
seconds.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11718">#11718</a></td></tr>
<tr><td><details><summary>Fixed WAL restore reporting the end of the WAL archive on the wrong timeline.
</summary><p>A replica restored from a snapshot could miss valid WAL of the new timeline
and replay WAL of the parent timeline instead. Contributed by @ardentperf.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11133">#11133</a></td></tr>
<tr><td><details><summary>Fixed a <code>Cluster</code> not being reconciled again when a plugin asked for a retry
without a delay.
</summary><p>For example, a <code>Cluster</code> created before the <code>ObjectStore</code> of the Barman Cloud
plugin stayed in <code>BootstrapPending</code>. The operator now retries after one
second. Contributed by @valeriodelsarto.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11683">#11683</a></td></tr>
<tr><td><details><summary>Fixed <code>ConsistentSystemID</code> turning <code>False</code> while PostgreSQL is not running,
for example in replica clusters after a demotion, or on fenced instances.
</summary><p>The system ID is now read from disk, so it no longer needs a running
PostgreSQL.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11645">#11645</a></td></tr>
<tr><td>Fixed a <code>Backup</code> that could be started more than once, or moved back to <code>pending</code> after it started.</td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11617">#11617</a></td></tr>
<tr><td>Fixed <code>kubectl cnp backup</code> for volume snapshot backups: when only one of <code>--immediate-checkpoint</code> and <code>--wait-for-archive</code> was set, the other option
used its default instead of the value in <code>.spec.backup.volumeSnapshot.onlineConfiguration</code>.</td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/11733">#11733</a></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
