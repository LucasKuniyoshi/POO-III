import Correios from "./Correios/Correios";
import ICorreiosPayment from "./Correios/ICorreiosPayment";
import ITranportadoraPayment from "./Transportadora/ITransportadoraPayment";
import Transportadora from "./Transportadora/Transportadora";
import TransportadoraAdapter from "./adapter/TransportadoraAdapter";

const package1: ICorreiosPayment = new Correios();
package1.sendCorreios();
package1.receiveCorreios();

console.log(" ");
console.log("----------------------------------------------");
console.log(" ");

const package2: ICorreiosPayment = new TransportadoraAdapter(new Correios());
package2.sendCorreios();
package2.receiveCorreios();