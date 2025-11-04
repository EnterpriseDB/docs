---
title: Installing Hybrid Manager
navTitle: Install Revamp
description: Learn how to plan for, prepare for, and install Hybrid Manager.
---

## Overview

This guide walks you through planning, configuring, and installing Hybrid Manager (HM) onto your infrastructure. 
Each phase is designed to ensure a smooth, successful deployment.

---

### 1: Planning and architecture

**Role focus**: CTO or architect

This initial phase is about **designing** your deployment architecture. 

It concludes with documenting that architecture, which then serves as the blueprint for all subsequent steps.

* **Goal:** Define the foundational architecture for Hybrid Manager.

* **Key activities:**
    * Review and select the appropriate **Kubernetes flavor**, topology, and deployment locations.
    * Document architectural decisions as inputs for infrastructure requirements and Kubernetes installation (Phases 2 and 3).

* **Documentation:** [See Architecture Guide](diagrams_architecture.md)

**Ownership note**: The **customer ultimately owns the deployment architecture**. 
While EDB's Sales Engineering, Professional Services, Support Team, or documentation can be consulted, the final architectural decisions rest with the customer team.

---

### 2: Meeting requirements

**Role Focus:** Infrastructure engineer, CSP administrator, or platform engineering

This phase focuses on **identifying, preparing, and verifying** the infrastructure needed to support the architecture defined in phase 1. 
This is where you begin preparing your configuration.

* **Goal:** Fulfill all prerequisites and prepare the core configuration file.

* **Key Activities:**
    * Identify **hardware, networking, storage, and DNS requirements** for your chosen architecture.
    * Ensure all prerequisites are met for Kubernetes deployment.
    * Prepare to populate critical entries in the **`values.yaml`** file for Hybrid Manager.

* **Documentation:** [See Requirements](requirements.md)

> **EDB Assistance Note**: EDB's **Sales Engineering** and **Professional Services** are the primary resources for communicating and clarifying detailed deployment requirements during the sales cycle or via a Statement of Work (SoW). The official documentation also provides comprehensive checklists.

[See Requirements](requirements.md)

---

### 3. ⚙️ Install kubernetes cluster

> **Role Focus:** Kubernetes engineer

This phase executes the deployment of your chosen Kubernetes environment based on the previous planning.

* **Goal:** Deploy and provision the operational Kubernetes cluster.

* **Key activities:**
    * Deploy Kubernetes according to the defined architecture and infrastructure requirements.
    * Implement necessary abstractions (node pools, storage classes, networking).
    * Validate that infrastructure requirements are met and update critical `values.yaml` entries.

* **Documentation:** [See Kubernetes Installation](k8s_install.md)

> **EDB support context:** The **customer** owns the installation and lifecycle operation of their Kubernetes cluster. **Professional Services** can be engaged via a Statement of Work (SoW), and **Support** can offer assistance through knowledge base articles.

### 3. **Install Kubernetes Cluster**  
*Customer Persona: Kubernetes Engineer*

*EDB Assistance: Professional Services, Support* - Installation of Kubernetes is optimally done by the customer and it's lifecycle operation is owned by the customer (except for Engineered Systems).  Professional Services can engage in an SoW and Support may have some knowledge base articles to help.

- Deploy Kubernetes according to the defined architecture and infrastructure requirements.
- Implement necessary abstractions (node pools, storage classes, networking).
- Validate that infrastructure requirements are met and update critical `values.yaml` entries.

[See Kubernetes Installation](k8s_install.md)

---

### 4. **Prepare Kubernetes for Hybrid Manager**  
*Customer Persona: Site Reliability Engineer (SRE)*

*EDB Assistance: Professional Services, Support, Sales Engineering* - Final preparation of Kubernetes for Hybrid Manager is optimally done by the customer and it's lifecycle operation is owned by the customer (except for Engineered Systems).  Professional Services can engage in an SoW and Support may have some knowledge base articles to help.

- Provision essential secrets and configuration resources as specified in `values.yaml`.
- Perform further validation of cluster readiness for Hybrid Manager installation.

[See Preparation of Kubernetes for Hybrid Manager Installation](hm_preparation.md)

---

### 5. **Install Hybrid Manager**  
*Customer Persona: Site Reliability Engineer (SRE)*

*EDB Assistance: Professional Services, Support, Sales Engineering* - Installation of Hybrid Manager is optimally done by the customer and it's lifecycle operation is owned by the customer (except for Engineered Systems).  In the case of a managed service from CX our EDB CX folks would execute the HM install.  Professional Services can engage in an SoW and Support may have some knowledge base articles to help.

- Final validation of the environment and deployment settings.
- Deploy Hybrid Manager using customized `values.yaml` entries.
- Confirm successful installation and operational readiness.

[See Hybrid Manager Installation](hm_install.md)