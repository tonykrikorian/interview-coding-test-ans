"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }
    calculatePrice() {
        if (this.sellIn <= 0)
            this.price -= 2;
        if (this.sellIn > 0)
            --this.price;
        if (this.price <= 0)
            this.price = 0;
        --this.sellIn;
        return this;
    }
}
exports.default = Product;
