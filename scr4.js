// isEven = function(n) {
// 	if(n % 2 == 0) {
// 	  return true;
// 	} else (n % 2 == 1) 
// 	  return false;
// }

isEven = function(n) {
	if (n % 2 == 0) {
		return true;
	} else if (n % 2 == 1) {
		return false;
	} else if (n < 0) {
		return isEven(-n);
	} else {
		return isEven(n - 2);
	}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));