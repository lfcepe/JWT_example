const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./Routes/authRoute');

// Carga las variables de entorno
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

// rutas
app.use('/generate-token', authRoutes);
app.use('/access-data', authRoutes);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
