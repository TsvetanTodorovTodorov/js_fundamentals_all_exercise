function songs(arr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let n = arr.shift();
  let type = arr.pop();
  let result = [];

  for (let i = 0; i < n; i++) {
    let [typeList, name, time] = arr[i].split("_");
    let song = new Song(typeList, name, time);
    result.push(song);
  }

  if (type === "all") {
    result.forEach((i) => console.log(i.name));
  } else {
    let filtered = result.filter((i) => i.typeList === type);
    filtered.forEach((i) => console.log(i.name));
  }
}
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
