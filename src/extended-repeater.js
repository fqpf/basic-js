const CustomError = require("../extensions/custom-error");

function repeatStr(str, separator, times) {
  let res = [];
  for (let i = 0; i < times; ++i) {
    res.push(str)
  }
  return res.join(separator);
}

module.exports = function repeater(
    str,
    {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}
) {
  const additionStr = repeatStr(String(addition), additionSeparator, additionRepeatTimes);
  return repeatStr(String(str) + additionStr, separator, repeatTimes)
};
  