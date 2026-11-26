---
title: Tabs Tester
product: Playground
url: https://www.enterprisedb.com/docs/playground/1/01_examples/tabs/
lastModified: 2025-04-10T15:09:01Z
---

# Tabs Tester

Tabs like these are created using JSX components in Markdown:

## Markdown

**Markdown** content gets separated from the wrapping tab
component by single empty lines:

```jsx
<Tab title="Markdown">

**Markdown** content gets separated from the wrapping tab 
component by single empty lines:

</Tab>
```

## JSX

JSX content can be written without the extra whitespace.
Unless you want to include Markdown within it:

<details>
<summary>Expand for markdown</summary>

Markdown _again!_

```jsx
<Tab title="JSX">
JSX content can be written without the extra whitespace. 
Unless you want to include Markdown within it:
<Details summary="Expand for markdown">

Markdown *again!*

</Details>
</Tab>
```

</details>

## HTML

HTML content must be JSX compliant (it is interpreted as JSX).
So same rules as HTML: if you want Markdown, separate by blank lines:

<table><tbody><tr><td><p>Column <em>One</em></p></td><td><p>Column <em>Two</em></p></td><td><p>Column <em>Three</em></p></td></tr><tr><td colspan="3"><pre><code class="language-jsx">&#x3C;Tab title="HTML">
HTML content must be JSX compliant (it is interpreted as JSX). 
So same rules as HTML: if you want Markdown, separate by blank lines:
&#x3C;table>&#x3C;tbody>
&#x3C;tr>
&#x3C;td>

Column *One*

&#x3C;/td>
&#x3C;td>

Column *Two*

&#x3C;/td>
&#x3C;td>

Column *Three*

&#x3C;/td>
&#x3C;/tr>
&#x3C;tr>
&#x3C;td colspan="3">

```jsx
...table content is all written in markdown
```

&#x3C;/td>
&#x3C;/tr>
&#x3C;/tbody>&#x3C;/table>
&#x3C;/Tab>
</code></pre></td></tr></tbody></table>

It's also possible to set a default tab:

## Tab One

## Tab One Content

Here is where there is [markdown](https://www.markdownguide.org/cheat-sheet/) content.

## Tab Two

## Tab Two Content

![Image](https://placehold.co/600x400)

## JSX

```jsx
<TabContainer>
<Tab title="JSX" defaultSelected="true">

Hello Tabs

</Tab>
</TabContainer>
```

Finally, you can sync tabs between containers by setting the `syncKey` property.
Can be any string, tab selection will be synchronized between all containers with the same key.

Note: no validation is done here - you can use the same key for groups with dissimilar tabs.
This might be appropriate in some situations (e.g. tabs for OS selection where one group doesn't apply to one or more OSes).
...But it can also get weird, as demonstrated here (middle tab group has two dissimilar tabs, but all three containers have the same `syncKey` set).

## Markdown

[A link to this page](https://www.enterprisedb.com/docs/playground/1/01_examples/)

```markdown
[A link to this page](tabs)
```

## JSX

<p>A link to this page</p> <pre><code>&#x3C;Link to="tabs">A link to this page&#x3C;/Link></code></pre>

## HTML

<p><a href="https://www.enterprisedb.com/docs/docs/playground/1/01_examples/">A link to this page</a></p> <pre><code>&#x3C;a href="tabs">A link to this page&#x3C;/a></code></pre>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
