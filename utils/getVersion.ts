// https://github.com/microsoft/playwright/blob/v1.41.2/README.md
// https://github.com/microsoft/vscode/blob/release/1.87/package.json

// 1. 获取 vscode oss 所有形如 release/xxx 相关的分支列表。
import { Octokit } from "octokit";

// 因为是开源的，所以似乎不用 token
// const ISSUE_TOKEN = "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";

const octokit = new Octokit();

async function getBranches() {
  try {
    const response = await octokit.request(
      "GET /repos/{owner}/{repo}/branches",
      {
        owner: "microsoft",
        repo: "vscode",
      }
    );

    console.log(response.data.length);

    const branches = response.data.filter((branch: any) => {
      return branch.name.startsWith("release/");
    });

    console.log(branches);
  } catch (error) {
    console.error("Error getting release branches:", error);
  }
}

// getBranches();

// 2. 获取对应版本的 playwright-core 版本
const url =
  "https://github.com/microsoft/playwright/blob/v1.41.2/README.md?plain=1";

async function getPlaywrightCoreVersion() {
  const response = await fetch(url);
  const text = await response.text();
  console.log(
    parseMarkdownTable(JSON.parse(text)?.payload?.blob?.rawLines?.join("\n"))
  );
}

function parseMarkdownTable(markdown) {
  console.log(markdown);
  const regex = /\|(.+)\|\n\|([\s:-]+)\|\n((?:\|.+?\|\n)+)/g;
  const headers = regex
    .exec(markdown)?.[1]
    ?.split("|")
    .map((header) => header.trim())
    .slice(1, -1);
  const rows = [];
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    const cells = match[3].split("|").map((cell) => cell.trim());
    const row = cells.slice(1, -1).map((cell) => {
      if (cell === ":white_check_mark:") {
        return true;
      } else if (cell === ":x:") {
        return false;
      } else {
        return cell;
      }
    });
    rows.push(row);
  }
  const data = { headers, rows };
  return data;
}

getPlaywrightCoreVersion();

// 3. 获取 playwright 对应版本支持的浏览器列表
