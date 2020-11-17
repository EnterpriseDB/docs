.. raw:: html

<div id="mp_schema_migration" class="registered_link"></div>

.. raw:: latex

    \newpage

*************************
`Schema Migration`:index:
*************************

After resolving errors in your schemas, you can use the schemas with a
client application such as pgAdmin, ToadEdge, or the PSQL client, or
migrate the schema to an EDB Postgres Advanced Server.

Note: For more information about using Toad Edge with EDB Postgres Advanced
Server, see Toad Edge for Postgres.

You can choose one of the following options for migrating schemas; migrate to an:

-  Existing on-premise EDB Postgres Advanced Server
-  New on-premise EDB Postgres Advanced Server
-  EDB Postgres Advanced Server on Cloud


.. figure:: images/mp_schema_migration_home.png
      :alt: schema migration home page
      :align: center
      :scale: 25%

      *Schema migration home page*

.. raw:: latex

    \newpage

.. raw:: html

<div id="existing_on_premise_edb_advanced_server" class="registered_link"></div>


Migrating to an Existing On-Premise EDB Postgres Advanced Server Host
=====================================================================

You can migrate schemas to an existing on-premise EDB Postgres Advanced
Server on Windows or Linux platforms.

Migrating Schemas on Windows
----------------------------

1. Select the ``Existing on-premise EDB Postgres Postgres Advanced Server`` option:

.. figure:: images/mp_schema_migration_existing_epas.png
    :alt: existing epas on-prem home page
    :align: center
    :scale: 25%

    *Existing on-premise EDB Postgres Advanced Server home page*

2. Select one or more schemas to migrate to EDB Postgres Advanced Server:

.. figure:: images/mp_schema_mig_exist_epas_schemas_selection.png
      :alt: existing epas on-prem select schemas
      :align: center
      :scale: 25%

      *Selecting schemas for migration*

.. Note:: If your schemas are not 100% compatible, a banner will be displayed as shown; complete the ``Contact Us`` form for any assistance required.

.. figure:: images/mp_schema_mig_exist_epas_contact_us.png
         :alt: existing epas contact us form
         :align: center
         :scale: 25%

         *The Contact Us form*

3. Download the assessed schemas:

.. figure:: images/mp_schema_mig_exist_epas_download.png
      :alt: existing epas download assessed schemas
      :align: center
      :scale: 25%

      *Download the assessed schemas*

4. Click on ``Windows``:

.. figure:: images/mp_schema_mig_exist_epas_windows.png
      :alt: existing epas windows selection
      :align: center
      :scale: 25%

      *Selecting Windows operating system*

5. To import the schemas, run the following command:

-  On CLI

 .. code-block:: text

    \i c:\users\...\<project_name>.sql



-  On cmd/shell

 .. code-block:: text

    edb-psql -f <project_name>.sql


.. Note:: You can also use ``pgAdmin`` instead.

The converted schemas are migrated to the target server.

.. figure:: images/mp_schema_mig_exist_epas_mig_success.png
     :alt: existing epas schema migrated successfully
     :align: center
     :scale: 25%

     *A successful migration*


.. raw:: latex

    \newpage

Migrating Schemas on Linux
--------------------------

To migrate schemas to an existing on-premise EDB Postgres Advanced Server on
Linux, complete the following steps:

1. Click the ``Existing on-premise EDB Postgres Advanced Server`` option:

.. figure:: images/mp_schema_migration_existing_epas.png
    :alt: existing epas home page_linux
    :align: center
    :scale: 25%

    *Existing on-premise EDB Postgres Advanced Server home page*

2. Select one or more schemas to migrate to EDB Postgres Advanced Server:

.. figure:: images/mp_schema_mig_exist_epas_schemas_selection_linux.png
      :alt: existing epas schema selection
      :align: center
      :scale: 25%

      *Selecting schemas for migration*

3. Download the assessed schemas:

