# 浏览器兼容性

本网站基于 HTML5、CSS3（含玻璃效果）、ES6 JavaScript 及部分高级 CSS 特性（如 `backdrop-filter`、`will-change`）构建。

为了保证功能和效果完整展示，最低支持的浏览器版本如下：

| 功能                                            | Chrome | Edge (Chromium) | Safari |    IE    |
| --------------------------------------------- | :----: | :-------------: | :----: | :------: |
| ES6 语法 (`const/let`, 箭头函数, 模板字符串)             |   49+  |       15+       |   10+  |   ❌ 不支持  |
| Unicode 正则 (`\p{L}`, `\p{N}` 用于域名/关键词检测)      |   64+  |       79+       |   12+  |   ❌ 不支持  |
| `backdrop-filter` / `-webkit-backdrop-filter` |   76+  |       79+       |   9+   |   ❌ 不支持  |
| `will-change`                                 |   36+  |       79+       |   9+   |  ❌ 部分支持  |
| Flex 布局                                       |   29+  |       12+       |   9+   | 10+ 基本支持 |
| MutationObserver                              |   11+  |       79+       |   12+  | 10+ 部分支持 |
| CSS 变量 (`var(--dynamic-text-color)`)          |   49+  |       15+       |   9+   |   ❌ 不支持  |

⚠️ 注意:

* IE 系列浏览器完全不支持 ES6、CSS 变量和 Unicode 正则，页面功能可能无法运行。
* `backdrop-filter` 在 IE 中不支持，液态玻璃效果无法呈现。
* 旧版 Safari (<12) 和 Chromium Edge (<79) 无法正常识别 Unicode 中文域名或关键词。
* 旧版浏览器可能仍能打开网站，但视觉效果和输入验证功能可能受限。

推荐使用 **Chrome 100+ / Safari 15+ / Edge 100+**，以获得最佳体验和动画效果。
