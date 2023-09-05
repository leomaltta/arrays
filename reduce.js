const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

const salas = [salaJS, salaJava, salaPython];

function calculaMedia(notas) {
  const somaDasNotas = notas.reduce((acc, nota) => acc + nota, 0);

  const media = somaDasNotas / notas.length;

  return media;
}

const medias = salas.forEach((sala) => {
  console.log(calculaMedia(sala));
});

console.log(medias);
