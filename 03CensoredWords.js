function censoredWords(text, word) {
  let symbol = "*".repeat(word.length);
  let censoredWord = text.replace(word, symbol);

  if (text.includes(word)) {
    while (censoredWord.includes(word)) {
      censoredWord = censoredWord.replace(word, symbol);
    }
  }
  console.log(censoredWord);
}
censoredWords("A small sentence with some words", "small");
censoredWords("Find the hidden word", "hidden");
