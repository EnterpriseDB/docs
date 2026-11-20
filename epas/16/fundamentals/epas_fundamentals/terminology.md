---
title: Terminology
description: Introduces some terminology essential to understanding EDB Postgres Advanced Server
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/fundamentals/epas_fundamentals/terminology/
lastModified: 2024-11-22T12:16:04+01:00
---

# Terminology

The terminology that follows is important for understanding EDB Postgres Advanced Server's functionality and its components.

## Database server (postmaster)

The server process that provides the key functionality that allows you to store and manage data. It manages the database files, accepts connections to the database from client applications, and performs database actions on behalf of the clients. The database server process is called _postgres_.

## Database cluster

A set of on-disk structures that comprise a collection of databases. A cluster is serviced by a single-instance of the database server. A database cluster is stored in the `data` directory. Don't store the `data` directory of a production database on an NFS file system.

## Configuration files

You can use the parameters listed in Postgres configuration files to manage deployment preferences, security preferences, connection behaviors, and logging preferences.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
