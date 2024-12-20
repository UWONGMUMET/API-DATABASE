const ProductsModel = require('../models/products');

const getAllProducts = async (req, res) => {
    try {
        const [data] = await ProductsModel.getAllProducts();
        res.status(200).json({
            message: 'GET all products successfully',
            data: data,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to retrieve products',
            serverMessage: err.message,
        })
    }
};

const createNewProducts = async (req, res) => {
    const {body} = req;

    if(!body.name || !body.description || !body.price) {
        res.status(404).json({
            message: 'Validation error',
            serverMessage: 'Name, description, and price are required fields.',
        })
    }

    try {
        await ProductsModel.createNewProducts(body);
        res.status(201).json({
            message: 'Created new product successfully',
            data: body,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to create new product',
            serverMessage: err.message,
        })
    }
}

const updateProducts = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    if (Object.keys(body).length === 0) {
        return res.status(400).json({
            message: 'Validation error',
            serverMessage: 'No data to update.',
        });
    }

    try {
        await ProductsModel.updateProducts(body, id);
        res.status(200).json({
            message: 'Product updated successfully',
            data: {
                id: id,
               ...body,
            }
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to update product',
            serverMessage: err.message,
        });
    }
};

const deleteProducts = async (req, res) => {
    const {id} = req.params;

    try {
        await ProductsModel.deleteProducts(id);
        res.status(200).json({
            message: 'Product deleted successfully',
            data: {
                id: id,
            }
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to delete product',
            serverMessage: err.message,
        });
    }
}

module.exports = {
    getAllProducts,
    createNewProducts,
    updateProducts,
    deleteProducts,
};