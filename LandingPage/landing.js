/* Mude toda la seccion a INDEX.JS en ROOT

const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;
const HOST = '192.168.1.78'; // Cambia si tu IP local es diferente

// Define la carpeta raíz como estática
app.use(express.static(path.join(__dirname)));

// Sirve la carpeta Menu como estática
app.use('/Menu', express.static(path.join(__dirname, 'Menu')));

// Ruta principal para servir landing.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'landing.html'));
});

// Ruta para servir menu.html
app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'Menu', 'menu.html'));
});

// Sirve la carpeta assets como estática
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

// Inicia el servidor
app.listen(PORT, HOST, () => {
    console.log(`Servidor ejecutándose en http://${HOST}:${PORT}`);
});


*/
