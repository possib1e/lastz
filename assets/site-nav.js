(function () {
  const nav = [
    { label: "\u9996\u9875", href: "index.html#start" },
    { label: "\u653b\u7565\u5927\u5168", href: "guide.html" },
    { label: "\u5b98\u7f51\u798f\u5229", href: "daily-benefits.html" },
    { label: "\u793c\u54c1\u7801\u5e93", href: "gift-codes.html" },
    { label: "Gift Code \u52a9\u624b", href: "redeem-helper.html" },
    { label: "\u8d44\u6599\u56fe\u8868", href: "charts.html" },
    { label: "\u82f1\u8bed\u8bcd\u5e93", href: "vocabulary.html" }
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
        <img src="assets/achao-avatar.png" alt="\u963f\u8d85chao\u5934\u50cf">
        <span>Last Z \u6e38\u620f\u653b\u7565</span>
      </a>
      <nav class="links" aria-label="\u4e3b\u5bfc\u822a">
        ${nav.map((item) => `<a href="${item.href}"${isActive(item.href) ? ' class="current"' : ""}>${item.label}</a>`).join("")}
      </nav>
    </div>
  `;
})();
