function Vehicle(name, numberOfWheels, numPassengers, speed) {
  var distance_travelled = 0;
  var updateDistanceTravelled = function() {
    distance_travelled += speed;
  };

  this.name = name;
  this.numberOfWheels = numberOfWheels;
  this.numPassengers = numPassengers;
  this.speed = speed;
  this.makeNoise = function() {
      return "Default noise";
    },
    this.move = function() {
      updateDistanceTravelled();
      this.makeNoise();
    },
    this.checkMiles = function() {
      console.log(distance_travelled);
    }
}

// var Bike = new Vehicle("Bike", 2, 2, 25);
// Bike.makeNoise = "ring ring!";
// console.log(Bike);
//
// var Sedan = new Vehicle("Sedan", 4, 4, 85);
// Sedan.makeNoise = "Honk Honk!";
// console.log(Sedan);

var Bus = new Vehicle("Bus", 4, 20, 45);
console.log(Bus);
Bus.move();
Bus.checkMiles();
Bus.move();
Bus.checkMiles();
