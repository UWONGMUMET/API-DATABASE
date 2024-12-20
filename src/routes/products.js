const express = require('express');
const ProductsController = require('../controller/products');
const router = express.Router();

router.post('/', ProductsController.createNewProducts);

router.get('/', ProductsController.getAllProducts);

router.patch('/:id', ProductsController.updateProducts);

router.delete('/:id', ProductsController.deleteProducts);

module.exports = router;