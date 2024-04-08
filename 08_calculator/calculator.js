const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((total, curr) => (total + curr), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => (total * curr), 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
	
};

const factorial = function(num) {
  let result = 1;
  if (num === 0) return 1;
  else {
  for (i = 1; i <= num; i++){
    result *= i;
  }
	return result;
  } 
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
