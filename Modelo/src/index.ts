import BikeTransport from "./Transport/BikeTransport";
import CarTransport from "./Transport/CarTransport";
import MotorcycleTransport from "./Transport/MotorcycleTransport";
import Transport from "./Transport/Transport";

declare var process;

let transport: Transport;
if(process.argv.includes("--uber")){
    transport = new CarTransport();
    transport.startTransport();
}
else if(process.argv.includes("--eats")){
    transport = new MotorcycleTransport();
    transport.startTransport();
}else if(process.argv.includes("--rony")){
    transport = new BikeTransport();
    transport.startTransport();
}    
else{
    console.log("Selecione o tipo de transporte.")
}