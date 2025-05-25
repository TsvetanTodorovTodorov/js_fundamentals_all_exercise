function searchNum(arr1, arr2) {
  let numsWeTook = arr2[0];
  let numsWeDelete = arr2[1];
  let searchingNum = arr2[2];

  let newArr = arr1.splice(0, numsWeTook);
  newArr.splice(0, numsWeDelete);
  newArr = newArr.filter((el) => el === searchingNum);

  console.log(`Number ${searchingNum} occurs ${newArr.length} times.`);
}
searchNum([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchNum([7, 1, 5, 8, 2, 7], [3, 1, 5]);
