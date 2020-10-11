const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, count=0, sumArr=[]) {
		count++;
		sumArr.push(count);

		arr.forEach(element => {
				if(Array.isArray(element)) {
					this.calculateDepth(element,count,sumArr);
				}			
		});
			return Math.max(...sumArr);
  }
};