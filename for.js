// ! For clássico

const nums = [100, 200, 300, 400, 500, 600];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

const notas = [10, 6.5, 8, 7.5];

let sum = 0;

for (let i = 0; i < notas.length; i++) {
  sum += notas[i];
}

const media = sum / notas.length;

// ! Loops em matrizes

console.log(`A média das notas é ${media}.`);

const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];

let media2 = 0;

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media2 += notasGerais[i][j] / notasGerais[i].length;
  }
}

media2 = media2 / notasGerais.length;

console.log(media);

// ! For of

const grades = [10, 6.5, 8, 7.5];

let soma = 0;

for (let nota of grades) {
  soma += nota;
}

const média = sum / grades.length;

console.log(média);

// ! forEach

const notasFE = [10, 6.5, 8, 7.5, 6];

let sumFE = 0;

notasFE.forEach(function (nota, index) {
  sumFE += nota;
  console.log(index);
});

const mediaFE = sumFE / notasFE.length;

console.log(mediaFE);


// ! Quando usar cada um?

/*
    forEach() para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;

    for…of em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);
    
    for para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).
*/