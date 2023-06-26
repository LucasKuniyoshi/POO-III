import IAirCraft from "./interface/IAirCraft";
// implementa a interface, tem q ter os metodos da inetrface
export default class Airplane implements IAirCraft{

    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Iniciando a Decolagem !!!");
    }
    getCargo(): void {
        console.log("Passageiros Embarcados !!!");
    }
    checkWind(): void {
       console.log("Avião: ventos a 25km/h, ventos OK !!!");
    }

}