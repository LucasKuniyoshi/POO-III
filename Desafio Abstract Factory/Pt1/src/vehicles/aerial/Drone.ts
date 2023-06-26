import IAirCraft from "./interface/IAirCraft";

export default class Drone implements IAirCraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: Iniciando Rota...")
    }
    getCargo(): void {
        console.log("Drone: Pacote seguro!!!")
    }
    checkWind(): void {
        console.log("Drone: Ventos OK");
    }
    
}