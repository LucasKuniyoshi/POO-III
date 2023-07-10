import IPlatform from "../platforms/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(platform: IPlatform){
        super(platform);
    }

    subtitles(): void{
        console.log("Legendas ativadas na transmissao!!");
    }
    comments(): void{
        console.log("Comentarios liberados!!")
    }
}