const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false
  }
  if (sampleActivity.trim() === '') {
    return false
  }

  const sampleActivityNum = Number(sampleActivity);
  if (isNaN(sampleActivityNum)) {
    return false
  }
  if (sampleActivityNum > MODERN_ACTIVITY || sampleActivityNum <= 0) {
    return false
  }
  return MODERN_ACTIVITY / sampleActivity
};
