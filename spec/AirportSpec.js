describe('Airport', function(){

  var plane;
  var weather

  beforeEach(function(){
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
    weather = jasmine.createSpyObj('weather',['isSunny'])
    airport = new Airport();
  });

  it('can dock a plane', function(){
    airport.dock(plane);
    expect(airport.planes).toEqual([plane]);
  });

   it('can undock a plane', function(){
    airport.dock(plane, weather);
    airport.undock(plane, weather);
    expect(airport.planes).toEqual([]);
  });

  it('docks landed planes only', function(){
    airport.dock(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it('undocks planes before taking off', function(){
    airport.dock(plane);
    airport.undock(plane, weather);
    expect(plane.takeOff).toHaveBeenCalled();
  });

  it('can hold max of 2 planes', function(){
    airport.dock(plane);
    airport.dock(plane);
    expect(function() { airport.dock(plane); }).toThrow(new Error("Too many planes"));
  });

});