function pascalCase(str) {
  let words = [];
  let currWord = "";

  for (const letter of str) {
    if (letter === letter.toUpperCase()) {
      words.push(currWord);
      currWord = letter;
    } else {
      currWord += letter;
    }
  }
  words.push(currWord);
  words.shift();
  console.log(words.join(", "));
}
pascalCase("SplitMeIfYouCanHaHaYouCantOrYouCan");
