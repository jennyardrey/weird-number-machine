const div = require("../src/index.js");
const abundent = require("../src/abundent.js");
const semiperf = require("../src/semiperf.js");

const weird = function(num) {
  const divisors = div(num);
  const abun = abundent(divisors, num);
  if (abun != "abundent") {
    return "not a weird number";
  } else {
    const result = semiperf(divisors, num);
    return result;
  }
};

module.exports = weird;
