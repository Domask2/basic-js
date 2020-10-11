const CustomError = require("../extensions/custom-error");

module.exports = function transform(/* arr */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw 'THROWN'

  let result = [];
  for(let i=0; i<arr.length; i++) {
    
    if(arr[i] === '--discard-next') {
      
    if(arr[i+2] == '--double-prev' || arr[i+2] == '--discard-prev') i++;
    i++;
               
    } else if(arr[i] === '--discard-prev') {
            if(i>0) result.pop()
        
    } else if(arr[i] === '--double-next') {
        if(i<arr.length-1) result.push(arr[i+1])
        
    } else if (arr[i] === '--double-prev') {
      if (i !== 0) result.push(arr[i - 1]);
      
    } else {
      result.push(arr[i])
    }
  }
  
  return result
};
