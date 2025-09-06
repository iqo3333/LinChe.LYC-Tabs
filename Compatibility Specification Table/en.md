# Browser Compatibility

This website is built using HTML5, CSS3 (including liquid glass effects), ES6 JavaScript, and some advanced CSS features (such as `backdrop-filter`, `will-change`).

To ensure full functionality and effect display, the minimum supported browser versions are as follows:

| Feature                                                       | Chrome | Edge (Chromium) | Safari |          IE         |
| ------------------------------------------------------------- | :----: | :-------------: | :----: | :-----------------: |
| ES6 Syntax (`const/let`, Arrow functions, Template literals)  |   49+  |       15+       |   10+  |   ❌ Not Supported   |
| Unicode Regex (`\p{L}`, `\p{N}` for domain/keyword detection) |   64+  |       79+       |   12+  |   ❌ Not Supported   |
| `backdrop-filter` / `-webkit-backdrop-filter`                 |   76+  |       79+       |   9+   |   ❌ Not Supported   |
| `will-change`                                                 |   36+  |       79+       |   9+   |  ❌ Partial Support  |
| Flex Layout                                                   |   29+  |       12+       |   9+   |  10+ Basic Support  |
| MutationObserver                                              |   11+  |       79+       |   12+  | 10+ Partial Support |
| CSS Variables (`var(--dynamic-text-color)`)                   |   49+  |       15+       |   9+   |   ❌ Not Supported   |

⚠️ Notes:

* IE browsers do not support ES6, CSS variables, or Unicode Regex, which may cause certain features not to function.
* `backdrop-filter` is not supported in IE, and the liquid glass effect will not be displayed.
* Older versions of Safari (<12) and Chromium Edge (<79) cannot properly detect Unicode domain names or keywords.
* Older browsers may still load the website, but visual effects and input validation features may be limited.

For the best experience and animation effects, we recommend using **Chrome 100+ / Safari 15+ / Edge 100+**.