.. figure:: images/mp_schema_mig_exist_epas_download.png
      :alt: existing epas downloading assessed schemas
      :align: center
      :scale: 25%

      *Download the assessed schemas*

4. Click on ``Linux``:

.. figure:: images/mp_schema_mig_exist_linux.png
      :alt: existing epas selecting linux
      :align: center
      :scale: 25%

      *Selecting Linux operating system*

5. To import the schemas, invoke the following ``edb-psql`` client commands:

   .. code-block:: text

      sudo su - enterprisedb
      edb-psql edb
      create database <database_name>;
      \\connect <database_name>
      \\i <project_name>.sql


.. Note:: You can optionally use the ``pgAdmin`` client for the import.

The converted schemas are migrated to the target server.

.. figure:: images/mp_schema_mig_exist_epas_mig_success.png
    :alt: existing epas successful schema migration
    :align: center
    :scale: 25%

    *A successful schema migration*


.. raw:: latex

    \newpage

.. raw:: html

<div id="new_on_premise_edb_advanced_server" class="registered_link"></div>


Migrating to a New On-Premise EDB Postgres Advanced Server Installation
=======================================================================

You can install new EDB Postgres Advanced Server on-premise on Windows
or Linux platforms and migrate the schemas.


Migrating Schemas on Windows
----------------------------

To migrate schemas to a new on-premise EDB Postgres Advanced Server on Windows,
complete the following steps:

1. Click ``New on-premise EDB Postgres Postgres Advanced Server`` option.

.. figure:: images/mp_schema_migration_home_new.png
  :alt: new epas home page
  :align: center
  :scale: 25%

  *New on-premise EDB Postgres Advanced Server home page*

2. Select one or more schemas to migrate on EDB Postgres Advanced Server.

.. figure:: images/mp_schema_mig_new_epas_schemas_selection.png
  :alt: new epas select schemas
  :align: center
  :scale: 25%

  *Selecting schemas for migration*

3. Select the ``Windows`` operating system.

.. figure:: images/mp_schema_mig_new_epas_windows.png
      :alt: new epas installtion on Windows
      :align: center
      :scale: 25%

      *Selecting Windows operating system*

4. Download ``Windows Installer``.

.. figure:: images/mp_schema_mig_new_epas_windows_installer.png
      :alt: new epas windows installer
      :align: center
      :scale: 25%

      *Downloading Windows installer*

5. For installation steps, click EDB Postgres Advanced Server Installation Guide for Windows.

.. figure:: images/mp_schema_mig_new_epas_windows_guide.png
      :alt: new epas windows installation guide
      :align: center
      :scale: 25%

      *View Windows installation guide*

6. Download the assessed schemas.

.. figure:: images/mp_schema_mig_new_epas_download.png
    :alt: new epas download assessed schemas
    :align: center
    :scale: 25%

    *Downloading the assessed file*

7. You can import schemas by running the following command:

   -  On CLI

    .. code-block:: text

       \i c:\users\...\<project_name>.sql



   -  On cmd/shell

    .. code-block:: text

       edb-psql -f <project_name>.sql



.. figure:: images/mp_schema_mig_new_epas_windows_import.png
      :alt: new epas importing schemas on windows
      :align: center
      :scale: 25%

      *Importing schemas into EDB Postgres Advanced Server*


.. Note:: You can also use ``pgAdmin`` instead.

The schemas are migrated to the target server.

    .. figure:: images/mp_schema_mig_new_epas_mig_success.png
             :alt: new epas mig success
             :align: center
             :scale: 25%

.. raw:: latex

    \newpage

Migrating Schemas on Linux
--------------------------

To migrate schemas to an on-premise EDB Postgres Advanced Server on Linux,
complete the following steps:

1. Click ``New On-premise EDB Postgres Advanced Server`` option.

.. figure:: images/mp_schema_migration_home_new.png
         :alt: migration portal home page
         :align: center
         :scale: 25%

         *Migrating schemas home page*

2. Select one or more schemas to migrate on EDB Postgres Advanced Server.

