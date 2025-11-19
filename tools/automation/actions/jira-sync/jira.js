import core, { summary } from "@actions/core";
import github from "@actions/github";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

let ghCore = core;

if (!process.env.GITHUB_REF) {
  ghCore = {
    getInput: (key) => undefined,
    summary: {
      addRaw: (markup) => {
        console.log(markup);
      },
      write: () => {},
      stringify: () => {},
    },
    setFailed: (message) => {
      console.error(message);
    },
    error: (message, properties) => {
      console.warn(message, properties);
    },
  };
}

const JiraAuth = core.getInput("jira-auth"); // should be "email:token"

main().catch((err) => ghCore.setFailed(err));

async function main() {
  let added = 0,
    updated = 0;

  const focusIssueNumber = core.getInput("include-issue") || process.argv[2];

  // load open issues from GitHub
  const ghIssues = await loadGHIssues(focusIssueNumber);

  // load previously synched issues from Jira
  const jiraIssues = await loadSynchedJiraIssues();

  if (!jiraIssues) {
    ghCore.setFailed("Failed to load Jira issues");
    return;
  }

  console.log(jiraIssues.length + " synched Jira issues found");

  // don't run this automatically - it means something has gone wrong
  //await markDuplicates(jiraIssues);

  const newIssues = {
    issueUpdates: [],
  };

  // for each open issue,
  for (let ghi of ghIssues) {
    // 1. check to see if a matching issue already exists in Jira
    const existingIssues = jiraIssues.filter((i) =>
      i.fields?.summary?.includes("Docs GH #" + ghi.number),
    );

    existingIssues.sort((a, b) => {
      const aUpdated = Date.parse(a.fields?.created);
      const bUpdated = Date.parse(b.fields?.created);
      if (
        ["Published", "Done"].includes(a.fields?.status?.name) &&
        !["Published", "Done"].includes(b.fields?.status?.name)
      )
        return -1;
      if (
        ["Published", "Done"].includes(b.fields?.status?.name) &&
        !["Published", "Done"].includes(a.fields?.status?.name)
      )
        return 1;
      if (
        ["Rejected"].includes(a.fields?.status?.name) &&
        !["Rejected"].includes(b.fields?.status?.name)
      )
        return 1;
      if (
        ["Rejected"].includes(b.fields?.status?.name) &&
        !["Rejected"].includes(a.fields?.status?.name)
      )
        return -1;
      return aUpdated - bUpdated;
    });

    const existingIssue = existingIssues[0];

    console.log(
      "Existing issues for #" + ghi.number,
      existingIssues
        .map((i) => i.key + (i === existingIssue ? "*" : ""))
        .join(", "),
    );

    // 2. update (matching) or create
    if (existingIssue) {
      const ghUpdated = Date.parse(ghi.updated_at);
      const jiraUpdated =
        Date.parse(existingIssue.fields?.updated) ||
        Date.parse(existingIssue.fields?.created);
      if (!(ghUpdated < jiraUpdated)) {
        await updateIssue(existingIssue, ghi);
        updated++;
      }
    } else {
      const jiraIssue = convert(ghi);
      newIssues.issueUpdates.push(jiraIssue);
    }
  }

  if (newIssues.issueUpdates.length) {
    await createIssues(newIssues);
    added += newIssues.issueUpdates.length;
  }

  ghCore.summary.addRaw(`## Sync issues w/ Jira

Added issues: **${added}**
Updated issues: **${updated}**`);

  ghCore.summary.write();
}

