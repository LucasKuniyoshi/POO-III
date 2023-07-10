import IConsole from "./IConsole";

export default class Xbox implements IConsole{
    constructor(){
        console.log("XBOX: Configurando Console.")
    }
    
    authtoken(): void {
        console.log("XBOX: Autorizando o console!")
    }
    configureGame(): void {
        this.authtoken();
        console.log("XBOX: Configurando Layout.")
    }
    
}