const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
    // Configurar la cabecera de la respuesta
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    // Enviar la respuesta
    res.end('¡Hola Mundo!');
});

// Puerto del servidor
const PORT = 3000;

// Poner el servidor en escucha
server.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
