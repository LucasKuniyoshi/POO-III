import IMakeCoffee from "./IMakeCoffee";

export default class AdicionarCafe implements IMakeCoffee{
    coffee: CoffeeType;

    escolherCafe(coffe: CoffeeType): void {
        this.coffee = coffe;
        console.log("Escolhendo Café...");
    }
    fazerCafe(): void {
        this.escolherCafe(this.coffee);
        console.log("Café adicionado ao compartimento!");
    }

}