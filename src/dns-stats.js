const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  throw new NotImplementedError("Not implemented");
}
// const domens = [];
// const reversedDomains = domains.map((el) =>
//   el.split(".").reverse().join(".")
// );
// console.log(reversedDomains);
// const domens = [...new Set(domains.flatMap((el) => el.split(".").reverse()))];
// // console.log(domens);
// // console.log(domens);
// let maped = {};
// let count = 0;
// domains.forEach((el, i) =>
//       el.includes(item) ? (maped[item] += maped[item]) : maped[item]

// for (let i = 0; i < reversedDomains.length; i++) {
//   let item = domens.slice(0, i + 1).join(".");
//   console.log(item);
//   if (reversedDomains[i].includes(item)) {
//     maped[item]++;
//     // console.log(item, count);
//   } else {
//     maped[item];
//   }
// }
// return maped;
// domains.forEach((el, i) => {
//   el.includes(item) ? console.log(el, item) : console.log("no");
//   // item += domens[i + 1];
//   // domens.splice(i + 1, i);
// });

// item += domens[i + 1];
// console.log(domens.splice(i + 1, i));

// const matches = items.filter(s => s.includes('thi'));
// if (domains[i].includes(item)) {
//   map[domens[i]] += map[domens[i]];
// } else {
//   map[domens[i]] = 1;
// }
// domens[i] += domens[i + 1];
// // console.log(item);
// domens.splice(i + 1, 1);
// console.log(item);
// map[item] = domains[i].includes(map[item]) + 1 || 1;
// item = domens.slice(i, i + 1)
// array[i] += array[i + 1];
// array.splice(i + 1, 1)

// return maped;

// console.log(domens);

// return domens.reduce((domen, i) => {
//   domains.includes(domens.slice(i,i+1)) ? domens.slice(i,i+1) = domens.slice(i,i+1) : 1;
//   return domen},{});
// }

//   return gloves.reduce((color, i) => {
//     color[i] = ++color[i] || 1;
//     return color;
//     // return Object.keys(color).filter((n) => color[n] >= 2);
//   }, {});

// console.log(unigue);
// const domens = domains.map((el) => el.split(".").reverse().join("."));
// domens.forEach((el, i) => {
//   console.log(el[0]);
//   // let j = el[0];
//   // if (domens.includes(el[0])) {
//   //   j = ++j || 1;
//   //   return j;
//   // }
// });
//   for (let i = 0; i < domens.length; i++) {
//     let res = domens[i].split(".");
//     let r = res[0];
//     res = ++res
// })
//   for (let i = 0; i < domens.length; i++) {
//     let res = domens[i].split(".");
//     console.log(res);
//   }
// return domains.reduce((domen, i) => {
//   console.log(domen[i]);
//   // let res = domen[i].split(".");
//   // if (domen[i].includes(res)) res = ++res || 1;
//   // return domen;
// }, {});

//   console.log(domains[i].split("."));
// }
// console.log(domains.split("."));

// return domens.reduce((domen, i) => {
//   domen[i] = ++domen[i] || 1;
//   return domen;

// console.log(domen);
// console.log(domen[i]);
//     let str = domen.split(".");
//   if (domen[i].includes(str))
//   domen[i] = ++domen[i] || 1;
//   // let str = domen[i].split(".");

//   // str[0] = ++str[0] || 1;
//   return domen;
// }, {});

// console.log(getDNSStats(["epam.com"])); //, { '.com': 1, '.com.epam': 1 });
// console.log(getDNSStats(["epam.com", "info.epam.com"])); //, { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
// console.log(getDNSStats([])//, {});

module.exports = {
  getDNSStats,
};
