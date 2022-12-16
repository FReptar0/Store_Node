const { query } = require('../../../utils/MySQL');
const { generateToken } = require('../../../config/jwt');
const { validatePassword } = require('../../../utils/functions');
const e = require('express');

const login = async (user) => {
    const { email, password } = user;
    console.log(email, password);
    if (!email || !password) throw Error('Invalid credentials');

    const sql = `SELECT * FROM clients WHERE email = ?`;
    const existsUser = await query(sql, [email]);
    console.log(existsUser[0]);
    console.log("password: ", password);
    console.log("existsUser[0].password: ", existsUser[0].PASSWORD);
    console.log(await validatePassword(password, existsUser[0].PASSWORD));
    if (await validatePassword(password, existsUser[0].PASSWORD))
        return generateToken({
            id: existsUser[0].id,
            email: email,
            role: existsUser[0].role,
            isLogged: true,
        });
    throw Error('Invalid credentials');
}

module.exports = { login };