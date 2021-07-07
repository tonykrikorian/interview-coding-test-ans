import Product from "./Product";
import {ProductsEnum} from './ProductsEnum'
export default class SpecialFullCoverage extends Product
{
    constructor(name:string,sellIn:number,price:number){
        super(name,sellIn,price)
    }
    calculatePrice(): Product {
        
        if(this.sellIn>0) this.price+=1
     

        if(this.sellIn===0) this.price=ProductsEnum.MinProductPrice
        if(this.sellIn >0 && this.sellIn <=3) this.price+=3
        if(this.sellIn >0 && this.sellIn<=10) this.price+=2
 
        if(this.price>=ProductsEnum.MaxProductPrice) this.price=ProductsEnum.MaxProductPrice
        --this.sellIn
        return this;
    }
    
}