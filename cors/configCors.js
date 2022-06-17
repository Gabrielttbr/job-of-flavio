const app = require("../app");
const cors = require('cors')

exports.configCors = (req, res, next ) => {
     // ==================================================================================
    //                          CONFIGURAÇÕES DE CABEÇALHO
    //====================================================================================

    // ORIGEM, QUAL MÁQUINA TEM PERMIÇÃO DE ENTRAR NA API
    res.header('Access-Control-Allow-Drigin', '*') // * REPRESENTA TODAS
    // CABEÇALHO QUE ACEITAMOS
    res.header('Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-type, Accept, Authorization',
    )
    res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
    // MÉTODOS HTPP ACEITOS
    app.use(cors());
    next();
}