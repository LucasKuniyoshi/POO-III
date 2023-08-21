import IMakeCoffee from "./IMakeCoffee";

export default class CoarCafe implements IMakeCoffee{
    coffee: CoffeeType;

    escolherCafe(coffe: CoffeeType): void {
        this.coffee = coffe;
    }
    fazerCafe(): void {
        this.escolherCafe(this.coffee);
        console.log("Café sendo coado!!");
    }

}