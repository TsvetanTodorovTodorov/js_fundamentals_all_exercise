function piccolo(arr) {
  let parkingLot = new Set([]);

  for (const element of arr) {
    let [direction, carNum] = element.split(", ");

    if (direction === "IN") {
      parkingLot.add(carNum);
    } else if (direction === "OUT") {
      parkingLot.delete(carNum);
    }
  }

  let sort = Array.from(parkingLot).sort(
    (a, b) => a.match(/\d+/) - b.match(/\d+/)
  );

  if (sort.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    console.log(sort.join("\n"));
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
