// !!!!! Métodos de Array !!!!!

// Método concat()

const notas3 = [10, 6, 8, 5.5, 10];

const notas4 = [10, 6, 8, 5.5, 10];

const notas5 = notas3.concat(notas4);
console.log(notas5);

// Método filter array

const notas6 = [10, 6, 8, 5.5, 10];

const notas7 = notas6.filter((nota) => nota >= 6);
console.log(notas7);

//Método find

const notas8 = [10, 6, 8, 5.5, 15, 16, 17, 18, 19, 20];

const notas9 = notas8.find((nota) => nota > 15);
console.log(notas9);

//Método findIndex

const notas10 = [10, 6, 8, 5.5, 15, 16, 17, 18, 19, 20];

const notas11 = notas10.findIndex((nota) => nota > 15);
console.log(notas11);

//Método lastIndexOF

const notas12 = [10, 6, 8, 5.5, 15, 16, 17, 18, 19, 20];

const notas13 = notas12.lastIndexOf(15);
console.log(notas13);

//Método forEach

const notas14 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

notas14.forEach((nota) => console.log(nota));

//Método pop

const notas15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

notas15.pop();
console.log(notas15[8]);
console.log(notas15);

//Método push

const notas16 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

notas16.push(10);
console.log(notas16[9]);
console.log(notas16);

//Método shift

const notas17 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

notas16.shift();
console.log(notas17[8]);
console.log(notas17);

//Método unshift

const notas18 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

notas18.unshift(10);
console.log(notas18[0]);
console.log(notas18);

//Método reduce

const notas19 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const soma = notas19.reduce((acumulador, valor) => acumulador + valor);
console.log(soma);

//Método reduceRight

const notas20 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const soma2 = notas20.reduceRight((acumulador, valor) => acumulador + valor);
console.log(soma2);

//Método reverse

const notas21 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

notas21.reverse();
console.log(notas21);

//Método slice

const notas22 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const notas23 = notas22.slice(2, 5);
console.log(notas23);

//Método sort

const notas24 = [0, 1, 23, 2, 3, 4, 5, 6, 7, 8, 9];

notas24.sort();
console.log(notas24);

//Método splice

const notas25 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

notas25.splice(2, 1);
console.log(notas25);
