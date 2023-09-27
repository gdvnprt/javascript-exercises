const convertToCelsius = function(fahrenheit) {
  // x °F ≘ (x − 32) × 5/9 °C 
  const toCelsius = (fahrenheit - 32) * 5 / 9;
  return Number(toCelsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  // x °C ≘ (x × 9/5 + 32) °F 
  const toFahrenheit = (celsius * 9 / 5) + 32;
  return Number(toFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
