const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(printNome);

function printNome(nome) {
  console.log(nome);
}

const nums = [1, 2, 3, 4, 5];

function multiplyByTen(num) {
  return num * 10;
}

const numsMultiplied = nums.map(multiplyByTen);
const numsMultiplied2 = nums.map((num) => num * 10);

console.log(numsMultiplied);
console.log(numsMultiplied2);
