const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) {
      return 1
    }
    const depthArr = arr.map(el => {
      if (Array.isArray(el)) {
        return 1 + this.calculateDepth(el)
      } else {
        return 1;
      }
    });
    return Math.max(...depthArr);
  }
};
