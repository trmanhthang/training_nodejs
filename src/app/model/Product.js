class Product {
    private id = 0;
    private name;
    private quantity;
    private price;
    private category;

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    constructor(name, quantity, price, category) {
        this._id++;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
        this._category = category;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get quantity() {
        return this._quantity;
    }

    get price() {
        return this._price;
    }

    set id(value) {
        this._id = value;
    }

    set name(value) {
        this._name = value;
    }

    set quantity(value) {
        this._quantity = value;
    }

    set price(value) {
        this._price = value;
    }
}