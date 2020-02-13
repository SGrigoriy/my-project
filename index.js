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

    addClient(clieent) {
        this.clients.push(clieent);
    }
    deleteClient(client) {
        this.clients.forEach((item, i, clients) => {
            if (item.id = client.id) {
                clients.splice(i, 1);
            }
        });
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(product) {
        this.products.forEach((item, i, products) => {
            if (item.id = product.id) {
                products.splice(i, 1);
            }
        });
    }
    addPurchase(purchase) {
        this.purchases.push(purchase);
    }
    sellProduct(clieent, productName, count) {
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
    purchasedProductCount() {
        return this.purchases.map(p => p.amount).reduce((sum, i) => sum + i);
    }
    earnedMoney() {
        return this.clients.map(c => c.spentMoney).reduce((sum, i) => sum + i);
    }
    productsCount() {
        return this.products.length;
    }
    productsCountByType() {
        let result = {};
        this.products.map(p => p.type).forEach(function(type) { result[type] = (result[type] || 0) + 1; });
        return result;
    }
    purchasedSumByType() {
        let result = {};
        this.purchases.forEach(function(p) { result[p.type] = (result[p.type] || 0) + p.sum; });
        return result;
    }
}

export {Product, Client, Shop};