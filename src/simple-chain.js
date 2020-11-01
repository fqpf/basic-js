const CustomError = require("../extensions/custom-error");

const chainMaker = {
  values: [],
  getLength() {
    return this.values.length;
  },
  addLink(value) {
    this.values.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.values.length - 1) {
      this.values = [];
      throw 'THROWN';
    }
    this.values.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    const res = this.values.map(el => `( ${el} )`).join('~~');
    this.values = [];
    return res;
  }
};

module.exports = chainMaker;
