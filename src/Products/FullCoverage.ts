

import Product from "./Product";
export default class FullCoverage extends Product
{
    constructor(name:string,sellIn:number,price:number){
        super(name,sellIn,price)
    }

    calculatePrice():Product
    {
        if(this.sellIn>0) this.price+=1
        if(this.sellIn<=0) this.price+=2
        if(this.price>=50) this.price=50
        --this.sellIn
      
        return this;
    }
}