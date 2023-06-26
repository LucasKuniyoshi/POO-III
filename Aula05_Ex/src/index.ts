import SanduicheBuilder from "./buidler/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder = new SanduicheBuilder;
const director = new Director(builder);

director.constructHotDog();
const hotdog : Sanduiche = builder.getSanduiche();
console.log("Fazendo um " + hotdog.sanduicheType);
console.log("Pao: " + hotdog.bread);
console.log("Carne: " +hotdog.protein.protein +" " + hotdog.protein.peso);
console.log("Salada: " + hotdog.salad.salad);
console.log("Molho: ");
for(const k in hotdog.sauce){
    console.log(hotdog.sauce[k].sauce);
}

console.log(" ");
console.log("-------------------------------------");
console.log(" ");

director.constructXSalada();
const xsalada : Sanduiche = builder.getSanduiche();
console.log("Fazendo um " + xsalada.sanduicheType);
console.log("Pao: " + xsalada.bread);
console.log("Carne: " +xsalada.protein.protein + " "+ xsalada.protein.peso);
console.log("Salada: " + xsalada.salad.salad);
console.log("Molho: ");
for(const k in xsalada.sauce){
    console.log(xsalada.sauce[k].sauce);
}