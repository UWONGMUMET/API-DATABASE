const dbPool = require('../config/database');

const getAllProducts = () => {
    const SQLQuery = `SELECT * FROM products`;
    return dbPool.execute(SQLQuery);
};

const createNewProducts = (productData) => {
    const SQLQuery = `INSERT INTO products (name, description, price)
                    VALUES (?, ?, ?)`;
    const values = [productData.name, productData.description, productData.price];
    return dbPool.execute(SQLQuery, values);
};

const updateProducts = (body, id) => {
    const fields = Object.keys(body).map((key) => `${key} = ?`).join(', ');
    const values = [...Object.values(body), id];
    const SQLQuery = `UPDATE products SET ${fields} WHERE id =?`;
    return dbPool.execute(SQLQuery, values);
};

const deleteProducts = (id) => {
    const SQLQuery = `DELETE FROM products WHERE id = ?`;
    return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
    getAllProducts,
    createNewProducts,
    updateProducts,
    deleteProducts,
};