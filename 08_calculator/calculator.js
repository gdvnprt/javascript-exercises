const add = function(a, b) {
  return a + b;
}

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
  let sum = 0;
	for (var i = 0; i < a.length; i++) {
    sum += a[i];
  };
  return sum;
};

const multiply = function(a) {
  let mult = 1;
	for (var i = 0; i < a.length; i++) {
    mult *= a[i];
  };
  return mult
};

const power = function(a, b) { 
  let power = 1
  for (var i = 0; i < b; i++) {
      power *= a;
  }
	return power
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  } else {
	  let fact = a
    for (var i = a - 1; i > 1; i--) {
      fact *= i;
    };
    return fact;
  };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
