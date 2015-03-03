describe('Airport', function(){



  it('can dock a plane', function(){
    airport = new Airport()
    airport.dock(plane)
    expect(airport.planes).toEqual([plane])
  });


});