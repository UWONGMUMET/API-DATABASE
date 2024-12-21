const express = require('express');
const attendanceController = require('../controller/attendance');
const router = express.Router();

router.post('/', attendanceController.createNewAttendance);

router.get('/', attendanceController.getAllAttendance);

router.patch('/:id', attendanceController.updateAttendance);

router.delete('/:id', attendanceController.deleteAttendance);

module.exports = router;