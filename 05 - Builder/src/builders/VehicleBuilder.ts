import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder{
    private vehicle = new Vehicle();

    reset(): void {
        this.vehicle = new Vehicle; //libera tudo e cria um novo veiculo zerado
    }
    getVehicle(): Vehicle {
        const result : Vehicle = this.vehicle; 
        this.reset(); //reseta, mas guarda o carro no result, para caso tenha q inicar outro carro
        return result;
    }
    addWheel(wheel: Wheel) {
        this.vehicle.addWheel(wheel);
    }
    setVehicleType(value: VehicleType) {
        this.vehicle.vehicleType = value;
    }
    setSeats(seats: number) {
        this.vehicle.seats = seats;
    }
    setEngine(engine: Engine) {
        this.vehicle.engine = engine;
    }
    setTransmission(transmission: Transmission) {
        this.vehicle.transmission = transmission;
    }
    
}