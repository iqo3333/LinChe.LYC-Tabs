# 兼容性规格表

本网站基于 **HTML5**、**CSS3**、**JavaScript (ES6+)** 及部分高级 **CSS 动画/布局特性** 构建。

为了保证功能和效果完整展示，最低支持的浏览器版本如下：

| 功能模块 | Chrome | Edge | Firefox | Safari | iOS Safari | Android Chrome | 备注 |
|----------|:------:|:----:|:-------:|:------:|:----------:|:--------------:|------|
| 精准网络时间 (`fetch` + `async/await`) | ✅ 55+ | ✅ 15+ | ✅ 52+ | ✅ 10.1+ | ✅ 10.3+ | ✅ 55+ | 多网络时间源自动切换，网络不可用时使用本地时间 |
| Optional Chaining (`?.`) | ✅ 80+ | ✅ 80+ | ✅ 74+ | ✅ 13.1+ | ✅ 13.4+ | ✅ 80+ | **使用的新语法，决定最低完整 JS 兼容版本** |
| 农历计算 (JS) | ✅ 1+ | ✅ 12+ | ✅ 1+ | ✅ 3+ | ✅ 3+ | ✅ 42+ | 纯 JavaScript 计算，高兼容性 |
| 时间 & 日期显示 (`Date` + `toLocaleTimeString`) | ✅ 46+ | ✅ 12+ | ✅ 29+ | ⚠️ 10+ | ⚠️ 10+ | ✅ 46+ | Safari 旧版本本地化日期格式可能略有差异 |
| 高精度时间刷新 (`performance.now` + `requestAnimationFrame`) | ✅ 24+ | ✅ 12+ | ✅ 23+ | ✅ 6+ | ✅ 6+ | ✅ 42+ | 用于时间连续刷新及动画性能优化 |
| 搜索引擎跳转 (`window.open` + 正则) | ✅ 1+ | ✅ 12+ | ✅ 1+ | ✅ 3+ | ✅ 3+ | ✅ 42+ | JS 必须启用 |
| DOM 操作 (`querySelector` + `classList` + `dataset`) | ✅ 1+ | ✅ 12+ | ✅ 3+ | ✅ 3+ | ✅ 3+ | ✅ 42+ | 包括搜索引擎选择、背景选择等交互 |
| 元素查找 (`Element.closest`) | ✅ 41+ | ✅ 15+ | ✅ 35+ | ✅ 9+ | ✅ 9.3+ | ✅ 41+ | 用于搜索及快捷入口事件处理 |
| 本地存储 (`localStorage`) | ✅ 4+ | ✅ 12+ | ✅ 3.5+ | ✅ 4+ | ✅ 3.2+ | ✅ 42+ | 保存搜索引擎及背景等用户偏好 |
| 动态背景 (`<img>` + `<video>`) | ✅ 31+ | ✅ 12+ | ✅ 30+ | ⚠️ 10+ | ⚠️ 10+ | ✅ 42+ | 根据背景类型自动切换图片/视频 |
| 视频背景自动播放 (`autoplay` + `muted` + `playsinline`) | ✅ 53+ | ✅ 79+ | ✅ 66+ | ⚠️ 10+ | ⚠️ 10+ | ✅ 53+ | 移动端自动播放依赖静音及浏览器策略 |
| CSS Grid 快捷入口布局 | ✅ 57+ | ✅ 16+ | ✅ 52+ | ✅ 10.1+ | ✅ 10.3+ | ✅ 57+ | 用于快捷方式网格布局 |
| 毛玻璃效果 (`backdrop-filter`) | ✅ 76+ | ✅ 79+ | ✅ 103+ | ✅ 9+ | ✅ 9+ | ✅ 76+ | 旧版浏览器可能显示为普通半透明背景 |
| CSS Transform / Transition | ✅ 26+ | ✅ 12+ | ✅ 16+ | ✅ 9+ | ✅ 9+ | ✅ 42+ | 用于菜单、按钮及交互效果 |
| 移动端触摸控制 (`touchstart` / `touchmove` / `touchend`) | ❌ | ❌ | ⚠️ | ⚠️ 10+ | ⚠️ 10+ | ⚠️ 42+ | 主要用于移动端手势及缩放控制，桌面端不适用 |
| Safari 手势控制 (`gesturestart`) | ❌ | ❌ | ❌ | ⚠️ 10+ | ⚠️ 10+ | ❌ | 主要针对 Safari 双指捏合缩放 |
| 背景动态切换 (`video.play()` + `load()`) | ✅ 31+ | ✅ 79+ | ✅ 30+ | ⚠️ 10+ | ⚠️ 10+ | ✅ 42+ | 视频播放失败时由浏览器策略决定，不影响图片背景 |
| ES6+ JavaScript | ✅ 80+ | ✅ 80+ | ✅ 74+ | ✅ 13.1+ | ✅ 13.4+ | ✅ 80+ | 结合 `const`、`let`、箭头函数、模板字符串、Optional Chaining 等语法 |

## 总体建议

### 1. 桌面端

- **推荐浏览器：**
  - Chrome **100+**
  - Edge **100+**
  - Firefox **100+**
  - Safari **15+**

- **最低完整兼容：**
  - Chrome **80+**
  - Edge **80+**
  - Firefox **74+**
  - Safari **13.1+**

Chrome / Edge / Firefox 的最低版本主要受 `Optional Chaining (?.)` 影响；低于对应版本时，JavaScript 可能直接出现语法解析错误，从而导致页面交互功能无法正常运行。

### 2. 移动端

- **推荐：**
  - iOS Safari **15+**
  - Android Chrome **100+**

- **最低完整兼容：**
  - iOS Safari **13.4+**
  - Android Chrome **80+**

- 视频背景已经使用：

  `autoplay` + `loop` + `muted` + `playsinline`

  因此对移动端自动播放的兼容性已经进行了针对性处理，但最终是否自动播放仍受系统及浏览器策略影响。

- 移动端同时包含 `touchstart`、`touchmove`、`touchend` 和 Safari `gesturestart` 相关处理，用于改善触摸及缩放行为。

### 3. 毛玻璃 / 高级视觉效果

Ver.9.1.9.2 的 CSS 中大量使用：

- `backdrop-filter`
- `-webkit-backdrop-filter`
- CSS Grid
- Transform / Transition
- 半透明背景
- `filter`
- `env(safe-area-inset-*)`

因此即使浏览器能够正常运行网站，**较旧浏览器也可能无法完整呈现毛玻璃效果、布局或移动端安全区域适配**。

其中 Firefox 对 `backdrop-filter` 的完整支持相对较晚，因此建议 Firefox 使用 **103+**。

### 4. 不推荐

- **IE 全系列**  
  不支持本版本所需的现代 JavaScript 语法及大量现代 Web API。

- **Chrome < 80**
- **Edge < 80**
- **Firefox < 74**
- **Safari < 13.1**
- **iOS Safari < 13.4**
- **Android Chrome < 80**

这些版本即使部分 HTML/CSS 功能能够运行，也**无法保证 Ver.9.1.9.2 的 JavaScript 主逻辑正常执行**。

> ⚠️ **提示：此表格适用于 MeTab「Ver.9.1.9.2」及更早版本，根据该版本实际 HTML、CSS、JavaScript 文件中的 API、语法及布局特性整理。后续版本如果新增或调整功能，兼容性要求可能发生变化。**
