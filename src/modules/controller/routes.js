// TODO: requerir los controladores de cada ruta y asignarlos a las rutas (exportar el router)
const { orderRouter } = require('./orders/orders.controller');
const { storeRouter } = require('./stores/stores.controller');
const { productRouter } = require('./products/products.controller');
const { providersRouter } = require('./providers/providers.controller')
const {} = require('./rol/rol.controller')

module.exports = {
    orderRouter,
    storeRouter,
    productRouter,
    providersRouter,
    
}