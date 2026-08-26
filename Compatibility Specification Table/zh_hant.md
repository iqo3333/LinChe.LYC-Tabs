# 相容性規格表

本網站基於 **HTML5**、**CSS3**、**JavaScript (ES6+)** 及部分高階 **CSS 動畫／佈局特性** 構建。

為了保證功能和效果完整展示，最低支援的瀏覽器版本如下：

| 功能模組 | Chrome | Edge | Firefox | Safari | iOS Safari | Android Chrome | 備註 |
|----------|:------:|:----:|:-------:|:------:|:----------:|:--------------:|------|
| 精準網路時間 (`fetch` + `async/await`) | ✅ 55+ | ✅ 15+ | ✅ 52+ | ✅ 10.1+ | ✅ 10.3+ | ✅ 55+ | 多網路時間來源自動切換，網路不可用時使用本地時間 |
| Optional Chaining (`?.`) | ✅ 80+ | ✅ 80+ | ✅ 74+ | ✅ 13.1+ | ✅ 13.4+ | ✅ 80+ | **使用的新語法，決定最低完整 JS 相容版本** |
| 農曆計算 (JS) | ✅ 1+ | ✅ 12+ | ✅ 1+ | ✅ 3+ | ✅ 3+ | ✅ 42+ | 純 JavaScript 計算，高相容性 |
| 時間 & 日期顯示 (`Date` + `toLocaleTimeString`) | ✅ 46+ | ✅ 12+ | ✅ 29+ | ⚠️ 10+ | ⚠️ 10+ | ✅ 46+ | Safari 舊版本本地化日期格式可能略有差異 |
| 高精度時間重新整理 (`performance.now` + `requestAnimationFrame`) | ✅ 24+ | ✅ 12+ | ✅ 23+ | ✅ 6+ | ✅ 6+ | ✅ 42+ | 用於時間連續重新整理及動畫效能最佳化 |
| 搜尋引擎跳轉 (`window.open` + 正則) | ✅ 1+ | ✅ 12+ | ✅ 1+ | ✅ 3+ | ✅ 3+ | ✅ 42+ | 必須啟用 JS |
| DOM 操作 (`querySelector` + `classList` + `dataset`) | ✅ 1+ | ✅ 12+ | ✅ 3+ | ✅ 3+ | ✅ 3+ | ✅ 42+ | 包括搜尋引擎選擇、背景選擇等互動 |
| 元素查找 (`Element.closest`) | ✅ 41+ | ✅ 15+ | ✅ 35+ | ✅ 9+ | ✅ 9.3+ | ✅ 41+ | 用於搜尋及快速入口事件處理 |
| 本地儲存 (`localStorage`) | ✅ 4+ | ✅ 12+ | ✅ 3.5+ | ✅ 4+ | ✅ 3.2+ | ✅ 42+ | 儲存搜尋引擎及背景等使用者偏好 |
| 動態背景 (`<img>` + `<video>`) | ✅ 31+ | ✅ 12+ | ✅ 30+ | ⚠️ 10+ | ⚠️ 10+ | ✅ 42+ | 根據背景類型自動切換圖片／影片 |
| 影片背景自動播放 (`autoplay` + `muted` + `playsinline`) | ✅ 53+ | ✅ 79+ | ✅ 66+ | ⚠️ 10+ | ⚠️ 10+ | ✅ 53+ | 行動端自動播放依賴靜音及瀏覽器策略 |
| CSS Grid 快速入口佈局 | ✅ 57+ | ✅ 16+ | ✅ 52+ | ✅ 10.1+ | ✅ 10.3+ | ✅ 57+ | 用於快速方式網格佈局 |
| 毛玻璃效果 (`backdrop-filter`) | ✅ 76+ | ✅ 79+ | ✅ 103+ | ✅ 9+ | ✅ 9+ | ✅ 76+ | 舊版瀏覽器可能顯示為普通半透明背景 |
| CSS Transform / Transition | ✅ 26+ | ✅ 12+ | ✅ 16+ | ✅ 9+ | ✅ 9+ | ✅ 42+ | 用於選單、按鈕及互動效果 |
| 行動端觸控控制 (`touchstart` / `touchmove` / `touchend`) | ❌ | ❌ | ⚠️ | ⚠️ 10+ | ⚠️ 10+ | ⚠️ 42+ | 主要用於行動端手勢及縮放控制，桌面端不適用 |
| Safari 手勢控制 (`gesturestart`) | ❌ | ❌ | ❌ | ⚠️ 10+ | ⚠️ 10+ | ❌ | 主要針對 Safari 雙指捏合縮放 |
| 背景動態切換 (`video.play()` + `load()`) | ✅ 31+ | ✅ 79+ | ✅ 30+ | ⚠️ 10+ | ⚠️ 10+ | ✅ 42+ | 影片播放失敗時由瀏覽器策略決定，不影響圖片背景 |
| ES6+ JavaScript | ✅ 80+ | ✅ 80+ | ✅ 74+ | ✅ 13.1+ | ✅ 13.4+ | ✅ 80+ | 結合 `const`、`let`、箭頭函式、樣板字串、Optional Chaining 等語法 |

## 總體建議

### 1. 桌面端

- **推薦瀏覽器：**
  - Chrome **100+**
  - Edge **100+**
  - Firefox **100+**
  - Safari **15+**

- **最低完整相容：**
  - Chrome **80+**
  - Edge **80+**
  - Firefox **74+**
  - Safari **13.1+**

Chrome / Edge / Firefox 的最低版本主要受 `Optional Chaining (?.)` 影響；低於對應版本時，JavaScript 可能直接出現語法解析錯誤，從而導致頁面互動功能無法正常執行。

### 2. 行動端

- **推薦：**
  - iOS Safari **15+**
  - Android Chrome **100+**

- **最低完整相容：**
  - iOS Safari **13.4+**
  - Android Chrome **80+**

- 影片背景已經使用：

  `autoplay` + `loop` + `muted` + `playsinline`

  因此針對行動端自動播放的相容性已經進行了針對性處理，但最終是否自動播放仍受系統及瀏覽器策略影響。

- 行動端同時包含 `touchstart`、`touchmove`、`touchend` 和 Safari `gesturestart` 相關處理，用於改善觸控及縮放行為。

### 3. 毛玻璃／高階視覺效果

Ver.9.1.9.2 的 CSS 中大量使用：

- `backdrop-filter`
- `-webkit-backdrop-filter`
- CSS Grid
- Transform / Transition
- 半透明背景
- `filter`
- `env(safe-area-inset-*)`

因此即使瀏覽器能夠正常執行網站，**較舊瀏覽器也可能無法完整呈現毛玻璃效果、佈局或行動端安全區域適配**。

其中 Firefox 對 `backdrop-filter` 的完整支援相對較晚，因此建議 Firefox 使用 **103+**。

### 4. 不推薦

- **IE 全系列**  
  不支援本版本所需的現代 JavaScript 語法及大量現代 Web API。

- **Chrome < 80**
- **Edge < 80**
- **Firefox < 74**
- **Safari < 13.1**
- **iOS Safari < 13.4**
- **Android Chrome < 80**

這些版本即使部分 HTML/CSS 功能能夠執行，也**無法保證 Ver.9.1.9.2 的 JavaScript 主邏輯正常執行**。

> ⚠️ **提示：此表格適用於 MeTab「Ver.9.1.9.2」及更早版本，根據該版本實際 HTML、CSS、JavaScript 檔案中的 API、語法及佈局特性整理。後續版本如果新增或調整功能，相容性要求可能發生變化。**
