const convertToCelsius = function(fahrenheit) {
  let celsius = 0;
  celsius = (fahrenheit-32)*5/9;
  celsius*=10;
  celsius = Math.round(celsius);
  celsius/=10;
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = 0;
  fahrenheit = (celsius * 9/5 + 32);
  fahrenheit*=10;
  fahrenheit = Math.round(fahrenheit);
  fahrenheit/=10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
