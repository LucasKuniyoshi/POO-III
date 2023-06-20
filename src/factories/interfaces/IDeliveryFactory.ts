import IDrink from "../../vehicles/drink/interface/IDrink";
import IFood from "../../vehicles/food/interface/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFood;
}