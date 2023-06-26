import Airplane from "../vehicles/aerial/Airplane";
import IAirCraft from "../vehicles/aerial/interface/IAirCraft";
import Car from "../vehicles/land/Car";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";
import veiculo from "../vehicles/consts/veiculo";
import Motorcylce from "../vehicles/land/Motorcycle";
import Helicopter from "../vehicles/aerial/Helicopter";
import Scooter from "../vehicles/land/Scooter";
import Drone from "../vehicles/aerial/Drone";

export default class UberFactory implements ITransportFactory{
    veiculo: string;
    createTransportVehicle(veiculo1: string): ILandVehicle {
        this.veiculo = veiculo1;
        console.log("Transporte Via Uber")
        if(this.veiculo == veiculo.CAR){
            return new Car();
        }
        else if(this.veiculo == veiculo.MOTO){
            return new Motorcylce();
        }
        else{
            return new Scooter();
        }
        // continua os IF's e tira as coisas da classe LINE pra ficar menos coisa
    }
    createTransportAirCraft(veiculo1: string): IAirCraft {
        this.veiculo = veiculo1;
        console.log("Transporte Via Uber")
        if(this.veiculo == veiculo.AIRPLANE){
            return new Airplane();
        }
        else if(this.veiculo == veiculo.HELICOPTER){
            return new Helicopter();
        }
        else{
            return new Drone();
        }
        
    }
    
}