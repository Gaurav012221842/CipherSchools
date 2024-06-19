// class Vehicle {
//     constructor(name, maker, engine) {
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }

//     getDetails() {
//         return `Vehicle Name: ${this.name}\nMaker: ${this.maker}\nEngine: ${this.engine}`;
//     }

//     vehicleType() {
//         return "Generic Vehicle";
//     }
// }

// // Example usage:
// // Creating an instance of Vehicle
// let vehicle1 = new Vehicle("Car", "Toyota", "V6");

// // Using getDetails method to print details
// console.log(vehicle1.getDetails());

// // Using vehicleType method to print vehicle type
// console.log(vehicle1.vehicleType());

class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }

    getDetails() {
        return `Vehicle Name: ${this.name}\nMaker: ${this.maker}\nEngine: ${this.engine}`;
    }
}

// Adding a new method named vehicle to the Vehicle class using prototype
Vehicle.prototype.vehicle = function() {
    console.log("This is a vehicle.");
};

// Example usage:
// Creating an instance of Vehicle
let vehicle1 = new Vehicle("Car", "Toyota", "V6");

// Using getDetails method to print details
console.log(vehicle1.getDetails());

// Using the new vehicle method to print a message
vehicle1.vehicle();
