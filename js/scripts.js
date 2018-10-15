var g2l = function(gallon) {
  return gallon * 3.78541;
};
var gallon = parseFloat(prompt('Enter how many gallons:'));
var result = g2l(gallon);
alert(result);
