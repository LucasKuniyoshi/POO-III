import IVehicle from "./Transport/Vehicle/interface/IVehicle";

export default class Car implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: iniciando Trajeto...")
    }
    getCargo(): void {
        console.log("Carro: Passageiros Embarcados!")
    }
    
}