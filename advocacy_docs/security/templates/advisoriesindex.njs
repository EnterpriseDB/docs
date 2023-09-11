---
title: EDB Security Advisories
navTitle: Advisories
iconName: Security
hideKBLink: true
hideToC: false
navigation:{% for cve in cvesorted %}
- {{ cve }}{% endfor %}
---

{% set updatedYear = -1 %}

{% for cve in cvesorted %}
{% set thiscve = cves[cve] %}
{% set lastUpdatedYear = thiscve.open_last_updated.slice(0,4) %}
{% if  lastUpdatedYear != updatedYear %}
{% if updatedYear != -1 %}</table>{% endif %}   
<h2>Updated {{ lastUpdatedYear }}</h2>
{% set updatedYear = lastUpdatedYear %}
<table class="table-bordered">
{% endif %}

<tr><td>
<details><summary><h3 style="display:inline"> {{ thiscve.vulnerability_details_cve_id }} </h3>
<span>
&nbsp;&nbsp;<a href="{{ thiscve.filename }}">Read Advisory</a>
&nbsp;&nbsp;Updated: </span><span>{{ thiscve.open_last_updated }} </span>
<h4>{{ thiscve.frontmatter_title }}</h4>
<h5> {{ thiscve.frontmatter_affectedProducts }}</h5>
</summary>
<hr/>
<em>Summary:</em>&nbsp;
{{ thiscve.summary_0 }}
<br/>
<a href="{{ thiscve.filename }}">Read More...</a>
</details></td></tr>
{% endfor %}
</table>

