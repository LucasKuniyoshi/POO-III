import IDrink from "./interface/IDrink";
import ILandVehicle from "./interface/IDrink";

export default class Beer implements IDrink{
    startDelivery(): void {
        this.getCargo();
        console.log("Beer: Iniciando Trajeto !!!");
    }
    getCargo(): void {
        console.log("Beer: Encomenda Adquirida !!!");
    }
    
}