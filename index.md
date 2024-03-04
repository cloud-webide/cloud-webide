---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VS Code support browser version list."
  text: "Extract data from github."
  # tagline: My great project tagline
#   actions:
#     - theme: brand
#       text: Markdown Examples
#       link: /markdown-examples
#     - theme: alt
#       text: API Examples
#       link: /api-examples

# features:
#   - title: Feature A
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature B
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#   - title: Feature C
#     details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

![image](https://github.com/microsoft/vscode/assets/11473889/19a753da-8f2a-499b-8bef-12fbe39daad5)

VS Code 官方给了 A good indication: 通过 VS Code 依赖的 playwright 查看兼容的浏览器版本。

于是就有了该 Side Project: 用脚本自动去扫 vscode 依赖的 playwright 版本 => 找 playwright 支持的浏览器信息 => 再汇总到一个地方，以后 vscode 每升级一个版本就自动去抓取一次信息。

<!-- 对浏览器兼容性查看描述来源于 issu -->

以下是最新的结果（但是需要注意的是，这样的查询结果仅仅是 VS Code 官方执行过测试任务的最低浏览器版本，并不意味着 VS Code for the Web 可支持的最低版本）：

<!-- VSCODE_VERSION_START -->

### 1.87

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->120.0.6099.28<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->17.4<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->119.0<!-- GEN:stop -->           | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.86

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->120.0.6099.28<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->17.4<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->119.0<!-- GEN:stop -->           | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.85

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->116.0.5845.82<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->17.0<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->115.0<!-- GEN:stop -->           | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.84

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->116.0.5845.82<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->17.0<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->115.0<!-- GEN:stop -->           | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.83

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->116.0.5845.82<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->17.0<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->115.0<!-- GEN:stop -->           | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.82

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->114.0.5735.35<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->16.4<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->113.0<!-- GEN:stop -->           | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.81

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->114.0.5735.35<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->16.4<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->113.0<!-- GEN:stop -->           | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.80

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->114.0.5735.35<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->16.4<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->113.0<!-- GEN:stop -->           | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.79

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->112.0.5615.29<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->16.4<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->111.0<!-- GEN:stop -->           | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.79-insiders

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->112.0.5615.29<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->16.4<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->111.0<!-- GEN:stop -->           | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.78

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->112.0.5615.29<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->16.4<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->111.0<!-- GEN:stop -->           | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.77

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->107.0.5304.18<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->16.0<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->105.0.1<!-- GEN:stop -->         | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.76

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->107.0.5304.18<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->16.0<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->105.0.1<!-- GEN:stop -->         | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.75

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->107.0.5304.18<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->16.0<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->105.0.1<!-- GEN:stop -->         | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.74

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->107.0.5304.18<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->16.0<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->105.0.1<!-- GEN:stop -->         | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.73

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->107.0.5304.18<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->16.0<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->105.0.1<!-- GEN:stop -->         | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.72

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->106.0.5249.30<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->16.0<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->104.0<!-- GEN:stop -->           | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.71

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->104.0.5112.48<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->16.0<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->102.0<!-- GEN:stop -->           | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.70

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->101.0.4951.15<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->15.4<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->98.0.2<!-- GEN:stop -->          | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.69

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->101.0.4951.15<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->15.4<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->98.0.2<!-- GEN:stop -->          | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.68

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->101.0.4951.15<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->15.4<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->98.0.2<!-- GEN:stop -->          | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.67

|                                                                      |       Linux        |       macOS        |      Windows       |
| :------------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->101.0.4951.15<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->15.4<!-- GEN:stop -->              | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->98.0.2<!-- GEN:stop -->          | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.66

|                                                                    |       Linux        |       macOS        |      Windows       |
| :----------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->99.0.4812.0<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->15.4<!-- GEN:stop -->            | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->95.0<!-- GEN:stop -->          | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.65

|                                                                    |       Linux        |       macOS        |      Windows       |
| :----------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->99.0.4812.0<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->15.4<!-- GEN:stop -->            | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->95.0<!-- GEN:stop -->          | :white_check_mark: | :white_check_mark: | :white_check_mark: |

### 1.64

|                                                                    |       Linux        |       macOS        |      Windows       |
| :----------------------------------------------------------------- | :----------------: | :----------------: | :----------------: |
| Chromium <!-- GEN:chromium-version -->99.0.4812.0<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->15.4<!-- GEN:stop -->            | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->95.0<!-- GEN:stop -->          | :white_check_mark: | :white_check_mark: | :white_check_mark: |

<!-- VSCODE_VERSION_END -->
