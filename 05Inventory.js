function registerForHeroes(arr) {
  let heroes = [];

  for (const element of arr) {
    let [heroName, heroLevel, heroItems] = element.split(" / ");
    heroes.push({ hero: heroName, level: Number(heroLevel), items: heroItems });
  }
  heroes.sort((a, b) => a.level - b.level);

  for (const heroObj of heroes) {
    console.log(`Hero: ${heroObj.hero}`);
    console.log(`level => ${heroObj.level}`);
    console.log(`items => ${heroObj.items}`);
  }
}
registerForHeroes([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
