import core, { summary } from "@actions/core";
import github from "@actions/github";

const message = core.getInput("message");
const token = core.getInput("github-token");
const octokit = github.getOctokit(token);

// adapted from https://github.com/readthedocs/actions/blob/main/preview/scripts/edit-description.js

const MESSAGE_SEPARATOR_START = `\r\n\r\n<!-- draft-deploy start -->\r\n`;
const MESSAGE_SEPARATOR_END = `\r\n<!-- draft-deploy end -->`;

(async () => {
  const { data: pull } = await octokit.rest.pulls.get({
    owner: core.getInput("repo-owner") || github.context.repo.owner,
    repo: core.getInput("repo") || github.context.repo.repo,
    pull_number: core.getInput("pr-number") || github.context.issue.number,
  });

  let body = "";
  if (pull.body) {
    if (pull.body.indexOf(MESSAGE_SEPARATOR_START) === -1) {
      // First time updating this description
      body =
        pull.body + MESSAGE_SEPARATOR_START + message + MESSAGE_SEPARATOR_END;
    } else {
      // We already updated this description before - preserve path if modified
      const path =
        (pull.body.match(/netlify\.app\/docs(\/[^\n]+)/m) || [])[1] || "";
      body = pull.body.slice(0, pull.body.indexOf(MESSAGE_SEPARATOR_START));
      body =
        body +
        MESSAGE_SEPARATOR_START +
        message.replace(
          /netlify\.app\/docs\/?/,
          "netlify.app/docs" + path.trim(),
        ) +
        MESSAGE_SEPARATOR_END;
      body =
        body +
        pull.body.slice(
          pull.body.indexOf(MESSAGE_SEPARATOR_END) +
            MESSAGE_SEPARATOR_END.length,
        );
    }
  } else {
    // Pull Request description is empty
    body = MESSAGE_SEPARATOR_START + message + MESSAGE_SEPARATOR_END;
  }

  octokit.rest.pulls.update({
    owner: core.getInput("repo-owner") || github.context.repo.owner,
    repo: core.getInput("repo") || github.context.repo.repo,
    pull_number: core.getInput("pr-number") || github.context.issue.number,
    body: body,
  });
})().catch((err) => core.setFailed(err));
