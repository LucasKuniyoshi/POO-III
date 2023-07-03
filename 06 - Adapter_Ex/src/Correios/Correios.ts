import Token from "../utils/Token";
import ICorreiosPayment from "./ICorreiosPayment";

export default class Correios implements ICorreiosPayment{
    private token: Token;
    
    authToken(): Token {
        return new Token();
    }
    sendCorreios(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Entrega via Correios..")
    }
    receiveCorreios(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Recebido via Correios!!");
    }
    
}