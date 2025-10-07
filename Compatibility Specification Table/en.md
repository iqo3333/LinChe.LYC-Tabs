# Browser Compatibility

This website is built with HTML5, CSS3 (including glass effect), ES6 JavaScript, and some advanced CSS features (like `backdrop-filter` and `will-change`).

To ensure full functionality and proper visual effects, the minimum supported browser versions are as follows:

| Feature                                        | Chrome | Edge (Chromium) | Safari | IE          |
| --------------------------------------------- | :----: | :-------------: | :----: | :--------: |
| ES6 Syntax (`const/let`, arrow functions, template literals) | <span style="color:green">✅ 49+</span> | <span style="color:green">✅ 15+</span> | <span style="color:green">✅ 10+</span> | <span style="color:red">❌ Not Supported</span> |
| Unicode Regex (`\p{L}`, `\p{N}` for domain/keyword detection) | <span style="color:green">✅ 64+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 12+</span> | <span style="color:red">❌ Not Supported</span> |
| `backdrop-filter` / `-webkit-backdrop-filter` | <span style="color:green">✅ 76+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:red">❌ Not Supported</span> |
| `will-change`                                 | <span style="color:green">✅ 36+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:orange">⚠️ Partial Support</span> |
| Flex Layout                                   | <span style="color:green">✅ 29+</span> | <span style="color:green">✅ 12+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:orange">⚠️ Basic Support</span> |
| MutationObserver                              | <span style="color:green">✅ 11+</span> | <span style="color:green">✅ 79+</span> | <span style="color:green">✅ 12+</span> | <span style="color:orange">⚠️ Partial Support</span> |
| CSS Variables (`var(--dynamic-text-color)`)    | <span style="color:green">✅ 49+</span> | <span style="color:green">✅ 15+</span> | <span style="color:green">✅ 9+</span>  | <span style="color:red">❌ Not Supported</span> |

⚠️ Notes:

* IE browsers do **not support** ES6, CSS variables, or Unicode regex; some features may not work.  
* `backdrop-filter` is not supported in IE, so the glass effect will not appear.  
* Older Safari (<12) and Chromium Edge (<79) cannot properly recognize Unicode domains or keywords.  
* Older browsers may still open the website, but visual effects and input validation may be limited.  

Recommended browsers for the best experience and animations: **Chrome 100+ / Safari 15+ / Edge 100+**.  

⚠️ Warning: This report applies to version "Ver.8.1.0" and earlier. Compatibility with later versions is **not guaranteed**.
