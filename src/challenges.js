// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let splitedSentence = [];

  splitedSentence = phrase.split(' ');
  return splitedSentence;
}

// Desafio 4
function concatName(list) {
  // seu código aqui
  let ultimo = list[0];
  let primeiro = list[list.length - 1] + ', ';
  let result = primeiro + ultimo;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = wins * 3;
  pontos += ties;
  return pontos;
}

// Desafio 6
function highestCount(valores) {
  // seu código aqui
  let maior = valores[0];
  let repete = 0;
  for (let index = 1; index < valores.length; index += 1) {
    if (maior < valores[index]) {
      maior = valores[index];
    }
  }
  for (let index2 = 0; index2 < valores.length; index2 +=1) {
    if (maior === valores[index2]) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaGato1 = Math.abs(mouse - cat1);
  let distanciaGato2 = Math.abs(mouse - cat2);

  if (distanciaGato1 > distanciaGato2) {
    return ('cat2');
  } else if (distanciaGato2 > distanciaGato1){
    return ('cat1');
  } else if (distanciaGato1 === distanciaGato2) {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}

// Desafio 10
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
