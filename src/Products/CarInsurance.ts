
import Product from "./Product";

/**
 * @description Se encarga de actualizar los precios de los
 * productos del carrito de compras
 */
export default class CarInsurance
{
    
    constructor(public products:Product[]=[]){}

    updatePrice():Product[]| never{
        for(let product of this.products){
            product.calculatePrice()          
        }
    return this.products;
    }
}