---
WARNING: THIS IS AN AUTOMATICALLY GENERATED FILE - DO NOT MANUALLY EDIT - SEE tools/automation/generators/advisoryindex
title: EDB Security Advisories
navTitle: Advisories
iconName: Security
hideKBLink: true
hideToC: false
navigation:{% for cve in cvesorted %}
- {{ cve }}{% endfor %}
---

{% set lastReleasedYear = -1 %}

{% for cve in cvesorted %}
{% set thiscve = cves[cve] %}
{% set releaseYear = thiscve.open.first_published.slice(0,4) %}
{% if  lastReleasedYear != releaseYear %}
{% if lastReleasedYear != -1 %}</table>{% endif %}   
<h2>Released {{ releaseYear }}</h2>
{% set lastReleasedYear = releaseYear %}
<table class="table-bordered">
{% endif %}

<tr><td>
<details><summary><h3 style="display:inline"> {{ thiscve.vulnerability_details.cve_id }} </h3>
<span>
&nbsp;&nbsp;<a href="{{ thiscve.filename }}">Read Advisory</a>
{% if thiscve.open.last_updated %}&nbsp;&nbsp;Updated: </span><span>{{ thiscve.open.last_updated }}</span>{% else %}&nbsp;&nbsp;Published: </span><span>{{ thiscve.open.first_published }}</span>{% endif %}
<h4>{{ thiscve.frontmatter.title }}</h4>
<h5> {{ thiscve.frontmatter.affectedProducts }}</h5>
</summary>
<hr/>
<em>Summary:</em>&nbsp;
{{ thiscve.summary[0].replaceAll(r/`([^`]*)`/g,"<code>$1</code>") }}
<br/>
<a href="{{ thiscve.filename }}">Read More...</a>
</details></td></tr>
{% endfor %}
</table>

