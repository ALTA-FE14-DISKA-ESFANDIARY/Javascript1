function caesarCipher(alphabet, input) {
    let shiftedString = "";
    for (let i = 0; i < input.length; i++) {
      let charCode = input.charCodeAt(i);
      let shiftedCharCode = charCode + alphabet;
      if (shiftedCharCode > 122) {
        shiftedCharCode = 97 + ((shiftedCharCode - 123) % 26);
      }
      shiftedString += String.fromCharCode(shiftedCharCode);
    }
    return shiftedString;
  }
  
  console.log(caesarCipher(3, "abc")); 
  console.log(caesarCipher(2, "alta")); 
  console.log(caesarCipher(10, "alterraacademy")); 
  console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz"));
  console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz"));
