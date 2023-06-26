import ILandVehicle from "./interface/ILandVehicle";

export default class Motorcylce implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando a Entrega !!!");
    }
    getCargo(): void {
        console.log("Moto: Encomenda Retirada !!!");
    }
    
}