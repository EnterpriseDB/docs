---
title: Evaluating wait states
description: EDB wait states provides a way to capture wait events and other data for performance diagnosis
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/managing_performance/evaluating_wait_states/
lastModified: 2025-11-25T20:39:04+05:30
---

# Evaluating wait states

EDB Wait States is a tool for analyzing performance and tuning by allowing the collection and querying of wait event data. Wait events are recorded alongside other session activity and provide a snapshot of whether a session is waiting for I/O, CPU, IPC, locks, or timeouts. Snapshots of this information are gathered by the EDB Wait States background worker (BGW) at regular intervals.

The EDB Wait States interface allows you to control when and for how long the wait events are sampled and to extract the gathered samples in `edb_wait_states_data` for further analysis. By gathering this data over time, you can discover optimization opportunities and gain insight into what resources sessions are waiting on when performance is lower than expected.

See [EDB Wait States](https://www.enterprisedb.com/docs/pg_extensions/wait_states/) for more information.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
