const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routerCourse = require('./router/course.router')

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false })) // ACEITA APENAS DADOS SIMPLES
app.use(bodyParser.json())// JSON DE ENTRADA BODY_PARSER
app.use('/course', routerCourse)

app.use((req,res,next) => { 
    return res.status(200).send({
        message: "Hello word"
    })
});

module.exports = app;