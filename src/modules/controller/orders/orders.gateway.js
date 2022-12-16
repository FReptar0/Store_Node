const { query } = require('../../../utils/MySQL');

const findAll = async() => {
    const sql = `SELECT * FROM orders 
    JOIN clients ON orders.ID_CLIENT=clients.ID_CLIENT
    JOIN personal ON orders.ID_PERSONAL=personal.ID_PERSONAL
    JOIN stores ON orders.ID_STORE=stores.ID_STORE`;
    return await query(sql, []);
}

const findOne = async(id) => {
    if(Number.isNaN(id)) throw Error('Invalid id');
    const sql = `SELECT * FROM orders 
    JOIN clients ON orders.ID_CLIENT=clients.ID_CLIENT
    JOIN personal ON orders.ID_PERSONAL=personal.ID_PERSONAL
    JOIN stores ON orders.ID_STORE=stores.ID_STORE WHERE ID_ORDER=?`;
    return await query(sql, [id]);
}

const save = async(order) => {
    if(Number.isNaN(order.ID_CLIENT) ||
    Number.isNaN(order.ID_PERSONAL) ||
    Number.isNaN(order.ID_STORE) ||
    !order.DESCRIPTION) throw Error('Missing fields');
    const sql = `INSERT INTO orders(ID_CLIENT, ID_PERSONAL, ID_STORE, DESCRIPTION) VALUES(?,?,?,?)`;
    const {insertedId} = await query(sql, [order.ID_CLIENT, order.ID_PERSONAL, order.ID_STORE, order.DESCRIPTION]);
    return {...order, id:insertedId};
}

const update = async(order, id) => {
    if(Number.isNaN(order.ID_CLIENT) ||
    Number.isNaN(order.ID_PERSONAL) ||
    Number.isNaN(order.ID_STORE) ||
    !order.DESCRIPTION) throw Error('Missing fields');
    if(Number.isNaN(id)) throw Error('Invalid id');
    console.log(order);
    const sql = `UPDATE orders SET ID_CLIENT=?, ID_PERSONAL=?, ID_STORE=?, DESCRIPTION=? WHERE ID_ORDER=?`;
    await query(sql, [order.ID_CLIENT, order.ID_PERSONAL, order.ID_STORE, order.DESCRIPTION, id]);
    return {...order, id:id};
}

const remove = async(id) => {
    if(Number.isNaN(id)) throw Error('Invalid id');
    const sql = `DELETE FROM orders WHERE ID_ORDER=?`;
    await query(sql, [id]);
    return {deletedId:id};
}

module.exports = {
    findAll,
    findOne,
    save,
    update,
    remove
};