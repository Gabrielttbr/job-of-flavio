
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routerCourse = require('./router/course.router');
const cors = require('cors')
/*==============================================================================================*/
//                                    CONFIGURAÇÕES DE DEPENDÊNCIAS                             //
/*==============================================================================================*/

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*==============================================================================================*/
//                                             CORS                                             //
/*==============================================================================================*/
app.use((req, res, next ) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   app.use(cors());
   next();
   } )

/*==============================================================================================*/
//                                                                                                //
//                                              ROTAS 
//                                                                           
/*==============================================================================================*/

app.use('/course', routerCourse)





/*==============================================================================================*/
//                                                                                              //
//                           TRATAMENTO DE ERRO, CASO NÃO ENCONTRE NENHUMA ROTA                 //
//                                                                                              //
/*==============================================================================================*/

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404
    next(erro)
})
app.use((erro, req, res, next) => {
    res.status(erro.status || 500)
    res.send({
        erroe: erro.message
    })
})


module.exports = app;