import ILandVehicle from "./interface/ILandVehicle";

export default class Scooter implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Scooter: Iniciando Rota...");
    }
    getCargo(): void {
        console.log("Scooter: Passageiro embarcado!!!");
    }
    
}