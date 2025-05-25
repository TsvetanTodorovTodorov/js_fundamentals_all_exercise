function cats(arr) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (const catData of arr) {
    let tokens = catData.split(" ");
    let catName = tokens[0];
    let catAge = tokens[1];

    let cat = new Cat(catName, catAge);
    cat.meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
