import Bike from "../Bike";
import Transport from "./Transport";
import IVehicle from "./Vehicle/interface/IVehicle";

export default class BikeTransport extends Transport{
    protected createTransport(): IVehicle {
        return new Bike();
    }
    
}