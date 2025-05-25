function revealWords(words, text) {
  let wordsArr = words.split(", ");

  for (let el of wordsArr) {
    let symbol = "*".repeat(el.length);
    text = text.replace(symbol, el);
  }
  console.log(text);
}
revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
