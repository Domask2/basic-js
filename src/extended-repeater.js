const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,options) {
  let result = '';
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = typeof options.separator !== 'undefined' ? options.separator : '+';
  let addition = typeof options.addition !== 'undefined' ? options.addition : ''
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let additionSeparator = typeof options.additionSeparator !== 'undefined' ? options.additionSeparator : '|';
  
    for(let i=0;i<repeatTimes;i++) {
      i==0 ? result+=str : result+=separator + str;
      
      if(addition !== '') {
        for(let i=0; i<additionRepeatTimes; i++) {
          i==0 ? result+=addition : result+=additionSeparator + addition;
        }
      }
    }
  
  return result;
};


  