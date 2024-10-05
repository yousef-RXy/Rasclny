const express = require('express');

const categoryController = require('../controllers/category');

const router = express.Router();

router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategory);

router.post('/', categoryController.addCategories);

module.exports = router;
