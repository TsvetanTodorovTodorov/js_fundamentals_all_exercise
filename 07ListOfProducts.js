function listOfProducts(arr) {
  function sortNumberedList(arr) {
    let sortedList = arr.sort();
    let resultArr = [];

    for (let i = 0; i < sortedList.length; i++) {
      resultArr.push(`${i + 1}.${sortedList[i]}`);
    }
    return resultArr.join("\n");
  }

  let result = sortNumberedList(arr);
  return result;
}
console.log(listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]));
// console.log(listOfProducts(["Watermelon", "Banana", "Apples"]));
