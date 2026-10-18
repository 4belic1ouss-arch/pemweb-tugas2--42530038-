
const menu = [
  {
    id: 1,
    nama: 'Kopi Susu Aren',
    kategori: 'kopi',
    harga: 18000,
    deskripsi: 'Perpaduan espresso, susu segar, dan gula aren.'
  },
  {
    id: 2,
    nama: 'Americano',
    kategori: 'kopi',
    harga: 15000,
    deskripsi: 'Espresso dengan tambahan air untuk rasa kopi yang ringan.'
  },
  {
    id: 3,
    nama: 'Cafe Latte',
    kategori: 'kopi',
    harga: 22000,
    deskripsi: 'Espresso dengan susu steamed yang lembut.'
  },
  {
    id: 4,
    nama: 'Croissant',
    kategori: 'makanan',
    harga: 16000,
    deskripsi: 'Pastry renyah dengan tekstur lembut di bagian dalam.'
  },
  {
    id: 5,
    nama: 'Roti Bakar Cokelat',
    kategori: 'makanan',
    harga: 14000,
    deskripsi: 'Roti panggang dengan isian cokelat manis.'
  }
];

// Halaman katalog dan filter kategori
function getMenu(req, res) {
  const kategori = (req.query.kategori || '').toLowerCase();

  let daftarMenu = menu;

  if (kategori) {
    daftarMenu = menu.filter(
      item => item.kategori === kategori
    );
  }

  res.render('menu', {
    judul: 'Our Little Menu',
    daftarMenu,
    kategori
  });
}

// Halaman detail berdasarkan ID
function getDetail(req, res) {
  const id = Number(req.params.id);
  const item = menu.find(menuItem => menuItem.id === id);

  if (!item) {
    return res.status(404).render('not-found', {
      judul: 'Menu Tidak Ditemukan'
    });
  }

  res.render('detail', {
    judul: item.nama,
    item
  });
}

module.exports = {
  getMenu,
  getDetail
};
