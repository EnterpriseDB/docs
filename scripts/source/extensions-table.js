// retrieve current supported extensions spreadsheet, generate a table from it, write to product_docs/docs/pg_extensions/release/index.mdx
// heavily adapted from https://developers.google.com/sheets/api/quickstart/nodejs

const path = require("path");
const process = require("process");
const { google } = require("googleapis");
const { auth } = require("google-auth-library");
const h = require("hastscript");
const toHtml = require("hast-util-to-html");
const remarkParse = require("remark-parse");
const unified = require("unified");
const mdx = require("remark-mdx");
const remarkFrontmatter = require("remark-frontmatter");
const remarkStringify = require("remark-stringify");
const admonitions = require("remark-admonitions");
const visit = require("unist-util-visit");
const { read, write } = require("to-vfile");
const rehypeFormat = require("rehype-format");

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const SCRIPT_ROOT = path.dirname(process.argv[1]);
const SOURCE_SPREADSHEET = "1GXzzVYT6CULGgGcyp0VtBfOtbxuWxkOU2pRYW42W4pM";
const TARGET_FILE = path.resolve(
  SCRIPT_ROOT,
  "../../advocacy_docs/pg_extensions/index.mdx",
);
const WITNESS_COMMENTS = [
  `This table was generated automatically from ${SOURCE_SPREADSHEET}`,
  `on ${new Date().toISOString()}.`,
  `Do not edit it directly without first removing this attribute!`,
];

/**
 * Load credentials for calling APIs.
 *
 */
async function authorize() {
  try {
    let client = auth.fromJSON(
      JSON.parse(process.env["EXTENSION_SOURCE_TOKEN"]),
    );
    client.scopes = SCOPES;
    return client;
  } catch (e) {
    console.error(
      "Ensure valid client token is stored in EXTENSION_SOURCE_TOKEN!",
    );
  }
  return null;
}

const isCellEmpty = (cell) =>
  cell.formattedValue === undefined ||
  cell.formattedValue === "" ||
  cell.formattedValue === null;
const isRowEmpty = (row) => row.values.every(isCellEmpty);

const isHeader = (row) =>
  !isRowEmpty(row) &&
  row.values.every((cell) => isCellEmpty(cell) || cell.textFormat.bold);

const isAllWhite = (colorStyle) => {
  return (
    colorStyle?.rgbColor?.red == 1 &&
    colorStyle?.rgbColor?.green == 1 &&
    colorStyle?.rgbColor?.blue == 1
  );
};
const formatColor = (colorStyle) => {
  return `rgb(${(colorStyle.rgbColor?.red || 1) * 255}, ${
    (colorStyle.rgbColor?.red || 1) * 255
  }, ${(colorStyle.rgbColor?.blue || 1) * 255})`;
};

const formatBorderStyle = (sheetStyle) => {
  sheetStyle = sheetStyle || { style: "none" };
  let style = [];
  if (sheetStyle.style) style.push(sheetStyle.style.toLowerCase());
  if (sheetStyle.width) style.push(sheetStyle.width + "px");

  if (
    sheetStyle.colorStyle &&
    Object.keys(sheetStyle.colorStyle).length &&
    !isAllWhite(sheetStyle.colorStyle)
  )
    style.color = formatColor(sheetStyle.colorStyle);

  return style.join(" ");
};

const formatCell = (cell, tag) => {
  const alignMappings = { CENTER: "center", RIGHT: "right" };
  const valignMappings = { MIDDLE: "middle", TOP: "top" };
  let style = {};
  let value = cell.formattedValue?.replace(/^ +/, (m) =>
    m.replace(" ", "\u00A0"),
  );
  if (value === "TRUE") value = h("span", { style: { color: "green" } }, ["✔"]);
  else if (value === "FALSE") value = h("span", ["–"]);

  if (cell.textFormat?.bold) style["font-weight"] = "bold";
  if (alignMappings[cell.align])
    style["text-align"] = alignMappings[cell.align];
  if (valignMappings[cell.valign])
    style["vertical-align"] = valignMappings[cell.valign];
  style["border-left"] = formatBorderStyle(cell.borders?.left);
  style["border-right"] = formatBorderStyle(cell.borders?.right);
  style["border-top"] = formatBorderStyle(cell.borders?.top);
  style["border-bottom"] = formatBorderStyle(cell.borders?.bottom);
  style["padding-left"] = (cell.padding?.left || 0) + "px";
  style["padding-right"] = (cell.padding?.right || 0) + "px";
  style["padding-top"] = (cell.padding?.top || 0) + "px";
  style["padding-bottom"] = (cell.padding?.bottom || 0) + "px";
  if (cell.backgroundColor && !isAllWhite(cell.backgroundColor))
    style["background-color"] = formatColor(cell.backgroundColor);
  return h(
    tag,
    {
      rowspan: cell.rowspan,
      colspan: cell.colspan,
      style,
    },
    value ? [value] : [],
  );
};

