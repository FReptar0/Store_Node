const { query } = require ('../../../utils/mysql');
const { hashPassword } = require ('../../../utils/functions')
const findAll = async () => {
    const sql = `SELECT * FROM CLIENTS`
    return await query (sql, [])
}

const findByID = async (id) => {
    if (!id) throw Error ('No se ha especificado un id!')
    if (Number.isNaN(id)) throw Error ('Solo se admiten numeros!')
    const sql = `SELECT * FROM CLIENTS WHERE ID_CLIENT=?`
    return await query(sql, [id])
}

const save = async (client) => {
    if (!client.FULLNAME ||
        !client.EMAIL ||
        !client.PASSWORD ||
        !client.ADDRESS ||
        !client.CITY ||
        !client.STATE ||
        !client.ZIPCODE ||
        !client.COUNTRY ||
        !client.PHONE) throw Error('Algunos parametros no se han ingresado')
    const hashedPassword = await hashPassword(client.PASSWORD)
    const sql = `INSERT INTO CLIENTS (FULLNAME, EMAIL, PASSWORD, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY, PHONE) VALUES (?,?,?,?,?,?,?,?,?)`
    const { insertId } = await query (sql, [
        client.FULLNAME,
        client.EMAIL,
        hashedPassword,
        client.ADDRESS,
        client.CITY,
        client.STATE,
        client.ZIPCODE,
        client.COUNTRY,
        client.PHONE
    ])
    delete client.PASSWORD
    return { id:insertId, ...client }
}

const update = async (client, id) => {
    if (!id) throw Error ('El id no ha sido ingresado')
    if (Number.isNaN(id)) throw Error('El id no es un numero!')
    if (!client.FULLNAME ||
        !client.EMAIL ||
        !client.PASSWORD ||
        !client.ADDRESS ||
        !client.CITY ||
        !client.STATE ||
        !client.ZIPCODE ||
        !client.COUNTRY ||
        !client.PHONE) throw Error('Algunos parametros no se han ingresado')
    const hashedPassword = await hashPassword(client.PASSWORD)
    const sql = `UPDATE CLIENTS SET FULLNAME=?, EMAIL=?, PASSWORD=?, ADDRESS=?, CITY=?, STATE=?, ZIPCODE=?, COUNTRY=?, PHONE=? WHERE ID_CLIENT=?`
    await query(sql, [
        client.FULLNAME,
        client.EMAIL,
        hashedPassword,
        client.ADDRESS,
        client.CITY,
        client.STATE,
        client.ZIPCODE,
        client.COUNTRY,
        client.PHONE,
        id
    ])
    delete client.PASSWORD
    return { id:id, client}
}

const remove = async (id) => {
    if (!id) throw Error('No se ha ingresado el id')
    if (Number.isNaN(id)) throw Error('El id no es un numero!')
    const sql = `DELETE FROM CLIENTS WHERE ID_CLIENT=?`
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