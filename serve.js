const http = require('http');
const app = require('./app');
const port = 4000;
const serve = http.createServer(app);

serve.listen(port, console.log('Funcionando!!'));