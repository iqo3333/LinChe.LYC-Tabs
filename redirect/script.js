function redirect() {
    let domain = document.getElementById("domainInput").value.trim();
    let errorMsg = document.getElementById("errorMsg");
    
    // 清除之前的错误信息
    errorMsg.textContent = "";

    if (domain === "") {
        errorMsg.textContent = "请输入域名";
        return;
    }

    // 检查是否包含协议（http/https）
    if (!domain.startsWith("http://") && !domain.startsWith("https://")) {
        domain = "https://" + domain; // 默认添加 HTTPS
    }

    // 检查是否是有效的URL
    try {
        new URL(domain); // 如果URL不合法，抛出错误
    } catch (e) {
        errorMsg.textContent = "请输入有效的域名";
        return;
    }

    // 跳转到目标域名
    window.location.href = domain;
}
