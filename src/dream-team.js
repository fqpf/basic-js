const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newArr = [];
  if (!Array.isArray(members)) {
    return false;
  }
  for (let el of members) {
    if (typeof el === 'string' ) {
      let firstWord = el.trim().slice(0, 1).toUpperCase();
      newArr.push(firstWord);
    }
  }
  return newArr.sort().join('')
};
