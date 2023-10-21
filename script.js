function decimalToBinary(num) {
  //Write you code here
	var num = 10;
var arr = [];
let c = 0;
var rem = 0;
  while(num>0){
	  rem = num%2;
	  arr[c++] = rem;
	  num = Math.floor(num/2);
  }
	return arr.reverse();
}

window.decimalToBinary = decimalToBinary;
