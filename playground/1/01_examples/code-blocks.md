---
title: Code blocks
product: Playground
url: https://www.enterprisedb.com/docs/playground/1/01_examples/code-blocks/
lastModified: 2025-05-27T03:27:47-04:00
---

# Code blocks

```
test
```

```bash
sh bash.txt | grep blah

```

```output title="Output"

asadad
```

````markdown
```bash
test
```
````

<pre>
<code>
```bash
cat /etc/lsb-release
```
</code>
</pre>

<pre>
asdasd
asdasd
asdasdafasfa
</pre>

```sql
SELECT * FROM aidb.retrieve_text('test_knowledge_base', 'jacket', 2);
```

```output title="Output"
  key  |                       value                        |      distance
-------+----------------------------------------------------+--------------------
 19337 | United Colors of Benetton Men Stripes Black Jacket | 0.2994317672742334
 55018 | Lakme 3 in 1 Orchid  Aqua Shine Lip Color          | 0.3804609668507203
(2 rows)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
