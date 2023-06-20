import Beer from "../delivery/drink/Beer";
import IDrink from "../delivery/drink/interface/IDrink";
import Hamburguer from "../delivery/food/Hamburguer";
import IFood from "../delivery/food/interface/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";


export default class IAiqfomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        console.log("Transporte Via AiqFome")
        return new Beer();
    }
    createDeliveryFood(): IFood {
        console.log("Transporte Via AiqFome")
        return new Hamburguer();
    }
}