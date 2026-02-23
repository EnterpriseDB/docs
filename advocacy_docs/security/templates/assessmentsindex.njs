---
WARNING: THIS IS AN AUTOMATICALLY GENERATED FILE - DO NOT MANUALLY EDIT - SEE tools/automation/generators/advisoryindex
title: EDB CVE Assessments
navTitle: CVE Assessments
iconName: Security
hideKBLink: true
hideToC: false
navigation:{% for ass in asssorted %}
- {{ ass }}{% endfor %}
---

The CVEs listed in this section are from PostgreSQL and other parties who have reported them and that may have an impact on EDB products.

{% set lastYear = -1 %}

{% for ass in asssorted %}

{% set thisass=asss[ass] %}
{% set firstPublished = thisass.open.first_published or "" %}
{% set releaseYear = firstPublished.slice(0,4) %}
{% if lastYear != releaseYear %}
{% if lastYear !=-1 %}</table>{% endif %}
<h2>Released {{ releaseYear }}</h2>
{% set lastYear = releaseYear %}
<table class="table-bordered">
{% endif %}

<tr><td>
<details><summary><h3 style="display:inline"> {{ thisass.vulnerability_details.cve_id }} </h3>
<span>
&nbsp;&nbsp;<a href="{{ thisass.filename }}">Read Assessment</a>
{% if thisass.open.last_updated %}&nbsp;&nbsp;Updated: </span><span>{{ thisass.open.last_updated }}</span>{% else %}&nbsp;&nbsp;Published: </span><span>{{ thisass.open.first_published }}</span>{% endif %}
<h4>{{ thisass.frontmatter.title }}</h4>
<h5> {{ thisass.frontmatter.affectedProducts }}</h5>
</summary>
<hr/>
<em>Summary:</em>&nbsp;
{{ thisass.summary[0].replaceAll(r/`([^`]*)`/g,"<code>$1</code>") }}
<br/>
<a href="{{ thisass.filename }}">Read More...</a>
</details></td></tr>
{% endfor %}
<!-- end of file -->
</table>

