// run: node scripts/normalize/tables.js "product_docs/**/*.mdx"
// purpose: 
// GFM tables require pipe characters in cells to be escaped EVEN IF WITHIN INLINE CODE
// Ref: https://github.github.com/gfm/#example-200
// The juicer scripts did not do this correctly; this resulted in tables with implicit columns, 
// which the renderer would silently drop. Round-tripping through the parser -> stringifier would
// retain the columns, but now the table would look odd with cell contents split across columns and
// headers not matching up.
// Attempt to mitigate this by escaping pipe characters correctly.
// This must be run on juiced content BEFORE the markdown normalizer. 
// It should do no harm if run twice.

const { read, write } = require('to-vfile');
const glob = require('fast-glob');

;(async () => {

  if (!process.argv[2]) {
    console.log(`usage:
  ${process.argv[1]} "glob pattern"
example:
  ${process.argv[1]} "product_docs/**/*.mdx"`)
    return;
  }

  const files = await glob(process.argv[2]);

  for (const filepath of files) {
    // This is NOT a full GFM table parser, nor can it be
    // it assumes that whatever generated the markdown correctly indicated the cell structure
    // in the layout of the table itself: there will be a header-body separator of the form,
    // |-------------------------|-----------------------|-----------------------|
    // (where each run of dashes separated by pipes is EXACTLY the width of a column)
    // To make this a bit more effective, I allow column widths to vary from the header by *up to* 10%
    // Rows matching this layout that have pipes *within* the cells will have those pipes escaped.
    // ...
    // BUT WAIT, THERE'S MORE!
    // GFM doesn't support merged cells in tables, or any block-level formatting in cells...
    // ...it *will* allow you to insert a newline via a <br> tag however. 
    // Whatever pandoc was targetting thinks you can do this with extra pipe characters, as follows:
    //  `| |` at the start of a table cell introduces a multiline cell; within that cell, further
    //  pipe characters indicate paragraph breaks. 
    // Gatsby doesn't recognize this at all. So we gotta fix that up too, with strategic replacement
    // of that format with <br> tags.
    // ONE MORE FLY in the ointment here: per the GFM spec, \| should be de-escaped on render,
    // *even within inline code* - but our current renderer does not do this. 
    // For now, I'm not trying to work around that; we need to update our renderer, and getting
    // a clean round-trip through the parser is a first step in that process.
    // rebuilding a car while going 70 down the interestate or something.

    const tableFmtRegex = /\|( *-{3,} *)(?=\|)/g;
    const file = await read(filepath);
    const lines = file.contents.toString().split('\n');
    let rowFormatRegex = null;
    for (let i = 0; i < lines.length; ++i) {
      if (!lines[i].trim().length) rowFormatRegex = null;

      if (rowFormatRegex) 
      {
        const row = lines[i].match(rowFormatRegex);
        if (row) 
        {
          lines[i] = row[1] + '|' + row.slice(2).map(c => {
            // rewrite multiline cells with <br> tags
            if (c.startsWith(" |"))
              c = c.replace(/^ \|/, '')
                .replace(/\|/g, '<br /><br />');
            // escape any other pipes
            return c.replace(/(?<!\\)\|/g, '\\|')
          }).join('|')
            + '|'
            + (lines[i].endsWith('\r') ? '\r' : ''); // mixed line endings suck for diffs
          continue;
        }
      }

      const tableFormat = lines[i].match(tableFmtRegex);
      if (tableFormat) 
      {
        // we've identified a table and captured the formatted width of each column, now this takes those
        // captures and creates a new expression that will match similarly well-formatted rows, with captures
        // for each cell. This ONLY works because markdown writers try to create nice-looking text tables;
        // it allows for cell widths to differ by up to 10% from those in the dividing row, but more than that
        // and it will fail to recognize them.
        rowFormatRegex = new RegExp("([^\|]*)"
          + tableFormat.map(c =>
            c.replace(/\|/g, '(?<!\\\\)\\|(')
              .replace(/[- ]+/g, `.{${Math.floor(c.length * .9)},${Math.ceil(c.length * 1.1)}}?`))
            .join(')') + ")(?<!\\\\)\\|");
      }
    }

    const normalized = lines.join('\n');

    if (normalized !== file.contents.toString()) {
      console.log(filepath);
      await write({
        path: filepath,
        contents: normalized
      })
    }
  }

})()
