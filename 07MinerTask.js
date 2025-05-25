function minerTask(arr) {
  //   let listObj = new Map();
  let resourceQty = {};

  for (let i = 0; i < arr.length; i += 2) {
    // arr[i + 1] = Number(arr[i + 1]);
    // if (!listObj.has(arr[i])) {
    //   listObj.set(arr[i], 0);
    // }
    // listObj.set(arr[i], listObj.get(arr[i]) + arr[i + 1]);

    let resource = arr[i];
    let qty = Number(arr[i + 1]);

    if (resource in resourceQty) {
      resourceQty[resource] += qty;
    } else {
      resourceQty[resource] = qty;
    }
  }

  //   for (const [ore, qty] of listObj) {
  //     console.log(`${ore} -> ${qty}`);
  //   }

  let entries = Object.entries(resourceQty);

  for (const [resourse, qty] of entries) {
    console.log(`${resourse} -> ${qty}`);
  }
}
// minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
