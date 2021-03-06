/* const div = require("../src/index.js");
const abundent = require("../src/abundent.js");
const semiperf = require("../src/semiperf.js");
const weird = require("../src/weird.js"); */

const { div, abundent, semiperf, weird } = require("../src/weirdNum.js");

describe("divisors", () => {
  it("returns an array of the numbers proper divisors", () => {
    expect(div(70)).toEqual([1, 35, 14, 10, 7, 5, 2]);
  });
});

describe("abundent number", () => {
  it("returns true if the number entered is abundent", () => {
    const arr = [1, 35, 14, 10, 7, 5, 2];
    const num = 70;
    const arr2 = [1, 2, 3, 4, 6];
    const num2 = 12;
    expect(abundent(arr, num)).toBeTruthy();
    expect(abundent(arr2, num2)).toBeTruthy();
  });
});

describe("semiperfect", () => {
  it("returns false if the number is semiperfect", () => {
    const divs = [1, 2, 5, 7, 10, 14, 35];
    const targ = 70;
    const divs2 = [1, 2, 3, 4, 6];
    const targ2 = 12;
    expect(semiperf(divs, targ)).toBeTruthy();
    expect(semiperf(divs2, targ2)).toBeFalsy();
  });
});

describe("weird number", () => {
  it("returns true if the number is weird", () => {
    expect(weird(70)).toBeTruthy();
    expect(weird(836)).toBeTruthy();
    expect(weird(150)).toBeFalsy();
    expect(weird(1)).toBeFalsy();
    expect(weird(4030)).toBeTruthy();
    expect(weird(5500)).toBeFalsy();
  });
});
