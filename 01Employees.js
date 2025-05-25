function employees(arr) {
  for (const el of arr) {
    let person = {
      name: el,
      personalNumber: el.length,
    };

    console.log(
      `Name: ${person.name} -- Personal Number: ${person.personalNumber}`
    );
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
