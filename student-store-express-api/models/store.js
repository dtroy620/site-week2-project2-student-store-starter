

class Store {
    constructor() {}
    getAllProducts() {
        const storage = this.getStorage()
        const products = storage.get("products").value();
        return Object.values(products);
    }

    getProductsById(productId) {
        const storage = this.getStorage();
        const products = storage.get("products").value();
        const product = products.filter((product) => product.id == productId)
        return product[0]
    }

    postPurchase(shoppingCart, user) {
        
    }
    getStorage() {
        const { storage } = require('../data/storage')
        return storage
    }
}

module.exports = {store: new Store() };