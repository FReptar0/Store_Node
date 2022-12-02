const { sql } = require('../../../utils/MySQL');

const findAll = async() => {
    const query = `SELECT * FROM orders 
    JOIN clients ON orders.id_client=clients.id_client
    JOIN personal ON orders.id_personal=personal.id_personal
    JOIN stores ON orders.id_store=stores.id_store`;
    return await sql(query, []);
}

const findOne = async(id) => {
    if(Number.isNaN(id)) throw Error('Invalid id');
    const query = `SELECT * FROM orders 
    JOIN clients ON orders.id_client=clients.id_client
    JOIN personal ON orders.id_personal=personal.id_personal
    JOIN stores ON orders.id_store=stores.id_store WHERE id_order=?`;
    return await sql(query, [id]);
}

const save = async(order) => {
    if(Number.isNaN(order.id_client) ||
    Number.isNaN(order.id_personal) ||
    Number.isNaN(order.id_store) ||
    !order.description) throw Error('Missing fields');
    const query = `INSERT INTO orders(id_client, id_personal, id_store, description) VALUES(?,?,?,?)`;
    const {insertedId} = await sql(query, [order.id_client, order.id_personal, order.id_store, order.description]);
    return {...order, id:insertedId};
}

const update = async(order, id) => {
    if(Number.isNaN(order.id_client) ||
    Number.isNaN(order.id_personal) ||
    Number.isNaN(order.id_store) ||
    !order.description) throw Error('Missing fields');
    if(Number.isNaN(id)) throw Error('Invalid id');
    const query = `UPDATE orders SET id_client=?, id_personal=?, id_store=?, description=? WHERE id_order=?`;
    await sql(query, [order.id_client, order.id_personal, order.id_store, order.description, id]);
    return {...order, id:id};
}

const remove = async(id) => {
    if(Number.isNaN(id)) throw Error('Invalid id');
    const query = `DELETE FROM orders WHERE id_order=?`;
    await sql(query, [id]);
    return {deletedId:id};
}

module.exports = {
    findAll,
    findOne,
    save,
    update,
    remove
};