#! /usr/bin/env node
import fetch from "node-fetch";

// Replace with your details
const owner = "enterprisedb";
const repo = "docs";
const token = ""; /*process.env.GITHUB_TOKEN*/ // Optional - if we ever need to make authenticated requests

async function getLatestReleaseDate(owner, repo, token) {
  const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
  const headers = token ? { Authorization: `token ${token}` } : {};
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`Error fetching latest release: ${response.statusText}`);
  }
  const data = await response.json();
  return new Date(data.published_at);
}

async function getMergedPullRequestsSince(owner, repo, sinceDate, token) {
  const url = `https://api.github.com/repos/${owner}/${repo}/pulls`;
  const headers = token ? { Authorization: `token ${token}` } : {};
  const params = new URLSearchParams({
    state: "closed",
    base: "develop",
    sort: "updated",
    direction: "desc",
  });
  const response = await fetch(`${url}?${params.toString()}`, { headers });
  if (!response.ok) {
    throw new Error(`Error fetching pull requests: ${response.statusText}`);
  }
  const pulls = await response.json();
  const mergedPulls = pulls.filter(
    (pr) => pr.merged_at && new Date(pr.merged_at) > sinceDate,
  );
  var finalpulls = mergedPulls.map((pr) => `#${pr.number} : ${pr.title}`);
  return finalpulls;
}

async function main() {
  try {
    const latestReleaseDate = await getLatestReleaseDate(owner, repo, token);
    const pulls = await getMergedPullRequestsSince(
      owner,
      repo,
      latestReleaseDate,
      token,
    );
    for (const pull of pulls) {
      console.log(pull);
    }
    console.log();
    console.log(
      `Number of merged pull requests since the last release: ${pulls.length}`,
    );
  } catch (error) {
    console.error("Error fetching data from GitHub API:", error);
  }
}

main();
