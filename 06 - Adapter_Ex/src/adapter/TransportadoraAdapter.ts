import Correios from "../Correios/Correios";
import ICorreiosPayment from "../Correios/ICorreiosPayment";
import Token from "../utils/Token";

export default class TransportadoraAdapter implements ICorreiosPayment{
    private token: Token;

    constructor(private correios: Correios){
        console.log("Adaptando Transportadora para Correios");
    }
    authToken(): Token {
        return new Token();
    }
    sendCorreios(): void {
        return this.correios.sendCorreios();
    }
    receiveCorreios(): void {
        return this.correios.receiveCorreios();
    }

    
}