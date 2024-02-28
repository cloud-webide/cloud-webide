// 1. 获取 vscode oss 所有形如 release/xxx 相关的分支列表。
import { Octokit } from "octokit";

// 因为是开源的，所以似乎不用 token
// const ISSUE_TOKEN = "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";

// 因为是开源的，所以似乎不用 token
// const ISSUE_TOKEN = "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";

export const octokit = new Octokit();

export async function getReleaseBranches(
  owner: string,
  repo: string
): Promise<string[]> {
  let page = 1;
  let releaseBranches: string[] = [];

  while (true) {
    const branchesResponse = await octokit.request(
      "GET /repos/{owner}/{repo}/branches",
      {
        owner: owner,
        repo: repo,
        per_page: 100, // 设置每页返回 100 个分支
        page: page,
      }
    );

    const branches = branchesResponse.data;
    const filteredBranches = branches
      .filter((branch: any) => {
        return branch.name.startsWith("release/");
      })
      .map((branch: any) => branch.name);

    releaseBranches = releaseBranches.concat(filteredBranches);

    if (branches.length < 100) {
      break; // 已经获取了所有分支，退出循环
    }

    page++;
  }

  return releaseBranches;
}

// getReleaseBranches(params.owner, params.repo).then((res) => {
//   // TODO: 需要过滤掉类似 'release/1.46-playwright' 这种不符合版本规范的分支
//   console.log(res);
// });
// TODO: 请求结果也可以缓存一下。
