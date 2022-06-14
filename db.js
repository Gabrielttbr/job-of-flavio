

const mysql = require('mysql2')

exports.conection =  mysql.createPool({
    "user": 'root',
    "password": 'root',
    "database": 'QIKBYTE',
    "host": 'localhost',
    "port": '3306'
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