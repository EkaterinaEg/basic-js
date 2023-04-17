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
  // throw new NotImplementedError("Not implemented");

  const reversedDomains = domains.map((el) => el.split(".").reverse());
  // console.log(reversedDomains);
  let reduced = {};
  let key = "";

  reversedDomains.forEach((el) => {
    // console.log(el);
    for (let i = 0; i < el.length; i++) {
      key = "." + el.slice(0, i + 1).join(".");
      // console.log(key);

      if (key in reduced) {
        reduced[key]++;
      } else {
        reduced[key] = 1;
      }
    }
  });

  return reduced;
}

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

// const matches = items.filter(s => s.includes('thi'));
// if (domains[i].includes(item)) {
//   map[domens[i]] += map[domens[i]];
// } else {
//   map[domens[i]] = 1;
// }
// domens[i] += domens[i + 1];

// return domens.reduce((domen, i) => {
//   domains.includes(domens.slice(i,i+1)) ? domens.slice(i,i+1) = domens.slice(i,i+1) : 1;
//   return domen},{});
// }

//   return gloves.reduce((color, i) => {
//     color[i] = ++color[i] || 1;
//     return color;
//     // return Object.keys(color).filter((n) => color[n] >= 2);
//   }, {});

// console.log(getDNSStats(["epam.com"])); //, { '.com': 1, '.com.epam': 1 });
console.log(getDNSStats(["epam.com", "info.epam.com"])); //, { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 });
// console.log(getDNSStats([])//, {});

module.exports = {
  getDNSStats,
};
