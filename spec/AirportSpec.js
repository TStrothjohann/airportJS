describe('Airport', function(){

  var plane;


  beforeEach(function(){
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
    plane2 = jasmine.createSpyObj('plane', ['land', 'takeOff']);
    plane3 = jasmine.createSpyObj('plane', ['land', 'takeOff']);
    airport = new Airport();
  });

  it('can dock a plane', function(){
    airport.dock(plane);
    expect(airport.planes).toEqual([plane]);
  });

   it('can undock a plane', function(){
    airport.dock(plane);
    airport.undock(plane);
    expect(airport.planes).toEqual([]);
  });

  it('docks landed planes only', function(){
    airport.dock(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it('undocks planes before taking off', function(){
    airport.dock(plane);
    airport.undock(plane);
    expect(plane.takeOff).toHaveBeenCalled();
  });


  it('can hold max of 2 planes', function(){
    airport.dock(plane);
    airport.dock(plane2);
    expect(function() { airport.dock(plane3); }).toThrow(new Error("Too many planes"));
  });


});