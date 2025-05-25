function generator(arr) {
  let [str1, str2, replacementStr] = arr;
  let vowelsArr = ["a", "e", "o", "u", "i"];
  let concatStr = str1 + str2;
  let replacementStrIndex = 0;


  for (let letter of concatStr) {
    if (vowelsArr.includes(letter)) {
     let newReplacedLetter = replacementStr[replacementStrIndex].toUpperCase();
     concatStr = concatStr.replace(letter, newReplacedLetter)
      replacementStrIndex++;
      
      if (replacementStrIndex >= replacementStr.length) {
        replacementStrIndex = 0;
      }
    }


  }
  let password = concatStr.split('').reverse().join("");
  console.log(`Your generated password is ${password}`);
  
  
}
generator(["ilovepizza", "ihatevegetables", "orange"]);
