import Token from "../utils/Token";
import IPayonnerPayment from "./IPayonnerPayment";

export default class Payonner implements IPayonnerPayment{
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN : "+ this.token.token);
        console.log("Enviando pagamento via Payonner.")
    }
    receivePayment(): void {
        this.token = this.authToken();
        console.log("TOKEN : "+ this.token.token);
        console.log("Recebendo pagamento via Payonner.")
    }
    
}