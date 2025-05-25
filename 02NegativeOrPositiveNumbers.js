function negativeOrPositiveNumbers(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) < 0) {
      newArr.unshift(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }

  for (const el of newArr) {
    console.log(el);
  }
}
negativeOrPositiveNumbers(["7", "-2", "8", "9"]);
