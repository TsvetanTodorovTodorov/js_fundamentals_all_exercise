function firstAndLastKNumbers(arr) {
  let k = arr.shift();
  let firstKEl = arr.slice(0, k);
  let lastKEl = arr.slice(arr.length - k);

  console.log(firstKEl.join(" "));
  console.log(lastKEl.join(" "));
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
