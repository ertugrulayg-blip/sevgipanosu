/*
 * ÜRÜN LİSTESİ
 * ------------
 * Yeni ürün eklemek veya fiyat / Shopier linki değiştirmek için yalnızca bu dosyayı düzenleyin.
 *
 *  shopier : Shopier'deki ürün linki (ör. "https://www.shopier.com/12345678").
 *            Boş bırakılırsa buton "Yakında satışta" olarak görünür.
 *  price   : Görünecek fiyat metni (ör. "149 ₺"). Boş bırakılırsa fiyat gizlenir.
 *  image   : assets/img klasöründeki önizleme görseli.
 *  wide    : true ise kart iki sütun genişliğinde gösterilir (geniş panolar için).
 */
window.PRODUCTS = [
  {
    id: "benim-guclu-yanim",
    title: "Benim Güçlü Yanım",
    category: "Sınıf Panosu",
    description:
      "Ayçiçeği temalı, 8 olumlu ifade kartından oluşan neşeli pano seti. Öğrencilerin güçlü yanlarını keşfetmelerine destek olur.",
    details: ["A4 sayfalara bölünmüş", "Başlık + 8 kart + karakter", "Renkli baskıya uygun"],
    image: "assets/img/guclu-yanim.jpg",
    price: "",
    shopier: "",
    wide: true,
    badge: "Yeni"
  },
  {
    id: "verimli-ders-calisma",
    title: "Verimli Ders Çalışmayı Öğreniyorum",
    category: "Sınıf Panosu",
    description:
      "Kitaplık temalı, 12 adımlık ders çalışma rehberi panosu. Plan yapmaktan çantayı hazırlamaya kadar iyi alışkanlıkları görselleştirir.",
    details: ["A4 sayfalara bölünmüş", "Başlık + 12 kart", "Koridor ve sınıf için"],
    image: "assets/img/verimli-ders.jpg",
    price: "",
    shopier: "",
    wide: true
  },
  {
    id: "katlanabilir-canta-kapaklari",
    title: "Katlanabilir Çanta Kapakları (4'lü Set)",
    category: "Etkinlik",
    description:
      "Cesaret, Sakinleşme, Güçlü Yanlarım ve Dostluk çantaları. Öğrenciler kendi çantalarını katlayıp isimlerini yazarak sahiplenir.",
    details: ["4 adet A4 sayfa", "Kesip katlamaya hazır", "Bireysel ve grup çalışması"],
    image: "assets/img/canta-kapaklari.jpg",
    price: "",
    shopier: "",
    wide: true
  },
  {
    id: "sinirlar-veli-bulteni-mavi",
    title: "Sınırlar · Veli Bilgilendirme Bülteni (Mavi)",
    category: "Veli Bülteni",
    description:
      "Çocuğa sağlıklı sınır koymanın önemi, uygulama yolları ve sık yapılan hatalar. Velilere dağıtmaya ya da panoya asmaya hazır.",
    details: ["1 adet A4 sayfa", "Veli toplantıları için ideal"],
    image: "assets/img/sinirlar-mavi.jpg",
    price: "",
    shopier: ""
  },
  {
    id: "sinirlar-veli-bulteni-pembe",
    title: "Sınırlar · Veli Bilgilendirme Bülteni (Pembe)",
    category: "Veli Bülteni",
    description:
      "Aynı konunun okul öncesi ve ilkokul ailelerine yönelik, sıcak renkli alternatif tasarımı. Olumlu iletişim örnekleriyle.",
    details: ["1 adet A4 sayfa", "Okul öncesi ve ilkokul"],
    image: "assets/img/sinirlar-pembe.jpg",
    price: "",
    shopier: ""
  },
  {
    id: "kendime-iyi-davranma-cantam",
    title: "Kendime İyi Davranma Çantam",
    category: "Etkinlik",
    description:
      "Dış yüzünde olumlu mesaj, iç yüzünde duygu kontrolü ve öz şefkat yazma alanları bulunan katlanabilir çanta etkinliği.",
    details: ["2 sayfa (dış + iç yüz)", "Duygu farkındalığı çalışması"],
    image: "assets/img/kendime-iyi-davranma.jpg",
    price: "",
    shopier: ""
  }
];
