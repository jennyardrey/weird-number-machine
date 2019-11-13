//this function creates an array of all the proper divisors of the given number
const div = function(num) {
  let output = [1];
  for (let i = num; i > 1; i--) {
    if (num % i === 0 && i !== num) {
      output.push(i);
    }
  }
  return output;
};

module.exports = div;
