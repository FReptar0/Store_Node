const { query } = require('../../../utils/MySQL');

const findAll = async () => {
    const sql = `SELECT * FROM products`;
    return await query(sql, []);
}

const findOne = async (id) => {
    if (Number.isNaN(id)) throw Error('Invalid id');
    const sql = `SELECT * FROM products WHERE id_product=?`;
    return await query(sql, [id]);
}

const save = async (product) => {
    if (!product.NAME || !product.DESCRIPTION || !product.PRICE) throw Error('Missing fields');
    const sql = `INSERT INTO products(name, description, price, stock, id_store) VALUES(?,?,?,?,?)`;
    const { insertedId } = await query(sql, [product.NAME, product.DESCRIPTION, product.PRICE, product.STOCK, product.ID_STORE]);
    return { ...product, id: insertedId };
}

const update = async (product, id) => {
    if (!product.NAME || !product.DESCRIPTION || !product.PRICE || !product.STOCK) throw Error('Missing fields');
    if (Number.isNaN(id)) throw Error('Invalid id');
    const sql = `UPDATE products SET name=?, description=?, price=?, stock=? WHERE id_product=?`;
    await query(sql, [product.NAME, product.DESCRIPTION, product.PRICE, product.STOCK, id]);
    return { ...product, id: id };
}

const remove = async (id) => {
    if (Number.isNaN(id)) throw Error('Invalid id');
    const sql = `DELETE FROM products WHERE id_product=?`;
    await query(sql, [id]);
    return { deletedId: id };
}

module.exports = { findAll, findOne, save, update, remove };