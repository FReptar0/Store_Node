const { sql } = require('../../../utils/MySQL');

const findAll = async () => {
    const query = `SELECT * FROM products`;
    return await sql
}

const findOne = async (id) => {
    if (Number.isNaN(id)) throw Error('Invalid id');
    const query = `SELECT * FROM products WHERE id_product=?`;
    return await sql(query, [id]);
}

const save = async (product) => {
    if (!product.name || !product.description || !product.price) throw Error('Missing fields');
    const query = `INSERT INTO products(name, address, city, state, zipcode, country, phone) VALUES(?,?,?,?,?,?,?)`;
    const { insertedId } = await sql(query, [product.name, product.address, product.city, product.state, product.zipcode, product.country, product.phone]);
    return { ...product, id: insertedId };
}

const update = async (product, id) => {
    if (!product.name || !product.description || !product.price) throw Error('Missing fields');
    if (Number.isNaN(id)) throw Error('Invalid id');
    const query = `UPDATE products SET name=?, address=?, city=?, state=?, zipcode=?, country=?, phone=? WHERE id_product=?`;
    await sql(query, [product.name, product.address, product.city, product.state, product.zipcode, product.country, product.phone, id]);
    return { ...product, id: id };
}

const remove = async (id) => {
    if (Number.isNaN(id)) throw Error('Invalid id');
    const query = `DELETE FROM products WHERE id_product=?`;
    await sql(query, [id]);
}

module.exports = { findAll, findOne, save, update, remove };