const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["flash", "superman", "batman"];
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);
// const allHeroes = marvel_heroes.(dc_heroes);
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes[3][1]);
const all_new_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_new_heroes);

const allHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(allHeroes);

const real_array = [1, 2, 2, 3, 4, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_other_array = real_array.flat(Infinity);
console.log(real_other_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"})); //intersting
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
