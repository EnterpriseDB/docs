---
title: Examples
product: Playground
url: https://www.enterprisedb.com/docs/playground/1/01_examples/
lastModified: 2025-04-10T15:09:01Z
---

# Examples

Here are some of the most common things you'll need to use for content. For a full list, go to this [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Fair warning: not all of those examples will work here.

## Text styling

```
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.
```

becomes

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

## Headers

Headers are what create the bigger, bolder text right above this sentence. These break out sections and get used on the right side as part of the page's Table of Contents.

Here's the format:
`## Header name`

That is for an h2 `html` element. For different headers, use more `#` signs.

`### h3 header name`

which makes

### h3 header name

The `h3` is slightly smaller and still creates an anchor tag, but it does not get used in the page's Table of Contents.

## Lists

(In this example, leading and trailing spaces are shown with with dots: ⋅)

```
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line
 above, and the leading spaces (at least one, but we'll use three here to also align
  the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces
 are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses
```

1. First ordered list item
2. Another item
3. Actual numbers don't matter, just that it's a number
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.\
   Note that this line is separate, but within the same paragraph.\
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

- Unordered list can use asterisks

- Or minuses

- Or pluses

## Code and Styntax Highlighting

```
Inline `code` has `back-ticks around` it.
```

Inline `code` has `back-ticks around` it.

Blocks of code are fenced by lines with three back-ticks \`\`\`

````
```
Here we can use html tags like this <b>bold</b> or <em>em</em>that won't do anything.
```
````

```
Here we can use html tags like this <b>bold</b> or <em>em</em>that won't do anything.
```

## Links

```
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm an inline link to an anchor in the same document](#headers)

[I'm an inline link to another page in the same site](link)

[You can use numbers for reference-style link definitions][1]

[I'm a link to a sibling directory ../name](../new_guide)

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm an inline link to an anchor in the same document](#headers)

[I'm an inline link to another page in the same site](https://www.enterprisedb.com/docs/playground/1/01_examples/link/)

[You can use numbers for reference-style link definitions][1]

[I'm a link to a sibling directory ../name](https://www.enterprisedb.com/docs/playground/1/new_guide/)

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
<http://www.example.com> or <http://www.example.com>, for example.

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org

[1]: http://slashdot.org

[link text itself]: http://www.reddit.com

## Images

![building](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/playground/1/01_examples/images/building_Razvan_Mirel.jpeg)

Add image to `images` folder and use it like this:

`![{alt text}]({image location})`

here that's

`![building](images/building_Razvan_Mirel.jpeg)`

- [Code blocks](https://www.enterprisedb.com/docs/playground/1/01_examples/code-blocks/): asdasd
- [Icons](https://www.enterprisedb.com/docs/playground/1/01_examples/icons/)
- [Tabs Tester](https://www.enterprisedb.com/docs/playground/1/01_examples/tabs/): Tabs like these are created using JSX components in Markdown:
- [Summary Test](https://www.enterprisedb.com/docs/playground/1/01_examples/summary/)
- [Expression Replacement](https://www.enterprisedb.com/docs/playground/1/01_examples/expression-replacement/): Name and Version Expression Replacement Syntax v1.0.1 provides functionality for replacing simple expressions representing product names and versions
- [Admonitions](https://www.enterprisedb.com/docs/playground/1/01_examples/admonitions/): with a default title
- [Directory Defaults Test](https://www.enterprisedb.com/docs/playground/1/01_examples/directory_defaults/): This description should be inherited by my children
- [Foot the notes](https://www.enterprisedb.com/docs/playground/1/01_examples/footnotetest/): | What                    | Why                                                                                        |
- [Link](https://www.enterprisedb.com/docs/playground/1/01_examples/link/): Hi, you got here from a link. You lucky devil.
- [Link Test](https://www.enterprisedb.com/docs/playground/1/01_examples/link-test/): Expected behavior base paths correspond to named file & end without slash
- [Link tests](https://www.enterprisedb.com/docs/playground/1/01_examples/link-tests/): Expected behavior base paths correspond to default file & end without slash
- [Navigation](https://www.enterprisedb.com/docs/playground/1/01_examples/navigation/): Root
- [1/01\_examples/no-title](https://www.enterprisedb.com/docs/playground/1/01_examples/no-title/): this has no title
- [Redirects](https://www.enterprisedb.com/docs/playground/1/01_examples/redirects/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
