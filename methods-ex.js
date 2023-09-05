//  push() && pop()

const notas = [10, 6, 8];
notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(notas);
console.log(media);

const notas2 = [10, 6, 8, 5.5, 10];

notas2.pop();
console.log(notas2);

const media2 = (notas2[0] + notas2[1] + notas2[2] + notas2[3]) / notas2.length;

console.log(`A média é ${media2}`);

// slice()

const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

const sala1 = alunos.slice(0, alunos.length / 2);
console.log(sala1);

const sala2 = alunos.slice(alunos.length / 2);
console.log(sala2);

//Método splice()

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo");
console.log(nomes);

//Método concat()

const salaJS = ["Evaldo", "Camilla", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const salasJuntas = salaJS.concat(salaPython);
console.log(salasJuntas)