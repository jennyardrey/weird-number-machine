//this function returns true is num is an abundent number
const abundent = function(output, num) {
  let sum = output.reduce(function(acc, val) {
    return acc + val;
  }, 0);

  if (sum > num) {
    return true;
  } else {
    return false;
  }
};

module.exports = abundent;
