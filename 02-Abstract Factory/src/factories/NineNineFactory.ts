import Helicopter from "../vehicles/aerial/Helicopter";
import IAirCraft from "../vehicles/aerial/interface/IAirCraft";
import Motorcycle from "../vehicles/land/Motorcycle";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineFactory implements ITransportFactory{
    createTransportVehicle(): ILandVehicle { //botar um if pra retorar outro veiculon, botao um parametro de tipo dentro da funcao
        console.log("Transporte Via 99")
        return new Motorcycle();
    }
    createTransportAirCraft(): IAirCraft {
        console.log("Transporte Via 99")
        return new Helicopter();
    }
    
}