const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
        res.status(200).json({
            message: 'GET all users successfully',
            data: data,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to retrieve users',
            serverMessage: err.message,
        });
    }
};

const createNewUser = async (req, res) => {
    const { body } = req;

    if (!body.name || !body.email || !body.address) {
        return res.status(400).json({
            message: 'Validation Error',
            serverMessage: 'Name, email, and address are required fields.',
        });
    }

    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'Created new user successfully',
            data: body,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to create a new user',
            serverMessage: err.message,
        });
    }
};

const updateUsers = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    if (Object.keys(body).length === 0) {
        return res.status(400).json({
            message: 'Validation Error',
            serverMessage: 'At least one field is required to update.',
        });
    }

    try {
        await UsersModel.updateUsers(body, id);
        res.status(200).json({
            message: 'Update user success',
            data: {
                id: id,
                ...body,
            },
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to update user',
            serverMessage: err.message,
        });
    }
};

const deleteUsers = async (req, res) => {
    const { id } = req.params;

    try {
        await UsersModel.deleteUsers(id);
        res.status(200).json({
            message: 'Delete user successfully',
            data: {
                id: id,
            },
        });
    } catch (err) {
        res.status(500).json({
            message: 'Failed to delete user',
            serverMessage: err.message,
        });
    }
};

module.exports = {
    getAllUsers,
    createNewUser,
    updateUsers,
    deleteUsers,
};
