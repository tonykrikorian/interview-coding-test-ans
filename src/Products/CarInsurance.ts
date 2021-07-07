
import Product from "./Product";

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