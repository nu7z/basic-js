const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
    this.isReverse = reverse;
  }

  encrypt(message, key) {
    if (!message && !key) throw new Error("Error");

    const alphabet = this.alphabet.split("");
    let index = 0;
    message = message.toLowerCase().split("");
    key = key.toLowerCase().split("");

    const getNewIndex = (e) => {
      const newIndex = (alphabet.indexOf(e) + alphabet.indexOf(key[index])) % alphabet.length;
      index === key.length - 1 ? (index = 0) : index++;

      return newIndex;
    }

    
    const encrypt = message
      .reduce((a, e) => {
        return alphabet.includes(e) ? (a += alphabet[getNewIndex(e)]) : (a += e);
      }, "")
      .toUpperCase();


    if (!this.isReverse) {
      return encrypt.split("").reverse().join("");
    }

    return encrypt;
  }

  decrypt(message, key) {
    if (!message && !key) throw new Error("Error");

    const alphabet = this.alphabet.split("");
    let index = 0;
    message = message.toLowerCase().split("");
    key = key.toLowerCase().split("");

    const getNewIndex = (e) => {
      const newIndex =
        (alphabet.indexOf(e) + alphabet.length - alphabet.indexOf(key[index])) % alphabet.length;
      index === key.length - 1 ? (index = 0) : index++;
      return newIndex;
    }

    const decrypt = message
      .reduce((a, e) => {
        return alphabet.includes(e) ? (a += alphabet[getNewIndex(e)]) : (a += e);
      }, "")
      .toUpperCase();

    if (!this.isReverse) {
      return decrypt.split("").reverse().join("");
    }

    return decrypt;
  }
}

module.exports = VigenereCipheringMachine;
