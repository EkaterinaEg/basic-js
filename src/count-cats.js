const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let cat = "^^";
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === cat) {
        count++;
      }
    }
  }
  return count;
}
// let matrix = [
//   [0, 1, "^^"],
//   [0, "^^", 2],
//   ["^^", 1, 2],
// ];
let matrix = [
  ["^^", ".", null, 0, false, "", NaN, 2, true, "dasdas", 1],
  [2, NaN, "", false, "^^", "^^"],
  [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
  ["."],
  [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
  [false, NaN, 1, 0, ".", "^^"],
  [null, 1, NaN],
  [],
];
// countCats(matrix);
// countCats([
//   [0, 1, "^^"],
//   [0, "^^", 2],
//   ["^^", 1, 2],
// ]);
// console.log(matrix.length);
module.exports = {
  countCats,
};
