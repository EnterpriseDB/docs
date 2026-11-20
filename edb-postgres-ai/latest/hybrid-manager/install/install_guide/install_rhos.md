---
title: Installing Hybrid Manager on Red Hat OpenShift
description: Install Hybrid Manager on a Red Hat OpenShift cluster using the OperatorHub catalog.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/install_rhos/
lastModified: 2026-09-08T14:54:56+08:00
---

# Installing Hybrid Manager on Red Hat OpenShift

On Red Hat OpenShift (RHOS), HM installs the EDB Postgres AI Operator through the OperatorHub catalog — not via Helm.

For standard Kubernetes, see [Install Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/install_hm/).

## Overview

> **Role focus:** Site reliability engineer (SRE) / Infrastructure Engineer

### Prerequisites

- [Phase 1: Planning your architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/planning_arch/) (Completed)
- [Phase 2: Gathering your system requirements](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/sys_reqs/) (Completed)
- [Phase 3: Deploying your Kubernetes cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/k8s_install/) (Running and validated)
- [Phase 4: Preparing your environment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/environment_prep/) (Completed and validated — this phase covers creating the image pull secret, component secrets, and the object storage secret with `edbctl`)

**OpenShift-specific requirements:**

- A `cluster-admin` account on your OpenShift cluster
- Labels and taints applied to your cluster nodes per your architecture plan
- If your cluster is in a disconnected or air-gapped environment, an `ImageDigestMirrorSet` configured to redirect image pulls to your local registry mirror

### Outcomes

- _A fully deployed Hybrid Manager (HM) platform on Red Hat OpenShift, accessible via the web portal._

**Next phase:** Phase 6: [Exploring post-installation options](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/post_install/)

## Install Hybrid Manager on Red Hat OpenShift

### Update the global pull secret

On OpenShift, the global pull secret must include the EDB container registry endpoint and token so all cluster nodes can pull EDB images. Run [`edbctl`](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/edbctl/), the Hybrid Manager CLI, to update it:

```bash
edbctl image-pull-secret create
```

For the full command reference, see [edbctl image-pull-secret](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_image_pull_secret/).

### Verify container registry access

Before installing the operator, confirm your cluster can reach the container registry and your credentials are valid:

```bash
docker login docker.enterprisedb.com
```

If your cluster uses a local mirror, verify that your `ImageDigestMirrorSet` correctly redirects pulls and that the mirrored images are present.

### Install the operator from OperatorHub

The OperatorHub catalog flow creates the operator namespace (`edb-hcp-operator-system`) automatically — no manual namespace creation is required.

1. Log in to the OpenShift web console with a `cluster-admin` account.
2. Navigate to **Operators > OperatorHub**.
3. In the filter box, enter **EDB Postgres AI**.
4. Select the **EDB Postgres AI Operator** and click **Install**.
5. On the Install Operator page:
   - For **Installed Namespace**, select or enter `edb-hcp-operator-system`.
   - Leave all other settings at their defaults.
6. Click **Install**.

### Verify the operator

Wait for the operator pod to reach `Running` status:

```bash
oc get pods -n edb-hcp-operator-system
```

```output title="Output"
NAME                                                    READY   STATUS    RESTARTS   AGE
edb-hcp-operator-controller-manager-xxxxxxxxxx-xxxxx   1/1     Running   0          60s
```

### Create the HybridControlPlane resource

#### Prepare your HM manifest

Create a file named `hybridmanager.yaml`. Use the [Example in the standard install guide](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/install_hm/#example-hybridcontrolplane-manifest) as a template and customize the values for your environment.

Critical fields to verify:

- **`spec.flavour`**: Your Kubernetes distribution
- **`spec.registry.url`**: Your container registry URL
- **`spec.version`**: The HM version you want to install
- **`spec.globalParameters.portal_domain_name`**: Your portal FQDN
- **`spec.beaconAgent.provisioning`**: Your provisioning configuration

#### Apply the resource

Apply the manifest using the OpenShift CLI or `kubectl`:

```bash
oc apply -f hybridmanager.yaml
```

```output title="Output"
hybridcontrolplane.edbpgai.edb.com/edbpgai created
```

Alternatively, apply the custom resource (CR) through the OpenShift console: **Operators > Installed Operators > EDB Postgres AI > Create HybridControlPlane**.

### Monitor installation progress

Once the HM resource is created, the operator begins reconciling. Monitor progress from the operator status — not the logs:

```bash
oc get hcp
```

```output title="Output"
NAME      PHASE      PREFLIGHT   POSTFLIGHT
edbpgai   deployed   passed      passed
```

For a detailed status view including individual component states:

```bash
oc get hybridcontrolplane edbpgai -o yaml
```

#### Check preflight results

The operator runs preflight checks before deploying components. Verify they passed:

```bash
oc get postflights.edbpgai.edb.com edbpgai -o yaml
```

If any preflight check fails, review the failed check's `description` field in the output. Failed preflights are the most common cause of a stalled install — fix the underlying issue and the operator retries automatically.

For a full list of monitoring commands, see [Monitor installation progress](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/install_hm/#monitor-installation-progress).

### Verify portal access

Once your installation is healthy, verify that you can access the HM console.

1. **Open your browser** and navigate to the portal domain you defined during [Phase 4: Preparing your environment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/environment_prep/) (e.g., `https://portal.my-company.com`).
2. **Accept the certificate:** If you used a self-signed certificate (or haven't trusted your custom CA yet), you may see a browser warning. Proceed past it for now.
3. **Log in:** Use the **User-0** credentials you configured during environment preparation.

**Success:** You should see the HM console landing page.

## Next phase

The platform is installed and running. You are now ready to perform the initial post-installation configuration, such as connecting your first self-managed cluster or adding team members.

**[Proceed to Phase 6: Exploring your post-installation options](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/post_install/) →**

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
