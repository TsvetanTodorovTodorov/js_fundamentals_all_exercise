function personInfo(firstName, lastName, age) {
  let personInfo = {
    firstName: firstName,
    lastName: lastName,
    age: Number(age),
  };
  return personInfo
}
console.log(personInfo("Peter", "Pan", "20"));
