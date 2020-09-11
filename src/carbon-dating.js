const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};

module.exports = function dateSample(sample) {
 
	if(typeof sample !== "string" || sample<=0 || sample > MODERN_ACTIVITY ||
		/[a-zA-Z]/.test(sample)) return false

	let key = 0.693 / HALF_LIFE_PERIOD;

	let res = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sample)) / key)

	return res

};
