---
title: EDB Security
navTitle: EDB Security
directoryDefaults:
  iconName: Security
  indexCards: none
  hideKBLink: true
navigation:
  - vulnerability-disclosure-policy
  - advisories
---

EDB is committed to a security first approach, from the products we build and the platforms we operate, to the services we provide our customers. Transparency is a core principle for the program and part of this effort includes welcoming incoming reports so that we can address concerns surfaced by our customers or security researchers. You’ll also find it in our advisories, which detail issues found and the required fixes or mitigations needed to keep your data and databases safe.

## Policies

* <h3><a href="vulnerability-disclosure-policy">EDB Vulnerability Disclosure Policy</a></h3>
This policy outlines how EnterpriseDB handles disclosures related to suspected vulnerabilities within our products, systems, or services. It also provides guidance for those who wish to perform security research, or may have discovered a potential security vulnerability impacting EDB.

## Advisories

* <h3><a href="advisories/">Full list of advisories issued</a></h3>

## Most Recent Advisories

<table class="table-bordered">
{% for cve in shortcvelist %}
{% set thiscve = cves[cve] %}
<tr><td>
<details><summary><h3 style="display:inline"> {{ thiscve.vulnerability_details_cve_id }} </h3>
<span>
&nbsp;&nbsp;<a href="advisories/{{ thiscve.filename }}">Read Advisory</a>
&nbsp;&nbsp;Updated: </span><span>{{ thiscve.open_last_updated }} </span>
<h4>{{ thiscve.frontmatter_title }}</h4>
<h5> {{ thiscve.frontmatter_affectedProducts }}</h5>
</summary>
<hr/>
<em>Summary:</em>&nbsp;
{{ thiscve.summary_0 }}
<br/>
<a href="advisories/{{ thiscve.filename }}">Read More...</a>
</details></td></tr>
{% endfor %}
</table>

