const { query } = require('../../../utils/MySQL');

const findAll = async () => {
    const sql = `SELECT * FROM stores`;
    return await query(sql, []);
}

const findOne = async (id) => {
    if (Number.isNaN(id)) throw Error('Invalid id');
    const sql = `SELECT * FROM stores WHERE id_store=?`;
    return await query(sql, [id]);
}

const save = async (store) => {
    if (!store.NAME || !store.ADDRESS || !store.CITY || !store.STATE || !store.ZIPCODE || !store.COUNTRY || !store.PHONE) throw Error('Missing fields');
    const sql = `INSERT INTO stores(NAME, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY, PHONE) VALUES(?,?,?,?,?,?,?);`;
    const { insertedId } = await query(sql, [store.NAME, store.ADDRESS, store.CITY, store.STATE, store.ZIPCODE, store.COUNTRY, store.PHONE]);
    return { ...store, id: insertedId };
}

const update = async (store, id) => {
    console.log(store);
    if (!store.NAME || !store.ADDRESS || !store.CITY || !store.STATE || !store.ZIPCODE || !store.COUNTRY || !store.PHONE) throw Error('Missing fields');
    if (Number.isNaN(id)) throw Error('Invalid id');
    const sql = `UPDATE stores SET name=?, address=?, city=?, state=?, zipcode=?, country=?, phone=? WHERE id_store=?`;
    await query(sql, [store.NAME, store.ADDRESS, store.CITY, store.STATE, store.ZIPCODE, store.COUNTRY, store.PHONE, id]);
    return { ...store, id: id };
}

const remove = async (id) => {
    if (Number.isNaN(id)) throw Error('Invalid id');
    const sql = `DELETE FROM stores WHERE ID_STORE=?`;
    await query(sql, [id]);
    return {deletedId: id};
}

module.exports = { findAll, findOne, save, update, remove };