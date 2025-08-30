# Browser Compatibility

This website is built with HTML5, CSS3 (including glassmorphism effects), ES6 JavaScript, and some advanced CSS features (e.g., `backdrop-filter`, `will-change`).

To ensure full functionality and visual effects, the minimum supported browser versions are:

| Feature | Chrome | Edge (Chromium) | Safari |
|---------|:------:|:---------------:|:------:|
| ES6 Syntax (`const/let`, arrow functions, template strings) | 49+ | 15+ | 10+ |
| Unicode Regex (`\p{L}`, `\p{N}` for domain detection) | 64+ | 79+ | 11+ |
| `backdrop-filter` / `-webkit-backdrop-filter` | 76+ | 79+ | 9+ |
| `will-change` | 36+ | 79+ | 9+ |
| Flex Layout | 29+ | 12+ | 9+ |

⚠️ Note:  
- Older Safari (<11) and Chromium Edge (<79) may not recognize Chinese domains or Unicode keywords.  
- `backdrop-filter` requires Chrome 76+ to fully render glassmorphism effects.  
- Older browsers may still load the site, but some visual effects and input validations may not work.

Recommended to use **Chrome 100+ / Safari 15+ / Edge 100+** for best experience and animations.
