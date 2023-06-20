import IDrink from "./interface/IDrink";

export default class SoftDrink implements IDrink{
    startDelivery(): void {
        this.getCargo();
        console.log("SoftDrink: Iniciando a Entrega !!!");
    }
    getCargo(): void {
        console.log("SoftDrink: Encomenda Retirada !!!");
    }
    
}