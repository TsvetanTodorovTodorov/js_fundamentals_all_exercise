function wordsTracker(arr) {
  let wordsOccurrences = arr.shift().split(" ");
  //   let wordsThatOccurres = new Map();
  let wordsThatOccurres = {};

  //   for (const word of wordsOccurrences) {
  //     wordsThatOccurres.set(word, 0);
  //   }
  for (const word of wordsOccurrences) {
    wordsThatOccurres[word] = 0;
  }

  //   for (const element of arr) {
  //     if (wordsOccurrences.includes(element)) {
  //       wordsThatOccurres.set(element, wordsThatOccurres.get(element) + 1);
  //     }
  //   }
  for (const element of arr) {
    if (wordsOccurrences.includes(element)) {
      wordsThatOccurres[element] += 1;
    }
  }

  //   let sorted = Array.from(wordsThatOccurres.entries()).sort(
  //     (a, b) => b[1] - a[1]
  //   );
  let sorted = Object.keys(wordsThatOccurres).sort(
    (a, b) => wordsThatOccurres[b] - wordsThatOccurres[a]
  );

  // for (let [word, n] of sorted) {
  //   console.log(`${word} - ${n}`);
  // }
  for (let key of sorted) {
    console.log(`${key} - ${wordsThatOccurres[key]}`);
  }
}

wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
