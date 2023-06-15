import { promises as fs } from 'fs';
import { join } from 'path';
import { env, exit as _exit, argv as _argv } from 'process';
import { authenticate } from '@google-cloud/local-auth';
import { google } from 'googleapis';
import parseArgs from 'minimist';

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

const EDBDOCS_PATH = join(env.HOME, ".edbdocs", "extensions");
const TOKEN_PATH = join(EDBDOCS_PATH, 'token.json');
const CREDENTIALS_PATH = join(EDBDOCS_PATH, 'credentials.json');

async function loadSavedCredentialsIfExist() {
    try {
        const content = await fs.readFile(TOKEN_PATH);
        const credentials = JSON.parse(content);
        return google.auth.fromJSON(credentials);
    } catch (err) {
        return null;
    }
}

async function saveCredentials(client) {
    const content = await fs.readFile(CREDENTIALS_PATH);
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
        type: 'authorized_user',
        client_id: key.client_id,
        client_secret: key.client_secret,
        refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
}

async function authorize() {
    const secretsExist = await fs.access(EDBDOCS_PATH)
        .then(() => true).catch(() => false);


    if (!secretsExist) {
        console.log(`${EDBDOCS_PATH} does not exist. Please create this directory and add the appropriate credentials.json`);
        _exit(1);
    }

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

function processRow(currentState, row, nextRow) {
    switch (currentState.rowState) {
        case 0:
            currentState.rowState = 1
            return;
        case 1:
            if (row.length == 0 || row[0] == "Notes : ") {
                // We're done
                currentState.done = true;
                return;
            }

            currentState.output.push(`\n\n## ${row[0]}\n\n`);
            currentState.output.push(`<table data-source="This table was generated automatically. Do not edit it directly without first removing this attribute!" data-section="${row[0]}">\n`)
            currentState.rowState = 2
            return;
        case 2:
            currentState.output.push(`<thead>`)
            currentState.output.push(`<tr>`)
            currentState.output.push(`<th style="font-weight: bold; vertical-align: middle; border-left: none; border-right: none; border-top: none; border-bottom: none; padding-left: 3px; padding-right: 3px; padding-top: 2px; padding-bottom: 2px"></th>`)
            currentState.output.push(`<th style="font-weight: bold; text-align: center; vertical-align: middle; border-left: none; border-right: none; border-top: none; border-bottom: none; padding-left: 3px; padding-right: 3px; padding-top: 2px; padding-bottom: 2px"></th>`)
            currentState.output.push(`<th rowspan="1" colspan="3" style="font-weight: bold; text-align: center; vertical-align: middle; border-left: solid 1px; border-right: solid 1px; border-top: solid 1px; border-bottom: solid 1px; padding-left: 3px; padding-right: 3px; padding-top: 2px; padding-bottom: 2px">${row[6]}</th>`)
            currentState.output.push(`<th rowspan="1" colspan="2" style="font-weight: bold; text-align: center; border-left: none; border-right: solid 1px; border-top: solid 1px; border-bottom: solid 1px; padding-left: 3px; padding-right: 3px; padding-top: 2px; padding-bottom: 2px">${row[9]}</th>`)
            currentState.output.push(`<th rowspan="1" colspan="3" style="font-weight: bold; text-align: center; border-left: none; border-right: solid 1px; border-top: solid 1px; border-bottom: solid 1px; padding-left: 3px; padding-right: 3px; padding-top: 2px; padding-bottom: 2px">${row[11]}</th>`)
            currentState.output.push(`</tr>\n`)
            currentState.rowState = 3
            return false;
        case 3:
            currentState.output.push(`<tr>`)
            currentState.output.push(composeHeading(true, true, false, true, row[0], false));
            currentState.output.push(composeHeading(true, true, true, true, row[5], true));
            currentState.output.push(composeHeading(true, false, true, true, row[6], true));
            currentState.output.push(composeHeading(false, false, true, true, row[7], true));
            currentState.output.push(composeHeading(false, true, true, true, row[8], true));
            currentState.output.push(composeHeading(true, false, true, true, row[9], true));
            currentState.output.push(composeHeading(false, true, true, true, row[10], true));
            currentState.output.push(composeHeading(true, false, true, true, row[11], true));
            currentState.output.push(composeHeading(false, false, true, true, row[12], true));
            currentState.output.push(composeHeading(false, true, true, true, row[13], true));

            currentState.output.push(`</tr>`)
            currentState.rowState = 4
            return;
        case 4:
            if (row.length == 1) {
                currentState.output.push(composeHeadingRow(row))
                currentState.output.push(`</thead>`)
                currentState.output.push(`<tbody>`)
            } else {
                currentState.output.push(`</thead>`)
                currentState.output.push(`<tbody>`)
                currentState.output.push(composeRow(row,nextRow.length==0,currentState));
            }
            currentState.rowState = 5
            return;
        case 5:
            if (row.length == 0) {
                currentState.output.push(`</tbody></table>`)
                currentState.rowState = 1
                return;
            }
            if (row.length == 1) {
                currentState.output.push(composeHeadingRow(row,currentState));
            } else {
                currentState.output.push(composeRow(row, nextRow.length == 0,currentState));
            }
            currentState.rowState = 5
            return;
    }

    console.err("Fell out of state machine")
    currentState.done = true;
    return;
}

function composeRow(row, lastRow, currentState) {
    let output = []
    output.push("<tr>")
    let fullName = row[0];
    let trimmedName = fullName.trimStart()
    let spaceDiff = fullName.length - trimmedName.length
    let lookupName=fullName.replace(" ","_")
    if(spaceDiff<=1) { // Root element, update state
        currentState.lastRoot=lookupName;
    } else {
        lookupName=currentState.lastRoot+"."+trimmedName.replace(" ","_");
    }

    let url=productToURL[lookupName];

    if(url==undefined) {
        currentState.unmapped.push(lookupName);
    }

    if(url=="undefined") { // This lets you not set a URL and not get nagged at
        url=undefined;
    }
    trimmedName = "&nbsp;".repeat(spaceDiff) + trimmedName

    output.push(composeCell(true, false, false, true,  trimmedName, lastRow, false,url));
    output.push(composeCell(true, true, false, true, row[5], lastRow, true));
    for (let i = 6; i < 14; i++) {
        if (row[i] == "TRUE") {
            output.push(composeCell(i == 6 || i == 9 || i == 11, i == 13, true, true, `<span style="color:green">✓</span>`, lastRow, true));
        } else {
            output.push(composeCell(i == 6 || i == 9 || i == 11, i == 13, true, true, `–`, lastRow, true));
        }
    }
    output.push("</tr>\n")

    return output.join("");
}

function composeHeadingRow(row) {
    return `<tr><td rowspan="1" colspan="14" style="font-weight: bold; border-left: 1px solid; border-right: 1px solid; border-top: 1px solid; border-bottom: 1px ridge ; padding: 2px 3px;">${row[0]}</td></tr>\n`;
}

function composeCell(left, right, bold, middleAlign, value, lastRow, centered,url) {
    var cellValue=value;

    if(url!=undefined) {
        cellValue=`<a href="${url}">${value}</a>`;
    }

    return `<td style="${_composeCell(left, right, bold, middleAlign, false, lastRow, centered, false)}">${cellValue}</td>`;
    
}

function composeHeading(left, right, bold, middleAlign, value, alwaysSplit) {
    let splitValue = value.split(" ");
    let displayValue = value;
    if (alwaysSplit || splitValue.length > 2) {
        displayValue = splitValue.join("<br/>");
    }

    return `<th style="${_composeCell(left, right, bold, middleAlign, true, true, true, true)}">${displayValue}</th>`;
}

function _composeCell(left, right, bold, middleAlign, top, bottom, centered, bottomAlign) {

    let options = [];

    if (bold) {
        options.push("font-weight: bold;");
    }
    if (left) {
        options.push("border-left: solid 1px;");
    } else {
        options.push("border-left: none;");
    }
    if (right) {
        options.push("border-right: solid 1px;")
    } else {
        options.push("border-right: none;")
    }
    if (middleAlign) {
        options.push("middle-align: middle;")
    }

    if (top) {
        options.push("border-top: solid 1px;")
    } else {
        options.push("border-top: none;")
    }

    if (bottom) {
        options.push("border-bottom: solid 1px;")
    } else {
        options.push("border-bottom: none;")
    }

    if (centered) {
        options.push("text-align: center;");
    }

    if (bottomAlign) {
        options.push("vertical-align: bottom;");
    }

    options.push("padding-left: 3px; padding-right: 3px;padding-top: 2px; padding-bottom: 2px; ")

    return options.join(" ");
}

var productToURL={};

async function processExtensions(auth) {
    var argv = parseArgs(_argv.slice(2));

    if (argv.source == undefined) {
        console.log("Need --source");
        _exit(1);
    }

    const templateFile = join(argv.source, "index.mdx.in");
    const templateFileContent = await fs.readFile(templateFile);

    const extensionsFile= join(argv.source, "extensionrefs.json");
    const extensionsContent = await fs.readFile(extensionsFile);

    productToURL=JSON.parse(extensionsContent);

    const sheets = google.sheets({ version: 'v4', auth });

    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: "1GXzzVYT6CULGgGcyp0VtBfOtbxuWxkOU2pRYW42W4pM",
        range: "Extensions by Offering"
    });
    const rows = res.data.values;
    if (!rows || rows.length === 0) {
        console.log('No data found.');
        return;
    }


    var currentState = { done: false, output: [templateFileContent], rowState: 0, lastRoot:"", unmapped: [] };

    for (var i = 0; i < rows.length; i++) {
        processRow(currentState, rows[i], rows[i + 1])
        if (currentState.done) { break; }
    };

    const outputFile = join(argv.source, "index.mdx");

    await fs.writeFile(outputFile,currentState.output.join(""));

    if (currentState.unmapped.length>0) {
        console.log("Unmapped products - add to extensionrefs.json");
        currentState.unmapped.forEach(element => {
            console.log(`"${element}":"https:",`);
        });
    }

}

authorize().then(processExtensions).catch(console.error);