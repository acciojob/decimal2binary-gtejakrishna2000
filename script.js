function decimalToBinary(num) {
  //Write you code here
	let str = "";
	let c = 0;
  while(num>0){
	  let rem = num%2;
	  str += rem;
	  num = num/2;
  }
  	
	return str.split("").reverse().join("");
}

window.decimalToBinary = decimalToBinary;
