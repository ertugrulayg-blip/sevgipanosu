# Sevgi Panosu

Rehber öğretmenler için hazır pano şablonlarının satıldığı tanıtım ve satış sitesi.
Site tamamen statiktir (HTML + CSS + JS) ve GitHub Pages üzerinde ücretsiz yayınlanır. Ödemeler Shopier üzerinden alınır.

## Dosya yapısı

```
index.html              Ana sayfa (pano görseli, ürün listesi, nasıl çalışır)
assets/css/style.css    Tüm stiller
assets/js/products.js   ÜRÜN LİSTESİ: fiyat ve Shopier linkleri buradan düzenlenir
assets/js/app.js        Ürün kartlarını, filtreleri ve önizleme penceresini oluşturur
assets/img/             Önizleme görselleri (filigranlı, düşük çözünürlüklü)
```

## Shopier linki ve fiyat ekleme

1. Shopier panelinde ürünü oluşturun ve ürün linkini kopyalayın.
2. GitHub'da `assets/js/products.js` dosyasını açın, kalem simgesine tıklayın.
3. İlgili ürünün satırlarını doldurun:
   ```js
   price: "149 ₺",
   shopier: "https://www.shopier.com/xxxxxxxx",
   ```
4. **Commit changes** deyin. Site 1-2 dakika içinde güncellenir.

`shopier` boş kalırsa buton "Yakında satışta" olarak görünür, `price` boşsa fiyat gizlenir.

## Yeni ürün ekleme

1. Önizleme görselini `assets/img/` klasörüne yükleyin (en fazla ~900 px genişlik önerilir).
2. `products.js` içindeki listeye mevcut bir ürünü kopyalayıp yeni bilgilerle yapıştırın.
   Geniş (yatay) panolar için `wide: true` kullanın.

> Önemli: Repo herkese açıktır. Buraya yalnızca filigranlı, düşük çözünürlüklü önizleme görselleri koyun.
> Satılan yüksek çözünürlüklü PDF dosyalarını **asla** bu repoya yüklemeyin.

## GitHub Pages ile yayınlama

1. Repo sayfasında **Settings → Pages** bölümüne gidin.
2. **Build and deployment → Source:** `Deploy from a branch`
3. **Branch:** `main`, klasör: `/ (root)` → **Save**
4. Birkaç dakika sonra site `https://ertugrulayg-blip.github.io/sevgipanosu/` adresinde yayında olur.

Kendi alan adınızı (ör. `sevgipanosu.com`) bağlamak için aynı sayfadaki **Custom domain** alanını kullanabilirsiniz.
