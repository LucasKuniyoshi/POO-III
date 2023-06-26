import Motorcycle from "../Motorcycle";
import Transport from "./Transport";
import IVehicle from "./Vehicle/interface/IVehicle";

export default class MotorcycleTransport extends Transport{
    protected createTransport(): IVehicle {
        return new Motorcycle();
    }

}