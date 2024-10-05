const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

router.get('/:id', productController.getProduct);

router.post('/', productController.addProduct);

module.exports = router;
