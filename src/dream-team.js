const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// console.log(typeof { foo: "bar" });
// console.log({ foo: "bar" }.length);
// console.log(typeof 3.123434);
// let i = ["Amilia"];
// console.log(i.flatMap((name) => [...name].slice(0, 1)));
function createDreamTeam(members) {
  let arr = [];
  //   // console.log(typeof members);
  if (
    !members ||
    !Array.isArray(members)
    //     // members.every(element => typeof element == "string")
    //     // typeof members == Boolean ||
    //     // typeof members == "number" ||
    //     // members.includes({})
  ) {
    return false;
  } else {
    members.forEach((el) => {
      typeof el == "string" ? arr.push(el.trim().toUpperCase()) : arr;
    });
    return arr
      .flatMap((name) => [...name].slice(0, 1))
      .sort()
      .join("");
  }
}

// let i = ["   William Alston "];
// console.log(i[0].trim());
// console.log(i.length);
// console.log(
//   createDreamTeam([
//     "Amelia",
//     null,
//     undefined,
//     "Ruby",
//     "Lily",
//     11,
//     "Grace",
//     22,
//     "Millie",
//     "Daisy",
//     true,
//     "Freya",
//     false,
//     "Erin",
//     new Set([1, 2, 3, 4, 5]),
//     "Megan",
//     {
//       John: "Smith",
//     },
//     "Jasmine",
//     1,
//     2,
//     3,
//     4,
//     5,
//     "Brooke",
//   ])
// ); //, 'ABDEFGJLMMR');
// console.log(
//   createDreamTeam([
//     "   William Alston ",
//     " Paul Benacerraf",
//     "  Ross Cameron",
//     "       Gilles Deleuze",
//     "  Arda Denkel ",
//     "  Michael Devitt",
//     "  Kit Fine",
//     " Nelson Goodman",
//     "David Kolb",
//     "   Saul Kripke",
//     "  Trenton Merricks",
//     "  Jay Rosenberg",
//   ])
// ); //, 'ADGJKMNPRSTW');
// || typeof members[i] !== "string")
// throw new NotImplementedError('Not implemented');
// remove line with error and write your code here
// members = members.sort();
// console.log(members);
// if(members || typeof mem !== 'string') {
// console.log([...members[0]]);
// console.log(typeof members);
// for (let i = 0; i < members.length; i++) {
//   console.log(typeof members[i]);
// if (!members || typeof members[i] !== "string") {
//   return false;
// } else {
//   return members
//     .sort()
//     .map((name) => [...name].slice(0, 1))
//     .join("");
// }
// members.map((name) => {
//   if (!members || typeof name !== "string") {
//     return false;
//   } else {
//     return [...name].slice(0, 1).join("");
//   }
// });

// let d = ["Peter", "Adam"];
// console.log(typeof d);
// console.log(
//   createDreamTeam([
//     "Peter",
//     "Adam",
//     "Gary",
//     "Bobby",
//     "Philip",
//     "Andrea",
//     "Evelyn",
//     "Evelyn",
//     "Kimberly",
//     "Denise",
//   ])
// ); //, 'AABDEEGKPP');
// console.log(createDreamTeam(['Eric', 'Donald', 'Justin', 'Katherine', 'Ethan', 'Charles', 'Frances', 'Kimberly', 'Noah', 'Paul']))//, 'CDEEFJKKNP');
// console.log(createDreamTeam(['Ann', 'Nancy', 'Nicholas', 'Alexander', 'Charles', 'Johnny', 'Philip', 'Jeffrey', 'Kenneth', 'Raymond']))//, 'AACJJKNNPR');
// console.log(createDreamTeam(['Ann', 'Christian', 'Douglas', 'Justin', 'Eugene', 'Kayla', 'Anthony', 'Brian', 'Adam', 'Benjamin']))//, 'AAABBCDEJK');
// console.log(createDreamTeam(['Alan', 'Gregory', 'Peter', 'Nicole', 'George', 'Helen', 'Denise', 'Amy', 'Danielle', 'Heather']))//, 'AADDGGHHNP');
// console.log(createDreamTeam(['Joan', 'Gregory', 'Abigail', 'Brittany', 'Nicole', 'Sophia', 'Joyce', 'Juan', 'Julie', 'Joan'])//, 'ABGJJJJJNS');
// console.log(createDreamTeam(['Alice', 'Joe', 'Janet', 'Pamela', 'Jacob', 'Larry', 'Diana', 'Gerald', 'Douglas', 'Keith']))//, 'ADDGJJJKLP');
// console.log(createDreamTeam(['Karen', 'Andrea', 'Brandon', 'Lawrence', 'Megan', 'Alexis', 'Ann', 'Kathryn', 'Sharon', 'Jonathan']))//, 'AAABJKKLMS');
// console.log(createDreamTeam(3)); // false);
// console.log(createDreamTeam(3.312312)); // false);
// console.log(createDreamTeam(false)); //, false);
// console.log(createDreamTeam(null)); //, false);
// console.log(createDreamTeam(undefined)); //, false);
// console.log(createDreamTeam({ foo: "bar" })); //, false);

module.exports = {
  createDreamTeam,
};
