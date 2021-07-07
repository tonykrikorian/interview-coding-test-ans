import {ProductsEnum} from './Enums'
export default class Product
{
    constructor(public name:string, public sellIn:number, public price:number) {}

    calculatePrice():Product{
        if(this.sellIn <=0) this.price-=2
        if(this.sellIn>0) --this.price
        if(this.price<=0) this.price=0
        --this.sellIn;
        return this
    }
}