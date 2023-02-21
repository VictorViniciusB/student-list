/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let studentList = [
  {
  name : "Victor",
  note1: 8,
  note2: 9
  },
  {
  name: "Leticia",
  note1: 6,
  note2: 7
  },
  {
  name: "Davi",
  note1: 5,
  note2: 3
  },
  {
  name: "Jorge",
  note1: 8,
  note2: 5
  }
]

function calculateAverage(student){
let average = (student.note1 + student.note2) / 2
return average;
};

studentList.forEach(student => {
  let average = calculateAverage(student);
  if (average >= 7) {
      alert(`Parabéns ${student.name}, você foi aprovado(a)! Sua média foi ${average}`);
  } else {
      alert(`Infelizmente ${student.name}, você foi reprovado(a). Sua média foi ${average}`);
  }
});