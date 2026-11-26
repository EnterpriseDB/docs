---
title: Accessing Migration Portal
description: Reference material on accessing Migration Portal workspaces for database migrations with Hybrid Manager, supporting the step-by-step migration guides.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/access_mp/
lastModified: 2026-07-23T19:28:07Z
---

# Accessing Migration Portal

Migration Portal in Hybrid Manager (HM) offers two different workspaces that you access differently depending on how you want to use it.

## Project-scoped workspace vs. user's workspace

Deploying HM includes a built-in instance of Migration Portal that has two types of workspaces:

- The _project-scoped workspace_ in the Migration Portal is where you manage Migration Portal projects created with the HM console for schemas loaded by the [EDB Postgres AI agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/).

  This shared portal environment aligns your Migration Portal projects directly with your HM projects. In this shared portal, you can see all Migration Portal projects created by you and other users who are part of the same HM project. You can't, however, see Migration Portal projects from migrations performed in other HM projects.

- The _user's workspace_ in the Migration Portal is where you create and manage migration projects for external schemas that you manually upload for analysis, conversion, and migration.

  This isn't a shared environment. Only you have access to the Migration Portal projects created in this workspace.

This separation allows Migration Portal to cater to different types and scales of migration efforts:

- Organized, large-scale, enterprise-driven projects (project-scoped)
- More flexible, smaller-scale, or individual-driven migrations (user's workspace)

## Accessing

A Migration Portal has two type of workspaces for different purposes:

- To create and manage projects for schemas loaded into HM by the EDB Postgres AI agent, see [Assessing schemas for HM projects](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/hm_schema_migration/). This uses the project-scoped access to Migration Portal.

- To manually upload externally provided DDL files and assess schemas with the Migration Portal, see [Assessing schemas for external projects](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migration_portal/external_schema_migration/). This uses the user's workspace access to Migration Portal.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
