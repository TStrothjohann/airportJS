var Weather = function(){

};

Weather.prototype.isSunny = function(){
  var number = Math.floor((Math.random() * 10) + 1);
  if(number < 8 ){
    return "sunny";
  }else{
    return "stormy"
  }
};

