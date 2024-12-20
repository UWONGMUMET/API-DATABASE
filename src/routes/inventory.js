const express = require('express');
const InventoryProduct = require('../controller/inventory');
const router = express.Router();

router.get('/', InventoryProduct.getAllInventory);

router.post('/', InventoryProduct.createNewInventory);

router.patch('/:id', InventoryProduct.updateInventory);

router.delete('/:id', InventoryProduct.deleteInventory);


module.exports = router;