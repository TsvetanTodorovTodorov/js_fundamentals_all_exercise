function oddOccurrences(str) {
  let strArr = str.split(" ");
  let map = new Map();

  for (const el of strArr) {
    let word = el.toLowerCase();
    if (!map.has(word)) {
      map.set(word, 1);
    } else {
      map.set(word, map.get(word) + 1);
    }
  }
  let arr = Array.from(map.entries());

  let oddWords = [];
  for (const [el, num] of arr) {
    if (num % 2 !== 0) {
      oddWords.push(el);
    }
  }
  console.log(oddWords.join(" "));
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
