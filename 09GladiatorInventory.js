function gladiatorInventory(arr) {
  let inventory = arr.shift().split(" ");

  for (const command of arr) {
    let tokens = command.split(" ");

    let action = tokens[0];
    let equipment = tokens[1];

    if (action === "Buy") {
      if (!inventory.includes(equipment)) {
        inventory.push(equipment);
      }
    } else if (action === "Trash") {
      if (inventory.includes(equipment)) {
        let index = inventory.indexOf(equipment);
        inventory.splice(index, 1);
      }
    } else if (action === "Repair") {
      if (inventory.includes(equipment)) {
        let index = inventory.indexOf(equipment);
        let repairedEquipment = inventory.splice(index, 1);
        inventory.push(repairedEquipment[0]);
      }
    } else if (action === "Upgrade") {
      let upgradeArr = equipment.split("-");
      let doubledEquipment = upgradeArr[0];
      let upgrade = upgradeArr[1];

      if (inventory.includes(doubledEquipment)) {
        let index = inventory.indexOf(doubledEquipment);
        let insert = upgradeArr.join(":");

        inventory.splice(index + 1, 0, insert);
      }
    }
  }
  console.log(inventory.join(" "));
}
// gladiatorInventory([
//   "SWORD Shield Spear",
//   "Buy Bag",
//   "Trash Shield",
//   "Repair Spear",
//   "Upgrade SWORD-Steel",
// ]);

gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
