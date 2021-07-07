import Product from "./Product";
import { ProductsEnum } from "./ProductsEnum";

export default class MegaCoverage extends Product
{
   constructor(name:string,sellIn:number,price:number){
        super(name,sellIn,price)
    }

    calculatePrice():Product{
        this.price =ProductsEnum.LegendaryProductPrice
        return this 
    }
}