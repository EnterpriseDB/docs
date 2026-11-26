---
title: Asynchronous
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/02_overview/02_replication_concepts_and_definitions/05_asynchronous/
lastModified: 2022-03-21T10:35:01-04:00
---

# Asynchronous

<div id="asynchronous" class="registered_link"></div>

Replication Server performs replications asynchronously. The systems hosting the databases don't always have to be running continuously for successful replication to occur. If one system goes offline, replication resumes when it comes back online if there is still pending data to replicate.

In addition, you can create a schedule for your replication system. Replication Server starts and performs replications regularly according to the assigned schedule. Creating a schedule allows you to run the replication system unattended. See [Creating a schedule](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/02_creating_schedule/#creating_schedule).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
