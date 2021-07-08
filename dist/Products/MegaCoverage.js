"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
const ProductsEnum_1 = require("./ProductsEnum");
class MegaCoverage extends Product_1.default {
    constructor(name, sellIn, price) {
        super(name, sellIn, price);
    }
    calculatePrice() {
        this.price = ProductsEnum_1.ProductsEnum.LegendaryProductPrice;
        return this;
    }
}
exports.default = MegaCoverage;
