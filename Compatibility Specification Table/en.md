# Browser Compatibility

This website is built using HTML5, CSS3, ES6 JavaScript, and some advanced CSS features (such as `will-change`).

To ensure full functionality and visual effects, the minimum supported browser versions are as follows:

| Feature                                            | Chrome       | Edge (Chromium) | Safari         | IE           |
|--------------------------------------------------|--------------|-----------------|----------------|--------------|
| **ES6 Syntax** (`const/let`, arrow functions, template literals) | ✅ 49+        | ✅ 15+           | ✅ 10+          | ❌ Not Supported |
| **Unicode Regular Expressions** (`\p{L}`, `\p{N}` for domain name detection) | ✅ 64+        | ✅ 79+           | ✅ 12+          | ❌ Not Supported |
| **`will-change`**                                  | ✅ 36+        | ✅ 79+           | ✅ 9+           | ⚠️ Partial Support |
| **Flexbox Layout**                                  | ✅ 29+        | ✅ 12+           | ✅ 9+           | ⚠️ Basic Support |
| **`MutationObserver`**                              | ✅ 11+        | ✅ 79+           | ✅ 12+          | ⚠️ Partial Support |
| **Background Video (`<video>` Tag)**              | ✅ 4+         | ✅ 12+           | ✅ 9+           | ❌ Not Supported |
| **Event Listeners and DOM Manipulation**          | ✅ 49+        | ✅ 15+           | ✅ 10+          | ⚠️ Partial Support |

⚠️ Note:

* Internet Explorer (IE) browsers do not support ES6, CSS Variables, and Unicode regular expressions, and some features may not work.
* Background Video: The `<video>` tag is supported from IE 9 onwards, but older versions of IE may not fully support video backgrounds.
* Event listeners and DOM manipulation: These JavaScript features are widely supported in modern browsers, but IE has limited support for features like `MutationObserver`.
* `will-change`: This feature is supported in modern browsers for optimizing animations and transitions, but it is only partially supported in IE, and its performance may vary.
* Older versions of Safari (<12) and Chromium Edge (<79) may not properly recognize Unicode domain names or keywords.  
* Older browsers may still open the website, but visual effects and input validation features may be limited.

It is recommended to use **Chrome 100+ / Safari 15+ / Edge 100+** for the best experience and animation effects.

⚠️ Note: This report is applicable to "Ver.9.0.0" and earlier versions and does not guarantee compatibility for subsequent versions!
