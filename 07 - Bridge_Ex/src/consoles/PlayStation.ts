import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        console.log("PLAY: Configurando Console.")
    }
    
    authtoken(): void {
        console.log("PLAY: Autorizando o console!")
    }
    configureGame(): void {
        this.authtoken();
        console.log("PLAY: Configurando Layout.")
    }
    
}