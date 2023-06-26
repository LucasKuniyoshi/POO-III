import IAirCraft from "../../vehicles/aerial/interface/IAirCraft";
import ILandVehicle from "../../vehicles/land/interface/ILandVehicle";

export default interface ITransportFactory{
    veiculo: string;
    createTransportVehicle(veiculo): ILandVehicle;
    createTransportAirCraft(veiculo): IAirCraft;
}