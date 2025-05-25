function bombNumbers(arr1, arr2) {
  const bombNum = arr2[0];
  const detPow = arr2[1];
  let sum = 0;

  let detonations = arr1.filter((el) => el === bombNum);
  // console.log(typeof bombNum);

  for (let i = 0; i < detonations.length; i++) {
    let index = arr1.indexOf(bombNum);

    if (index !== -1) {
      arr1.splice(index - detPow, index + detPow);
      // arr1.splice(0, 3);
    }
  }

  for (const el of arr1) {
    sum += el;
  }
  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
// bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
