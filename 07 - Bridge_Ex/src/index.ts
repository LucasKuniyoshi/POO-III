import IConsole from "./consoles/IConsole";
import PlayStation from "./consoles/PlayStation";
import Xbox from "./consoles/Xbox";
import AdvancedPlay from "./gameplay/AdvancedPlay";
import Play from "./gameplay/Play";

function StartGame(plataforma: IConsole){
    console.log("Aguarde...");
    const jogo = new Play(plataforma);
    jogo.playing();
    jogo.result();
}

function StartAdvancedGame(plataforma: IConsole){
    console.log("Aguarde...");
    const jogo2 = new AdvancedPlay(plataforma);
    jogo2.challenge();
}

StartGame(new PlayStation);
console.log(" ");
StartAdvancedGame(new PlayStation);
console.log(" ");
console.log("------------------------------------");
console.log(" ");
StartGame(new Xbox);
console.log(" ");
StartAdvancedGame(new Xbox);