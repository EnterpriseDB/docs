---
title: Feature compatibility
product: EDB Postgres Distributed (PGD)
version: 6.1.0
url: https://www.enterprisedb.com/docs/pgd/6.1/appusage/feature-compatibility/
lastModified: 2026-02-26T06:45:03-08:00
---

# Feature compatibility

## Server feature/commit scope interoperability

Not all server features work with all commit scopes. This table shows the ones that interoperate.

<table style="table-layout: fixed">
<thead>
<tr>
<td style="text-align:center; width:33%"></td>
<td style="text-align:center"> Async<br /><div style="font-size:smaller">(default)</div></td> 
<td style="text-align:center"><a href="https://www.enterprisedb.com/docs/pgd/6.1/parallelapply/">Parallel<br />Apply</a> </td>
<td style="text-align:center"><a href="https://www.enterprisedb.com/docs/pgd/6.1/transaction-streaming/">Transaction<br />Streaming</a> </td>
<td style="text-align:center"><a href="https://www.enterprisedb.com/docs/pgd/6.1/decoding_worker/">Single<br />Decoding<br />Worker</a> </td>
</tr>
</thead>
<tbody>
<tr>
<td> <a href="https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/group-commit/">Group Commit</a> </td>
<td style="text-align:center"> ⛔︎ </td>
<td style="text-align:center"> ❌ </td>
<td style="text-align:center">  ❌<sup>❗️</sup> </td>
<td style="text-align:center">  ✅ </td>
</tr>
<tr>
<td> <a href="https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/camo/">CAMO</a> </td>
<td style="text-align:center"> ⛔︎ </td>
<td style="text-align:center">  ✅ </td>
<td style="text-align:center">  ❌ </td>
<td style="text-align:center">  ❌ </td>
</tr>
<tr>
<td> <a href="https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/lag-control/">Lag Control</a> </td>
<td style="text-align:center"> ✅ </td>
<td style="text-align:center"> ✅ </td>
<td style="text-align:center"> ✅  </td>
<td style="text-align:center">  ✅ </td>
</tr>
<tr>
<td> <a href="https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/synchronous_commit/">Synchronous Commit</a> </td>
<td style="text-align:center"> ⛔︎ </td>
<td style="text-align:center"> ✅ </td>
<td style="text-align:center">  ✅ </td>
<td style="text-align:center"> ✅ </td>
</tr>
</tbody>
</table>                           

**Legend**:    ⛔︎ Not applicable    ❌ Does not interoperate    ✅ Interoperates

#### Notes

⛔︎ : The Async column in the table represents PGD without a synchronous commit scope in use. Lag Control isn't a synchronous commit scope. It's a controlling commit scope and is therefore available with asynchronous operations.

<sup>❗️</sup> : Attempting to use Group Commit and Transaction Streaming presents a warning. The warning suggests that you disable transaction streaming, and the transaction appears to take place. In the background, Group Commit was disabled to allow the transaction to occur.

## Commit scope/commit scope interoperability

Although you can't mix commit scopes, you can [combine rules](https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/commit-scope-rules/#combining-rules) with an `AND` operator. This table shows where commit scopes can be combined.

<table style="table-layout: fixed">
<thead>
<tr>
<td style="text-align:center; width:33%"></td>
<td style="text-align:center"> <a href="https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/group-commit/">Group<br />Commit</a></td> 
<td style="text-align:center"><a href="https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/camo/">CAMO</a> </td>
<td style="text-align:center"><a href="https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/lag-control/">Lag<br />Control</a> </td>
<td style="text-align:center"><a href="https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/synchronous_commit/">Synchronous<br />Commit</a> </td>
</tr>
</thead>
<tbody>
<tr>
<td> <a href="https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/group-commit/">Group Commit</a> </td>
<td style="text-align:center"> ⛔︎ </td>
<td style="text-align:center"> ❌ </td>
<td style="text-align:center">  ✅ </td>
<td style="text-align:center">  ✅ </td>
</tr>
<tr>
<td> <a href="https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/camo/">CAMO</a> </td>
<td style="text-align:center"> ❌ </td>
<td style="text-align:center"> ⛔︎ </td>
<td style="text-align:center">  ✅ </td>
<td style="text-align:center">  ❌ </td>
</tr>
<tr>
<td> <a href="https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/lag-control/">Lag Control</a> </td>
<td style="text-align:center"> ✅ </td>
<td style="text-align:center"> ✅ </td>
<td style="text-align:center">  ⛔︎ </td>
<td style="text-align:center">  ✅ </td>
</tr>
<tr>
<td> <a href="https://www.enterprisedb.com/docs/pgd/6.1/commit-scopes/synchronous_commit/">Synchronous Commit</a> </td>
<td style="text-align:center"> ✅ </td>
<td style="text-align:center"> ❌ </td>
<td style="text-align:center">  ✅ </td>
<td style="text-align:center">  ⛔︎ </td>
</tr>
</tbody>
</table>                           

**Legend**:    ⛔︎ Not applicable    ❌ Does not combine    ✅ Combines

#### Notes

Each commit scope implicitly works with itself.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
