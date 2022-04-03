// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) return true;
  return false;
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
  const lastPosition = list.length - 1;
  const firstItem = list[0];
  const lastItem = list[lastPosition];

  return `${lastItem}, ${firstItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = wins * 3;

  return points + ties;
}

// Desafio 6
function highestCount(values) {
  // seu código aqui
  let largestNumber = values.sort((a, b) => (b - a))[0];
  let repetitions = 0;

  for (let index = 0; index < values.length; index += 1) {
    if (largestNumber === values[index]) {
      repetitions += 1;
    }
  }
  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 > distanceCat2) return 'cat2';
  if (distanceCat1 < distanceCat2) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

function isFizz(num) {
  if (num % 3 === 0 && num % 5 !== 0) return true;
  return false;
}

function isBuzz(num) {
  if (num % 3 !== 0 && num % 5 === 0) return true;
  return false;
}

function isFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return true;
  return false;
}

function isBug(num) {
  if (num % 3 !== 0 && num % 5 !== 0) return true;
  return false;
}

// Desafio 8
function fizzBuzz(receivedList) {
//   // seu código aqui

  const resultList = [];

  receivedList.forEach((currentNumber) => {
    if (isFizz(currentNumber)) resultList.push('fizz');
    if (isBuzz(currentNumber)) resultList.push('buzz');
    if (isFizzBuzz(currentNumber)) resultList.push('fizzBuzz');
    if (isBug(currentNumber)) resultList.push('bug!');
  });

  return resultList;
}

const numberToReplace = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

// Desafio 9
function encode(phrase) {
  // seu código aqui
  let encoded = '';

  for (let index = 0; index < phrase.length; index += 1) {
    const currentLetter = phrase[index];
    if (numberToReplace[currentLetter]) { // ex: numberToReplace['a'] === true
      encoded += numberToReplace[phrase[index]];
    } else {
      encoded += currentLetter;
    }
  }

  return encoded;
}

const letterToReplace = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function decode(phrase) {
  // seu código aqui
  let decoded = '';

  for (let index = 0; index < phrase.length; index += 1) {
    const currentLetter = phrase[index];
    if (letterToReplace[currentLetter]) { // ex: letterToReplace[1] === true
      decoded += letterToReplace[phrase[index]];
    } else {
      decoded += currentLetter;
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
