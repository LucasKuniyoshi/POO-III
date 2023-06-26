import Client from "./Clients/Client";
import LineFactory from "./factories/LineFactory";
import NineNineFactory from "./factories/NineNineFactory";
import UberFactory from "./factories/UberFactory";
import ITransportFactory from "./factories/interfaces/ITransportFactory";
import company from "./vehicles/consts/company";
import type from "./vehicles/consts/type";
import veiculo from "./vehicles/consts/veiculo";

const currentCompany = company.UBER;
const curerntType = type.LAND;
const currentvehicle = veiculo.CAR;
let factory!: ITransportFactory;
switch(currentCompany){
    case company.UBER:
        factory = new UberFactory();
        break;
    case company.NINENINE:
        factory = new NineNineFactory();
        break;
    case company.LINE:
        factory = new LineFactory();
        break;
    default:
        console.log("Compania nao definida...");
}

const client = new Client(factory,curerntType, currentvehicle);
client.startRoute(); // cliente escolhe e inicia 