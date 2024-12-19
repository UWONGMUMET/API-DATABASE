const dbPool = require("../config/database");

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    return dbPool.execute(SQLQuery);
};

const createNewUser = (userData) => {
    const SQLQuery = `INSERT INTO users (name, email, address) VALUES (?, ?, ?)`;
    const values = [userData.name, userData.email, userData.address];
    return dbPool.execute(SQLQuery, values);
};

const updateUsers = (body, idUser) => {
    const fields = Object.keys(body)
        .map((key) => `${key} = ?`)
        .join(', ');
    const values = [...Object.values(body), idUser];
    const SQLQuery = `UPDATE users SET ${fields} WHERE id = ?`;
    return dbPool.execute(SQLQuery, values);
};

const deleteUsers = (idUser) => {
    const SQLQuery = `DELETE FROM users WHERE id = ?`;
    return dbPool.execute(SQLQuery, [idUser]);
};

module.exports = {
    getAllUsers,
    createNewUser,
    updateUsers,
    deleteUsers,
};