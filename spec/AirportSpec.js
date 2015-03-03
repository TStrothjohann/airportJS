describe('Airport', function(){

  var plane;
  airport = new Airport()

  beforeEach(function(){
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff'])
  });

  it('can dock a plane', function(){
    airport.dock(plane);
    expect(airport.planes).toEqual([plane])
  });

  it('can undock a plane', function(){
    airport.dock(plane);
    airport.undock(plane);
    expect(airport.planes).toEqual([]);
  });


});