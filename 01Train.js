function train(arr) {
  let wagons = arr.shift().split(" ").map(Number);
  let maxCapacity = Number(arr.shift());

  for (const el of arr) {
    let action = el.split(" ");

    let action1 = action.shift();
    let action2 = action.shift();

    if (action1 === "Add") {
      wagons.push(Number(action2));
    } else {
      action1 = Number(action1);
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + action1 <= maxCapacity) {
          wagons[i] += action1;
          break;
        }
      }
    }
  }
  console.log(wagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
