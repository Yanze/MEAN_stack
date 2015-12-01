function Vehicle(name, numberOfWheels, numPassengers, speed) {
  this.distance_travelled = 0;
  this.name = name;
  this.numberOfWheels = numberOfWheels;
  this.numPassengers = numPassengers;
  this.speed = speed;

}
Vehicle.prototype.updateDistanceTravelled = function() {
  this.distance_travelled += this.speed;
  return this;
};

Vehicle.prototype.makeNoise = function() {
  console.log("Default noise");
  return this;
};

Vehicle.prototype.move = function() {
  this.updateDistanceTravelled();
  this.makeNoise();
  return this;
};

Vehicle.prototype.checkMiles = function() {
  console.log(this.distance_travelled);
  return this;
};

Vehicle.prototype.generateVIN = function() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (var i = 0; i < 17; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  console.log(text);
  return this;
};

var Bus = new Vehicle("Bus", 4, 20, 45);
Bus.generateVIN();
