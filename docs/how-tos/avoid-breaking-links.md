# How to avoid breaking links when reorganizing, consolidating or deprecating content

Once a page has been published, links to it proliferate on the Internet: some in public (documentation, blog posts, search engine results) and some in private (emails, chat history, bookmarks, browser histories). When those links are broken, it results in frustration for readers, loss of traffic, and loss of trust - both the algorithmic "trust" endowed by search engines and the real sort of trust granted by people.

We should do our best to avoid causing frustration. We need that trust! 

Yet, we cannot and should not keep every published file around in the same location forever. It is often necessary to reorganize content, moving files around, moving topics between files, consolidating information from multiple files into one, even removing files, directories, or entire sets of documentation (as when a product version reaches its end of life). 

Fortunately, we have tools available to us in the form of [redirects](https://github.com/EnterpriseDB/docs#redirects) that can allow us to preserve the utility of outstanding links without hindering our ability to curate and manage content. This guide covers their use in several common scenarios.

## Renaming a file

Suppose I have a file: `/product_docs/docs/epas/13/epas_inst_linux/02_supported_platforms.mdx`. The URL for the published version of this file when EPAS 13 is the latest version will be https://www.enterprisedb.com/docs/epas/latest/epas_inst_linux/02_supported_platforms/ (once EPAS 14 is released, it will be https://www.enterprisedb.com/docs/epas/13/epas_inst_linux/02_supported_platforms/). 

I would like to rename this file to be simply, `supported_platforms.mdx`. The URL would then be https://www.enterprisedb.com/docs/epas/latest/epas_inst_linux/supported_platforms/. But I would like the old URL to continue to work!

I can add a redirect rule to the page's Frontmatter for this:

```yaml
---
#...

redirects:
  # note that this is the absolute URL path (not including /docs), NOT a filesystem path
  - /epas/13/epas_inst_linux/02_supported_platforms  
---
```

Now requests to https://www.enterprisedb.com/docs/epas/13/epas_inst_linux/02_supported_platforms/ OR https://www.enterprisedb.com/docs/epas/13/epas_inst_linux/supported_platforms/ will take me to the same file.

But what about https://www.enterprisedb.com/docs/epas/latest/epas_inst_linux/02_supported_platforms/? That will work too - up UNTIL version 13 is no longer the latest version. Suppose I want to write this redirect rule such that it will work for EPAS 13 OR any later version (assuming the file is copied into later versions without modifications to the Frontmatter)? To accomplish this, I can use a relative path:

```yaml
---
#...

redirects:
  # this is relative to /epas/13/epas_inst_linux/02_supported_platforms/ and indicates a (missing) "sibling" 
  # - so I have to go "up" a level first (with ../) 
  - ../02_supported_platforms  
---
```

This same rule will work, without modification, for ANY version in which `supported_platforms.mdx` exists and `02_supported_platforms.mdx` does not. It thus avoids the housekeeping task of having to modify versions contained within
redirects when forking a version of the documentation (though do note that if a documentation tree has ALREADY been forked when I rename the file I'll need to make the same changes to both the current version and the next version).

## Relocating a file

Suppose I have a file, `/[whatever]/installation/connecting.mdx`. And I wish to move it to a more appropriate location under `/[whatever]/usage`. I need only include the former path in the redirects to avoid breaking links:

```yaml
---
#...

redirects:
  - /[whatever]/installation/connecting/
---
```

This is just a variation on what is shown above (renaming). I could also use a relative path here as well.

## Consolidating files

Suppose I have a collection of files that each tackle part of a topic:

- `/[whatever]/installation/index.mdx` overview of an installer
- `/[whatever]/installation/supported_platforms.mdx` covers the platforms that are supported by an installer
- `/[whatever]/installation/prerequesites.mdx` covers what is needed before installation can begin
- `/[whatever]/installation/download.mdx` covers obtaining the installer
- `/[whatever]/installation/running.mdx` covers the steps involved in actually running the installer
- `/[whatever]/installation/post_install.mdx` covers any actions needed after the installer has completed

I decide to move all of these into sections in a single file, `/[whatever]/installation.mdx`. 
In order to avoid breaking the links, I'll need five `redirects` values:

```yaml
---
#...

redirects:
  # these are relative to /[whatever]/installation/
  - supported_platforms
  - prerequesites
  - download
  - running
  - post_install
---
```

As in the previous example, by using relative paths I'm able to avoid pinning these to a specific 
version of the product. Because the new `installation.mdx` is replacing the former `installation/index.mdx` (and will have the same URL path), it does not need to be included.

## Removing an End-of-Life version

The previous examples have all concerned content that must continue to exist in some form, but all good things must come to an end: product versions eventually stop being supported and their documentation is archived and removed. Even then, we can provide a better experience than a 404 (Not Found) result! Consider what we might do for the removal of a product version, let's say EPAS 9.6: instead of dropping all links, we can redirect them to `/epas/latest/` - thus providing a stable link that will not soon go out of date and can provide access to at least *some* relevant information!

Adding these redirects via Frontmatter would be prohibitive: we'd have to add thousands of entries for each deprecated version! A more maintainable solution can be found via [Netlify redirects](../../static/_redirects) - you can view that file for more details, but for our example a rule would look like this:

```
/docs/epas/9.6/*   /docs/epas/latest/   301
# ^           ^                 ^ type of redirect (301 == permanent, 302 or 307 == temporary)
# |           + path to redirect to
# + path to redirect (with asterisk wildcard to match all paths starting with that pattern)
```

Note: UNLIKE the Gatsby redirects shown above, these paths *do* include the `/docs` prefix.

## Consolidating versions

This is similar to the previous example, but concerns a version of documentation that is being eliminated in favor of a more comprehensive version - for example, consolidating all 7.* versions of PEM into one set of Version 7 documentation. Once again, using Frontmatter redirects would result in an unacceptable amount of error-prone work; we'll use [Netlify redirects](../../static/_redirects) here too, but introduce the `:splat` keyword:

```
/docs/pem/7.12/*  /docs/pem/7/:splat  301
/docs/pem/7.13/*  /docs/pem/7/:splat  301
/docs/pem/7.14/*  /docs/pem/7/:splat  301
/docs/pem/7.15/*  /docs/pem/7/:splat  301
/docs/pem/7.16/*  /docs/pem/7/:splat  301
```

As with the EOL'd product version, these rules match all paths starting with the eliminated version prefix (e.g. /docs/pem/7.12), with the asterisk matching the rest of the path. However, instead of redirecting all such requests to the root of the product docs, the path will be rewritten to start with `/docs/pem/7` while preserving the rest! The `:splat` keyword takes whatever the asterisk (also known as a "splat") matches, and includes it in the redirected destination.

