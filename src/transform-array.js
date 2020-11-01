const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const res = [...arr];
  for (let i = 0; i < res.length; i++) {
    switch (res[i]) {
      case '--double-next':
        if (i !== res.length - 1) {
          res[i] = res[i + 1];
        } else {
          res[i] = '--remove';
        }
        break;
      case '--double-prev':
        if (i !== 0) {
          res[i] = res[i - 1];
        } else {
          res[i] = '--remove';
        }
        break;
      case '--discard-prev':
        if (i !== 0) {
          res[i - 1] = '--remove';
        }
        res[i] = '--remove';
        break;
      case '--discard-next':
        if (i !== res.length - 1) {
          res[i + 1] = '--remove';
        }
        res[i] = '--remove';
        break;
    }
  }
  return res.filter(el => el !== '--remove')
};
