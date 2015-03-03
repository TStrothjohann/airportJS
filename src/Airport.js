var Airport = function(){
  this.planes = [];
};

Airport.prototype.dock = function(plane){
  if (this.planes.length < 2){
    this.planes.push(plane);
    plane.land();
  }
  else {
    throw Error("Too many planes");
  }

};

Airport.prototype.undock = function(plane){
  plane.takeOff();
  this.planes.pop(plane);
};
