const dbPool = require('../config/database');

const getAllInventory = () => {
    const SQLQuery = 'SELECT * FROM inventory';
    return dbPool.execute(SQLQuery);
};

const createNewInventory = (inventoryData) => {
    const SQLQuery = `INSERT INTO inventory (product_name, stock, price)
                    VALUES (?, ?, ?)`;
    const values = [inventoryData.product_name, inventoryData.stock, inventoryData.price]
    return dbPool.execute(SQLQuery, values);
}

const updateInventory = (body, id) => {
    const fields = Object.keys(body).map((key) => `${key} = ?`).join(', ');
    const values = [...Object.values(body), id];
    const SQLQuery = `UPDATE inventory SET ${fields} WHERE id =?`;
    return dbPool.execute(SQLQuery, values);
}

const deleteInventory = (id) => {
    const SQLQuery = `DELETE FROM inventory WHERE id =?`;
    return dbPool.execute(SQLQuery, [id]);
}

module.exports = {
    getAllInventory,
    createNewInventory,
    updateInventory,
    deleteInventory,
};