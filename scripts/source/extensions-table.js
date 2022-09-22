// retrieve current supported extensions spreadsheet, generate a table from it, write to product_docs/docs/pg_extensions/release/index.mdx
// heavily adapted from https://developers.google.com/sheets/api/quickstart/nodejs

const fs = require("fs").promises;
const path = require("path");
const process = require("process");
const { authenticate } = require("@google-cloud/local-auth");
const { google } = require("googleapis");
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

// TODO: use token in Github secret store instead of this
// right now, running locally will require you to have configured a project/app
// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const SCRIPT_ROOT = path.dirname(process.argv[1]);
const TOKEN_PATH = path.join(SCRIPT_ROOT, "token.json");
const CREDENTIALS_PATH = path.join(SCRIPT_ROOT, "credentials.json");
const SOURCE_SPREADSHEET = "1GXzzVYT6CULGgGcyp0VtBfOtbxuWxkOU2pRYW42W4pM";
const TARGET_FILE = path.resolve(
  SCRIPT_ROOT,
  "../../product_docs/docs/pg_extensions/release/index.mdx",
);

/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}
 */
async function loadSavedCredentialsIfExist() {
  try {
    const content = await fs.readFile(TOKEN_PATH);
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

/**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 */
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: "authorized_user",
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
  let client = await loadSavedCredentialsIfExist();
  if (client) {
    return client;
  }
  client = await authenticate({
    scopes: SCOPES,
    keyfilePath: CREDENTIALS_PATH,
  });
  if (client.credentials) {
    await saveCredentials(client);
  }
  return client;
}

/**
 * Grabs data from the Doc Preview sheet
 * @see https://docs.google.com/spreadsheets/d/1GXzzVYT6CULGgGcyp0VtBfOtbxuWxkOU2pRYW42W4pM/edit#gid=1884264748
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
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
        };
      });
    if (
      row.values.every((cell) => !cell.formattedValue || cell.textFormat?.bold)
    )
      row.isHeader = true;
  }

  const tableStart = rows.findIndex((row) =>
    row.values.some((cell) => !!cell.formattedValue),
  );
  const headerStart = rows.findIndex(
    (row, i) => i >= tableStart && row.isHeader,
  );
  const headerEnd = rows.findIndex(
    (row, i) => i >= headerStart && !row.isHeader,
  );

  const headers =
    headerStart >= 0 ? rows.splice(headerStart, headerEnd - headerStart) : [];
  if (tableStart > 0) rows.splice(0, tableStart);

  const formatCell = (cell, tag) => {
    let value = cell.formattedValue?.replace(/^ +/, (m) =>
      m.replace(" ", "\u00A0"),
    );
    if (value === "TRUE") value = "✔";
    else if (value === "FALSE") value = "❌";
    else if (cell.textFormat?.bold && !tag === "th")
      value = h("b", cell.formattedValue);
    return h(
      tag,
      { rowspan: cell.rowspan, colspan: cell.colspan },
      value ? [value] : [],
    );
  };

  const table = h("table", [
    h(
      "thead",
      headers.map((row) =>
        h(
          "tr",
          row.values.map((cell) => formatCell(cell, "th")),
        ),
      ),
      h(
        "tbody",
        rows.map((row) =>
          h(
            "tr",
            row.values.map((cell) => formatCell(cell, "td")),
          ),
        ),
      ),
    ),
  ]);
  rehypeFormat()(table);
  return toHtml(table);
}

async function updateTable() {
  console.log("authorizing access to source spreadsheet");
  const auth = await authorize();
  console.log("converting table");
  const newTable = await buildTable(auth);

  const replaceTable = function () {
    return (tree) => {
      let replaced = false;
      visit(tree, "jsx", (node, parent) => {
        if (replaced) return;

        if (!/<table>/.test(node.value)) return;
        if (!/EDB Supported Extensions/.test(node.value)) return;

        replaced = true;

        node.value = newTable;
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
