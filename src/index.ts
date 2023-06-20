import Client from "./Clients/Client";
import IAiqfomeDelivery from "./factories/IAiqfomeDelivery";
import IFoodDelivery from "./factories/IFoodDelivery";
import ITransportFactory from "./factories/interfaces/IDeliveryFactory";
import company from "./delivery/consts/company";

const currentCompany = company.AIQ;
let factory!: ITransportFactory;
switch(currentCompany){
    case company.AIQ:
        factory = new IAiqfomeDelivery();
        break;
    case company.IFOOD:
        factory = new IFoodDelivery();
        break;
    default:
        console.log("Compania nao definida...");
}

const client = new Client(factory);
client.startDelivery(); // cliente escolhe e inicia 