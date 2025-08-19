// ------------------ 搜索引擎逻辑 ------------------
const engineDropdown = document.getElementById("engineDropdown");
const engineSelect = document.getElementById("engineSelect");
const engineIcon = document.getElementById("engineIcon");
let currentEngine = "bing";

const engineMap = {
  bing: "https://www.bing.com/search?q=",
  google: "https://www.google.com/search?q=",
  baidu: "https://www.baidu.com/s?wd="
};

const inputContainer = document.querySelector('.input-container');

// 下拉交互
engineSelect.addEventListener("click", e => {
  e.stopPropagation();
  engineDropdown.classList.toggle("show");
});
document.addEventListener("click", e => {
  if (!engineSelect.contains(e.target)) engineDropdown.classList.remove("show");
});
document.querySelectorAll("#engineDropdown div").forEach(item => {
  item.addEventListener("click", () => {
    currentEngine = item.dataset.engine;
    engineIcon.src = item.dataset.icon;
    engineDropdown.classList.remove("show");
    localStorage.setItem("preferredEngine", currentEngine);
  });
});

// 初始化
window.addEventListener("DOMContentLoaded", () => {
  const savedEngine = localStorage.getItem("preferredEngine");
  if (savedEngine && engineMap[savedEngine]) {
    currentEngine = savedEngine;
    engineIcon.src = document.querySelector(`[data-engine="${savedEngine}"]`).dataset.icon;
  }
});

// ------------------ 跳转/搜索逻辑 ------------------
const extensions = ["pdf","doc","docx","xls","xlsx","ppt","pptx","txt","rtf","odt","ods","odp","zip","rar","7z","tar","gz","bz2","xz","iso","img","dmg","cab","exe","msi","apk","bat","sh","bin","com","jar","py","pl","scr","vb","app","jpg","jpeg","png","gif","bmp","webp","tiff","ico","svg","psd","ai","eps","mp3","wav","ogg","flac","aac","m4a","amr","wma","mid","aiff","mp4","avi","mkv","mov","wmv","flv","webm","3gp","mpeg","mpg","ts","json","xml","csv","yaml","yml","ini","log","sql","db","cfg","conf","css","js","php","asp","aspx","jsp","ts","vue","jsx","ttf","otf","woff","woff2","eot","ics","torrent","crx","deb","rpm","pak","sav","bak"];
const fileExtensions = new RegExp(`/[^/]+\\.(${extensions.join('|')})(\\?.*)?$`, 'i');

function handleInput() {
    const input = document.getElementById("domainInput").value.trim();
    if (!input) {
        showTip("❌ 请输入域名或关键词！","error");
        return;
    }

    const domainRegex = /^(https?:\/\/)?([\p{L}\p{N}-]+\.)+[\p{L}]{2,}$/u;
    const ipRegex = /^(https?:\/\/)?((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}/;
    const isFullURL = input.startsWith("http://") || input.startsWith("https://");
    const isProbablyDomain = /^[\p{L}\p{N}-]+\.[\p{L}]{2,}$/u.test(input);
    
    let finalURL = input;

    // 文件链接直接新标签页打开
    if (isFullURL) {
        try {
            const urlObj = new URL(input);
            if (fileExtensions.test(urlObj.pathname) && !isProbablyDomain) {
                showTip("📦 识别为文件链接，正在跳转...","info");
                window.open(input, "_blank");  // 直接打开
                return;
            }
        } catch {}
    }

    // 完整链接
    try {
        new URL(input);
        showTip("🌐 识别为完整链接，正在跳转...","success");
        window.open(input, "_blank");
        return;
    } catch {}

    // 域名或 IP
    if (domainRegex.test(input) || ipRegex.test(input)) {
        finalURL = isFullURL ? input : "http://" + input;
        showTip("🔗 识别为域名/IP地址，正在跳转...","success");
        window.open(finalURL, "_blank");
        return;
    }

    // 搜索
    showTip("🔍 未识别格式，使用搜索引擎查询...","info");
    window.open(engineMap[currentEngine] + encodeURIComponent(input), "_blank");
}

// 回车触发
document.getElementById("domainInput").addEventListener("keydown", e => {
    if (e.key === "Enter") handleInput();
});

// ------------------ 提示信息 ------------------
function showTip(message,type='info',duration=3000){
  const oldTip = document.querySelector(".tip-message");
  if(oldTip) oldTip.remove();
  const tip = document.createElement("p");
  tip.className=`tip-message tip-${type}`;
  tip.textContent=message;
  const container = document.querySelector(".container");
  const button = container.querySelector("button");
  container.insertBefore(tip, button.nextSibling);
  setTimeout(()=>tip.classList.add('visible'),10);
  if(duration>0){
    setTimeout(()=>{
      tip.style.opacity='0';
      tip.style.transform='translateY(-5px)';
      setTimeout(()=>tip.remove(),300);
    },duration);
  }
}

// ------------------ 爱心点击效果 ------------------
const colors = ['#e25555', '#ff69b4', '#ff9933', '#66ccff', '#9933ff', '#ff3399'];

// 点击时生成多个爱心
document.addEventListener("click", function(e) {
  for (let i = 0; i < 6; i++) {
    createHeart(e.clientX + Math.random() * 1 - 1, e.clientY + Math.random() * 1 - 1);
  }
});

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤";
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
}
//------------------使用 JS 动态设置 body 高度------------------
function setBodyHeight() {
    document.body.style.height = window.innerHeight + 'px';
    document.documentElement.style.height = window.innerHeight + 'px'; // 兼容 html 元素
}
window.addEventListener('resize', setBodyHeight);
window.addEventListener('orientationchange', setBodyHeight);
setBodyHeight();



