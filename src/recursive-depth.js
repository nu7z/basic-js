const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count = 1) {
    const arrIncludesArray = arr.some((item) => Array.isArray(item));
    if (arrIncludesArray) {
      return this.calculateDepth(arr.flat(), count += 1);
    }
    return count;
  }
};