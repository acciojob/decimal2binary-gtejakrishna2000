function decimalToBinary(num1) {
  //Write you code here
	  if (num1 === 0) return "0"; 
  
    let arr = []; 
    for (; num1 > 0; num1 = Math.floor(num1 / 2)) { 
        arr.unshift(num1 % 2); 
    } 
    return arr.join(""); 
}

window.decimalToBinary = decimalToBinary;
