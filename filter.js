const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, i) => {
  return medias[i] < 7 ;
});

// No método filter deve haver o retorno de true ou false