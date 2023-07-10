import IPlatform from "../platforms/IPlatform";
import ITransmissions from "./ITransmissions";

export default class Live implements ITransmissions{

    constructor(private platform: IPlatform){}

    broadcasting(): void {
        console.log("Iniciando a Transmissao");
    }
    result(): void {
        console.log("************** No Ar *****************");
    }
    
}