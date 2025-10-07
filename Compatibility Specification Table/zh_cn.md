# 浏览器兼容性

本网站基于 HTML5、CSS3（含玻璃效果）、ES6 JavaScript 及部分高级 CSS 特性（如 `backdrop-filter`、`will-change`）构建。

为了保证功能和效果完整展示，最低支持的浏览器版本如下：

| 功能                                            | Chrome | Edge (Chromium) | Safari | IE          |
| --------------------------------------------- | :----: | :-------------: | :----: | :--------: |
| ES6 语法 (`const/let`, 箭头函数, 模板字符串)             | <span style="color:green">✅ 49+</span> | <span style="color:green">✅ 15+</span> | <span style="color:green">✅ 10+</span> | <span style="color:red">❌ 不支持</span> |
| Unicode 正则 (`\p{L}`, `\p{N}` 用于域名/关键词检测)      | <span style="color:green">✅ 64+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 12+</span> | <span style="color:red">❌ 不支持</span> |
| `backdrop-filter` / `-webkit-backdrop-filter` | <span style="color:green">✅ 76+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:red">❌ 不支持</span> |
| `will-change`                                 | <span style="color:green">✅ 36+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:orange">⚠️ 部分支持</span> |
| Flex 布局                                     | <span style="color:green">✅ 29+</span> | <span style="color:green">✅ 12+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:orange">⚠️ 基本支持</span> |
| MutationObserver                              | <span style="color:green">✅ 11+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 12+</span> | <span style="color:orange">⚠️ 部分支持</span> |
| CSS 变量 (`var(--dynamic-text-color)`)        | <span style="color:green">✅ 49+</span> | <span style="color:green">✅ 15+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:red">❌ 不支持</span> |

⚠️ 注意:

* IE 系列浏览器完全不支持 ES6、CSS 变量和 Unicode 正则，页面功能可能无法运行。  
* `backdrop-filter` 在 IE 中不支持，液态玻璃效果无法呈现。  
* 旧版 Safari (<12) 和 Chromium Edge (<79) 无法正常识别 Unicode 中文域名或关键词。  
* 旧版浏览器可能仍能打开网站，但视觉效果和输入验证功能可能受限。  

推荐使用 **Chrome 100+ / Safari 15+ / Edge 100+**，以获得最佳体验和动画效果。

⚠️ 提示：此报告适用于“Ver.8.1.0”及其更早版本，不保证对于后续版本是否兼容的准确性！
