const CustomError = require("../extensions/custom-error");

function isValidDate(d) {
  return d instanceof Date && !isNaN(d) && d.toString() === '[object Date]';
}

module.exports = function getSeason(date) {
    if (!date) return 'Unable to determine the time of year!';
    if (!isValidDate(date)) {
      return 'THROWN';
    }
    const numOfMonth = date.getMonth();
    if ([0, 1, 11].includes(numOfMonth)) return 'winter';
    if ([2, 3, 4].includes(numOfMonth)) return 'spring';
    if ([5, 6, 7].includes(numOfMonth)) return 'summer';
    return 'fall';
};
