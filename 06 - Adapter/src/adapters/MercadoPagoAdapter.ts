import MercadoPago from "../MercadoPago/MercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPayPalPayment{
    private token: Token;

    constructor(private mercadoPago: MercadoPago){
        console.log("Adaptando MercadoPago no Paypal.")
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.mercadoPago.enviarPagamento();
    }
    paypalReceive(): void {
        this.mercadoPago.receberPagamento();
    }
    
}