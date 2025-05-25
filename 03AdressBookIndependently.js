function adressBook(arr) {
  let unsortedObj = {};

  for (const el of arr) {
    let [name, adress] = el.split(":");
    unsortedObj[name] = adress;
  }

  //   let sortedObj = Object.keys(unsortedObj).sort((a, b) => a.localeCompare(b)); // it works without the => { return a.localeCompare(b) }
  let sortedAddressBook = Object.entries(unsortedObj).sort(
    ([nameA, addressA], [nameB, addressB]) => nameA.localeCompare(nameB)
  );

  for (const [name, address] of sortedAddressBook) {
    console.log(name + " -> " + address);
  }

  //   for (const key of sortedObj) {
  //     console.log(`${key} -> ${unsortedObj[key]}`);
  //   }
}
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
