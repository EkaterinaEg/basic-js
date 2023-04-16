const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let age = Math.ceil(
    Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
  );
  if (
    !sampleActivity ||
    typeof sampleActivity !== "string" ||
    sampleActivity <= 0 ||
    sampleActivity > 15 ||
    !parseInt(sampleActivity)
  ) {
    return false;
  } else {
    return age;
  }
}
// console.log(dateSample("3"));
// console.log(dateSample("9000")); //false;
// console.log(dateSample("15.1")); //false;
// console.log(dateSample("0")); //false;
// console.log(dateSample("-5")); //false;
// console.log(dateSample("-55.8")); //false;
// console.log(dateSample(3)); //false);
// console.log(dateSample(3.312312)); //false);
// console.log(dateSample(false)); //false);
// console.log(dateSample(null)); //false);
// console.log(dateSample(undefined)); //false);
// console.log(dateSample([3])); //false);
// console.log(dateSample(["3"])); //false);
// console.log(dateSample({ 3.14: "3dec" })); //false);
// console.log(dateSample("3.142"));
// console.log(dateSample());
// console.log(dateSample("ACTIVITY OVER 9000")); //, false);
// console.log(dateSample("one")); //, false);
// console.log(dateSample("")); // false);
// console.log(dateSample(" ")); //false);
// console.log(dateSample(" \n\t\r")); // false);
// console.log(dateSample(())); //false);
// .dateSample('15.1')) false);
// .dateSample('0')) false);
// .dateSample('-5')) false);
// .dateSample('-55.8')) false);
// dateSample('3')) 13305);
module.exports = {
  dateSample,
};