/**
 * Grabs data from the Doc Preview sheet
 * @see https://docs.google.com/spreadsheets/d/1GXzzVYT6CULGgGcyp0VtBfOtbxuWxkOU2pRYW42W4pM/edit#gid=1884264748
 * @param {GoogleAuth.JSONClient>} auth The authenticated Google client.
 */
async function buildTable(auth) {
  const sheets = google.sheets({ version: "v4", auth });
  const sheet = await sheets.spreadsheets.get({
    spreadsheetId: SOURCE_SPREADSHEET,
    ranges: ["Doc Preview"],
    includeGridData: true,
  });
  const merges = sheet.data.sheets[0].merges;
  const columnMetadata = sheet.data.sheets[0].data[0].columnMetadata;
  let rows = sheet.data.sheets[0].data[0].rowData;
  for (let i = 0, row = rows[i]; i < rows.length; ++i, row = rows[i]) {
    row.values = row.values
      .map((cell, j) => {
        const merge = merges.find(
          (m) =>
            m.startRowIndex <= i &&
            m.endRowIndex > i &&
            m.startColumnIndex <= j &&
            m.endColumnIndex > j,
        );
        if (merge) {
          if (merge.startRowIndex === i && merge.startColumnIndex === j)
            return {
              ...cell,
              rowspan: merge.endRowIndex - merge.startRowIndex,
              colspan: merge.endColumnIndex - merge.startColumnIndex,
            };
          else return null;
        }
        return cell;
      })
      .filter((cell, j) => cell !== null && !columnMetadata[j].hiddenByUser)
      .map((cell) => {
        return {
          formattedValue: cell.formattedValue,
          rowspan: cell.rowspan,
          colspan: cell.colspan,
          textFormat: cell.effectiveFormat?.textFormat,
          align: cell.effectiveFormat?.horizontalAlignment,
          valign: cell.effectiveFormat?.verticalAlignment,
          borders: cell.effectiveFormat?.borders,
          padding: cell.effectiveFormat?.padding,
          backgroundColor: cell.effectiveFormat?.backgroundColorStyle,
        };
      });
  }

  let currentTable = [];
  let tables = [];
  const addTable = () => {
    if (!currentTable.length) return;

    let headers = currentTable.splice(
      0,
      currentTable.findIndex((row) => !isHeader(row)) || currentTable.length,
    );

    if (!headers.length) return;
    let sectionHeader = headers.splice(0, 1)[0];

    const table = h(
      "table",
      {
        "data-source": WITNESS_COMMENTS.join(" "),
        "data-section": sectionHeader
          ? sectionHeader.values.map((cell) => cell.formattedValue).join(" ")
          : "",
      },
      [
        h(
          "thead",
          headers.map((row) =>
            h(
              "tr",
              row.values.map((cell) => formatCell(cell, "th")),
            ),
          ),
        ),
        h(
          "tbody",
          currentTable.map((row) =>
            h(
              "tr",
              row.values.map((cell) => formatCell(cell, "td")),
            ),
          ),
        ),
      ],
    );

    tables.push(table);
    currentTable = [];
  };
  for (let row of rows) {
    // blank row starts new table
    if (isRowEmpty(row)) {
      addTable();
    } else {
      currentTable.push(row);
    }
  }
  addTable();

  const formatter = rehypeFormat();
  return tables.flatMap((table) => {
    formatter(table);
    let nodes = [];
    if (table.properties.dataSection)
      nodes.push({
        type: "heading",
        depth: 2,
        children: [{ type: "text", value: table.properties.dataSection }],
      });
    nodes.push({ type: "jsx", value: toHtml(table) });
    return nodes;
  });
}

async function updateTable() {
  console.log("authorizing access to source spreadsheet");
  const auth = await authorize();
  console.log("converting table");
  const newTables = await buildTable(auth);

  const replaceTable = function () {
    return (tree) => {
      let replaced = false;
      visit(tree, "jsx", (node, index, parent) => {
        if (!/<table/.test(node.value)) return;
        if (node.value.indexOf(WITNESS_COMMENTS[0]) < 0) return;

        const removePrecedingHeading = () => {
          if (parent.children[index - 1]?.type === "heading") {
            parent.children.splice(index - 1, 1);
            return -1;
          }
          return 0;
        };

        if (!replaced) {
          replaced = true;
          parent.children.splice(index, 1, ...newTables);
          return [
            visit.SKIP,
            index + newTables.length + removePrecedingHeading(),
          ];
        }

        node.value = "";
        return [visit.SKIP, index + 1 + removePrecedingHeading()];
      });
    };
  };

  const processor = unified()
    .use(remarkParse)
    .use(remarkStringify, { emphasis: "*", bullet: "-", fences: true })
    .use(admonitions, {
      tag: "!!!",
      icons: "none",
      infima: true,
      customTypes: {
        seealso: "note",
        hint: "tip",
        interactive: "interactive",
      },
    })
    .use(mdx)
    .use(remarkFrontmatter)
    .use(replaceTable);

  console.log("rewriting extensions table");
  const input = await read(TARGET_FILE);
  let result = await processor.process(input);

  write(result);
}

updateTable().catch(console.error);
