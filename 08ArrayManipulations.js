function arrayManipulations(arr) {
  let numArr = arr.splice(0, 1);
  let separatedNumsArr = numArr[0].split(" ").map(Number);

  for (const action of arr) {
    let splitActions = action.split(" ");
    let command = splitActions[0];
    let action1 = Number(splitActions[1]);
    let action2 = Number(splitActions[2]);

    function add(action1) {
      separatedNumsArr.push(action1);
    }
    function remove(action1) {
      if (separatedNumsArr.includes(action1)) {
        separatedNumsArr = separatedNumsArr.filter((el) => el !== action1);
      }
    }

    function removeAt(action1) {
      separatedNumsArr.splice(action1, 1);
    }

    function insert(action1, action2) {
      separatedNumsArr.splice(action2, 0, action1);
    }

    switch (command) {
      case "Add":
        add(action1);
        break;

      case "Remove":
        remove(action1);
        break;

      case "RemoveAt":
        removeAt(action1);
        break;

      case "Insert":
        insert(action1, action2);
        break;
    }
  }

  console.log(separatedNumsArr.join(" "));
}

arrayManipulations([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);

arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
