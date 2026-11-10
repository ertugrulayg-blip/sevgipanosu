(function () {
  "use strict";

  var products = window.PRODUCTS || [];
  var grid = document.querySelector(".product-grid");
  var filterBar = document.querySelector(".filters");
  var lightbox = document.querySelector(".lightbox");
  var cartIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h-2a1 1 0 0 0 0 2h1.2l2.2 9.1A2 2 0 0 0 10.3 17h7.4a2 2 0 0 0 1.9-1.4l1.9-6.3A1 1 0 0 0 20.5 8H8.4l-.5-2.2A2 2 0 0 0 7 4zm3 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>';

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function cardHTML(p) {
    var buy = p.shopier
      ? '<a class="btn" href="' + esc(p.shopier) + '" target="_blank" rel="noopener">' + cartIcon + "Satın al</a>"
      : '<span class="btn" aria-disabled="true">Yakında satışta</span>';
    var price = p.price ? '<span class="price">' + esc(p.price) + "</span>" : "<span></span>";
    var details = (p.details || []).map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("");

    return (
      '<article class="card' + (p.wide ? " wide" : "") + '" id="' + esc(p.id) + '">' +
        '<button class="card-media" type="button" data-src="' + esc(p.image) + '" data-title="' + esc(p.title) + '" aria-label="' + esc(p.title) + ' önizlemesini büyüt">' +
          '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + ' şablon önizlemesi" loading="lazy">' +
          (p.badge ? '<span class="badge">' + esc(p.badge) + "</span>" : "") +
          '<span class="zoom-hint">Büyüt</span>' +
        "</button>" +
        '<div class="card-body">' +
          '<span class="card-cat">' + esc(p.category) + "</span>" +
          "<h3>" + esc(p.title) + "</h3>" +
          '<p class="card-desc">' + esc(p.description) + "</p>" +
          (details ? '<ul class="card-details">' + details + "</ul>" : "") +
          '<div class="card-foot">' + price + buy + "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function render(category) {
    var list = category ? products.filter(function (p) { return p.category === category; }) : products;
    grid.innerHTML = list.map(cardHTML).join("");
  }

  function buildFilters() {
    var cats = [];
    products.forEach(function (p) { if (cats.indexOf(p.category) === -1) cats.push(p.category); });
    if (cats.length < 2) return;
    var all = [{ label: "Tümü", value: "" }].concat(cats.map(function (c) { return { label: c, value: c }; }));
    filterBar.innerHTML = all.map(function (c, i) {
      return '<button class="chip" type="button" data-cat="' + esc(c.value) + '" aria-pressed="' + (i === 0) + '">' + esc(c.label) + "</button>";
    }).join("");
    filterBar.addEventListener("click", function (e) {
      var btn = e.target.closest(".chip");
      if (!btn) return;
      filterBar.querySelectorAll(".chip").forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      render(btn.getAttribute("data-cat"));
    });
  }

  // Önizleme penceresi
  if (lightbox) {
    var lbImg = lightbox.querySelector("img");
    var lbCap = lightbox.querySelector(".lightbox-caption");
    grid.addEventListener("click", function (e) {
      var media = e.target.closest(".card-media");
      if (!media) return;
      lbImg.src = media.getAttribute("data-src");
      lbImg.alt = media.getAttribute("data-title") + " önizlemesi";
      lbCap.textContent = media.getAttribute("data-title");
      if (typeof lightbox.showModal === "function") lightbox.showModal();
      else window.open(lbImg.src, "_blank");
    });
    lightbox.querySelector(".lightbox-close").addEventListener("click", function () { lightbox.close(); });
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) lightbox.close(); });
  }

  buildFilters();
  render("");
  var y = document.getElementById("yil");
  if (y) y.textContent = new Date().getFullYear();
})();
