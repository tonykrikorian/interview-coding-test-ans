import Product from './Product';


export default class SuperSale extends Product {
    constructor(name:string,sellIn:number,price:number){
        super(name,sellIn,price)
    }
    
    calculatePrice(): Product {
        if(this.sellIn>0) this.price-=2
        if(this.sellIn<=0) this.price-=4
        if(this.price<=0) this.price=0
        --this.sellIn
        return this;
    }
}
