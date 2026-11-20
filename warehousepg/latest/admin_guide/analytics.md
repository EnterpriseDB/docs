---
title: Overview of WarehousePG integrated analytics
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/
lastModified: 2026-11-05T10:00:23Z
---

# Overview of WarehousePG integrated analytics

WarehousePG offers a unique combination of a powerful, massively parallel processing (MPP) database and advanced data analytics. This combination creates an ideal framework for data scientists, data architects and business decision makers to explore artificial intelligence (AI), machine learning, deep learning, text analytics, and geospatial analytics.

<a id="gp_ecosystem"></a>

## The WarehousePG Integrated Analytics Ecosystem

![WarehousePG integrated analytics](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/warehousepg/7.6/images/whpg_integrated_analytics.png)

The following WarehousePG analytics extensions are explored in different documentation sections, with installation and usage instructions:

<a id="section_c33_lv1_rqb"></a>

### Machine Learning and Deep Learning

The [Apache MADlib extension](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/madlib/) allows WarehousePG users to run different machine learning and deep learning functions, including feature engineering, model training, evaluation and scoring.

<a id="section_zd2_mv1_rqb"></a>

### Geospatial Analytics

[PostGIS](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/postGIS/) is a spatial database extension for PostgreSQL that allows GIS (Geographic Information Systems) objects to be stored in the database. The WarehousePG PostGIS extension includes support for GiST-based R-Tree spatial indexes and functions for analysis and processing of GIS objects.

<a id="text_analytics"></a>

### Text Analytics

[Text Analytics and Search](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/) enables processing of mass quantities of raw text data (such as social media feeds or e-mail databases) into mission-critical information that guides project and business decisions.

<a id="pr_lang_and_ext"></a>

### Programming Language Extensions

WarehousePG supports a variety of procedural languages that you can use for programming database analytics. Refer to the linked documentation for installation and usage instructions.

WarehousePG bundles these languages:

- [PL/Perl](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_perl/)
- [PL/pgSQL](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_sql/)
- [PL/Python](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_python/)

Install these languages separately:

- [PL/Java](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_java/)
- [PL/R](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/pl_r/)

<a id="why_gp_analytics"></a>

## Advanced Analytics and WarehousePG

The importance of advanced analytics in its various forms is growing rapidly in enterprise computing. Key enterprise data typically resides in relational and document form and it is inefficient to copy data between systems to perform analytical operations. WarehousePG is able to run both traditional and advanced analytics workloads in-database. This integrated capability greatly reduces the cost and the silos created by procuring and maintaining multiple tools and libraries.

WarehousePG advanced analytics can be used to address a wide variety of problems in many verticals including automotive, finance, manufacturing, energy, government, education, telecommunications, on-line and traditional retail.

The WarehousePG analytics capabilities allow you to:

- Analyze a multitude of data types – structured, text, geospatial, and graph – in a single environment, which can scale to petabytes and run algorithms designed for parallelism.
- Leverage existing SQL knowledge: WarehousePG can run dozens of statistical, machine learning, and graph methods, via SQL.
- Train more models in less time by taking advantage of the parallelism in the MPP architecture and in-database analytics.
- Access the data where it lives, therefore integrate data and analytics in one place. WarehousePG is infrastructure-agnostic and runs on bare metal, private cloud, and public cloud deployments.
- Use a multitude of data extensions. WarehousePG supports extensions for HDFS, Hive, and HBase as well as reading/writing data from/to cloud storage, including Amazon S3 objects. Review the capabilities of the WarehousePG [Platform Extension Framework (PXF)](https://www.enterprisedb.com/docs/pxf/latest/), which provides _connectors_ that enable you to access data stored in sources external to your WarehousePG deployment.
- Use familiar and leading BI and advanced analytics software that are ODBC/JDBC compatible, or have native integrations, including SAS, IBM Cognos, SAP Analytics Solutions, Qlik, Tableau, Apache Zeppelin, and Jupyter.
- Run deep learning algorithms using popular frameworks like Keras and TensorFlow in an MPP relational database, with GPU (Graphical Processing Unit) acceleration.
- Use procedural languages to customize your analytics. WarehousePG supports development in R, Python, Java, and other standard languages allowing you to distribute execution across the entire cluster to take advantage of the scale and parallelism.

<sub>Vector images provided by SVG Repo under the CC0 License</sub>

- [Machine Learning and Deep Learning using MADlib](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/madlib/): Apache MADlib is an open-source library for scalable in-database analytics. The WarehousePG MADlib extension provides the ability to run machine learning and deep learning workloads in a WarehousePG.
- [Graph Analytics](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/graph/): Many modern business problems involve connections and relationships between entities, and are not solely based on discrete data. Graphs are powerful at representing complex interconnections, and graph data modeling is very effective and flexible when the number and depth of relationships increase exponentially.
- [Geospatial Analytics](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/postGIS/): PostGIS is a spatial database extension for PostgreSQL that allows you to store GIS (Geographic Information Systems) objects in the database. The WarehousePG PostGIS extension supports some PostGIS optional extensions such as  GiST-based R-Tree spatial indexes, and functions for analysis and processing of GIS objects. It also includes support for the PostGIS raster data type. With the PostGIS Raster objects, the PostGIS geometry data type offers a single set of overlay SQL functions (such as STIntersects) operating seamlessly on vector and raster geospatial data. PostGIS Raster uses the GDAL (Geospatial Data Abstraction Library) translator library for raster geospatial data formats that presents a single raster abstract data model to a calling application.
- [Geospatial Indexing with H3 and H3-PG](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/h3/): H3 is a geospatial indexing system using a hexagonal grid that can be (approximately) subdivided into finer and finer hexagonal grids. It includes functions for converting from latitude and longitude coordinates to the containing H3 cell, finding the center of H3 cells, finding the boundary geometry of H3 cells, finding neighbors of H3 cells, and more.
- [Procedural Languages](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/analytics/procedural_languages/): Write functions and procedures in PL/Java, PL/Perl, PL/pgSQL, PL/Python, and PL/R and run them inside WarehousePG.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
