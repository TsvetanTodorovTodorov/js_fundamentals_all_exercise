function storeProvision(arr1, arr2) {
  let object = {};

    for (let i = 0; i < arr1.length / 2; i += 2) {
        let order = [arr1[i], arr1[i + 1]];
      let [food, qty] = order;
        object.food = qty;
        obj
  }
  console.log(object);
}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
