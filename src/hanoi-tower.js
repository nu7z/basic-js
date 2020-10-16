const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const turnsSpeedSec =  turnsSpeed / 3600; 
  const seconds = Math.floor(turns / turnsSpeedSec);

  return {
    turns,
    seconds,
  };
};
