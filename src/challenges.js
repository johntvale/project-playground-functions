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
  for (let index2 = 0; index2 < valores.length; index2 += 1) {
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
  } else if (distanciaGato2 > distanciaGato1) {
    return ('cat1');
  } else if (distanciaGato1 === distanciaGato2) {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function fizzBuzz(lista) {
  // seu código aqui
  let result = [];
  let aux;
  for (let index = 0; index < lista.length; index += 1) {
    aux = lista[index];
    if (aux % 3 === 0 && aux % 5 !== 0) {
      result.push('fizz');
    } else if (aux % 5 === 0 && aux % 3 !== 0) {
      result.push('buzz');
    } else if (aux % 3 === 0 && aux % 5 === 0) {
      result.push('fizzBuzz');
    } else if (aux % 3 !== 0 && aux % 5 !== 0) {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(phrase) {
  // seu código aqui
  let encoded = '';
  for (let index = 0; index < phrase.length; index += 1) {
    // se o phrase na posição index não tiver nenhuma das vogais, o encoded recebe essa letra.
    if (phrase[index] !== 'a' && phrase[index] !== 'e' && phrase[index] !== 'i' && phrase[index] !== 'o' && phrase[index] !== 'u') {
      encoded += phrase[index];
      // se phrase for alguma vogal, encoded recebe o número correspondente a sua vogal.
    } else if (phrase[index] === 'a') {
      encoded += '1';
    } else if (phrase[index] === 'e') {
      encoded += '2';
    } else if (phrase[index] === 'i') {
      encoded += '3';
    } else if (phrase[index] === 'o') {
      encoded += '4';
    } else if (phrase[index] === 'u') {
      encoded += '5';
    }
  }
  return encoded;
}

function decode(phrase2) {
  // seu código aqui
  let decoded = '';
  for (let index = 0; index < phrase2.length; index += 1) {
    // se o phrase2 na posição index não tiver nenhum número de 1 a 5, o encoded recebe essa letra.
    if (phrase2[index] !== '1' && phrase2[index] !== '2' && phrase2[index] !== '3' && phrase2[index] !== '4' && phrase2[index] !== '5') {
      decoded += phrase2[index];
      // se phrase2 for alguma número de 1 a 5, encoded recebe a vogal correspondente ao seu número.
    } else if (phrase2[index] === '1') {
      decoded += 'a';
    } else if (phrase2[index] === '2') {
      decoded += 'e';
    } else if (phrase2[index] === '3') {
      decoded += 'i';
    } else if (phrase2[index] === '4') {
      decoded += 'o';
    } else if (phrase2[index] === '5') {
      decoded += 'u';
    }
  }
  return decoded;
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
