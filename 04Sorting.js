function sorting(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      let temp = arr.pop();
      arr.splice(i, 0, temp);
    }
  }

  console.log(arr.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
