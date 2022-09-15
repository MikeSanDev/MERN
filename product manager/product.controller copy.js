const { Product } = require('../models/product.model')

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err))
}
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}
module.exports.getProduct = (request, response) => {
    Product.findOne({ _id: request.params.id })
        .then(product => response.json(product))
        .catch(err => response.json(err))
}
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}