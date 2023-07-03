import Token from "../utils/Token";
import ITransportadoraPayment from "./ITransportadoraPayment";

export default class Transportadora implements ITransportadoraPayment{
    private token: Token;
    
    authToken(): Token {
        return new Token();
    }
    send(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Entrega via Transportadora..")
    }
    receive(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Recebido via Transportadora!!");
    }
    
}