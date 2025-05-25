function processOddNumbers(arr) {
    let processedArr = [];


    arr.filter((e, i) => {
        if (i % 2 !== 0) {
          processedArr.unshift(e * 2);
        }
      });
    
    // for (let i = 0; i < arr.length; i++) {

    //     if (i % 2 !== 0) {
    //         processedArr.unshift(arr[i] * 2);
    //     }
    // }

    return processedArr.join(" ")
}
console.log(processOddNumbers([10, 15, 20, 25]));
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));
