//this function returns true if the number is semiperfect
const semiperf = function(arr, num) {
  let subSets = [[]];
  for (let i = 0; i < arr.length; i++) {
    let len = subSets.length;
    for (let j = 0; j < len; j++) {
      let temp = subSets[j].concat(arr[i]);
      subSets.push(temp);
      let sum2 = temp.reduce(function(a, b) {
        return a + b;
      });
      if (sum2 === num) {
        return false;
      }
    }
  }
  return true;
};

module.exports = semiperf;
