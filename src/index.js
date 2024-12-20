require('dotenv').config();
const PORT = process.env.PORT || 5000;

const express = require('express');
const usersRoutes = require('./routes/users');
const productsRouters = require('./routes/products');
const inventoryRouters = require('./routes/inventory');
const attendanceRouters = require('./routes/attendance');

const middlewareLogRequest = require('./middleware/logs');

const app = express();

// Middleware yang menangani request yang memuat JSON
app.use(middlewareLogRequest);
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/products', productsRouters);
app.use('/inventory', inventoryRouters);
app.use('/attendance', attendanceRouters);

app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`)
});