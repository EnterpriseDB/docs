---
title: LiveCompare 3.0.3 release notes
product: LiveCompare
version: "3"
url: https://www.enterprisedb.com/docs/livecompare/3/rel_notes/livecompare_3.0.3_rel_notes/
lastModified: 2026-11-10T16:36:54+01:00
---

# LiveCompare 3.0.3 release notes

Released: 17 February 2025

The bug fixes and other changes in LiveCompare 3.0.3 include the following:

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Fixed a variable access bug which affected the recheck command.</summary><p>Application would report an Unhandled exception when running the recheck command. This was due to a variable access bug.</p>
</details></td></tr>
<tr><td><details><summary>Improved clean up processes on user interruption.</summary><p>Improved clean up processes when a user interrupts the application. Now cleans up leftover zombie processes.</p>
</details></td></tr>
<tr><td><details><summary>The --dry-run option now handle the session setting if given.</summary><p>The --dry-run option now handles the session setting if given. Previously, the session setting would cause the option to fail.</p>
</details></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
