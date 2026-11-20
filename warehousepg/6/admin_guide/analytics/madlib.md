---
title: Machine Learning and Deep Learning using MADlib
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/analytics/madlib/
lastModified: 2026-10-28T10:45:05Z
---

# Machine Learning and Deep Learning using MADlib

Apache MADlib is an open-source library for scalable in-database analytics. The WarehousePG MADlib extension provides the ability to run machine learning and deep learning workloads in a WarehousePG.

Install the extension in your WarehousePG cluster to run data-parallel implementations of mathematical, statistical, graph, machine learning, and deep learning methods on structured and unstructured data. For installation instructions, usage examples, and release information, see [whpg-madlib](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/madlib/).

MADlib’s suite of SQL-based algorithms run at scale within a single WarehousePG engine without needing to transfer data between the database and other tools.

MADlib runs inside WarehousePG itself rather than as a separate daemon or software outside the database, so it's easy for database administrators to deploy and manage.

![WarehousePG with MADlib](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/warehousepg/6/images/whpg_madlib.png "WarehousePG MADlib Analytics Architecture")

<a id="section_lmf_pv1_rqb"></a>

## Machine Learning

Apache MADlib consists of methods to support the full spectrum of data science activities. The methods include data transformation and feature engineering, using methods in descriptive and inferential statistics, pivoting, sessionization and encoding categorical variables. There is also a comprehensive library of graph, supervised learning and unsupervised learning methods.

In the area of model selection, MADlib supports cross validation and the most common prediction metrics for evaluating the quality of predictions of a model. Refer to the [MADlib user guide](http://madlib.apache.org/docs/latest/index.html) for more information on these methods.

<a id="section_hrn_pv1_rqb"></a>

## Deep Learning

WarehousePG supports using Keras and TensorFlow for deep learning. You can review the [supported libraries and configuration instructions](https://cwiki.apache.org/confluence/display/MADLIB/Deep+Learning) on the Apache MADlib pages as well as user documentation for [Keras API](http://madlib.apache.org/docs/latest/group__grp__dl.html) using the Tensorflow backend.

MADlib supports Keras with a TensorFlow backend, with or without Graphics Processing Units (GPUs). GPUs can significantly accelerate the training of deep neural networks so they are typically used for enterprise level workloads. For further GPU information, visit the [MADlib wiki](https://cwiki.apache.org/confluence/display/MADLIB/Deep+Learning).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
