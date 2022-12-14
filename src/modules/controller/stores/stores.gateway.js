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
    if (!store.name || !store.address || !store.city || !store.state || !store.zipcode || !store.country || !store.phone) throw Error('Missing fields');
    const sql = `INSERT INTO stores(NAME, ADDRESS, CITY, STATE, ZIPCODE, COUNTRY, PHONE) VALUES(?,?,?,?,?,?,?);`;
    const { insertedId } = await query(sql, [store.name, store.address, store.city, store.state, store.zipcode, store.country, store.phone]);
    return { ...store, id: insertedId };
}

const update = async (store, id) => {
    if (!store.name || !store.address || !store.city || !store.state || !store.zipcode || !store.country || !store.phone) throw Error('Missing fields');
    if (Number.isNaN(id)) throw Error('Invalid id');
    const sql = `UPDATE stores SET name=?, address=?, city=?, state=?, zipcode=?, country=?, phone=? WHERE id_store=?`;
    await query(sql, [store.name, store.address, store.city, store.state, store.zipcode, store.country, store.phone, id]);
    return { ...store, id: id };
}

const remove = async (id) => {
    if (Number.isNaN(id)) throw Error('Invalid id');
    const sql = `DELETE FROM stores WHERE id_store=?`;
    await query(sql, [id]);
    return {deletedId: id};
}

module.exports = { findAll, findOne, save, update, remove };