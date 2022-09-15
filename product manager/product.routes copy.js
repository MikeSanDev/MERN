const ProductController = require('../controllers/product.controller');
module.exports = function (app) {
    // route requires callback function but got an object
    // app.get('/', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}