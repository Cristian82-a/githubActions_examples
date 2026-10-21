
const http = require('http');

const puerto = 3000;

const servidor = http.createServer((peticion, respuesta) => {
  respuesta.statusCode = 200;
  respuesta.setHeader('Content-Type', 'text/plain');
  respuesta.end('Hola desde Node.js\n');
});

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});
