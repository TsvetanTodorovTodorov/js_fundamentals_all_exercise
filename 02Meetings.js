function meetings(arr) {
  let object = {};

  for (const el of arr) {
    let [weekday, name] = el.split(" ");

    if (!object[weekday]) {
      object[weekday] = name;
      console.log(`Scheduled for ${weekday}`);
    } else {
      console.log(`Conflict on ${weekday}!`);
    }
  }

  for (let el in object) {
    console.log(`${el} -> ${object[el]}`);
  }
}
// meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
meetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
