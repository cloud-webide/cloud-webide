// https://github.com/microsoft/playwright/blob/v1.41.2/README.md

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

getBranches();

// 2. 获取对应版本的 playwright-core 版本

// 3. 获取 playwright 对应版本支持的浏览器列表
