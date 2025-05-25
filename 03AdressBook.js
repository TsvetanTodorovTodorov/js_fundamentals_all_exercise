function adressBook(arr) {
  let adresses = {};

  for (const element of arr) {
    let [name, adress] = element.split(":");

    adresses[name] = adress;
  }

  let sortObj = Object.keys(adresses).sort((a, b) => {
    return a.localeCompare(b);
  });

  for (const el of sortObj) {
    console.log(`${el} -> ${adresses[el]}`);
  }
}
// adressBook([
//   "Tim:Doe Crossing",
//   "Bill:Nelson Place",
//   "Peter:Carlyle Ave",
//   "Bill:Ornery Rd",
// ]);

adressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);