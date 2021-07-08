"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description Se encarga de actualizar los precios de los
 * productos del carrito de compras
 */
class CarInsurance {
    constructor(products = []) {
        this.products = products;
    }
    updatePrice() {
        for (let product of this.products) {
            product.calculatePrice();
        }
        return this.products;
    }
}
exports.default = CarInsurance;
