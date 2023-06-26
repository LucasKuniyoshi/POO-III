import ITransportFactory from "../factories/interfaces/ITransportFactory";
import IAirCraft from "../vehicles/aerial/interface/IAirCraft";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";

export default class Client{
    private vehicle: ILandVehicle;
    private aircfrat: IAirCraft;

    constructor(factory: ITransportFactory){ //vai precisar de mais dos parametros(separar terrestre e aereo)
        this.vehicle = factory.createTransportVehicle(); // o parametro de tipo vai junto, talves dentro dessa funcao
        this.aircfrat = factory.createTransportAirCraft();
    }

    startRoute(){
        this.vehicle.startRoute();
        this.aircfrat.startRoute();
    }
}