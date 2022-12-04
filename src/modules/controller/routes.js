// TODO: requerir los controladores de cada ruta y asignarlos a las rutas (exportar el router)
const { orderRouter } = require('./orders/orders.controller.js');
const { storeRouter } = require('./stores/stores.controller.js');
const { productRouter } = require('./products/products.controller.js');

module.exports = {
    orderRouter,
    storeRouter,
    productRouter,
}