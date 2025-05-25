function toJSON(firstName, lastName, hairColor) {
    
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    console.log(JSON.stringify(person));
    

}
toJSON('George', 'Jones', 'Brown');