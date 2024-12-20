const InventoryModel = require('../models/inventory');

const getAllInventory = async (req, res) => {
    try {
        const [data] = await InventoryModel.getAllInventory();
        res.status(200).json({
            message: 'GET all inventory successfully',
            data: data,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to get inventory',
            serverMessage: err.message
        })
    }
};

const createNewInventory = async (req, res) => {
    const {body} = req;

    if (!body.product_name || !body.stock || !body.price) {
        res.status(400).json({
            message: 'Validation Error',
            serverMessage: 'Product name, stock, and price are required fields.',
        })
    }
    try {
        await InventoryModel.createNewInventory(body);
        res.status(201).json({
            message: 'Created new inventory successfully',
            data: body,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to create new inventory',
            serverMessage: err.message
        })
    }
};

const updateInventory = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    if (Object.keys(body).length === 0) {
        return res.status(400).json({
            message: 'Validation Error',
            serverMessage: 'No data to update',
        });
    }

    try {
        await InventoryModel.updateInventory(body, id);
        res.status(200).json({
            message: 'Updated inventory successfully',
            data: {
                id: id,
               ...body,
            },
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to update inventory',
            serverMessage: err.message
        })
    }
};

const deleteInventory = async (req, res) => {
    const {id} = req.params;

    try {
        await InventoryModel.deleteInventory(id);
        res.status(200).json({
            message: 'Deleted inventory successfully',
            data: {
                id: id,
            },
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to delete inventory',
            serverMessage: err.message
        })
    }
}

module.exports = {
    getAllInventory,
    createNewInventory,
    updateInventory,
    deleteInventory
};