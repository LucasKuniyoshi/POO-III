import IFood from "./interface/IFood";
import IAirCraft from "./interface/IFood";

export default class Hamburguer implements IFood{
    startDelivery(): void {
        this.getCargo();
        console.log("Hamburguer: Iniciando Delivery !!!");
    }
    getCargo(): void {
        console.log("Hamburguer: Lanche Adquirido ...");
    }
}