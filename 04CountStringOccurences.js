function countStringOccurences(text, word) {
  let counter = 0;
  let textArr = text.split(" ");

  for (const element of textArr) {
    if (element === word) {
      counter++;
    }
  }
  console.log(counter);
}
countStringOccurences("This is a word and it also is a sentence", "is");
