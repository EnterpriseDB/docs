---
title: Asset library
description: Learn how to use the asset library to manage assets, container images, and models for Hybrid Manager clusters.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/image-management/asset-library/
lastModified: 2026-11-20T19:53:06+05:30
---

# Asset library

The asset library is where you manage the container images and models that are available for use in your Hybrid Manager clusters.

## Accessing the asset library

To access the asset library, select the **Asset Library** tab at the top of the Hybrid Manager (HM) console.

## Asset Library page

The **Asset Library** page displays a summary count of the images available in the library, a search and filter bar, and a list of the major images available in the library.

The asset library is divided into two main sections: **Container Images** and **Models**. Each section allows you to view and manage the assets available for use in your HM clusters.

### Container images

The **Container Images** section of the asset library is where you can view and manage the container images available for use in your HM clusters. This includes the ability to search for specific images, filter the list of images by various criteria, and view detailed information about each image. See [Container images](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/image-management/container-images/) for more information on how to use this tab.

### Models

A model is an AI model that can be used in HM. You can use these models with specific datasets to perform various tasks, including natural language processing, image recognition, and more.

> **Warning: Not available in Hybrid Manager 2026.10.1 and later**
>
> Models depend on the `ai` scenario, which isn't available in Hybrid Manager 2026.10.1 and later. It's expected to return in a future release.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
