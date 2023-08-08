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

var productToURL={};

function writeHeaders() {
    return `
<table class="table table-bordered table-striped">
<thead style="font-weight:bold; background-color:lightgray;text-align:center">
<tr>
<td>
</td>
<td colspan="4">Community</td>
<td colspan="4">EPAS</td>
</tr>
<tr>
<td></td>
<td>12</td>
<td>13</td>
<td>14</td>
<td>15</td>
<td>12</td>
<td>13</td>
<td>14</td>
<td>15</td>
</tr>
</thead>
`;
}


async function processExtensions(auth) {
    var argv = parseArgs(_argv.slice(2));

    if (argv.source == undefined) {
        console.error("Need --source <directorywithtemplate>");
        process.exit(1);
    }
    
    let source=argv.source;

    const templateFile = join(source, "index.mdx.in");
    const templateFileContent = await fs.readFile(templateFile).catch((error)=> {
        console.error("No index.mdx.in template to start creation with");
        process.exit(1);
    });

    // const extensionsFile= join(argv.source, "extensionrefs.json");
    // const extensionsContent = await fs.readFile(extensionsFile);

    // productToURL=JSON.parse(extensionsContent);

    const sheets = google.sheets({ version: 'v4', auth });

    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: "1HZjrdmxhehgbce9WqEnw4VOvDfRt1lIVfv8Zcz_QBm0",
        range: "Tested_With_BAH_Docker_Images"
    });

    const rows = res.data.values;
    if (!rows || rows.length === 0) {
        console.log('No data found.');
        return;
    }

    let output=[];

    output.push(templateFileContent);
    
    output.push(writeHeaders());

    output.push("<tbody>");

    for (var i = 2; i < rows.length; i++) {
        const row=rows[i]
        output.push("<tr>")
        output.push("<td style=\"font-weight:bold\">")
        output.push(row[0]);
        output.push("</td>");
        for(var n=1;n<16;n=n+2) {
            output.push("<td style=\"text-align:center;color: green;\">");
            if (row[n]=='TRUE') {
                if(row[n+1]=='TRUE') {
                    output.push('✓+');
                } else {
                    output.push('✓');
                }
            } 
            output.push("</td>")
        }
        output.push("</tr>");
        output.push("\n");
    };

    output.push("</tbody>");
    output.push("</table>");
    
    const outputFile = join(".", "index.mdx");

    await fs.writeFile(outputFile,output.join(""));

    // await fs.writeFile(outputFile,currentState.output.join("\n"));

    // if (currentState.unmapped.length>0) {
    //     console.log("Unmapped products - add to extensionrefs.json");
    //     currentState.unmapped.forEach(element => {
    //         console.log(`"${element}":"https:",`);
    //     });
    // }

    console.log(`wrote ${outputFile}`);


}

authorize().then(processExtensions).catch(console.error);