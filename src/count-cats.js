const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arrArr) {
  return arrArr.reduce((acc, arr) => {
    const result = arr.filter((item) => item === '^^');
    acc += result.length;
    return acc;
  }, 0);
};
