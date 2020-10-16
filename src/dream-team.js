const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  if (!arr.length) return null;
  return arr
    .filter((item) => typeof item === 'string')
    .map((item) => item.trim().toUpperCase())
    .sort()
    .reduce((acc, str) => acc += str[0], '');
};
