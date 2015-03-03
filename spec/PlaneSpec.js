describe('Plane', function(){

  it('has flying status when created', function(){
    plane = new Plane()
    expect(plane.isFlying).toEqual(true);
  });

});