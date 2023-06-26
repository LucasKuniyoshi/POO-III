import IAirCraft from "../../vehicles/aerial/interface/IAirCraft";
import ILandVehicle from "../../vehicles/land/interface/ILandVehicle";

export default interface ITransportFactory{
    createTransportVehicle(): ILandVehicle;
    createTransportAirCraft(): IAirCraft;
}