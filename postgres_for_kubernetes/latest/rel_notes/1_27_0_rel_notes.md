---
title: EDB CloudNativePG Cluster 1.27.0 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_27_0_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# EDB CloudNativePG Cluster 1.27.0 release notes

Released: 19 August 2025

### Important changes

The default behavior of the [liveness probe](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/instance_manager/#liveness-probe) has been updated.
An [isolated primary is now forcibly shut down](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/instance_manager/#primary-isolation)
within the configured `livenessProbeTimeout` (default: 30 seconds).

This release includes the following:

## Features

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td><details><summary>Dynamic loading of PostgreSQL extensions, packaged as OCI-compliant container images, is now supported.
</summary><p>The <code>.spec.postgresql.extensions</code> stanza allows you to mount PostgreSQL extensions as read-only and immutable volumes inside instance pods.
This enables dynamic extension management without rebuilding base images.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7991">#7991</a></td></tr>
<tr><td><details><summary>Logical decoding slot synchronization in HA clusters</summary><p>Added the <code>synchronizeLogicalDecoding</code> field under <code>spec.replicationSlots.highAvailability</code> to enable automatic synchronization of logical decoding slots across high-availability clusters.
This ensures that logical replication subscribers continue seamlessly after a publisher failover.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7931">#7931</a></td></tr>
<tr><td><details><summary>Primary Isolation Check</summary><p>Promoted to stable the liveness pinger experimental feature introduced in 1.26,
adding the <code>.spec.probes.liveness.isolationCheck</code> section to enable primary isolation checks
in the liveness probe by default.
This improves the detection and handling of primary connectivity issues in Kubernetes environments.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7845">#7845</a></td></tr>
</tbody></table>

## Enhancements

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td><details><summary>Introduced an opt-in experimental feature that enables quorum-based failover</summary><p>...to improve safety and data durability during failover events.
This feature, also called failover quorum, can be activated via the <code>alpha.k8s.enterprisedb.io/failoverQuorum</code> annotation.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7572">#7572</a></td></tr>
<tr><td><details><summary>Added support for user maps for predefined users such as <code>streaming_replica</code></summary><p>...allowing the use of self-managed client certificates with different Common Names in environments with strict policies or shared CAs,
while still enabling replicas to join clusters using the <code>streaming_replica</code> role.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7725">#7725</a></td></tr>
<tr><td><details><summary>Added a new <code>PhaseFailurePlugin</code> phase in the <code>Cluster</code> status</summary><p>...to improve observability of plugin-related failures.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7988">#7988</a></td></tr>
<tr><td><details><summary>Made the <code>Backup.spec</code> field immutable after creation</summary><p>...ensuring consistency and predictability in backup operations.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7904">#7904</a></td></tr>
<tr><td><details><summary>Added <code>fqdn-uri</code> and <code>fqdn-jdbc-uri</code> fields in the user secret</summary><p>...to simplify the retrieval of fully qualified domain name-based connection strings.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7852">#7852</a></td></tr>
<tr><td><details><summary>Added <code>Postgres</code> interface support to the CNP-I operator</summary><p>...continuing the transition toward a plugin-based architecture.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7179">#7179</a></td></tr>
<tr><td><details><summary>Added <code>metrics</code> capabilities to the CNP-I instance webserver</summary><p>...enabling metrics exposure directly from the instance for better observability.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/8033">#8033</a></td></tr>
</tbody></table>

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td><details><summary>Unblocked rollouts when migrating to the <code>barman-cloud</code> plugin using the <code>switchover</code> strategy</summary><p>Former primary Pods now restart correctly after WAL archiving fails due to missing plugin support.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/8236">#8236</a></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
