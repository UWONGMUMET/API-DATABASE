const AttendanceModel = require('../models/attendance');

const getAllAttendance = async (req, res) => {
    try {
        const [data] = await AttendanceModel.getAllAttendance();
        res.status(200).json({
            message: 'GET all attendance successfully',
            data: data,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to retrieve attendance',
            serverMessage: err.message,
        });
    }
};

const createNewAttendance = async (req, res) => {
    const {body} = req;

    if (!body.studentName || !body.status) {
        res.status(400).json({
            message: 'Missing required fields',
            serverMessage: 'Student name and status are required fields.',
        });
    }
    try {
        await AttendanceModel.createNewAttendance(body);
        res.status(201).json({
            message: 'Created new attendance successfully',
            data: body,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to create new attendance',
            serverMessage: err.message,
        });
    }
};

const updateAttendance = async (req, res) => {
    const {body} = req;
    const {id} = req.params;

    if (Object.keys(body).length === 0) {
        res.status(400).json({
            message: 'Validation Error',
            serverMessage: 'At least one field needs to be updated.',
        });
    }

    try {
        await AttendanceModel.updateAttendance(body, id);
        res.status(200).json({
            message: 'Updated attendance successfully',
            data: body,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to update attendance',
            serverMessage: err.message,
        });
    }
};

const deleteAttendance = async (req, res) => {
    const {id} = req.params;

    try {
        await AttendanceModel.deleteAttendance(id);
        res.status(200).json({
            message: 'Deleted attendance successfully',
            id: id,
        });
    } catch (er) {
        res.status(500).json({
            message: 'Failed to delete attendance',
            serverMessage: err.message,
        });
    }
}
module.exports = {
    getAllAttendance,
    createNewAttendance,
    updateAttendance,
    deleteAttendance
}