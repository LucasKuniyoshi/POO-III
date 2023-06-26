import IAirCraft from "./interface/IAirCraft";

export default class Helicopter implements IAirCraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicoptero: Iniciando a Decolagem...");
    }
    getCargo(): void {
        console.log("Helicoptero: Passageiros Embarcados! Ligando helices!");
    }
    checkWind(): void {
        console.log("Helicoptero: Ventos a 22km/h, Sudeste, Ventos OK!");
    }
    
}