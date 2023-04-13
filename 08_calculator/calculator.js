const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function([...args]) {
  let sum = 0;
  for(let i = 0; i<args.length;i++){
    args[i] = Number(args[i]);
    if (typeof(args[i]) === 'number' && !isNaN(args[i])){
      sum += args[i];
    }
  }
  return sum;
};

const multiply = function([...args]) {
  let mult = 1;
  for(let i=0;i<args.length;i++){
    mult *= args[i];
  }
  return mult;
};

const power = function(a,b) {
  return Math.pow(a,b);	
};

const factorial = function(a) {
  let numbers = 1;
  for(let i=a;i>0;i--){
    numbers*=i;
  } 
  return numbers;
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
