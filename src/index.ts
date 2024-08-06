// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// create an array of vehicles
const vehicles = [];

// TODO: uncomment once trucks are implemented
const truck = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000);

// will use default wheels
const car = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

// TODO: uncomment once motorbikes are implemented
const motorbikeWheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbikeWheels);

// push vehicles to array
// TODO: uncomment once trucks are implemented
vehicles.push(truck); 
vehicles.push(car); 

// TODO: uncomment once motorbikes are implemented
vehicles.push(motorbike);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
