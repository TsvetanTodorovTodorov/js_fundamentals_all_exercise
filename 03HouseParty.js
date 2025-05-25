function houseParty(arr) {
  let pplInTheList = [];

  for (const sentence of arr) {
    let tokens = sentence.split(" ");

    if (!tokens.includes("not") && pplInTheList.includes(tokens[0])) {
      console.log(`${tokens[0]} is already in the list!`);
    } else if (!tokens.includes("not")) {
      pplInTheList.push(tokens[0]);
    } else if (pplInTheList.includes(tokens[0]) && tokens.includes("not")) {
      pplInTheList = pplInTheList.filter((el) => el !== tokens[0]);
    } else {
      console.log(`${tokens[0]} is not in the list!`);
    }
  }
  console.log(pplInTheList.join("\n"));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
// houseParty([
//   "Tom is going!",
//   "Annie is going!",
//   "Tom is going!",
//   "Garry is going!",
//   "Jerry is going!",
// ]);
