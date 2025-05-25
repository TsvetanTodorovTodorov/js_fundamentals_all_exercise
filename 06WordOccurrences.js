function words(arr) {
  let map = new Map();

  for (const element of arr) {
    if (!map.has(element)) {
      map.set(element, 0);
    }
    map.set(element, map.get(element) + 1);
  }

  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (const [word, times] of sorted) {
    console.log(`${word} -> ${times} times`);
  }
}
words([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