.. figure:: images/mp_schema_mig_new_epas_schemas_selection.png
      :alt: migration portal home page
      :align: center
      :scale: 25%

      *Selecting schemas for migration*

3. Select the ``Linux`` operating system.

.. figure:: images/mp_schema_mig_new_epas_linux.png
      :alt: migration portal home page
      :align: center
      :scale: 25%

      *Selecting Linux operating system*

4. You can select one of the following options to install the EDB Postgres Advanced Server:

   -  Repository

   -  More options

   .. figure:: images/mp_schema_mig_new_epas_linux_repo.png
         :alt: new epas schema selection
         :align: center
         :scale: 25%

         *Selecting Linux repository*

5. For information on the installation procedure, click ``EDB Postgres Advanced Server Installation Guide`` for Linux:

.. figure:: images/mp_schema_mig_new_epas_linux_guide.png
      :alt: migration portal home page
      :align: center
      :scale: 25%

      *Selecting Linux installation guide*

6. Download the assessed schemas:

.. figure:: images/mp_schema_mig_new_epas_download.png
     :alt: migration portal home page
     :align: center
     :scale: 25%

     *Downloading the assessed schemas*

7. To import the schemas, run the following command:

  .. code-block:: text

     sudo su - enterprisedb
     edb-psql edb
     create database <database_name>;
     \connect <database_name>
      \i <project_name>.sql

.. figure:: images/mp_schema_mig_new_epas_linux_import.png
     :alt: importing schemas on epas
     :align: center
     :scale: 25%

     *Importing schemas into EDB Postgres Advanced Server*

.. Note:: You can also use pgAdmin instead.


The converted schemas are migrated to the target server.

  .. figure:: images/mp_schema_mig_new_epas_mig_success.png
               :alt: migration portal home page
               :align: center
               :scale: 25%

               *A successful schema migration*

.. raw:: latex

    \newpage

Migrating to the Cloud
=======================

To migrate schemas on EDB Postgres Advanced Server to Cloud, complete the following steps:

1. Click ``EDB Postgres Advanced Server on Cloud`` option:

.. figure:: images/mp_schema_migration_home_cloud.png
      :alt: cloud home page
      :align: center
      :scale: 25%

      *EDB Postgres Advanced Server on Cloud*

2. Select one or more schemas to migrate to EDB Postgres Advanced Server:

.. figure:: images/mp_schema_mig_cloud_epas_schemas_selection.png
      :alt: epas cloud schema selection
      :align: center
      :scale: 25%

      *Selecting schemas for migration*

3. Select the cloud platform. For example, ``IBM Cloud``:

.. figure:: images/mp_schema_mig_cloud_option.png
      :alt: cloud epas selecting cloud option
      :align: center
      :scale: 25%

      *Selecting cloud option for migration*

4. To launch a new cluster, click ``Go to Cloud``:

.. figure:: images/mp_schema_mig_cloud_cluster.png
       :alt: epas cloud cluster
       :align: center
       :scale: 25%

       *Launching a cloud cluster*

Or, if you have an existing cluster running, click ``Next``.

5. Enter the required connection details on the ``Connect`` page:

.. figure:: images/mp_schema_mig_cloud_cluster_connection_page.png
      :alt: epas cloud connection
      :align: center
      :scale: 25%

      *Connecting to the cloud cluster*

.. Note:: You can click ``Edit Connection`` to make changes to the connection details and retest the connection details.

7. Click ``Test Connection`` to verify the connection details:

.. figure:: images/mp_schema_mig_cloud_cluster_connection_test.png
      :alt: verifying cloud connection details
      :align: center
      :scale: 25%

      *Verify the connection details*

8. Once the connection is successful, click ``Next``:

.. figure:: images/mp_schema_mig_cloud_epas_mig_success.png
      :alt: cloud epas successful migration
      :align: center
      :scale: 25%

      *A successful migration*


The converted schemas are migrated to the target server.
