import Token from "../utils/Token";

export default interface ICorreiosPayment{
    authToken():Token;
    sendCorreios(): void;
    receiveCorreios(): void;
}