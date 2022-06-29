//this includes the vehicle class as a module
const {Vehicle} = require("./vehicle")


class Car extends Vehicle {
    constructor (make, model, year, color, mileage,maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService)
    {
        super (make, model, year, color, mileage)
        this.maximumPassengers = maximumPassengers || 5;
        this.passenger = passenger || 0;
        this.numberOfWheels = numberOfWheels || 4;
        this.maximumSpeed = maximumSpeed || 160;
        this.fuel = fuel || 10;
        this.scheduleService = scheduleService??false;
    }

    loadPassenger(num) {
        this.passenger=num;
        if (this.passenger < this.maximumPassengers){
            return true
        }
        else{
            return false;
        }
    }

    start(){
        if (this.fuel>0) {
            return true
        }
        return false
    }

    scheduledService (mileage) {
        this.mileage = mileage
        if (this.mileage > 30000) {
            return true
        }
        return false
    }
}

const mercurySedan = new Car ("BMW", "Z4", 2022, "black", 1000)
console.log(mercurySedan.loadPassenger(3));
console.log(mercurySedan.loadPassenger(8));
console.log(mercurySedan.start());
mercurySedan.fuel = 0;
console.log(mercurySedan.start());
console.log(mercurySedan.scheduledService(1000));
console.log(mercurySedan.scheduledService(1000000000));
module.exports=Car