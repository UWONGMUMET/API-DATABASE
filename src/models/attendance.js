const dbPool = require('../config/database');

const getAllAttendance = () => {
    const SQLQuery = `SELECT * FROM attendance`;
    return dbPool.execute(SQLQuery);
};

const createNewAttendance = (attenData) => {
    const SQLQuery = `INSERT INTO attendance (studentName, status) VALUES (?, ?)`;
    const values = [attenData.studentName, attenData.status]
    return dbPool.execute(SQLQuery, values);
};

const updateAttendance = (body, id) => {
    const fields = Object.keys(body).map((key) => `${key} = ?`).join(', ');
    const values = [...Object.values(body), id];
    const SQLQuery = `UPDATE attendance SET ${fields} WHERE id =?`;
    return dbPool.execute(SQLQuery, values);
};

const deleteAttendance = (id) => {
    const SQLQuery = `DELETE FROM attendance WHERE id =?`;
    return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
    getAllAttendance,
    createNewAttendance,
    updateAttendance,
    deleteAttendance,
}