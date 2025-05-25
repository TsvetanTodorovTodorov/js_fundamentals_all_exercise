function race(arr) {
  let racers = arr.shift().split(", ");
  let racerDistances = {};

  for (const name of racers) {
    racerDistances[name] = 0;
  }

  let lettersPattern = /[A-Za-z]/g;
  let digitPattern = /\d/g;
  let command = arr.shift();

  while (command !== "end of race") {
    let letterMatches = command.match(lettersPattern);
    let name = letterMatches.join("");

    let digitMatches = command.match(digitPattern);
    let distance = 0;
    for (let digit of digitMatches) {
      distance += Number(digit);
    }

    if (name in racerDistances) {
      racerDistances[name] += distance;
    }

    command = arr.shift();
  }

  let entries = Object.entries(racerDistances);
  entries.sort((a,b) => b[1] - a[1])
  
 console.log(`1st place: ${entries[0][0]}`);
 console.log(`2nd place: ${entries[1][0]}`);
 console.log(`3rd place: ${entries[2][0]}`);
 
  

}
race([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@ ",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);
