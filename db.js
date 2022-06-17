

const mysql = require('mysql2')

exports.conection =  mysql.createPool({
    "user": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "port": process.env.MYSQL_PORT
})

exports.execute = (query, param=[]) => {
    return new Promise((resolve, reject) => {
        // Visualizando a conxeção
        this.conection.getConnection((error, con) => {
            if(error){
                return reject(error)
            } 
            // liberando a conxeção
            con.release();
            this.conection.query(query, param, (error, result) => {
                if(error){
                    return reject(error)
                }
                else {
                    return resolve(result)
                }
            })
        })
    })
}