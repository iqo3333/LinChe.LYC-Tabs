// 引擎相关
const engineDropdown = document.getElementById("engineDropdown");
const engineSelect = document.getElementById("engineSelect");
const engineIcon = document.getElementById("engineIcon");
let currentEngine = "bing";

const engineMap = {
  bing: "https://www.bing.com/search?q=",
  google: "https://www.google.com/search?q=",
  baidu: "https://www.baidu.com/s?wd="
};

// 扩展名检测
const extensions = [  // 文档类
  "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "rtf", "odt", "ods", "odp",

  // 压缩/镜像类
  "zip", "rar", "7z", "tar", "gz", "bz2", "xz", "iso", "img", "dmg", "cab",

  // 可执行文件
  "exe", "msi", "apk", "bat", "sh", "bin", "com", "jar", "py", "pl", "scr", "vb", "app",

  // 图像类
  "jpg", "jpeg", "png", "gif", "bmp", "webp", "tiff", "ico", "svg", "psd", "ai", "eps",

  // 音频类
  "mp3", "wav", "ogg", "flac", "aac", "m4a", "amr", "wma", "mid", "aiff",

  // 视频类
  "mp4", "avi", "mkv", "mov", "wmv", "flv", "webm", "3gp", "mpeg", "mpg", "ts",

  // 编程/配置/数据类
  "json", "xml", "csv", "yaml", "yml", "ini", "log", "sql", "db", "cfg", "conf",

  // 网页资源类
  "css", "js", "php", "asp", "aspx", "jsp", "ts", "vue", "jsx",

  // 字体类
  "ttf", "otf", "woff", "woff2", "eot",

  // 其他常见类型
  "ics", "torrent", "crx", "deb", "rpm", "pak", "sav", "bak"];
const fileExtensions = new RegExp(`/[^/]+\\.(${extensions.join('|')})(\\?.*)?$`, 'i');

// 搜索引擎初始化
window.addEventListener("DOMContentLoaded", () => {
  const savedEngine = localStorage.getItem("preferredEngine");
  if (savedEngine && engineMap[savedEngine]) {
    currentEngine = savedEngine;
    engineIcon.src = document.querySelector(`[data-engine="${savedEngine}"]`).dataset.icon;
  } else {
    localStorage.setItem("preferredEngine", "bing");
    engineIcon.src = document.querySelector(`[data-engine="bing"]`).dataset.icon;
  }
});

// 下拉菜单交互
engineSelect.addEventListener("click", (e) => {
  e.stopPropagation();
  engineDropdown.classList.toggle("show");
});
document.addEventListener("click", (e) => {
  if (!engineSelect.contains(e.target)) {
    engineDropdown.classList.remove("show");
  }
});
document.querySelectorAll("#engineDropdown div").forEach(item => {
  item.addEventListener("click", () => {
    currentEngine = item.dataset.engine;
    engineIcon.src = item.dataset.icon;
    engineDropdown.classList.remove("show");
    localStorage.setItem("preferredEngine", currentEngine);
  });
});

// 主处理逻辑
function handleInput() {
  let input = document.getElementById("domainInput").value.trim();

  if (input === "") {
    showTip("❌ 请输入域名或关键词！", "error");
    return;
  }

  const domainRegex = /^(https?:\/\/)?([\p{L}\p{N}-]+\.)+[\p{L}]{2,}$/u;
  const ipRegex = /^(https?:\/\/)?((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}/;
  const isFullURL = input.startsWith("http://") || input.startsWith("https://");
  const isProbablyDomain = /^[\p{L}\p{N}-]+\.[\p{L}]{2,}$/u.test(input);


  // 【1】完整文件资源 URL
if (isFullURL) {
  try {
    const urlObj = new URL(input);
    const pathname = urlObj.pathname; // 只取路径部分
    if (fileExtensions.test(pathname) && !isProbablyDomain) {
      showTip("📦 识别为文件链接，正在跳转...", "info", 1500);
      setTimeout(() => {
        window.open(input, "_blank");
      }, 1500);
      return;
    }
  } catch (e) {
    // 如果构造 URL 失败，就不处理
  }
}



  // 【2】完整 URL
  try {
    const url = new URL(input);
    showTip("🌐 识别为完整链接，正在跳转...", "success", 1500);
    setTimeout(() => {
      window.open(input, "_blank");
    }, 1500);
    return;
  } catch (e) {}

 // 【3】域名或 IP
if (domainRegex.test(input) || ipRegex.test(input)) {
  const url = isFullURL ? input : "https://" + input;
  showTip("🔗 识别为域名/IP地址，正在跳转...", "success", 1500);
  setTimeout(() => {
    window.open(url, "_blank"); // ← 关键在这里用 url
  }, 1500);
  return;
}


  // 【4】关键词搜索
  showTip("🔍 未识别格式，使用搜索引擎查询...", "info", 1500);
  setTimeout(() => {
    window.open(engineMap[currentEngine] + encodeURIComponent(input), "_blank");
  }, 1500);
}

// 回车触发
document.getElementById("domainInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    handleInput();
  }
});

/**
 * 显示提示信息（统一处理）
 * @param {string} message 内容
 * @param {string} type 类型：'error' | 'success' | 'info'
 * @param {number} duration 毫秒数，默认 3000
 */
function showTip(message, type = 'info', duration = 3000) {
  const oldTip = document.querySelector(".tip-message");
  if (oldTip) oldTip.remove();

  const tip = document.createElement("p");
  tip.className = `tip-message tip-${type}`;
  tip.textContent = message;

  const container = document.querySelector(".container");
  const button = container.querySelector("button");
  container.insertBefore(tip, button.nextSibling);

  // 给新提示框添加 visible 类
  setTimeout(() => tip.classList.add('visible'), 10);  // 延迟 10ms 让样式应用

  if (duration > 0) {
    setTimeout(() => {
      tip.style.opacity = '0';
      tip.style.transform = 'translateY(-5px)';
      setTimeout(() => tip.remove(), 300);
    }, duration);
  }
}
