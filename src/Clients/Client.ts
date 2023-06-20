import IDrink from "../delivery/drink/interface/IDrink";
import IFood from "../delivery/food/interface/IFood";
import IDeliveryFactory from "../factories/interfaces/IDeliveryFactory";


export default class Client{
    private drink: IDrink;
    private food: IFood;

    constructor(factory: IDeliveryFactory){ //vai precisar de mais dos parametros(separar terrestre e aereo)
        this.drink = factory.createDeliveryDrink(); // o parametro de tipo vai junto, talves dentro dessa funcao
        this.food = factory.createDeliveryFood();
    }

    startDelivery(){
        this.drink.startDelivery();
        this.food.startDelivery();
    }
}