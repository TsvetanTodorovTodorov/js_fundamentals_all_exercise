function lastKNumbersSequence(n, k) {
  let arr = [1];

  for (let i = 1; i < n; i++) {
    let sum = 0;
    let kEl = arr.slice(-k);

    for (const el of kEl) {
      sum += el;
    }
    arr.push(sum);
  }
  return arr.join(" ");
}
console.log(lastKNumbersSequence(8, 2));
