import IConsole from "../consoles/IConsole";
import IGameplay from "./IGameplay";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(console: IConsole){
        super(console);
    }
    challenge(){
        console.log("Dificuldade aumentada!!")
    }
}