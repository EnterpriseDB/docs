<img src="static/icons/edb-docs-logo-disc-dark.svg" alt='EDB Docs' width="200">

This topic provides tips on using Markdown in the Docs 2.0 framework. We have done some tuning to turn basic Markdown into  high-performance markup.

Links:

[Markdown getting started](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) - not everything applies

Exceptions:

Style Guide links:
### Style Guide for EDB contributors

See [EDB documentation style guide](https://enterprisedb.atlassian.net/wiki/spaces/DCBC/pages/2387870239/Documentation+Style+Guide).


## Ordering of files

By default, the items in the left nav are sorted alphabetically by file name. This can be done with a numerical prefix. The titles of each page are used for the names in the left nav. Historically, this was the only way you could control the order of the topics in the PDFs. This is no longer required and instead you can specify the order of topics in the frontmatter of the index file using the navigation option. For example, 

```
---
title: "Getting started"
navigation:
 - identity_provider
 - preparing_cloud_account
 - creating_a_cluster
---
```

# MDX Format

Documentation must be formatted as an [MDX file](https://www.gatsbyjs.com/docs/mdx/writing-pages/) with the `.mdx` extension. MDX is a superset of [Markdown](https://www.markdownguide.org/).

## Frontmatter

Each document requires a [YAML](https://yaml.org) frontmatter section at the top with a title:

```
---
title: Title of page
---
```

If the title contains [special characters](https://stackoverflow.com/questions/19109912/yaml-do-i-need-quotes-for-strings-in-yaml), it will need to be quoted. There also needs to be a space after `title:`

In addition to `title`, frontmatter may optionally include `navTitle` and `description`:

```
---
title: An exhaustive guide to all things wonderful about Postgres
navTitle: Postgres guide
description: Everything you need to know about Postgres
---
```

The `navTitle` is used for the left navigation so it can take up less space. It is also used in "cards".

The `description` is used in cards as well.

You can also use `navigation` to specify [file ordering](#0rdering_of_files).


## Redirects

The app is concerned with two different types of redirects that can be defined in frontmatter.

### Internal Redirects (within Docs 2.0)

_For specific examples of when to use redirects, see: [How to avoid breaking links when reorganizing, consolidating or deprecating content](docs/how-tos/avoid-breaking-links.md)._

#### `redirects`

The `redirects` frontmatter is to be used for redirects internal to Docs. For example, if you had a file `great_file.mdx` with this following frontmatter...

```yaml
redirects:
  - "/old_path"
  - "/another_old_path"
```

both `/old_path` and `/another_old_path` would redirect to `great_file.mdx`'s current path. This is perfect for setting up redirects when moving a file around within Docs. Redirects created with `redirects` are permanent (301).

These paths can be absolute (starting with the root of the site) or relative (to the file in which they are contained). For a `/file/at/path/`,

- Absolute: `/path/to/file/` - redirects requests for /path/to/file to /file/at/path/
- Relative: `former_child/` - redirects requests for /file/at/path/former_child/ to /file/at/path/
- Relative: `../sibling/` - redirects requests for /file/at/sibling/ to /file/at/path/

#### Netlify-specific redirects

Netlify is the hosting service we use for Docs. Netlify-specific redirects can be found in [`/static/_redirects`](static/_redirects). These are generally used for large-scale redirects, such as when renaming or removing an entire product version.

### Docs 1.0 to Docs 2.0 redirects

This app builds a list of server-side redirects that reference the Docs 1.0 path (`/edb-docs/`). These redirects direct users from links to the old docs site, to the appropriate page on the new docs site.

#### `legacyRedirectsGenerated`

This frontmatter is an automatically generated list of redirects for Docs 1.0 to Docs 2.0 (this repo). These redirects are built by `scripts/legacy_redirects/add_legecy_redirects.py`, and **should not be manually edited**.

#### `legacyRedirects`

If you need to setup a redirect from Docs 1.0 to Docs 2.0 manually, this is the place to do it. If the `legacyRedirectsGenerated` frontmatter does not include the redirect you need, you should add it here.

## Markdown styling

All of these files use Markdown for styling. The options for what can be done can be seen [here](https://github.com/EnterpriseDB/docs/blob/master/advocacy_docs/playground/1/01_examples/index.mdx)

## Headings
Use headings to create a hierarchy for readers to navigate to more easily find information.

Headings are denoted by number signs (#) followed by one space. Enter a line break between a heading and its content. EDB docs use Heading 2 (##), Heading 3 (###) and Heading 4 (####). Use Heading 4 sparingly.

## Headers:

Specify a header by puttihng one or more hashes (`#`) at the start of a line. Headers should be a single line, separated by blank lines from the rest of the document, and cannot contain HTML. 

All headers in Docs result in "anchors", IDs that can be linked to directly based on the text of the header. This is handy for providing quick access to definitions and allowing search results to link directly to the relevant section of a page.

### `# H1`

This is the page title, and there should be only one. 

**Never use this in Docs** - set the title using `title:` in the [frontmatter](#frontmatter).

### `## H2` 

Sections - use this for indicating sub-topics within the page's overall topic.
   
In Docs, H2 headers generate an entry in the right-hand "table of contents", allowing the reader to quickly scan the outline of the page and jump to a relevant section.

### `### H3`

Subsections - use this for breaking up longer sections into logically-distinct thoughts or concepts. Also useful for definition lists (e.g. a glossary).
   
### `#### H4`

If you find yourself needing to use this, you might want to consider breaking up the topic into multiple pages...

## Linking

Markdown supports two different syntaxes for links. In Docs, we use inline links exclusively. The syntax is:
   
`[text](URL "title text")`, where "title text" is optional (it can be used to add a more detailed description of a link, such as the full title of the page it links to). 

URL can be absolute (`https://example.com/path/to/page`) or relative (`/epas/latest/page`, `../sibling`) - for links *within* docs, use relative links (but avoid complicated path-walking if possible, e.g. use `/pem/latest/page` instead of `../../..page`).

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

Use blocks of code for complete commands (even if only a single line), and all multi-line code or command listings. Specify a language tag (e.g. `sql`) at the opening "fence" (```` ``` ````) to indicate the type of code being listed (and enable syntax highlighting for that block). Supported languages: https://prismjs.com/#supported-languages

Some code blocks consist of code or commands followed by program output: use the special sequence `__OUTPUT__` (on a line by itself) to visually separate the output and prevent it from being syntax-highlighted.

More stuff about this in style guide

### Code block style guidelines

Readability is king - it may be code, but its target is a human reader, not a machine! To that end, pay attention to how code appears and take time to reformat or reorganize it when its meaning becomes difficult to grasp.

Try to avoid mixing `__OUTPUT__` and multiple, consecutive code blocks. When possible, divide a sequence of commands into discrete steps - the output of each can then be shown. When multiple commands are effectively "atomic" (e.g., two steps always performed together, the output of one command fed directly into the next, etc.) then describe their purpose before showing them together - as they would be typed / entered - and list the output of both together. 

Three conventions should be used in these docs for shell code blocks:

1. Do not lead with a "prompt" (such as `$` or `#`) - if copy-pasted, these will lead to either "command not found" or a no-op, both which are confusing.

2. Separate command output from the command(s) themselves by using `__OUTPUT__` (described above).

3. Break long lines in a consistent and visually-appealing fashion to aid in reading long commands. 70 characters give or take is a good rule of thumb - if more than two lines, might as well go with one parameter per line. Use line continuation characters to accomplish this (e.g. [windows](https://superuser.com/questions/150116/how-can-i-insert-a-new-line-in-a-cmd-exe-command), [linux](https://unix.stackexchange.com/questions/571301/when-to-use-line-continuation-character-and-when-not/571313#571313)).

## Admonitions (Notes, Warnings, etc.)

If you need to draw attention to information, consider using an admonition:

```
!!! Note Optional title
    This is text you'd like the reader to notice.
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

The body of the admonition is indented 4 spaces. It should line up with the first letter of the admonition type. Alternatively, fenced admonitions that begin and end with `!!!` lines are supported:

```
!!! Tip
Use fenced admonitions to avoid space counting.
!!!
```

For examples of what you can do with admonitions, see [this demo](https://github.com/EnterpriseDB/docs/blob/main/advocacy_docs/playground/1/01_examples/admonitions.mdx).

## Block quotes

## Inserting images

Don't use HTML to insert images in your content. Instead, use Markdown syntax that begins with an exclamation mark, followed by a title in brackets, and the image's file path in parentheses. For example:

```text
![Comparison with Oracle Call Interface](../images/oracle_call_interface.png)
```
The image's title, Comparison with Oracle Call Interface, appears when hovering over the image. Use a descriptive and concise title for accessibility purposes.

The image's file path depends on the location of your Markdown content. In the example, the image's file path, ../images/oracle_call_interface.png, leads out of its folder (../) and into the images folder (images/), where oracle_call_interface.png is located. Your path must lead to the corresponding images folder where your image is located.

## Using HTML 
limited - as needed - example in the partners for the landing - it needed html to work correctly
Using breaks in tables </br>
## Emphasis
   Bold and italic



