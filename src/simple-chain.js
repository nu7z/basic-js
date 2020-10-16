const CustomError = require("../extensions/custom-error");

const chainMaker = {
  acc: [],
  getLength() {
    return this.acc.length;
  },
  addLink(value) {
    value = typeof value === 'string' ? value : String(value);
    this.acc.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position <= this.acc.length && position > 0) {
      this.acc.splice(position - 1, 1);
      return this;
    }
      this.acc.length = 0
      throw new Error('Error');
  },
  reverseChain() {
    this.acc.reverse();
    return this;
  },
  finishChain() {
    const size = this.acc.length - 1;
    const result = this.acc
      .map((item, index) => index === size ? `( ${item} )` : `( ${item} )~~`)
      .join('');
    this.acc.length = 0;
    return result;
  }
};

module.exports = chainMaker;