async function loadGHIssues(issueNumber) {
  console.log("Loading open GitHub issues...");
  const token = core.getInput("github-token");
  const octokit = github.getOctokit(token);

  // doesn't page (I haven't needed to yet)
  let issues = await octokit.request(
    "GET /repos/{owner}/{repo}/issues?per_page=100",
    {
      owner: "EnterpriseDB",
      repo: "docs",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  let ret = issues.data.filter((i) => !i.pull_request);

  // if there's a "target" issue, make sure to include that
  if (issueNumber && !ret.some((i) => i.number == issueNumber)) {
    let issue = await octokit.request(
      "GET /repos/{owner}/{repo}/issues/{issue_number}",
      {
        owner: "EnterpriseDB",
        repo: "docs",
        issue_number: issueNumber,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );

    if (issue?.data) ret.push(issue.data);
  }

  return ret;
}

async function loadSynchedJiraIssues(accumulateIssues, nextPageToken) {
  console.log(`Loading synched Jira issues`);
  const query = `summary ~ "\\"Docs GH #\\"" AND project = "Technical Documentation" order by created ASC`;

  try {
    const queryBody = {
      jql: query,
      fields: ["updated", "created", "summary", "description", "status"],
      maxResults: 100,
    };

    if (nextPageToken) {
      queryBody.nextPageToken = nextPageToken;
    }
    const response = await fetch(
      `https://enterprisedb.atlassian.net/rest/api/3/search/jql`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(JiraAuth).toString("base64")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(queryBody),
      },
    );
    const json = await response.json();
    accumulateIssues = [...(accumulateIssues || []), ...(json?.issues || [])];
    if (json?.nextPageToken)
      return loadSynchedJiraIssues(accumulateIssues, json?.nextPageToken);
    return accumulateIssues;
  } catch (err) {
    console.error(err);
  }
  return false;
}

function convert(ghIssue) {
  const contentMdast = markdownParse(
    ghIssue.body +
      `

---

Reported by [${ghIssue.user.login}](${ghIssue.user.html_url})

Sync'd from GitHub: ${ghIssue.html_url}, last updated ${ghIssue.updated_at}
`,
  );

  const content = convertNodes(contentMdast).content;

  return {
    fields: {
      description: {
        content: content,
        type: "doc",
        version: 1,
      },
      issuetype: {
        id: "10002",
      },
      project: {
        id: "14595",
      },
      summary:
        (ghIssue.state === "closed" ? "[CLOSED] " : "") +
        ghIssue.title +
        ` (Docs GH #${ghIssue.number})`,
    },
  };
}

function markdownParse(markdown) {
  return unified().use(remarkParse).use(remarkGfm).parse(markdown);
}

const allTypes = [
  "blockquote",
  "hardbreak",
  "codeBlock",
  "heading",
  "html",
  "image",
  "inlineCode",
  "orderedList",
  "bulletList",
  "listItem",
  "paragraph",
  "doc",
  "text",
  "rule",
  "table",
  "tableRow",
  "tableCell",
];
const inlineTypes = ["hardbreak", "image", "inlineCode", "link", "text"];
const blockTypes = [
  "blockquote",
  "codeBlock",
  "heading",
  "orderedList",
  "bulletList",
  "paragraph",
  "rule",
  "table",
];
const paragraphTypes = ["paragraph", "orderedList", "bulletList"];

function convertNodes(node, root, activeMarks = [], allowedTypes = allTypes) {
  root = root || node;

  const map = (type, props, nextAllowedTypes) => {
    let ret = { type, content: [], ...props };
    if (!allowedTypes.includes(type)) {
      if (allowedTypes === blockTypes || allowedTypes === paragraphTypes) {
        if (inlineTypes.includes(type))
          ret = { content: [{ type: "paragraph", content: [ret] }] };
        else ret = { content: [{ type: "paragraph", content: [] }] };

        nextAllowedTypes = inlineTypes;
      } else {
        ret = { content: [] };
      }
    }
    if (nextAllowedTypes) allowedTypes = nextAllowedTypes;
    return ret;
  };

  const addMark = (mark, attrs) => {
    activeMarks.push({ type: mark, attrs });
    return { content: [] };
  };

  const makeLinkForReference = (node) => {
    let ret = { url: "#unknown" };
    visit(root, { type: "definition", identifier: node.identifier }, (node) => {
      ret = { url: node.url, title: node.title };
    });
    return ret;
  };

  const NI = (node) => {
    console.warn(
      `content node type conversion for ${node.type} not yet implemented`,
    );
    return { content: [] };
  };

  const NIblock = (node) => {
    console.warn(
      `content node type conversion for ${node.type} not yet implemented`,
    );
    return map("paragraph", {}, inlineTypes);
  };

  const typeConverter = {
    blockquote: (node) => map("blockquote", {}, paragraphTypes),
    break: (node) => map("hardbreak"),
    code: (node) =>
      map(
        "codeBlock",
        {
          attrs: { language: node.lang || undefined },
          content: [{ type: "text", text: node.value }],
        },
        [],
      ),
    definition: () => ({ content: [] }),
    emphasis: (node) => addMark("em"),
    heading: (node) =>
      map(
        "heading",
        { attrs: { level: node.depth || undefined } },
        inlineTypes,
      ),
    html: NIblock,
    image: NI,
    imageReference: NI,
    inlineCode: (node) =>
      map("text", {
        marks: [{ type: "code" }, ...activeMarks],
        text: node.value,
      }),
    link: (node) =>
      addMark("link", { href: node.url, title: node.title || undefined }),
    linkReference: (node) => typeConverter["link"](makeLinkForReference(node)),
    list: (node) =>
      node.ordered
        ? map("orderedList", { attrs: { order: node.start || undefined } }, [
            "listItem",
          ])
        : map("bulletList", {}, ["listItem"]),
    listItem: (node) => map("listItem", {}, paragraphTypes),
    paragraph: (node) => map("paragraph", {}, inlineTypes),
    root: (node) => map("doc", { version: 1 }),
    strong: (node) => addMark("strong"),
    text: (node) => map("text", { marks: activeMarks, text: node.value }),
    thematicBreak: (node) => map("rule"),
    delete: (node) => addMark("strike"),
    footnoteDefinition: NI,
    footnoteReference: NI,
    table: NIblock,
    tableRow: NI,
    tableCell: NI,
  };

  const newNode = typeConverter[node.type](node);
  let content = newNode.content;
  while (content && content[0]?.content) content = content[0].content;
  if (node.children) {
    for (let child of node.children) {
      const converted = convertNodes(
        child,
        root,
        [...activeMarks],
        allowedTypes,
      );
      if (converted?.type) content.push(converted);
      else if (converted.content) content.push(...converted.content);
    }
  }
  if (newNode?.content && !newNode.content?.length) delete newNode.content;
  return newNode;
}

async function updateIssue(existingIssue, ghIssue) {
  console.log(`Updating ${existingIssue.id} from #${ghIssue.number}`);
  const jiraIssue = convert(ghIssue);

  // TODO: query for fields that can be updated
  const update = {
    fields: {
      summary: jiraIssue.fields.summary,
      description: jiraIssue.fields.description,
    },
  };

  const response = await fetch(
    `https://enterprisedb.atlassian.net/rest/api/3/issue/${existingIssue.id}?returnIssue=true`,
    {
      method: "PUT",
      headers: {
        Authorization: `Basic ${Buffer.from(JiraAuth).toString("base64")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    },
  );

  const json = await response.json();
  if (json.errorMessages)
    ghCore.error(json.errorMessages.join(), {
      title: `Failed to update issue DOCS-${existingIssue.key} from #${ghIssue.number}`,
    });
  return json;
}

async function createIssues(jiraIssues) {
  console.log(`Creating ${jiraIssues.issueUpdates.length} new issues`);
  const response = await fetch(
    "https://enterprisedb.atlassian.net/rest/api/3/issue/bulk",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(JiraAuth).toString("base64")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jiraIssues),
    },
  );

  const json = await response.json();
  if (json.errorMessages)
    ghCore.error(json.errorMessages.join(), {
      title: `Failed to create new issues`,
    });
  return json;
}

async function markDuplicates(jiraIssues) {
  const seen = new Map();
  for (let issue of jiraIssues) {
    const GHID = (issue.fields?.summary?.match(/Docs GH #(\d+)/) || [])[1];
    if (seen.has(GHID)) {
      seen.get(GHID).push(issue);
    } else {
      seen.set(GHID, [issue]);
    }
  }

  let duplicates = 0,
    redundant = 0;
  for (let [GHID, issues] of seen.entries()) {
    if (issues.length > 1) {
      let doneIssues = issues.filter((k) =>
        ["Published", "Done"].includes(k.fields?.status?.name),
      );
      let rejectedIssues = issues.filter((k) =>
        ["Rejected"].includes(k.fields?.status?.name),
      );
      let inprogressIssues = issues.filter(
        (k) =>
          !["Backlog", "Published", "Done", "Rejected"].includes(
            k.fields?.status?.name,
          ),
      );
      let openIssues = issues.filter(
        (k) =>
          !["Published", "Done", "Rejected"].includes(k.fields?.status?.name),
      );
      if (openIssues.length > 1) {
        duplicates++;
        redundant += openIssues.length - 1;

        console.warn(
          `Duplicate issues found for GH #${GHID}: ${openIssues.map((k) => k.key).join(", ")}`,
          doneIssues.length
            ? ` (Done: ${doneIssues.map((k) => k.key).join(", ")})`
            : "",
          rejectedIssues.length
            ? ` (Rejected: ${rejectedIssues.map((k) => k.key).join(", ")})`
            : "",
        );
        const orig = doneIssues[0] || inprogressIssues[0] || openIssues[0];
        for (let dup of openIssues) {
          if (dup.key === orig.key) continue;
          await closeAsDuplicate(dup, orig);
        }
      }
    }
  }
  console.log(
    `Found ${duplicates} duplicate issues, ${redundant} redundant issues.`,
  );
}

async function closeAsDuplicate(issue, original) {
  console.log(`Closing ${issue.key} as duplicate of ${original.key}`);
  // first, transition the duplicate to "Rejected"
  // then, create an issueLink of type "Relates" from the original to the duplicate
  try {
    // get transitions for the issue
    const transitionsResponse = await fetch(
      `https://enterprisedb.atlassian.net/rest/api/3/issue/${issue.key}/transitions`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${Buffer.from(JiraAuth).toString("base64")}`,
          Accept: "application/json",
        },
      },
    );
    const transitionsJson = await transitionsResponse.json();
    const rejectedTransition = transitionsJson.transitions.find(
      (t) => t.to.name === "Rejected",
    );
    if (!rejectedTransition) {
      console.error(`No "Rejected" transition found for ${issue.key}`);
      return;
    }

    // transition the issue to "Rejected"
    await fetch(
      `https://enterprisedb.atlassian.net/rest/api/3/issue/${issue.key}/transitions`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(JiraAuth).toString("base64")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transition: { id: rejectedTransition.id },
        }),
      },
    );
  } catch (err) {
    console.error(`Failed to transition ${issue.key} to Rejected:`, err);
    return;
  }

  try {
    await fetch("https://enterprisedb.atlassian.net/rest/api/3/issueLink", {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(JiraAuth).toString("base64")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: { name: "Relates" },
        outwardIssue: { key: original.key },
        inwardIssue: { key: issue.key },
        comment: {
          body: {
            content: [
              {
                content: [
                  {
                    text: "Duplicate of " + original.key,
                    type: "text",
                  },
                ],
                type: "paragraph",
              },
            ],
            type: "doc",
            version: 1,
          },
        },
      }),
    });
  } catch (err) {
    console.error(`Failed to link ${issue.key} to ${original.key}:`, err);
    return;
  }
}
