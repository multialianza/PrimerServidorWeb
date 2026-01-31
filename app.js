// Importar el módulo  http:
const http = require('http');
// http es un módulo nativo de Node.js
// require() es el sistema de módulos CommonJS


// Se crea el servidor
// http.createServer() crea el servidor
// Recibe un callback. Ese callback se ejecuta cada vez que alguien entra desde el navegador
// req → información de la petición
// res → lo que le vas a responder al cliente
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    res.end('¡Hola Mundo!');
});

// 200 → todo salió OK
// Content-Type → texto plano con soporte UTF-8 (para la ñ y ¡)
// res.end():     Siempre debes llamar a res.end()
// Envía el mensaje
// Cierra la conexión

// Poner el servidor en escucha
server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});

// 3000 → puerto de desarrollo estándar
// El callback se ejecuta cuando el servidor ya está activo
// console.log confirma que todo funciona