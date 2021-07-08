"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class SuperSale extends Product_1.default {
    constructor(name, sellIn, price) {
        super(name, sellIn, price);
    }
    calculatePrice() {
        if (this.sellIn > 0)
            this.price -= 2;
        if (this.sellIn <= 0)
            this.price -= 4;
        if (this.price <= 0)
            this.price = 0;
        --this.sellIn;
        return this;
    }
}
exports.default = SuperSale;
