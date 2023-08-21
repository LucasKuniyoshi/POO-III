import IMakeCoffee from "./IMakeCoffee";

export default class AdicionarLeite implements IMakeCoffee{
    coffee: CoffeeType;

    escolherCafe(coffe: CoffeeType): void {
        this.coffee = coffe;
        console.log("Café escolhido, preparando leite...");
    }
    fazerCafe(): void {
        this.escolherCafe(this.coffee);
        console.log("Leite adicionado ao compartimento!");
    }

}