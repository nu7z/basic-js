const CustomError = require("../extensions/custom-error");
const { replaceGetter } = require("sinon");



module.exports = function repeater(str, options) {
  let { repeatTimes, separator, ...additionOptions } = options;
  let { addition, additionRepeatTimes, additionSeparator } = additionOptions;
  let acc = '';
  separator = !separator ? '+' : separator;
  str = typeof str !== 'string' ? String(str) : str;
  
  
  repeatTimes = !repeatTimes ? repeatTimes = 1 : repeatTimes;

  const repeatAddition = (additionRepeat, result = '') => {
    additionRepeat = !additionRepeat ? additionRepeat = 1 : additionRepeat;
    addition = typeof addition !== 'string' ? String(addition) : addition;
    result += addition;
    if (additionRepeat === 1) {
      return result;
    }
    result += additionSeparator;
    return repeatAddition(additionRepeat - 1, result);
  }

  const repeatStr = (acc, strRepeat) => {
    if (strRepeat === 0) {
      return acc
    };
    acc += str;
    if (addition !== undefined) acc += repeatAddition(additionRepeatTimes);
    if (strRepeat > 1) acc += separator
    return repeatStr(acc, strRepeat - 1);
  }

  return repeatStr(acc, repeatTimes)
};
  