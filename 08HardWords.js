function hardWords(arr) {
  let [text, words] = arr;

  words.sort((a, b) => b.length - a.length);

  for (let word of words) {
    let hardWord = "_".repeat(word.length);

    if (text.includes(hardWord)) {
      text = text.replace(hardWord, word);
    }
  }
  console.log(text);
}
hardWords([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
