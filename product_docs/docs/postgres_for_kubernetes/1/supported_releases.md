# Supported releases

*This page lists the status, timeline and policy for currently supported
releases of EDB Postgres for Kubernetes*.

EDB Postgres for Kubernetes is based on the open source
[CloudNativePG operator](https://cloudnative-pg.io), and follows the same
release cadence.

## Long Term Support (LTS)

On some selected minor versions, EDB extends the maintenance and support
offering on EDB Postgres for Kubernetes, allowing you to remain on the same
minor version for a fixed period of 12 months beyond the end-of-life (EOL) date
of the corresponding minor release of CloudNativePG.

In this timeframe, EDB will provide bug and security fixes by releasing new
patch or security patch versions of the operator.

## Support status of EDB Postgres for Kubernetes releases

| Version         | Currently Supported  | Release Date      | End of Life              | Supported Kubernetes Versions | Supported OpenShift Versions |
|-----------------|----------------------|-------------------|--------------------------|-------------------------------|------------------------------|
| 1.20.x          | Yes                  | April 27, 2023    | ~ December 28, 2023      | 1.23, 1.24, 1.25, 1.26, 1.27  | 4.10 -> 4.13                 |
| 1.19.x          | Yes                  | February 14, 2023 | ~ October 26, 2023       | 1.23, 1.24, 1.25, 1.26        | 4.10 -> 4.13                 |
| 1.18.x (LTS)    | Yes                  | November 10, 2022 | ~ June 12, 2024          | 1.23, 1.24, 1.25, 1.26        | 4.10 -> 4.13                 |
| 1.17.x          | Yes                  | September 6, 2022 | March 14, 2023           | 1.22, 1.23, 1.24              | 4.8 -> 4.11                  |
| 1.16.x          | No                   | July 7, 2022      | December 21, 2022        | 1.22, 1.23, 1.24              | 4.8 -> 4.10                  |
| 1.15.x          | No                   | April 21, 2022    | October 6, 2022          | 1.21, 1.22, 1.23              | 4.6 -> 4.10                  |

!!! Important
    Please be aware that this page is informative only.
    The ["Platform Compatibility"](https://www.enterprisedb.com/product-compatibility#cnp) page
    from the EDB website contains the official list of supported software and
    Kubernetes distributions.

