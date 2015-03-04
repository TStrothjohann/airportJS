var Airport = function(){
  this.planes = [];
};

Airport.prototype.dock = function(plane, weather){
  if (this.planes.length < 2){
    this.planes.push(plane);
    plane.land();
  }
  else{
    throw Error("Too many planes");
  }
};

Airport.prototype.undock = function(plane, weather){
  if(weather.isSunny() === "sunny"){
  plane.takeOff();
  this.planes.pop(plane);
  }else{
    throw Error("Weather is stormy")
  }
};
