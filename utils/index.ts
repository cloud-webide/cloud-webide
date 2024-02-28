// https://github.com/microsoft/playwright/blob/v1.41.2/README.md
// https://github.com/microsoft/vscode/blob/release/1.87/package.json

import fs from "fs";
import path from "path";
import { repoInfo } from "./config";
import { getReleaseBranches } from "./branch";
import { getDependencyVersion } from "./npmVersion";
import { getTableDataFromMarkdown } from "./markdown";

const isTest = true;
async function main() {
  // 1. 获取 vscode oss 所有形如 release/xxx 相关的分支列表。

  let branches;
  if (!isTest) {
    branches = await getReleaseBranches(repoInfo.owner, repoInfo.repo);
  } else {
    branches = require(path.resolve(__dirname, "../data/branches.json"))?.data;
  }

  // 读取 data/release 文件夹，如果已经存在的 xxx.xx.xx.json 就剔除对应的 branch.
  const files = await fs.promises.readdir(
    path.resolve(__dirname, "../data/release")
  );

  const cache = {};
  // 读取文件
  await Promise.all(
    files.map(async (name) => {
      const data = await fs.promises.readFile(
        path.resolve(__dirname, "../data/release", name),
        "utf-8"
      );
      const key = name.replace(".md", "");
      cache[key] = data;
    })
  );

  branches = branches
    .reverse()
    .filter((item) => !cache[item.replace("release/", "")])
    .slice(0, 2);

  // console.log("已有数据：", cache);
  // console.log("已有数据：", files);
  console.log("继续请求：", branches);

  // return;

  // 去除 release/ 前缀，通过正则剔除
  const _branches = branches.map((item) => item.replace("release/", ""));

  console.log("获取 github 分支信息：", branches);

  // 2. 获取这些版本的 vscode 中依赖的 playwright 版本。
  const data = await Promise.all(
    branches.map(async (branch) => {
      const version = await getDependencyVersion(
        repoInfo.owner,
        repoInfo.repo,
        branch,
        "@playwright/test"
      );
      return version;
    })
  );

  console.log("获取 vscode 安装的 playwright 版本：", data);

  return;

  // 3. 获取对应 playwright 版本的支持浏览器信息。
  const browserData = await Promise.all(
    data.map(async (version, index) => {
      const codeVersion = _branches[index];
      if (cache[codeVersion]) {
        return cache[codeVersion];
      }

      const release = await getTableDataFromMarkdown(version!);
      // 写入data 文件中存起来
      await fs.promises.writeFile(
        `./data/release/${codeVersion}.json`,
        release.data,
        "utf-8"
      );
      cache[codeVersion] = release.data;
      return release.data;
    })
  );

  console.log(browserData);

  // 4. 组装为新的结果 markdown

  const res = browserData
    .map((item, index) => {
      // if (cache[_branches[index]]) {
      //   return "";
      // }
      // cache[_branches[index]] = true;
      return `### ${_branches[index]}\n ${item}`;
    })
    .filter(Boolean)
    .join("\n\n");

  console.log(res);

  // 5. 写入到文件
  // 读取 index.md 文件并替换其中的 <!-- VSCODE_VERSION_START --> 和 <!-- VSCODE_VERSION_END --> 中间部分内容
  const oldContent = (await fs.promises.readFile("./index.md", "utf-8")).split(
    "\n"
  );

  console.log(oldContent);
  const startIndex = oldContent.findIndex(
    (line) => line.indexOf("<!-- VSCODE_VERSION_START -->") > -1
  );
  const endIndex = oldContent.findIndex(
    (line) => line.indexOf("<!-- VSCODE_VERSION_END -->") > -1
  );

  console.log(startIndex, endIndex);

  const content =
    oldContent.slice(0, startIndex + 1).join("\n") +
    "\n" +
    res +
    "\n" +
    oldContent.slice(endIndex).join("\n");

  console.log(content);

  // 替换掉 index.md 文件中的 <!-- VSCODE_VERSION_START --> 和 <!-- VSCODE_VERSION_END --> 中间部分内容
  await fs.promises.writeFile("./index.md", content, "utf-8");
}

main();
