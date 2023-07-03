import Token from "../utils/Token";
import IMercadoPagoPayment from "./IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment{
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    enviarPagamento(): void {
        this.token = this.authToken();
        console.log("TOKEN: "+ this.token.token);
        console.log("enviando pagamento via MercadoPago.")
    }
    receberPagamento(): void {
        this.token = this.authToken();
        console.log("TOKEN: "+ this.token.token);
        console.log("recebendo pagamento via MercadoPago.")
    }
    
}