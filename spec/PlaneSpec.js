describe('Plane', function(){
  plane = new Plane()

  it('has flying status when created', function(){
    expect(plane.isFlying).toEqual(true);
  });

  it('can land', function(){
    plane.land()
    expect(plane.isFlying).toEqual(false);
  });

  it('can take off', function(){
    plane.land()
    plane.takeOff()
    expect(plane.isFlying).toBe(true)
  });

});