import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder;
const director: Director = new Director(builder);

director.constructSedanCar()
const sedan : Vehicle = builder.getVehicle();
console.log("criando veiculo: " + sedan.vehicleType);
console.log("Motor: "+ sedan.engine.power);
console.log("Transmissao: " + sedan.transmission);
console.log("Assentos: " + sedan.seats);
console.log("Numero de rodas: " + sedan.wheel.length);

console.log(" ");
console.log("-----------------------------");
console.log(" ");

director.constructTruck()
const truck: Vehicle = builder.getVehicle();
console.log("criando veiculo: " + truck.vehicleType);
console.log("Motor: "+ truck.engine.power);
console.log("Transmissao: " + truck.transmission);
console.log("Assentos: " + truck.seats);
console.log("Numero de rodas: " + truck.wheel.length);