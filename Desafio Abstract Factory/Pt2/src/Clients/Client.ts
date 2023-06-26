import ITransportFactory from "../factories/interfaces/ITransportFactory";
import IAirCraft from "../vehicles/aerial/interface/IAirCraft";
import type from "../vehicles/consts/type";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";

export default class Client{
    private vehicle: ILandVehicle;
    private aircfrat: IAirCraft;
    private tipo: string
    private veiculo: string;

    constructor(factory: ITransportFactory, type: string, veiculo: string){ //vai precisar de mais dos parametros(separar terrestre e aereo)
        this.vehicle = factory.createTransportVehicle(veiculo); // o parametro de tipo vai junto, talves dentro dessa funcao
        this.aircfrat = factory.createTransportAirCraft(veiculo);
        this.tipo = type;
        this.veiculo = veiculo;
    }

    startRoute(){
        if(this.tipo == type.LAND){
            this.vehicle.startRoute();
        }else if(this.tipo == type.AIR){
            this.aircfrat.startRoute();
        }else{
            console.log("Tipo de veiculo nao especificado...");
        }
    }
}