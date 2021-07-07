import Product from "./Products/Product";
import FullCoverage from "./Products/FullCoverage";
import CarInsurance from "./Products/CarInsurance";
import SpecialFullCoverage from "./Products/SpecialFullCoverage";
import MegaCoverage from "./Products/MegaCoverage";
import SuperSale from "./Products/SuperSale";


/**
 * Arreglo de tipo Product (Clase base), contiene un conjunto 
 * de productos hijos de product
 */
const products:Product[]=[
  new Product('Medium Coverage', 10, 20),
  new FullCoverage('Full Coverage',2,0),
  new Product('Low Coverage', 5, 7),
  new MegaCoverage('Mega Coverage', 0, 80),
  new MegaCoverage('Mega Coverage', -1, 80),
  new SpecialFullCoverage('Special Full Coverage', 15, 20),
  new SpecialFullCoverage('Special Full Coverage', 10, 49),
  new SpecialFullCoverage('Special Full Coverage', 5, 49),
  new SuperSale('Super Sale', 3, 6),
]

/**
 * Esta función se encarga de implementar un logger en consola 
 * @param product : Parametro de tipo Product
 */
const productPrinter = function (product:Product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};


const carInsurance = new CarInsurance(products);

/**
 * Se encarga de recorrer la lista de productos para los 30 dias del mes
 * y actualizar los precios mediante el carrito de compras.
 */
for (let i:number = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice().forEach(value => productPrinter(value))
  console.log('');
}