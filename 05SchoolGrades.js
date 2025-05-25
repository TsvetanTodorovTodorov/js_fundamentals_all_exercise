function schoolGrades(arr) {
  let map = new Map();

  for (const element of arr) {
    let tokens = element.split(" ");
    let student = tokens.shift();
    let grades = tokens.map(Number);

    if (!map.has(student)) {
      map.set(student, []);
    }

    map.set(student, map.get(student).concat(grades));
  }

  let sortedStudents = Array.from(map.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const [student, grades] of sortedStudents) {
    let sum = 0;
    grades.forEach((element) => (sum += element));
    let avr = sum / grades.length;
    console.log(`${student}: ${avr.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
// schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
