class Product {
    constructor(id, name, type, cost) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.cost = cost;
    }
}

class Client {
    constructor(id, firstName, lastName, spentMoney = 0) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.spentMoney = spentMoney;
    }
}

class Purchase {
    constructor(productName, type, sum, amount = 1, cretedAT = new Date()) {
        this.productName = productName;
        this.type = type;
        this.sum = sum;
        this.amount = amount;
        this.cretedAT = cretedAT;
    }
}

class Shop {
    constructor() {
        this.clients = [];
        this.products = [];
        this.purchases = [];
    }
    addClient = function(clieent) {
        this.clients.push(clieent);
    }
    deleteClient = function(client) {
        this.clients.forEach((item, i, clients) => {
            if (item.id = client.id) {
                clients.splice(i, 1);
            }
        });
    }
    addProduct = function(product) {
        this.products.push(product);
    }
    deleteProduct = function(product) {
        this.products.forEach((item, i, products) => {
            if (item.id = product.id) {
                products.splice(i, 1);
            }
        });
    }
    addPurchase = function(purchase) {
        this.purchases.push(purchase);
    }
    sellProduct = function(clieent, productName, count) {
        let productsToSell = this.products.filter(item => item.name == productName),
            infoProduct = productsToSell[0];
        if (!productsToSell)
            return `Товара ${productName} нет на складе!`;
        if (productsToSell.length < count)
            return `Недостаточное количество товара ${productName} на складе`;
        
        productsToSell.splice(0, productsToSell.length - count);
        
        let sum = infoProduct.cost * count;

        productsToSell.forEach(p => {
            this.deleteProduct(p);
        })
        this.addPurchase(new Purchase(infoProduct.name, infoProduct.type, sum, count));
        clieent.spentMoney += sum;
    }
    purchasedProductCount = function() {
        return this.purchases.map(p => p.amount).reduce((sum, i) => sum + i);
    }
    earnedMoney = function() {
        return this.clients.map(c => c.spentMoney).reduce((sum, i) => sum + i);
    }
    productsCount = function() {
        return this.products.length;
    }
    productsCountByType = function() {
        let result = {};
        this.products.map(p => p.type).forEach(function(type) { result[type] = (result[type] || 0) + 1; });
        return result;
    }
    purchasedSumByType = function() {
        let result = {};
        this.purchases.forEach(function(p) { result[p.type] = (result[p.type] || 0) + p.sum; });
        return result;
    }
}
export {Client, Product, Shop};