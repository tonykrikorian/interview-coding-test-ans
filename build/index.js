"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Products/Product"));
const FullCoverage_1 = __importDefault(require("./Products/FullCoverage"));
const CarInsurance_1 = __importDefault(require("./Products/CarInsurance"));
const SpecialFullCoverage_1 = __importDefault(require("./Products/SpecialFullCoverage"));
const MegaCoverage_1 = __importDefault(require("./Products/MegaCoverage"));
const SuperSale_1 = __importDefault(require("./Products/SuperSale"));
/**
 * Arreglo de tipo Product (Clase base), contiene un conjunto
 * de productos hijos de product
 */
const products = [
    new Product_1.default('Medium Coverage', 10, 20),
    new FullCoverage_1.default('Full Coverage', 2, 0),
    new Product_1.default('Low Coverage', 5, 7),
    new MegaCoverage_1.default('Mega Coverage', 0, 80),
    new MegaCoverage_1.default('Mega Coverage', -1, 80),
    new SpecialFullCoverage_1.default('Special Full Coverage', 15, 20),
    new SpecialFullCoverage_1.default('Special Full Coverage', 10, 49),
    new SpecialFullCoverage_1.default('Special Full Coverage', 5, 49),
    new SuperSale_1.default('Super Sale', 3, 6),
];
/**
 * Esta función se encarga de implementar un logger en consola
 * @param product : Parametro de tipo Product
 */
const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};
const carInsurance = new CarInsurance_1.default(products);
/**
 * Se encarga de recorrer la lista de productos para los 30 dias del mes
 * y actualizar los precios mediante el carrito de compras.
 */
for (let i = 1; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    carInsurance.updatePrice().forEach(value => productPrinter(value));
    console.log('');
}
