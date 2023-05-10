function shiftAlphabet(str, shift) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let shiftedString = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        shiftedString = shiftedString.concat(" ");
      } else {
        const index = alphabet.indexOf(str[i].toUpperCase());
        let shiftedIndex = index + shift;
        if (shiftedIndex > 25) {
          shiftedIndex -= 26;
        }
        shiftedString = shiftedString.concat(alphabet[shiftedIndex]);
      }
    }
    return shiftedString;
  }
  
  console.log(shiftAlphabet("SEPULSA OKE", 10)); 
  console.log(shiftAlphabet("DISKA GANTENG", 12));