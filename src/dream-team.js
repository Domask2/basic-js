const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(/* members */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

module.exports = function createDreamTeam(members) {
 if(!Array.isArray(members)) return false;
  
  let res = [];
  members.forEach((item,i)=> {
    if( typeof item === 'string') {
      res.push(item.replace(/\s+/g, '').split('')[0].toUpperCase())
    } return false
  })

  return res.sort().join('')
};

