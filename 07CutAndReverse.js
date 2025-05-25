function cutAndReverse(str) {
  let length = str.length;
  arr = str.split("");
  let firstHalf = arr.splice(0, length / 2).reverse().join("");
  let secondHalf = arr.reverse().join("");
  console.log(firstHalf);
  console.log(secondHalf);
}
cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
cutAndReverse("sihToDtnaCuoYteBIboJsihTtAdooGoSmI");
