let div;
let abundent;
let semiperf;
let weird;

div = function(num) {
  let output = [1];
  for (let i = num; i > 1; i--) {
    if (num % i === 0 && i !== num) {
      output.push(i);
    }
  }
  // console.log(output);
  return output;
};

abundent = function(output, value) {
  let sum = output.reduce(function(acc, val) {
    return acc + val;
  }, 0);
  // console.log(sum);
  if (sum >= value) {
    return "abundent";
  } else {
    return "not abundent";
  }
};

semiperf = function(arr, numb) {
  console.log(arr, numb);
  let subSets = [[]];
  for (let i = 0; i < arr.length; i++) {
    let len = subSets.length;
    for (let j = 0; j < len; j++) {
      let temp = subSets[j].concat(arr[i]);
      subSets.push(temp);

      let sum2 = temp.reduce(function(a, b) {
        return a + b;
      });
      console.log(sum2);
      if (sum2 == numb) {
        return false;
      }
    }
  }
  return true;
};

weird = function(num) {
  let numInt = parseInt(num, 10);
  const divisors = div(num);
  console.log(divisors);
  const abun = abundent(divisors, numInt);
  console.log(abun);
  if (abun === "not abundent") {
    document.getElementById("isit").innerHTML = "Not a weird number!";
  } else {
    let result = semiperf(divisors, numInt);
    console.log(result);
    if (result === true)
      document.getElementById("isit").innerHTML = "Thats weird!";
  }
};
