function companyUsers(arr) {
  //   let companyIds = new Map();
  let companyIds = {};

  //   for (const element of arr) {
  //     let [companyName, id] = element.split(" -> ");

  //     if (!companyIds.has(companyName)) {
  //       companyIds.set(companyName, []);
  //     }
  //     companyIds.set(companyName, companyIds.get(companyName).concat(id));
  //   }
  for (const element of arr) {
    let [companyName, id] = element.split(" -> ");

    if (companyName in companyIds) {
      if (!companyIds[companyName].includes(id)) {
        companyIds[companyName].push(id);
      }
    } else {
      companyIds[companyName] = [id];
    }
  }

  //   let sortedCompanies = Array.from(companyIds.entries()).sort((a, b) =>
  //     a[0].localeCompare(b[0])
  //   );

  let sortedCompanies = Object.entries(companyIds).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  //   for (const [company, ids] of sortedCompanies) {
  //     console.log(company);

  //     let uniqueIds = [...new Set(ids)];
  //     for (const id of uniqueIds) {
  //       console.log(`-- ${id}`);
  //     }
  //   }
  for (const [name, ids] of sortedCompanies) {
    console.log(name);
    for (const id of ids) {
      console.log(`-- ${id}`);
    }
  }
}
// companyUsers([
//   "SoftUni -> AA12345",
//   "SoftUni -> BB12345",
//   "Microsoft -> CC12345",
//   "HP -> BB12345",
// ]);

companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
