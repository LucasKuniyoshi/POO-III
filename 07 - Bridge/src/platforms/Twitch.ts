import IPlatform from "./IPlatform";

export default class Twitch implements IPlatform{
    constructor(){
        console.log("Twitch: Configurando Plataforma!");
        this.configureRMTP();
    }

    configureRMTP(): void {
        this.authToken();
        console.log("Twitch: Configurando o Broadcasting!")
    }
    authToken(): void {
        console.log("Twitch: Autorizando a Plataforma!")
    }

}