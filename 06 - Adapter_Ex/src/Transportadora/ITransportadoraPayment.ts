import Token from "../utils/Token";

export default interface ITranportadoraPayment{
    authToken(): Token;
    send(): void;
    receive(): void;
}