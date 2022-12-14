const express = require('express');
require('dotenv').config();
const cors = require('cors');
/* const { personalRouter, userRouter } = require('../modules/controller/routes')
 */
const { orderRouter, productRouter, storeRouter, providersRouter, rolRouter, personalRouter, clientRouter, authRouter } = require('../modules/controller/routes');
const app = express();

app.set("PORT", process.env.PORT || 3000);
app.set("HOST", process.env.HOST || "localhost");
app.use(cors({ origins: "*" }));
app.use(express.json({ limit: "50mb" }));

app.get('/', (req, res) => {
    res.send('Hello World! :)');
});

/* app.use('/personal', personalRouter);
app.use('/user', userRouter); */
//http://localhost:3000/orders
app.use('/orders', orderRouter);
app.use('/products', productRouter);
app.use('/stores', storeRouter);
app.use('/providers',providersRouter);
app.use('/roles', rolRouter);
app.use('/personal', personalRouter);
app.use('/clients', clientRouter);
app.use('/auth', authRouter);

module.exports = { app }