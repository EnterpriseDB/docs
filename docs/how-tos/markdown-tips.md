<img src="static/icons/edb-docs-logo-disc-dark.svg" alt='EDB Docs' width="200">

These tips help with using Markdown in the Docs 2.0 framework. We've done some tuning to turn basic Markdown into high-performance markup.

Links:

[Markdown getting started](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) - not everything applies

Exceptions:

Style guide links:
### Style guide for EDB contributors

Our style guide provides comprehensive information about our technical writing standards. See [EDB documentation style guide](https://enterprisedb.atlassian.net/wiki/spaces/DCBC/pages/2387870239/Documentation+Style+Guide). However, for developers, this list of rules summarizes most of what you need to know. Your text will be edited by a technical editor, but following these rules reduces the amount of time the editor needs to spend on unnecessary issues.

| Topic        | Guideline         | Notes 
|--------------|-------------------|-----------------------------------|
| Contractions | Use contractions. |
| Future tense | Don't use except when referring to a future release, for example, "This feature will be deprecated in a future release. | Search your file for the word "will" and revise to a simple form of present tense. | 


## Ordering of files

By default, the items in the left nav are sorted alphabetically by file name. This can be done with a numerical prefix. The titles of each page are used for the names in the left nav. Historically, this was the only way to control the order of the topics in the PDFs. This is no longer required and instead you can specify the order of topics in the frontmatter of the index file using the navigation option. For example:

```
---
title: "Getting started"
navigation:
 - identity_provider
 - preparing_cloud_account
 - creating_a_cluster
---
```

# MDX format

Documentation must be formatted as an [MDX file](https://www.gatsbyjs.com/docs/mdx/writing-pages/) with the `.mdx` extension. MDX is a superset of [Markdown](https://www.markdownguide.org/).

## Front matter

Each document requires a [YAML](https://yaml.org) front matter section at the top with a title:

```
---
title: Title of page
---
```

If the title contains [special characters](https://stackoverflow.com/questions/19109912/yaml-do-i-need-quotes-for-strings-in-yaml), you need to use quotes around it. Also include a space after `title:`

In addition to `title`, front matter can optionally include `navTitle` and `description`:

```
---
title: An exhaustive guide to all things wonderful about Postgres
navTitle: Postgres guide
description: Everything you need to know about Postgres
---
```

The `navTitle` is used for the left navigation so it can take up less space. It's also used in cards.

The `description` is used in cards as well.

You can also use `navigation` to specify [file ordering](#ordering_of_files).


## Redirects

The app is concerned with two different types of redirects that you can define in frontmatter.

### Internal redirects (in Docs 2.0)

For specific examples of when to use redirects, see: [How to avoid breaking links when reorganizing, consolidating, or deprecating content](docs/how-tos/avoid-breaking-links.md).

#### `redirects`

Use `redirects` in front matter for redirects internal to Docs. For example, suppose you had a file `great_file.mdx` with this front matter:

```yaml
redirects:
  - "/old_path"
  - "/another_old_path"
```

In this case, both `/old_path` and `/another_old_path` redirect to the current path of `great_file.mdx`. This encoding is useful for setting up redirects when moving a file around within Docs. Redirects created with `redirects` are permanent (301).

These paths can be absolute, starting with the root of the site. Or they can relative to the file that contains them. For example, for `/file/at/path/`:

- Absolute: `/path/to/file/` &mdash; Redirects requests for `/path/to/file` to `/file/at/path/`.
- Relative: `former_child/` &mdash; Redirects requests for `/file/at/path/former_child/` to `/file/at/path/`.
- Relative: `../sibling/` &mdash; Redirects requests for `/file/at/sibling/` to `/file/at/path/`.

#### Netlify-specific redirects

Netlify is the hosting service we use for Docs. You can find Netlify-specific redirects in [`/static/_redirects`](static/_redirects). These are generally used for large-scale redirects, such as when renaming or removing an entire product version.

### Docs 1.0 to Docs 2.0 redirects

This app builds a list of server-side redirects that reference the Docs 1.0 path (`/edb-docs/`). These redirects direct users from links to the old docs site to the appropriate page on the new docs site.

#### `legacyRedirectsGenerated`

This front matter is a generated list of redirects for Docs 1.0 to Docs 2.0 (this repo). These redirects are built by `scripts/legacy_redirects/add_legecy_redirects.py`. 

!!! Warning
      Don't manually edit these redirects.

#### `legacyRedirects`

If you need to set up a redirect from Docs 1.0 to Docs 2.0 manually, this is the place to do it. If the `legacyRedirectsGenerated` front matter doesn't include the redirect you need, add it here.

## Markdown styling

All of these files use Markdown for styling. The options for what you can do are [here](https://github.com/EnterpriseDB/docs/blob/master/advocacy_docs/playground/1/01_examples/index.mdx)

## Headings

Use headings to create a hierarchy for readers to navigate to more easily find information.

Headings are denoted by two to four number signs (#) followed by one space. Enter an extra line break between the heading and the text content. EDB docs use Heading 2 (##), Heading 3 (###) and Heading 4 (####). Use Heading 4 sparingly.

All headers in Docs result in anchors, which are IDs that you can link to directly. They are formed by using the  header text, using hyphens in place of spaces. This mechanism is handy for providing quick access to definitions and allowing search results to link directly to the relevant section of a page.

### `# H1` - Not used in Docs

In Markdown, a single number sign signifies the page title (one per file). However, in Docs, we instead set the page title using `title:` in the [front matter](#front-matter).

### `## H2` 

Use an H2 section head to indicate a sub-topic in the page's overall topic.
   
In Docs, H2 headers generate an entry in the right-hand table of contents, allowing the reader to quickly scan the outline of the page and jump to a relevant section.

### `### H3`

Use an H3 subsection head to break up sections into logically distinct thoughts or concepts. Also useful for definition lists (e.g., a glossary).
   
### `#### H4`

If you find yourself needing to use this level heading, consider breaking the topic into multiple pages or otherwise reorganizing your information.
## Linking

Markdown supports two different syntaxes for links. In Docs, we use inline links exclusively. The syntax is:
   
`[text](URL "title text")`, where "title text" is optional. You can use it to add a more detailed description of a link, such as the full title of the page it links to. 

The URL can be absolute (`https://example.com/path/to/page`) or relative (`/epas/latest/page`, `../sibling`). For links within docs, use relative links. However, avoid complicated path walking if possible. For example, use `/pem/latest/page` instead of `../../..page`).

More stuff about this in style guide
## Lists

Stuff about this in style guide

Lists appear with an indent by default. If you format a list with no indent, Markdown formats the list with an indent on the page. For example, the first list item in the example below appears with an indent on the page. 

If you want to make a nested list, don't use tab to indent. Press space three times to make an indent. For example:

```text
- A list item. 
   - Instead of tab, I pressed space three times to indent this nested list item.
```

## Tables
Stuff about this in style guide
## Inline code
Use inline code <code>`code`</code> for keywords, verbatim expressions, etc. Markdown between the backtics won't be rendered, so there's no need to escape special characters. To inclue a backtick within inline code, use more than one backtic to enclode it: <code>``code `code` code``</code>.

More stuff about this in style guide
## Code blocks

````markdown

```sql
select 'a block of code' as result;
```
````

Use blocks of code for complete commands (even if only a single line), and all multi-line code or command listings. Specify a language tag (such as `sql`) at the opening "fence" (```` ``` ````) to indicate the type of code being listed and enable syntax highlighting for that block. Supported languages: https://prismjs.com/#supported-languages

Some code blocks consist of code or commands followed by program output. Use the special sequence `__OUTPUT__` (on a line by itself) to visually separate the output and prevent it from being syntax-highlighted.

More stuff about this in style guide

### Code block style guidelines

Readability is king. It might be code, but its target is a human reader, not a machine. To that end, pay attention to how code appears, and take time to reformat or reorganize it when its meaning becomes difficult to grasp.

Try to avoid mixing `__OUTPUT__` and multiple, consecutive code blocks. When possible, divide a sequence of commands into discrete steps. You can then show the output of each. When multiple commands are effectively "atomic" (e.g., two steps always performed together, the output of one command fed directly into the next, etc.), then describe their purpose before showing them together - as they would be typed / entered - and list the output of both together. 

Use these three conventions in these docs for shell code blocks:

1. Don't lead with a prompt, such as `$` or `#`. If the user copies and pastes a code example that includes a prompt, a "command not found" or no-op occurs, both which are confusing.

2. Separate command output from the commands by using `__OUTPUT__` (described above).

3. Break long lines in a consistent and visually appealing fashion to aid in reading long commands. About 70 characters is a good rule of thumb. With more than two lines, you might as well go with one parameter per line. Use line continuation characters to accomplish this (for example, [windows](https://superuser.com/questions/150116/how-can-i-insert-a-new-line-in-a-cmd-exe-command), [linux](https://unix.stackexchange.com/questions/571301/when-to-use-line-continuation-character-and-when-not/571313#571313)).

## Admonitions (notes, warnings, etc.)

If you need to draw attention to information, consider using an admonition:

```
!!! Note Optional title
    This is text you want the reader to notice.
```

Admonitions begin with the `!!!` signifier. Next comes a (case-insensitive) type which is one of:

- important
- tip
- note
- caution
- warning

There are several [aliases](https://github.com/elviswolcott/remark-admonitions#usage):

- info => important
- success => tip
- secondary => note
- danger => warning
- seealso => note
- hint => tip

Titles are optional. If you don't include one, the admonition will default to the type name ("Important", "Tip", etc.).

Indent the body of the admonition four spaces. The body lines up with the first letter of the admonition type.

Alternatively, fenced admonitions that begin and end with `!!!` lines are supported:

```
!!! Tip
Use fenced admonitions to avoid space counting.
!!!
```

For examples of what you can do with admonitions, see [this demo](https://github.com/EnterpriseDB/docs/blob/main/advocacy_docs/playground/1/01_examples/admonitions.mdx).

## Block quotes

## Inserting images

Don't use HTML to insert images in your content. Instead, use Markdown syntax that begins with an exclamation mark, followed by a title in brackets, and the image file path in parentheses. For example:

```text
![Comparison with Oracle Call Interface](../images/oracle_call_interface.png)
```
The image title, Comparison with Oracle Call Interface, appears when hovering over the image. Use a descriptive and concise title for accessibility purposes.

The image file path depends on the location of your Markdown content. In the example, the image's file path, `../images/oracle_call_interface.png`, leads out of its folder (../) and into the images folder (images/), where `oracle_call_interface.png` is located. Your path must lead to the `images` folder where your image is located.

## Using HTML 

HTML use in Markdown documents is limited. An example is in the partners for the landing; it needed HTML to work correctly.

You can use HTML to create line breaks in tables.: `</br>`
We also use character references where needed, such as `&mdash;` (em-dash), `&ndash;` (en-dash), and `&lt;` (less-than sign, used to correspond with a > closing bracket).
## Font treatments

Bold and italic

