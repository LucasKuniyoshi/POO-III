import Drone from "../vehicles/aerial/Drone";
import IAirCraft from "../vehicles/aerial/interface/IAirCraft";
import Scooter from "../vehicles/land/Scooter";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class LineFactory implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        console.log("Transporte Via Line")
        return new Scooter();
    }
    createTransportAirCraft(): IAirCraft {
        console.log("Transporte Via Line")
        return new Drone();
    }
    
}