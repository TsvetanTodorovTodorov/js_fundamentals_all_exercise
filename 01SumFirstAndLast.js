function sumFirstAndLast(arr) {
  const firstEl = Number(arr.shift());
  const lastEl = Number(arr.pop());
  console.log(firstEl + lastEl);
}
sumFirstAndLast(["20", "30", "40"]);
