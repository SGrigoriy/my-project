export class Product {
    constructor(id, name, type, cost) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.cost = cost;
    }
}

export class Client {
    constructor(id, firstName, lastName, spentMoney = 0) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.spentMoney = spentMoney;
    }
}