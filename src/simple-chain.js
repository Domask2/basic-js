const CustomError = require("../extensions/custom-error");

  const chainMaker = {
    
    
  result: [],
  
  getLength() {
   return this.result.length;
  },
  
  addLink(value = '') {
 
   this.result.push(value);
   return this;
  },
  
  removeLink(position) {
    if(position < 1 || !Number.isInteger(position) || position > this.result.length) {
			this.result = [];
			throw "Error";
		}
    this.result.splice(position - 1,1);
    return this;
  },
  
  reverseChain() {
   this.result.reverse();
   return this;
  },
  
  finishChain() {
    
    let newString = this.result.map(item => `( ${item} )`).join('~~');
		this.result = [];
    return newString;
  }
};

module.exports = chainMaker;
