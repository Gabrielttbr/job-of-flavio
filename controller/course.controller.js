const conectionDb = require('../db');

exports.postCourse = async (req, res, next) => {
    try {
        const result = await conectionDb.execute('INSERT INTO CURSO(DESCRICAO,CARGA_HORARIA) VALUES (?,?);', [req.body.descricao, req.body.carga_horaria])
        return res.status(200).send({
            message: "Course insert with sucess",
            results: result
        })
    } catch (error) {
        return res.status(500).send({
            message: "Erro in insert course",
            results: error
        })
    }
}
exports.getCourse = async (req, res, next) => {
    try {
        const result = await conectionDb.execute('select * from CURSO');
        return res.status(200).send({
            message: "Get all course",
            response: result
        })
    } catch (error) {
        return res.status(500).send({ 
            message: "Erro in get course",
            results: error
        })
    }
}
exports.patchCourse = async (req, res, next) => {
    
    try{
        const result = await conectionDb.execute('UPDATE CURSO SET DESCRICAO = ?,CARGA_HORARIA=? WHERE ID = ?;', 
        [req.body.descricao, req.body.carga_horaria, req.body.id])
        return res.status(200).send({
            message: "course update with sucess",
            results: result
        })
    }catch(e){
        const response = {
            message: 'Erro in update course',
            results: e
        }
        return res.status(500).send({response});
    }
}
exports.deleteCourse = async (req, res, next) => {
    const id = req.body.id;
    try {

        const result = await conectionDb.execute('delete from CURSO where ID = ?;', [id])
        
        if(result.affectedRows > 0){
            return res.status(200).send({
                message: "Course delete with sucess",
                results: result
            })
        }else{
            return res.status(500).send({
                message: "Erro in serve",
  
            })
        }
    } catch (error) {
        return res.status(500).send({
            message: "Error in delete course",
            results: error
        })
    }
} 