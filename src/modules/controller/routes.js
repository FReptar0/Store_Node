// TODO: requerir los controladores de cada ruta y asignarlos a las rutas (exportar el router)
const { orderRouter } = require('./orders/orders.controller');
const { storeRouter } = require('./stores/stores.controller');
const { productRouter } = require('./products/products.controller');
const { providersRouter } = require('./providers/providers.controller');
const { rolRouter } = require('./rol/rol.controller');
const { personalRouter } = require('./personal/personal.controller');
const { clientRouter } = require('./client/client.controller');

module.exports = {
    orderRouter,
    storeRouter,
    productRouter,
    providersRouter,
    rolRouter,
    personalRouter,
    clientRouter
}