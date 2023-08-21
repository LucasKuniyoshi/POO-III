import IMakeCoffee from "./IMakeCoffee";

export default class EsquentarAgua implements IMakeCoffee{
    coffee: CoffeeType;

    escolherCafe(coffe: CoffeeType): void {
        this.coffee = coffe;
        console.log("Água no fogão...");
    }
    fazerCafe(): void {
        this.escolherCafe(this.coffee);
        console.log("Agua quente adicionada ao compartimento!");
    }

}