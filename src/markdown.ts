// {
//   "1.87": "https://github.com/microsoft/playwright/blob/v1.41.2/README.md",
//   "1.86": "https://github.com/microsoft/playwright/blob/v1.41.2/README.md"
// }

// 2. 获取对应版本的 playwright-core 版本
export async function getTableDataFromMarkdown(playwrightVersion: string) {
  const url = `https://github.com/microsoft/playwright/blob/v${playwrightVersion}/README.md?plain=1`;
  const response = await fetch(url);
  const text = await response.text();
  const res = extractMarkdownTable(JSON.parse(text)?.payload?.blob?.rawLines);

  return {
    data: res,
    playwrightVersion,
  };
}

function extractMarkdownTable(lines: string[] = []): string {
  let tableStarted = false;
  let result = "";

  for (const line of lines) {
    if (line.startsWith("|")) {
      if (!tableStarted) {
        result += line + "\n";
        tableStarted = true;
      } else {
        result += line + "\n";
      }
    } else if (tableStarted) {
      break;
    }
  }

  return result.trim();
}

// 1.41.2
// getTableDataFromMarkdown("1.41.2");

// 3. 获取 playwright 对应版本支持的浏览器列表

const MAX_BRANCHS_NUM = 5;
const isTest = true;
// async function main() {
//   // 1. 获取最新的 5 个分支
//   const branches = (isTest
//     ? require("./branches.json")?.data
//     : await getReleaseBranches(params.owner, params.repo)).reverse().slice(0, MAX_BRANCHS_NUM);

//   console.log('branches', branches);

//   // 2. 获取对应分支的 package.json 中 playwright-core 版本号
// }

const testUrl = `https://github.com/microsoft/vscode/blob/release/1.87/package.json?plain=1`;

interface PackageJson {
  devDependencies?: Record<string, string>;
  dependencies?: Record<string, string>;
}

function normalizeJson(jsonString: string): string {
  return jsonString.replace(/\\"/g, '"');
}
