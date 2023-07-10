import IConsole from "../consoles/IConsole"
import IGameplay from "./IGameplay"

export default class Play implements IGameplay{
    constructor(private console: IConsole){}

    playing(): void {
        console.log("Iniciando Gameplay!!")
    }
    result(): void {
        console.log("Jogo iniciado..")
    }
    
}