import IVehicle from "./Transport/Vehicle/interface/IVehicle";

export default class Motorcycle implements IVehicle{
    startRoute(): void {
        console.log("Moto: Iniciando a Entrega...");
    }
    getCargo(): void {
        console.log("Moto: Encomenda Retirada!");
    }
    
}