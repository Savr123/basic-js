const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if(!Array.isArray(members)){
    return false;
  }

  return members
    .filter(x=>typeof x=="string")
    .map(s=>s
        .trim()
        .slice(0,1)
        .toUpperCase())
    .sort()
    .join("");

};
