import IFood from "./interface/IFood";
// implementa a interface, tem q ter os metodos da inetrface
export default class HotDog implements IFood{

    startDelivery(): void {
        this.getCargo();
        console.log("HotDog: Iniciando Delivery !!!");
    }
    getCargo(): void {
        console.log("HotDog: Lanche adquirida !!!");
    }
}