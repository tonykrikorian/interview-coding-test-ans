import {expect} from 'chai'
import CarInsurance from '../src/Products/CarInsurance'
import MegaCoverage from '../src/Products/MegaCoverage'
import Product from '../src/Products/Product'
import SpecialFullCoverage from '../src/Products/SpecialFullCoverage' 
import SuperSale from '../src/Products/SuperSale' 

describe('Unit testing para los distintos Productos',()=>{
    it('Probar los valores para el dia 1 del producto Mega Coverage (Producto legendario)',()=>{
        const cartInsurence = new CarInsurance([ new MegaCoverage('Mega Coverage', 0, 80)])
        expect(cartInsurence.updatePrice()[0].price).to.eq(80)
        expect(cartInsurence.updatePrice()[0].name).to.eq('Mega Coverage')
        expect(cartInsurence.updatePrice()[0].sellIn).to.eq(0)
    })

    it('Testear los valores para el dia 1 del producto Medium Coverage',()=>{
        const cartInsurence = new CarInsurance([new Product('Medium Coverage', 10, 20)])
        const [producto] = cartInsurence.updatePrice()
        expect(producto.name).to.eq('Medium Coverage')
        expect(producto.price).eq(19)
        expect(producto.sellIn).to.eq(9)
    })
    it('Testear los valores para el dia 1 del producto Low Coverage',()=>{
        const cartInsurence = new CarInsurance([new Product('Low Coverage', 5, 7)])
        const [producto] = cartInsurence.updatePrice()
        expect(producto.name).to.eq('Low Coverage')
        expect(producto.price).eq(6)
        expect(producto.sellIn).to.eq(4)
    })
    it('Testear los valores para el dia 1 del producto Low Coverage',()=>{
        const cartInsurence = new CarInsurance([ new SpecialFullCoverage('Special Full Coverage', 15, 20)])
        const [producto] = cartInsurence.updatePrice()
        expect(producto.name).to.eq('Special Full Coverage')
        expect(producto.price).eq(21)
        expect(producto.sellIn).to.eq(14)
    })
    it('Testear los valores para el dia 1 del producto Low Coverage',()=>{
        const cartInsurence = new CarInsurance([  new SpecialFullCoverage('Special Full Coverage', 10, 49)])
        const [producto] = cartInsurence.updatePrice()
        expect(producto.name).to.eq('Special Full Coverage')
        expect(producto.price).eq(50)
        expect(producto.sellIn).to.eq(9)
    })
    it('Testear los valores para el dia 1 del producto Low Coverage',()=>{
        const cartInsurence = new CarInsurance([   new SpecialFullCoverage('Special Full Coverage', 5, 49),])
        const [producto] = cartInsurence.updatePrice()
        expect(producto.name).to.eq('Special Full Coverage')
        expect(producto.price).eq(50)
        expect(producto.sellIn).to.eq(4)
    })
    it('Testear los valores para el dia 1 del producto Super Sale',()=>{
        const cartInsurence = new CarInsurance([    new SuperSale('Super Sale', 3, 6),])
        const [producto] = cartInsurence.updatePrice()
        expect(producto.name).to.eq('Super Sale')
        expect(producto.price).eq(4)
        expect(producto.sellIn).to.eq(2)
    })
})