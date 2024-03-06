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

const JiraAuth = core.getInput("jira-auth");

main().catch((err) => ghCore.setFailed(err));

async function main() {
  let added = 0,
    updated = 0;

  const focusIssueNumber = core.getInput("include-issue") || process.argv[2];

  // load open issues from GitHub
  const ghIssues = await loadGHIssues(focusIssueNumber);

  // load previously synched issues from Jira
  const jiraIssues = await loadSynchedJiraIssues();

  const newIssues = {
    issueUpdates: [],
  };

  // for each open issue,
  for (let ghi of ghIssues) {
    // 1. check to see if a matching issue already exists in Jira
    const existingIssue = jiraIssues.find((i) =>
      i.fields?.summary?.includes("Docs GH #" + ghi.number),
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
  if (issueNumber && !ret.some((i) => i.number === issueNumber)) {
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

async function loadSynchedJiraIssues() {
  console.log(`Loading synched Jira issues`);
  const query = `summary ~ "\\"Docs GH #\\"" order by created DESC`;

  try {
    const response = await fetch(
      `https://enterprisedb.atlassian.net/rest/api/3/search?jql=${encodeURIComponent(
        query,
      )}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${Buffer.from(JiraAuth).toString("base64")}`,
          Accept: "application/json",
        },
      },
    );
    const json = await response.json();
    return json?.issues;
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
    inlineCode: (node) => addMark("code"),
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
