const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const alunosEMedias = [alunos, medias];

console.log(alunosEMedias);

console.log(
  `A aluna da posição 1 da lista de alunos é: ${alunosEMedias[0][1]},
  A nota dessa aluna é ${alunosEMedias[1][1]},`
);

//Método includes()

const alunosI = ["João", "Juliana", "Ana", "Caio"];
const mediasI = [10, 8, 7.5, 9, 10];

const listaDeAlunosEMedias = [alunosI, mediasI];

function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    const [alunos, medias] = listaDeAlunosEMedias;

    const index = alunos.indexOf(aluno);
    const mediaAluno = medias[index];

    console.log(`${aluno} tem a média ${mediaAluno}`);
  } else {
    console.log(`O aluno ${aluno} não está na lista de alunos`);
  }
}

exibeNomeENota("João");
