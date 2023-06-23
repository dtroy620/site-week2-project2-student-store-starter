const storage = require('../data/storage')

class Store {
    constructor() {}
    getAllProducts() {
        const storage = storage
        const products = storage.get("products").value();
        return Object.values(products);
    }

    getProductsById(productId) {
        const storage = storage;
        const products = storage.get("products").value();
        const product = products.filter((product) => product.id === productId)
        return product[0]
    }
}

module.exports = {store: new Store() };