function Product(id, name, type, cost) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.cost = cost;
}

function Client(id, firstName, lastName, spentMoney = 0) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.spentMoney = spentMoney;
}

function Purchase(productName, type, sum, amount = 1, cretedAT = new Date()) {
    this.productName = productName;
    this.type = type;
    this.sum = sum;
    this.amount = amount;
    this.cretedAT = cretedAT;
}

function Shop() {
    this.clients = [];
    this.products = [];
    this.purchases = [];
}

Shop.prototype.addClient = function(clieent) {
    this.clients.push(clieent);
}
Shop.prototype.deleteClient = function(client) {
    this.clients.forEach((item, i, clients) => {
        if (item.id = client.id) {
            clients.splice(i, 1);
        }
    });
}
Shop.prototype.addProduct = function(product) {
    this.products.push(product);
}
Shop.prototype.deleteProduct = function(product) {
    this.products.forEach((item, i, products) => {
        if (item.id = product.id) {
            products.splice(i, 1);
        }
    });
}
Shop.prototype.addPurchase = function(purchase) {
    this.purchases.push(purchase);
}
Shop.prototype.sellProduct = function(clieent, productName, count) {
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
Shop.prototype.purchasedProductCount = function() {
    return this.purchases.map(p => p.amount).reduce((sum, i) => sum + i);
}
Shop.prototype.earnedMoney = function() {
    return this.clients.map(c => c.spentMoney).reduce((sum, i) => sum + i);
}
Shop.prototype.productsCount = function() {
    return this.products.length;
}
Shop.prototype.productsCountByType = function() {
    let result = {};
    this.products.map(p => p.type).forEach(function(type) { result[type] = (result[type] || 0) + 1; });
    return result;
}
Shop.prototype.purchasedSumByType = function() {
    let result = {};
    this.purchases.forEach(function(p) { result[p.type] = (result[p.type] || 0) + p.sum; });
    return result;
}

let client01 = new Client(1, 'Mary', 'Smit');
let client02 = new Client(2, 'Bob', 'Adams');

let product01 = new Product(1, 'Яблоко', 'Фрукты', 20);
    product02 = new Product(2, 'Яблоко', 'Фрукты', 20);
    product03 = new Product(3, 'Яблоко', 'Фрукты', 20);
    product04 = new Product(4, 'Яблоко', 'Фрукты', 20);
    product05 = new Product(5, 'Картофель', 'Овощи', 25);
    product06 = new Product(6, 'Картофель', 'Овощи', 25);
    product07 = new Product(7, 'Морковь', 'Овощи', 30);

const MyShop = new Shop();

MyShop.addClient(client01);
MyShop.addClient(client02);

MyShop.addProduct(product01);
MyShop.addProduct(product02);
MyShop.addProduct(product03);
MyShop.addProduct(product04);
MyShop.addProduct(product05);
MyShop.addProduct(product06);
MyShop.addProduct(product07);

MyShop.sellProduct(client01, 'Яблоко', 2);

console.log(MyShop.purchasedProductCount());
console.log(MyShop.earnedMoney());
console.log(MyShop.productsCount());
console.log(MyShop.productsCountByType());
console.log(MyShop.purchasedSumByType());

console.log(MyShop);