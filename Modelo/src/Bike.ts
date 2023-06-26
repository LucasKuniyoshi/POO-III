import IVehicle from "./Transport/Vehicle/interface/IVehicle";

export default class Bike implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Bike: iniciando Pedalada...")
    }
    getCargo(): void {
        console.log("Bike: Passageiro Embarcado!")
    }

}