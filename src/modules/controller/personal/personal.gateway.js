const { query } = require ('../../../utils/mysql');
const { hashPassword } = require ('../../../utils/functions')

const findAll = async() => {
    const sql = `SELECT * FROM PERSONAL`
    return await query(sql, [])
}

const findByID = async (id) => {
    if (!id) throw Error ('No se ha ingresado el id')
    if (Number.isNaN(id)) throw Error('Solo se admiten numeros!')
    const sql = `SELECT * FROM PERSONAL WHERE ID_PERSONAL=?`
    return await query(sql, [id])
}

const save = async (personal) => {
    if (!personal.FULLNAME ||
        !personal.EMAIL ||
        !personal.PASSWORD ||
        !personal.ID_ROL ||
        !personal.ID_STORE) throw Error('No se han ingresado todos los parametros')
    const hashedPassword = await hashPassword(personal.PASSWORD)
    const sql = `INSERT INTO PERSONAL (FULLNAME, EMAIL, PASSWORD, ID_ROL, ID_STORE) VALUES (?,?,?,?,?)`
    const { insertId } = await query (sql, [
        personal.FULLNAME,
        personal.EMAIL,
        hashedPassword,
        personal.ID_ROL,
        personal.ID_STORE
    ])
    delete personal.PASSWORD
    return { id:insertId, ...personal }
}

const update = async (personal, id) => {
    console.log(personal)
    if (!id) throw Error ('El id no ha sido ingresado')
    if (Number.isNaN(id)) throw Error('Solo se admiten numeros!')
    if (!personal.FULLNAME ||
        !personal.EMAIL ||
        !personal.PASSWORD) throw Error('Algunos parametros no se han ingresado')
    const sql = `UPDATE PERSONAL SET FULLNAME=?, EMAIL=?, PASSWORD=? WHERE ID_PERSONAL=?`
    await query(sql, [
        personal.FULLNAME,
        personal.EMAIL,
        personal.PASSWORD,
        id
    ])
    return { id:id, personal }
}

const remove = async (id) => {
    if (!id) throw Error ('No se ha ingresado el id')
    if (Number.isNaN(id)) throw Error('No se han ingresado todos los parametros')
    const sql = `DELETE FROM PERSONAL WHERE ID_PERSONAL=?`
    await query(sql, [id])
    return { idDeleted:id }
}

module.exports = {
    findAll,
    findByID,
    save,
    update,
    remove
}