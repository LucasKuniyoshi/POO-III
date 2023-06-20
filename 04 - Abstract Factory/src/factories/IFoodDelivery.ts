import SoftDrink from "../delivery/drink/SoftDrink";
import IDrink from "../delivery/drink/interface/IDrink";
import HotDog from "../delivery/food/HotDog";
import IFood from "../delivery/food/interface/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        console.log("Transporte Via IFood")
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        console.log("Transporte Via IFood")
        return new HotDog();
    }
}