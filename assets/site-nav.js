(function () {
  const nav = [
    { label: "路线", href: "index.html#start" },
    { label: "攻略整合", href: "guide.html" },
    { label: "官网福利", href: "daily-benefits.html" },
    { label: "礼品码", href: "gift-codes.html" },
    { label: "图片资料", href: "charts.html" },
    { label: "英语词库", href: "vocabulary.html" }
  ];

  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const header = document.querySelector("[data-site-nav]");
  if (!header) return;

  const isActive = (href) => {
    const page = href.split("#")[0].toLowerCase();
    if (current === "index.html" && href.includes("#") && location.hash === href.slice(href.indexOf("#"))) return true;
    return page === current;
  };

  header.className = "topbar";
  header.innerHTML = `
    <div class="wrap nav">
      <a class="brand" href="index.html">
        <img src="assets/achao-avatar.png" alt="阿超chao头像">
        <span>Last Z 游戏攻略</span>
      </a>
      <nav class="links" aria-label="主导航">
        ${nav.map((item) => `<a href="${item.href}"${isActive(item.href) ? ' class="current"' : ""}>${item.label}</a>`).join("")}
      </nav>
    </div>
  `;
})();
