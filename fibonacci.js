/* Please put your code here for how to generate a Fibonacci number.
*/

//Create a big-integer class
var bigInt = require("big-integer");

//This function returns the ith Fibonacci number in the Fiboncacci Sequence,
//and makes use of the big-integer datatype.
//@param n: the index of the desired Fibonacci number
function fibonacci(n) {
	var index = bigInt(n);
	var x = bigInt.zero;
	var y = bigInt.one;
	if(n<=2) { return 1; }
	for(var i = 0; i < index.subtract(1); i++) {
	  	var tempY = y;
	   	y = tempY.add(x);
	  	x = tempY;
	}
	return y.toString();
}

console.log(fibonacci(99));
