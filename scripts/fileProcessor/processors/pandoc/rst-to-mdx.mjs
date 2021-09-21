import { spawnSync } from "child_process";

export const process = async (file) => {
  /**
   * Before converting the content with pandoc, we need to clean up internal links, and remove some oddball symbols.
   * This replace step is needed for the PEM docs, and could be moved into it's own processor file, but it is left here
   * for now, as it seems that it could be useful for other docs that need to be converted.
   */
  const cleanValue = file.value
    // Remove any ™ or ® symbols
    .replace(/[™®]/g, "")
    // Replace lines like ".. _some_text:" with a div like <div id="some_text" class="registered_link"></div>
    .replace(
      /^\.\. _(.*):$/gm,
      '.. raw:: html\n\n<div id="$1" class="registered_link"></div>\n',
    )
    /**
     * replace ref links with external link syntax to help ensure that links are properly converted by pandoc.
     * e.g.
     * :ref:`Link Title <link_destination>`
     * becomes
     * `Link Title <#link_destination>`_
     */
    .replace(/:ref:`([^<]*)<([^`>]*)>`/g, "`$1 <#$2>`_");

  const result = spawnSync(
    "pandoc",
    ["--wrap=none", "--from=rst", "--to=gfm", "--markdown-headings=atx"],
    {
      input: cleanValue,
      encoding: "utf8",
    },
  );

  file.value = result.stdout;
  file.extname = ".mdx";
};
