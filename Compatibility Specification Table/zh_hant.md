# 瀏覽器相容性

本網站基於 HTML5、CSS3（含液態玻璃效果）、ES6 JavaScript 及部分高級 CSS 特性（如 `backdrop-filter`、`will-change`）構建。

為了保證功能和效果完整展示，最低支持的瀏覽器版本如下：

| 功能                                            | Chrome | Edge (Chromium) | Safari |    IE    |
| --------------------------------------------- | :----: | :-------------: | :----: | :------: |
| ES6 語法 (`const/let`, 箭頭函數, 模板字符串)             |   49+  |       15+       |   10+  |   ❌ 不支持  |
| Unicode 正則 (`\p{L}`, `\p{N}` 用於域名/關鍵詞檢測)      |   64+  |       79+       |   12+  |   ❌ 不支持  |
| `backdrop-filter` / `-webkit-backdrop-filter` |   76+  |       79+       |   9+   |   ❌ 不支持  |
| `will-change`                                 |   36+  |       79+       |   9+   |  ❌ 部分支持  |
| Flex 布局                                       |   29+  |       12+       |   9+   | 10+ 基本支持 |
| MutationObserver                              |   11+  |       79+       |   12+  | 10+ 部分支持 |
| CSS 變數 (`var(--dynamic-text-color)`)          |   49+  |       15+       |   9+   |   ❌ 不支持  |

⚠️ 注意:

* IE 系列瀏覽器完全不支持 ES6、CSS 變數和 Unicode 正則，頁面功能可能無法運行。
* `backdrop-filter` 在 IE 中不支持，液態玻璃效果無法呈現。
* 舊版 Safari (<12) 和 Chromium Edge (<79) 無法正常識別 Unicode 中文域名或關鍵詞。
* 舊版瀏覽器可能仍能打開網站，但視覺效果和輸入驗證功能可能受限。

建議使用 **Chrome 100+ / Safari 15+ / Edge 100+**，以獲得最佳體驗和動畫效果。
