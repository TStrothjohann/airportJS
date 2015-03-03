var Airport = function(){
  this.planes = [];
};

Airport.prototype.dock = function(plane){
  this.planes.push(plane);
  plane.land();
};

Airport.prototype.undock = function(plane){
  
  this.planes.pop(plane);

};