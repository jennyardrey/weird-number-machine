//this function returns true is num is an abundent number
const abundent = function(output, value) {
  let sum = output.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  if (sum >= value) {
    return "abundent";
  } else {
    return "not abundent";
  }
};

module.exports = abundent;
