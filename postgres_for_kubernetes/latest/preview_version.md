---
title: Preview Versions
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/preview_version/
lastModified: 2026-11-19T05:48:05Z
---

# Preview Versions

EDB Postgres® AI for CloudNativePG™ Cluster candidate releases are pre-release versions made available for
testing before the community issues a new generally available (GA) release.
These versions are feature-frozen, meaning no new features are added, and are
intended for public testing prior to the final release.

> **Warning: Important**
>
> EDB Postgres® AI for CloudNativePG™ Cluster release candidates are **not intended for use in production** systems.
> They should only be deployed in staging or dedicated testing environments.

## Current Preview Version

There are currently no preview versions available.

## Purpose of Release Candidates

Release candidates are provided to the community for extensive testing before
the official release. While a release candidate aims to be identical to the
initial release of a new minor version of EDB Postgres® AI for CloudNativePG™ Cluster, additional changes may
be implemented before the GA release.

### Mitigating Critical Issues

The primary purpose of an RC is to catch serious defects and regressions that our
automated testing and internal manual checks might miss. **Specifically, community testing
is invaluable for validating real-world scenarios, such as:**

- **Upgrade Paths:** Testing the process of upgrading an existing EDB Postgres® AI for CloudNativePG™ Cluster
  cluster from the previous stable minor version to the RC version. This often
  uncovers critical compatibility or migration issues, like those that affect PVC
  ownership, which can only be reliably tested with diverse existing user setups.
- **Unique Configurations:** Validating compatibility with specific Kubernetes
  versions, storage providers, networking setups, or custom PostgreSQL
  extensions not covered by our standard test matrix.
- **Real-world Workloads:** Running the RC with your actual application
  workload and traffic patterns to expose performance regressions or race
  conditions.

## Community Involvement: How to Help

The stability of each EDB Postgres® AI for CloudNativePG™ Cluster minor release significantly depends on the
community's efforts to test the upcoming version with their workloads and
tools. Identifying bugs and regressions through user testing is crucial in
determining when we can finalize the release.

### Your Call to Action

If a Release Candidate is available, we encourage you to perform the following tests in a
non-production environment:

- **New Deployment Test:** Deploy a new EDB Postgres® AI for CloudNativePG™ Cluster cluster using the RC version.
- **Upgrade Test (Crucial):** **Upgrade an existing cluster** (from the
  preceding stable minor version) to the RC version, and verify all key
  operational aspects (scaling, failover, backup/restore) function correctly.
- **Basic Operations:** Verify key features like rolling update,
  backup/restore, instance failover, and connection pooling function as
  expected.
- **Report Issues:** **Immediately report any issues or unexpected behavior**
  by opening a GitHub issue and clearly marking it with a **`Release
  Candidate`** tag or label, along with the RC version number
  (e.g., `1.31.0-rc1`).

## Usage Advisory

The EDB Postgres® AI for CloudNativePG™ Cluster Community strongly advises against using preview versions of
EDB Postgres® AI for CloudNativePG™ Cluster in production environments or active development projects. Although
EDB Postgres® AI for CloudNativePG™ Cluster undergoes extensive automated and manual testing, beta releases
may contain serious bugs. Features in preview versions may change in ways that
are not backwards compatible and could be removed entirely.

**By testing the Release Candidate, you are helping to prevent a potentially
critical bug from affecting the entire community upon the GA release.**

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
