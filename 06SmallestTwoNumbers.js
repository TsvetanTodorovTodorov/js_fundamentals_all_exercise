function smallest2Numbers(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let slicedArr = sortedArr.slice(0, 2);

  return slicedArr.join(" ");
}

console.log(smallest2Numbers([30, 15, 50, 5]));
console.log(smallest2Numbers([3, 0, 10, 4, 7, 3]));
