# License and License Keys

A license key is always required for the operator to work.

The only exception is when you run the operator with Community PostgreSQL:
in this case, if the license key is unset, a cluster will be started with the default
trial license - which automatically expires after 30 days.

!!! Important
    After the license expiration, the operator will cease any reconciliation attempt
    on the cluster, effectively stopping to manage its status.
    The pods and the data will still be available.

## Company level license keys

A license key allows you to create an unlimited number of PostgreSQL
clusters in your installation.

The license key needs to be available in a `ConfigMap` in the same
namespace where the operator is deployed.

In Kubernetes the operator is deployed by default in
the `postgresql-operator-system` namespace.
When instead OLM is used (i.e. on OpenShift), the operator is installed
by default in the `openshift-operators` namespace.

Given the namespace name, and the license key, you can create
the config map with the following command:

```
kubectl create configmap -n [NAMESPACE_NAME_HERE] \
    postgresql-operator-controller-manager-config \
    --from-literal=EDB_LICENSE_KEY=[LICENSE_KEY_HERE]
```

The following command can be used to reload the config map:

```
kubectl rollout restart deployment -n [NAMESPACE_NAME_HERE] \
    postgresql-operator-controller-manager
```

The validity of the license key can be checked inside the cluster status.

```sh
kubectl get cluster cluster_example -o yaml
[...]
status:
  [...]
  licenseStatus:
    licenseExpiration: "2021-11-06T09:36:02Z"
    licenseStatus: Trial
    valid: true
    isImplicit: false
    isTrial: true
[...]
```

## Cluster level license keys

Each `Cluster` resource has a `licenseKey` parameter in its definition.
You can find the expiration date, as well as more information about the license,
in the cluster status:

```sh
kubectl get cluster cluster_example -o yaml
[...]
status:
  [...]
  licenseStatus:
    licenseExpiration: "2021-11-06T09:36:02Z"
    licenseStatus: Trial
    valid: true
    isImplicit: false
    isTrial: true
[...]
```

A cluster license key can be updated with a new one at any moment, to extend
the expiration date or move the cluster to a production license.

Cloud Native PostgreSQL is distributed under the EnterpriseDB Limited Usage License
Agreement, available at [enterprisedb.com/limited-use-license](https://www.enterprisedb.com/limited-use-license).

Cloud Native PostgreSQL: Copyright (C) 2019-2021 EnterpriseDB.
