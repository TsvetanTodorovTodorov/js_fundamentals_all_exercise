function storage(arr) {
  let myMap = new Map();

  for (const element of arr) {
    let [name, qty] = element.split(" ");
    qty = Number(qty);

    if (!myMap.has(name)) {
      myMap.set(name, 0);
    }

    myMap.set(name, myMap.get(name) + qty);

    // if (myMap.has(name)) {
    //     let currQty = myMap.get(name);
    //     let newQty = currQty + qty;
    //     myMap.set(name, newQty)
    // } else {
    //     myMap.set(name, qty);
    // }
  }

  for (const [product, qty] of myMap) {
    console.log(product + " -> " + qty);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
