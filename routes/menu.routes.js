
const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menu.controller');

// Halaman katalog dan filter kategori
router.get('/menu', menuController.getMenu);

// Halaman detail berdasarkan ID menu
router.get('/menu/:id', menuController.getDetail);

module.exports = router;
