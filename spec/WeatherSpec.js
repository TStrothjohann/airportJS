describe('Weather', function() {

    var weather = new Weather();

  it('can be sunny', function() {
    spyOn(weather, "isSunny").and.returnValue('sunny')
    expect(weather.isSunny()).toEqual('sunny');
  });

  it('can be stormy', function(){
    spyOn(weather, 'isSunny').and.returnValue('stormy')
    expect(weather.isSunny()).toEqual('stormy')
  });
});