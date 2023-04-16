const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

function deleteDigit(n) {
  let arr = [];
  let dest = [...n.toString()];
  // console.log(dest);
  if (dest.length === 2) {
    return Number(dest[0]);
  } else if (dest[dest.length - 1] < dest[0]) {
    return Number(dest.slice(1, dest.length).join(""));
  } else {
    dest = dest.map((el) => Number(el));
    let minValue = Math.min(...dest);
    let indexMinValue = dest.indexOf(minValue);
    for (let i = 0; i < dest.length; i++) {
      if (i !== indexMinValue) {
        arr.push(dest[i]);
      }
    }
    return Number(arr.map((el) => el.toString()).join(""));
  }
}
// console.log(deleteDigit(152)); //, 52);
// console.log(deleteDigit(1001)); //, 101);
// console.log(deleteDigit(10)); //, 1);
// console.log(deleteDigit(222219)); //, 22229);
// console.log(deleteDigit(109)); // 19);
// console.log(deleteDigit(342)); //, 42);
module.exports = {
  deleteDigit,
};
