export async function getDependencyVersion(
  owner: string,
  repo: string,
  branch: string,
  packageName: string
): Promise<string | undefined> {
  const url = `https://github.com/${owner}/${repo}/blob/${branch}/package.json?plain=1`;
  console.log("getDependencyVersion", url);
  const response = await fetch(url);
  const pkg =
    JSON.parse(await response.text())?.payload?.blob?.rawLines?.join("\n") ||
    "";
  const regex = new RegExp(`"${packageName}":\\s*"([^"]+)"`);
  const match = pkg.match(regex);

  if (!match) {
    return undefined; // 如果指定的包名不存在，则返回 undefined
  }

  const version = match[1];
  // 第一个字符验证是否是数字，不是的话去除
  return version.replace(/[^0-9.]/g, "");
}

// getDependencyVersion("microsoft", "vscode", "main", "@playwright/test").then(
//   console.log
// );
