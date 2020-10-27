require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConecction } = require('./database/config');

// crear el servidor express
const app = express();

// configurar cors
app.use(cors());

// password mongoDb
// danielkapera
// bg3jUSZlSJQ1sZAt
// base de datos
dbConecction();

// rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
});

// puerto donde voy a subir mi aplicacion
app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto' + 3000);
});