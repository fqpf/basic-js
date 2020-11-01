const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    if (isNaN(date)) {
      return 'THROWN';
    }
    const numOfMonth = date.getMonth();
    if ([0, 1, 11].includes(numOfMonth)) return 'winter';
    if ([2, 3, 4].includes(numOfMonth)) return 'spring';
    if ([5, 6, 7].includes(numOfMonth)) return 'summer';
    return 'fall';
};
