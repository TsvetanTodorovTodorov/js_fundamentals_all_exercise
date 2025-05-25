function legendaryFarming(str) {
  let strArr = str.split(" ");
  let legendaryMaterials = { shards: 0, fragments: 0, motes: 0 };
  //   legendaryMaterials["shards"] = 0;
  //   legendaryMaterials["fragments"] = 0;
  //   legendaryMaterials["motes"] = 0;
  let junkMaterials = {};
  let legendaryItems = {
    shards: "Shadowmourne",
    fragments: "Valanyr",
    motes: "Dragonwrath",
  };

  for (let i = 0; i < strArr.length; i += 2) {
    let qty = Number(strArr[i]);
    let material = strArr[i + 1].toLowerCase();

    if (material in legendaryMaterials) {
      legendaryMaterials[material] += qty;

      if (legendaryMaterials[material] >= 250) {
        legendaryMaterials[material] -= 250;
        if (material in legendaryItems) {
          let legendaryWon = legendaryItems[material];
          console.log(`${legendaryWon} obtained!`);
        }
        break;
      }
    } else {
      if (material in junkMaterials) {
        junkMaterials[material] += qty;
      } else {
        junkMaterials[material] = qty;
      }
    }
    // if (legendaryMaterials[material] >= 250) {
    //   break;
    // }
  }

  //   if (legendaryMaterials["shards"] >= 250) {
  //     console.log("Shadowmourne obtained!");
  //     legendaryMaterials["shards"] -= 250;
  //   } else if (legendaryMaterials["fragments"] >= 250) {
  //     console.log("Valanyr obtained!");
  //     legendaryMaterials["fragments"] -= 250;
  //   } else if (legendaryMaterials["motes"] >= 250) {
  //     console.log("Dragonwrath obtained!");
  //     legendaryMaterials["motes"] -= 250;
  //   }

  let sortedLegendaryMaterials = Object.entries(legendaryMaterials).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  );
  let sortedJunkMaterials = Object.entries(junkMaterials).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (const [material, qty] of sortedLegendaryMaterials) {
    console.log(`${material}: ${qty}`);
  }
  for (const [junk, qty] of sortedJunkMaterials) {
    console.log(`${junk}: ${qty}`);
  }
}
// legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
legendaryFarming(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
