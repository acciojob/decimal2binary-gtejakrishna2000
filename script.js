function decimalToBinary(num) {
  //Write you code here
	let arr = [];
	let c = 0;
  while(num>0){
	  let rem = num%2;
	  arr[c++] = rem;
	  num = num/2;
  }
	return c;
}

window.decimalToBinary = decimalToBinary;
