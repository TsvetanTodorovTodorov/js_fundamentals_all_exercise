function arrayManipulator(nums, commands) {
  for (const command of commands) {
    let tokens = command.split(" ");
    let action = tokens.shift();

    if (action === "add") {
      let index = tokens.shift();
      let addNum = Number(tokens.shift());
      nums.splice(index, 0, addNum);
    } else if (action === "addMany") {
      let index = tokens.shift();
      let elements = tokens;
      for (const element of elements) {
        nums.splice(index, 0, Number(element));
        index++;
      }
    } else if (action === "contains") {
      let element = Number(tokens.shift());
      let index = nums.indexOf(element);
      console.log(`${index}`);
    } else if (action === "remove") {
      let index = tokens.shift();
      nums.splice(index, 1);
    } else if (action === "shift") {
      let positions = Number(tokens.shift());
      for (let i = 0; i < positions; i++) {
        let temp = nums.shift();
        nums.push(temp);
      }
    } else if (action === "sumPairs") {
      let rotations = nums;
      let newArr = [];
      for (let i = 0; i < nums.length; i += 2) {
        let sum = 0;
        let firstNum = nums[i];

        if (i + 1 < nums.length) {
          let secondNum = nums[i + 1];
          sum = firstNum + secondNum;
          newArr.push(sum);
        } else {
          newArr.push(firstNum);
        }
      }
      nums = newArr;
    } else if (action === "print") {
      console.log(`[ ${nums.join(", ")} ]`);
    }
  }
}

// arrayManipulator(
//   [1, 2, 4, 5, 6, 7],
//   ["add 1 8", "contains 1", "contains 3", "print"]
// );

// arrayManipulator(
//   [1, 2, 3, 4, 5],
//   ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
// );

arrayManipulator(
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
);
