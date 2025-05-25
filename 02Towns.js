function towns(arr) {
  for (let townInfo of arr) {
    let [town, latitude, longitude] = townInfo.split(" | ");
    let townObject = {};
    townObject.town = town;
    townObject.latitude = Number(latitude).toFixed(2);
    townObject.longitude = Number(longitude).toFixed(2);

    console.log(townObject);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
