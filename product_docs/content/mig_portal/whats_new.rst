.. raw:: html

<div id="whats_new" class="registered_link"></div>


*******************
`What's New`:index:
*******************

The following enhancements are added to the Migration
Portal for this release:


- We are thrilled to unveil our renewed brand identity, which has a lighter look and feel.

  .. figure:: images/mp_whats_new_branding_updates.png
        :alt: branding updates
        :align: center
        :scale: 35%

- Improvements are made to the UI and the data migration assessment report. The improvements repair a merge/split issue reported in the PDF report format.

**Repair Handler**

*Updated Repair Handlers*

The following repair handlers have been updated. Repair handlers convert Oracle syntax to Postgres-compatible syntax without manual intervention.


- **ERH 1001 - REGEXP_LIKE_SYNTAX_ERROR**

  With this update, the repair handler fixes PL/SQL objects along with storage objects.


- **ERH 2037- TIMESTAMP_WITH_LOCAL_TIMEZONE_DATATYPE**

  Previously, the repair handler only fixed the TABLE object; now, the fix is applied to all objects.
