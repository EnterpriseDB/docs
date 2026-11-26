---
title: Performing a schema assessment
product: Migration Portal
version: 5.2.0
url: https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/mp_schema_assessment/
lastModified: 2026-10-14T11:17:37+02:00
---

# Performing a schema assessment

<div id="mp_schema_assessment" class="registered_link"></div>

You can assess an Oracle database schema for compatibility with EDB Postgres Advanced Server. You can also generate a report about the assessment.

> **Note**
>
> Review the [release notes](https://www.enterprisedb.com/docs/migration_portal/latest/01_mp_release_notes/) and [known issues](https://www.enterprisedb.com/docs/migration_portal/latest/known_issues_notes/) for an overview of unsupported schema objects.

> **Note: Using Migration Portal through Hybrid Manager**
>
> If you're accessing Migration Portal through an HM project, the project creation steps below don't apply — your project is created automatically by HM, or manually through the HM console. Start from **Verify the DDL objects** to resolve schema incompatibilities. See [Migrating schema from Oracle to an HM-managed database](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/migration_guides/oracle_to_hm_managed/migrating_schema/) for context.

## Perform a schema assessment

1. Navigate to [Migration Portal](https://migration.enterprisedb.com).

2. Enter your EDB credentials.

3. Select **New** to create a project.

4. In the dialog box, enter the project name in the **Project name** field.

5. Specify project details:

   - Select the application interface.
   - Select a source DB and version for the source.
   - Select the target DB and Version for the target.

6. To upload the `.SQL` file generated with your schema metadata, select **Choose file**.

   > **Note**
   >
   > Don't modify the `.SQL` file.

7. To specify adding a suffix to indexes (\_IDX) and constraints (\_CON) when creating a project, select the **Add suffix to make object names unique** check box. This selection ensures better assessment results, as EDB Postgres Advanced Server doesn't support the same name for tables and indexes whereas Oracle does.

8. To specify using Oracle default casing when creating a project, select the **Use Oracle’s default case for schema migration** check box. Use the Oracle’s default case feature to preserve the Oracle’s default, uppercase naming convention for all database objects when migrating schema from an Oracle database to an EDB Postgres Advanced Server database.  See [Known issues, limitations, and notes](https://www.enterprisedb.com/docs/migration_portal/latest/known_issues_notes/) for more information about this feature.

9. To specify assessing the DEFAULT profile, when creating a project, select the **Assess DEFAULT profile (if available)** check box. The EDB DDL Extractor extracts the ALTER PROFILE statements for DEFAULT profiles that are overridden in the Oracle database. This option results in Migration Portal assessing the DEFAULT profile and attempting to apply these statements in the target EDB Postgres Advanced Server database when the schema is migrated. We recommend that the settings of the ALTER PROFILE DEFAULT statement be verified and updated, if necessary, before migrating the DDL to the target database. See [Known issues, limitations, and notes](https://www.enterprisedb.com/docs/migration_portal/latest/known_issues_notes/) for more information about this feature.

10. Select **Create & assess** to create a new project and to assess the schemas.

    The analysis tool reviews every construct and executes repair actions to improve compatibility with EDB Postgres Advanced Server. It flags any remaining errors that require manual intervention. As part of the assessment process, Migration Portal also automatically runs an [SPL Check](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/mp_schema_assessment/checks/#spl-check) analysis, which reports warnings about potential runtime issues separately from these compatibility errors.

11. Verify the DDL objects (e.g., TABLES) that don't show a 100% success ratio.

12. Select the objects that aren't compatible with EDB Postgres Advanced Server and view the details. At the bottom of the middle panel, you can view repair action details.

    ![Incompatible object and hint](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/migration_portal/5/images/mp_schema_assessment_incompatible_pgai.png)

13. To locate the possible workarounds for the objects that aren't immediately compatible with EDB Postgres Advanced Server, refer to the **Quick Help** (Knowledge Base) information or interact with the [AI Copilot](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/mp_ai_copilot/) in the right panel.

    ![Incompatibility resolution with Quick Help and AI Copilot](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/migration_portal/5/images/mp_schema_assessment_errors_pgai.png)

    When using the **Quick Help** (Knowledge Base), enter the error message for the incompatible objects with EDB Postgres Advanced Server and select **Search**.

    When using the [AI Copilot](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/mp_ai_copilot/), use the chat window to interact with the AI-enabled chat feature. You can ask questions about compatibility, enter the error message, request syntax Postgres equivalents for DDL queries, and so on.

    ![AI Copilot suggestions](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/migration_portal/5/images/mp_schema_assessment_copilot_pgai.png)

    > **Note**
    >
    > If the information or workaround for incompatible objects isn't available in the Knowledge Base or AI Copilot, contact the Support team for help.

14. Use the information you obtained from the Knowledge Base and AI Copilot to make all incompatible objects compatible.
    Manually make the changes in the **Target** pannel for that object and select **Reassess**.

    > **Important**
    >
    > Ensure that you test all suggested solutions to confirm the converted schemas behave as expected.

    ![Incompatibility resolved successfully](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/migration_portal/5/images/mp_schema_assessment_workaround_pgai.png)

    > **Note**
    >
    > If any failed object passes while reassessing, the dependent objects for that object are also reassessed.

When you have finished working with the DDL, you can either download the modified EDB-compatible DDL as a `.sql` file or migrate the schemas. See [Schema migration](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/03_mp_schema_migration/#mp_schema_migration).

<div id="mp_report" class="registered_link"></div>

## Generate an assessment report

Migration Portal reports provide a high-level assessment summary of the schemas assessed for your project. In addition, the report provides details about the failed objects and the cause of failure.

1. Select **Report**.

2. Select the schemas to include in the report.

3. To generate the onscreen report, select **Generate**.

   You can select either the **Generate PDF** or **Generate JSON** option to save the report. You can use the JSON format to easily integrate into external systems or for further automated processing.

   You can also view the count of distinct repair handlers applied to the DDLs under the selected schemas.

> **Note**
>
> Migration Portal doesn't assess sensitive PL/SQL source code hidden in Oracle wrapped objects. These wrapped objects aren't included in the assessed objects count, and therefore the true value of compatibility percentage might be different from the value calculated in the assessment report.

See the note in [Known issues and notes](https://www.enterprisedb.com/docs/migration_portal/latest/known_issues_notes/#wrapped-objects) for more information about wrapped objects.

## Evaluate an assessment report

The assessment report presents data and information about the compatibility of objects and features in your schemas and the overall project.

- **Object**: Migration Portal generates an object for all CREATE statements it processes. In addition, it generates an object for each ALTER TABLE statement that adds a constraint in the uploaded DDL.
- **Feature**: An Oracle clause or a construct that is used in the creation of an object. A feature can be used multiple times in one or more objects.

The assessment report lists tables for _Incompatible Features_ and _Unresolved Objects_.

### Object compatibility

An object is compatible if it successfully executes on a target database.

#### Object compatibility summary

In the assessment report, you see a summary of object compatibility based on the following categories:

| Object compatibility level | Description                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Passed                     | Executes on a target database without applying any repair handlers.                                                                                                                                                                                                                                                                                                                |
| System repaired            | Executes successfully on a target database after applying one or more repair handlers.  Repair handlers use transformation logic to automatically make DDLs compatible with EDB Postgres Advanced Server. Ensure that you carefully review the descriptions in the **Repair Handler applied** section of the report in case of an unexpected impact on the behavior of the object. |
| User repaired              | Executes successfully on a target database after being manually repaired and reassessed by the user.                                                                                                                                                                                                                                                                               |
| Failed objects             | Does not execute successfully on the target database.                                                                                                                                                                                                                                                                                                                              |

> **Note**
>
> The object analysis presented is based on the existing state of the objects in the target DDL, which might change if the objects are updated and reassessed. For example, objects that are fixed are removed from the _Unresolved Objects_ table after reassessment.

#### Additional object compatibility information

After the summary, you see additional sections related to object compatibility:

| Report section                | Description                                                                                                                                                                                                                                                                                  | Usage                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| All failures                  | Summarizes all reasons why objects failed conversion, listing the failure count and the specific object types affected per schema. You will see a consolidated view of common problems like "relation does not exist" or "type does not exist" across the entire project.                    | You can identify the most common compatibility issues, allowing you to prioritize the development of reusable fix strategies for widespread failures.                                                                                                                                                                                                                                                                                      |
| Object dependencies           | Lists objects, object type, and any errors in hierarchical form, focusing on how they relate to other objects in the schema. It often shows dependency chains, where a failure in one object (for example, a table) cascades errors to dependent objects (for example, a procedure or view). | You can establish the correct conversion order and prioritize fixing foundational objects first, as resolving a parent object's issue will likely clear the errors on many dependent children. When incompatible objects require refactoring (using the AI Copilot, or manual rewriting), the dependency list helps determine the exact scope of the rewrite, ensuring all calling procedures, views, or functions are adjusted correctly. |
| Assessment result for schemas | Provides a detailed breakdown of object compatibility for each individual schema included in the project. It summarizes the number of total, passed, system repaired, user repaired, and failed objects per schema.                                                                          | Scope the migration effort for each schema individually, focusing resources on schemas with the highest number of failed or system-repaired objects.                                                                                                                                                                                                                                                                                       |
| Repair handlers applied       | Lists the codes (for example, ERH-2013), short descriptions, and long descriptions of the automated repair handlers used by the system. It shows how many times each unique handler was applied to successfully execute an object on the target database.                                    | Understand the extent of automated changes applied to your DDL, to help you validate the converted code and identify potential post-migration performance impacts.                                                                                                                                                                                                                                                                         |

### Feature compatibility

Some features might not be natively available in EDB Postgres Advanced Server. The assessment report presents a summary of feature occurrences and compatibility levels.

| Feature compatibility level                                    | Workaround status          |
| -------------------------------------------------------------- | -------------------------- |
| Compatible features                                            | -                          |
| Features with existing available workaround                    | Exists                     |
| Features with reasonable effort new workaround                 | Possible                   |
| Features with no workaround or requiring further investigation | None / Needs Investigation |

> **Note**
>
> For features with no workaround, it might be possible to address the feature incompatibility through application-level changes.

#### Limitations

The assessment report is updated after a user manually makes changes to the target DDL and selects **Reassess**. However, the _Incompatible Features_ table in the report does not get updated and continues to list the incompatible features in the source DDL.  The schema migration complexity assessment score is updated as incompatible objects with incompatible features are resolved.  Also, after objects are fixed and reassessed they are removed from the _Unresolved Objects_ table along with the listing of any incompatible features that were originally found in those objects.

- [Checks](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/mp_schema_assessment/checks/): These automatic checks are performed during the assessment of schemas with the Migration Portal.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
