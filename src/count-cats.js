const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let count = 0;
    for (let arr of matrix) {
        for (let el of arr) {
            if (el === '^^') {
                ++count;
            }
        }
    }
    return count
};
