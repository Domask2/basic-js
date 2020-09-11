const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};


module.exports = function countCats(matrix) {
  
	 let sum = 0;

	for(let i = 0; i<matrix.length; i++) {
		for(let j = 0; j<matrix[i].length; j++){

			if(matrix[i][j] == '^^') {
				sum++
			}
		}
	}

	return sum;


  //  return matrix.reduce( (sum, arr) => 
  //   		sum + arr.reduce( (total, item) => 
  //     (total + (item == "^^" ? 1 : 0) ), 
  //   0), 
  // 0);

};
