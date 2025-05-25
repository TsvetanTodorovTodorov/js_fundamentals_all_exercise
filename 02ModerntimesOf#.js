function hashTag(text) {
  let result = text
    .split(" ")
    .filter((word) => word.startsWith("#") && word.length > 1);
  for (let word of result) {
    word = word.slice(1);

    let pattern = /\b[A-Za-z]+\b/;

    if (pattern.test(word)) {
      console.log(word);
    }
  }
}
hashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");
