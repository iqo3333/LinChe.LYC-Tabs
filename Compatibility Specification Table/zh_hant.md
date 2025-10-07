# 瀏覽器相容性

本網站基於 HTML5、CSS3（含玻璃效果）、ES6 JavaScript 及部分高級 CSS 特性（如 `backdrop-filter`、`will-change`）構建。

為了保證功能和效果完整呈現，最低支援的瀏覽器版本如下：

| 功能                                            | Chrome | Edge (Chromium) | Safari | IE          |
| --------------------------------------------- | :----: | :-------------: | :----: | :--------: |
| ES6 語法 (`const/let`, 箭頭函數, 模板字串)             | <span style="color:green">✅ 49+</span> | <span style="color:green">✅ 15+</span> | <span style="color:green">✅ 10+</span> | <span style="color:red">❌ 不支援</span> |
| Unicode 正則 (`\p{L}`, `\p{N}` 用於網域/關鍵字檢測)      | <span style="color:green">✅ 64+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 12+</span> | <span style="color:red">❌ 不支援</span> |
| `backdrop-filter` / `-webkit-backdrop-filter` | <span style="color:green">✅ 76+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:red">❌ 不支援</span> |
| `will-change`                                 | <span style="color:green">✅ 36+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:orange">⚠️ 部分支援</span> |
| Flex 佈局                                     | <span style="color:green">✅ 29+</span> | <span style="color:green">✅ 12+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:orange">⚠️ 基本支援</span> |
| MutationObserver                              | <span style="color:green">✅ 11+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 12+</span> | <span style="color:orange">⚠️ 部分支援</span> |
| CSS 變數 (`var(--dynamic-text-color)`)        | <span style="color:green">✅ 49+</span> | <span style="color:green">✅ 15+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:red">❌ 不支援</span> |

⚠️ 注意事項：

* IE 系列瀏覽器完全不支援 ES6、CSS 變數和 Unicode 正則，頁面功能可能無法運行。  
* `backdrop-filter` 在 IE 中不支援，液態玻璃效果無法呈現。  
* 舊版 Safari (<12) 和 Chromium Edge (<79) 無法正常識別 Unicode 中文網域或關鍵字。  
* 舊版瀏覽器仍可打開網站，但視覺效果與輸入驗證功能可能受限。  

建議使用 **Chrome 100+ / Safari 15+ / Edge 100+**，以獲得最佳體驗與動畫效果。

⚠️ 提示：此報告適用於「Ver.8.1.0」及其更早版本，不保證對於後續版本的相容性。
