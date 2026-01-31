# PrimerServidorWeb
🛠️ E1-M6 Ejercicio
Tu Primer Servidor Web 🚀
Objetivo: Comprender los fundamentos de Node.js y su ecosistema modular creando un servidor web básico desde cero. Utilizarás el módulo http nativo para levantar un servidor que responda a las peticiones de un navegador, sin depender de frameworks externos como Express.

Instrucciones:

Inicialización del Proyecto:

Crea una nueva carpeta para tu proyecto.

Dentro de ella, crea un archivo llamado app.js.

Importar el Módulo http:

La funcionalidad para crear servidores web en Node.js se encuentra en el módulo nativo http. Para usarlo, debes importarlo al inicio de tu archivo app.js con la función require():

const http = require('http');

Crear el Servidor:

Utiliza el método http.createServer(). Este método recibe una función callback que se ejecutará cada vez que el servidor reciba una petición.

Esta función callback tiene dos parámetros principales: un objeto para la petición (request o req) y un objeto para la respuesta (response o res).

Configurar la Respuesta:

Dentro de la función callback, usarás el objeto res para enviar una respuesta al cliente (el navegador).

Configura la cabecera de la respuesta con res.writeHead(). Debes indicar el código de estado 200 (OK) y el tipo de contenido 'Content-Type': 'text/plain; charset=utf-8'.

Envía el cuerpo de la respuesta y finaliza la comunicación con el método res.end(). El mensaje debe ser '¡Hola Mundo!'.

Poner el Servidor en Escucha:

El servidor ya está creado, pero aún no está escuchando peticiones. Para ello, utiliza el método .listen() sobre la instancia del servidor que creaste.

Pásale un número de puerto (un estándar para desarrollo es el 3000) y una función callback opcional que se ejecute una vez que el servidor esté listo. Dentro de este callback, muestra un mensaje en la consola como: Servidor escuchando en http://localhost:3000.

Ejecución y Verificación:

Abre tu terminal, navega a la carpeta de tu proyecto y ejecuta el archivo con el comando: node app.js.

Deberías ver el mensaje de confirmación en tu consola.

Abre tu navegador web y visita la dirección http://localhost:3000. Verás tu mensaje "¡Hola Mundo!".

Conceptos a Aplicar:

Módulo http: El módulo central de Node.js para redes y servidores HTTP.

require(): La función para importar módulos en CommonJS (el sistema de módulos por defecto en Node.js).

http.createServer(): El método que crea y retorna una nueva instancia de un servidor.

Callbacks: Funciones que se pasan como argumentos a otras funciones para ser ejecutadas después.

server.listen(): El método que inicia el servidor y lo pone a la escucha de peticiones en un puerto específico.

Objetos request y response: Los objetos que permiten interactuar con la petición entrante y formular la respuesta saliente.

Entrega:

El trabajo deberá ser entregado a través de un repositorio público en GitHub. Por favor, comparte únicamente el enlace a dicho repositorio. 📤
