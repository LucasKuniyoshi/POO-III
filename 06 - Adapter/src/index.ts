import MercadoPago from "./MercadoPago/MercadoPago";
import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayonnerAdapter from "./adapters/PayonnerAdapter";
import IPayonnerPayment from "./payonner/IPayonnerPayment";
import Payonner from "./payonner/Payonner";
import IPayPalPayment from "./paypal/IPayPalPayment";
import PayPal from "./paypal/PayPal";

//const payment = new PayPal();
const payment : IPayPalPayment= new PayPal();
payment.paypalPayment();
payment.paypalReceive();

const payment2: IPayPalPayment = new PayonnerAdapter(new Payonner());
payment2.paypalPayment();
payment2.paypalReceive();

const payment3: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());
payment3.paypalPayment();
payment3.paypalReceive();