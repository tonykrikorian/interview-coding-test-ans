"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
const ProductsEnum_1 = require("./ProductsEnum");
class SpecialFullCoverage extends Product_1.default {
    constructor(name, sellIn, price) {
        super(name, sellIn, price);
    }
    calculatePrice() {
        if (this.sellIn > 0)
            this.price += 1;
        if (this.sellIn === 0)
            this.price = ProductsEnum_1.ProductsEnum.MinProductPrice;
        if (this.sellIn > 0 && this.sellIn <= 3)
            this.price += 3;
        if (this.sellIn > 0 && this.sellIn <= 10)
            this.price += 2;
        if (this.price >= ProductsEnum_1.ProductsEnum.MaxProductPrice)
            this.price = ProductsEnum_1.ProductsEnum.MaxProductPrice;
        --this.sellIn;
        return this;
    }
}
exports.default = SpecialFullCoverage;
