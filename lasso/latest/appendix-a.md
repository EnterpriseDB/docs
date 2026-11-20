---
title: Servers accepting upload of reports
product: Lasso
version: "4"
url: https://www.enterprisedb.com/docs/lasso/latest/appendix-a/
lastModified: 2024-05-21T15:45:23-03:00
---

# Servers accepting upload of reports

> **Note**
>
> This information applies only to Lasso executables
> with external network access. You can verify that your Lasso
> can access the Internet using the `--info` option. Look for
> the line `External network access enabled`.

The Lasso `--upload` command sends
the tarball to one of the front-line application servers that are
configured in high availability and load balancing to receive Lasso
reports for EDB as part of the Customer Portal.

These servers are part of an ISO 27K1 infrastructure and fully comply
with the European Union’s General Data Protection Regulation (GDPR).

Provide this list of servers to your infrastructure
team so that they can open outbound connections to port 443 of
the following IPv4 addresses:

1. 78.46.204.124
2. 88.99.39.37
3. 88.99.39.42
4. 88.99.80.86
5. 116.203.69.173
6. 116.203.69.177
7. 116.203.69.179
8. 116.203.69.185
9. 116.203.69.248
10. 116.203.69.253
11. 159.69.178.25
12. 159.69.178.96
13. 159.69.181.84
14. 159.69.181.86
15. 195.201.138.157
16. 195.201.99.62

If you also use IPv6, add this list:

1. 2a01:4f8:1c17:482e::1
2. 2a01:4f8:1c17:4f1a::1
3. 2a01:4f8:1c17:5197::1
4. 2a01:4f8:1c17:529d::1
5. 2a01:4f8:c010:1210::1
6. 2a01:4f8:c010:154c::1
7. 2a01:4f8:c010:1550::1
8. 2a01:4f8:c010:1551::1
9. 2a01:4f8:1c1c:c82e::1
10. 2a01:4f8:1c1c:c836::1
11. 2a01:4f8:1c1c:c837::1
12. 2a01:4f8:1c1c:c95f::1
13. 2a01:4f8:1c1c:c97e::1
14. 2a01:4f8:1c1c:ca43::1
15. 2a01:4f8:1c1c:ca4e::1
16. 2a01:4f8:1c1c:dab3::1

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
