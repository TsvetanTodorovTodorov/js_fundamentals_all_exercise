function distintArray(arr) {
  let distinctArray = [];
  for (let num of arr) {
    if (!distinctArray.includes(num)) {
      distinctArray.push(num);
    }
  }
  console.log(distinctArray.join(" "));

}
distintArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distintArray([1, 2, 3, 4]);
