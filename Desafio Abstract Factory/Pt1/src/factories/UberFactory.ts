import Airplane from "../vehicles/aerial/Airplane";
import IAirCraft from "../vehicles/aerial/interface/IAirCraft";
import Car from "../vehicles/land/Car";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class UberFactory implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        console.log("Transporte Via Uber")
        return new Car();
    }
    createTransportAirCraft(): IAirCraft {
        console.log("Transporte Via Uber")
        return new Airplane();
    }
    
}