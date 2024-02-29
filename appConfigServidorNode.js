const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Respondiendo a tu solicitud v6');
})  //Creamos el servidor 

const puerto = 3000; // COnfiguramos el puerto
server.listen(puerto, () => {
    console.log('escuchando solicitudes');
})