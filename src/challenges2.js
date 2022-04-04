// Desafio 10
function techList(techs, name) {
  // seu código aqui

  // ordenação do array techs e declaração do novo array que vai receber os objetos
  let orderedList = techs.sort();
  let techsAndNames = [];

  if (orderedList.length > 0) { // verifica se o array techs é maior que 0
    for (let index = 0; index < orderedList.length; index += 1) { // para cada posição do array recebido será atribuído um novo objeto ao array TechsAndNames, com uma key Tech[index] e uma key Name. Criando um Array de objetos.
      techsAndNames.push({
        tech: orderedList[index],
        name,
      });
    }
  } else {
    return ('Vazio!');
  }
  return techsAndNames;
}

const largerThenEleven = (numberList) => {
  // verificar se o array tem length diferente de 11
  if (numberList.length !== 11) return true;
  return false;
};

const lessThenZeroHigherThanNine = (numberList) => {
  // verificar se o array tem número MENOR que 0 ou MAIOR que 9
  for (let index = 0; index < numberList.length; index += 1) {
    let atual = numberList[index];
    if (atual < 0 || atual > 9) return true;
  }
  return false;
};

function numberOfRepetitions(values, numberToCheck) {
  let repetitions = 0;

  for (let index = 0; index < values.length; index += 1) {
    if (numberToCheck === values[index]) {
      repetitions += 1;
    }
  }
  return repetitions;
}

const moreThenThreeRepetitions = (numberList) => {
  // Verificar se o array tem números que se repetem 3 ou mais vezes.
  for (let index = 0; index < numberList.length; index += 1) {
    let currentNumber = numberList[index];
    if (numberOfRepetitions(numberList, currentNumber) >= 3) return true;
  }
  return false;
};

const organizePhoneNumber = (numberList) => {
  // Primeiros 3 dígitos
  let phoneNumber = `(${numberList[0]}${numberList[1]}) `;

  // Recebe segunda parte: 5 dígitos.
  for (let index = 2; index < 7; index += 1) {
    phoneNumber += numberList[index];
  }

  // Divisão da segunda e terceira parte
  phoneNumber += '-';

  // Recebe terceira parte, 4 últimos.
  for (let index = 7; index < 11; index += 1) {
    phoneNumber += numberList[index];
  }

  return phoneNumber;
};

// Desafio 11
function generatePhoneNumber(numberList) {
  const errorMsgOne = 'Array com tamanho incorreto.';
  const errorMsgTwo = 'não é possível gerar um número de telefone com esses valores';

  if (largerThenEleven(numberList)) return errorMsgOne;
  if (lessThenZeroHigherThanNine(numberList)) return errorMsgTwo;
  if (moreThenThreeRepetitions(numberList)) return errorMsgTwo;

  // Principal ~> Organiza lista telefônica com parenteses e traço;
  const organizedPhoneNumber = organizePhoneNumber(numberList);

  return organizedPhoneNumber;
}

const largerThenOthersSummed = (receivedLines) => {
  // confere se 1 lado é > que a soma dos outros 2 lados
  const { lineA, lineB, lineC } = receivedLines;
  if (lineA > (lineB + lineC)) return true;
  if (lineB > (lineA + lineC)) return true;
  if (lineC > (lineA + lineB)) return true;
  return false;
};

const smallerThenOthersDifference = (receivedLines, absDifference) => {
  // confere se 1 lado é < que a diferença ABSOLUTA dos outros 2 lados
  const { lineA, lineB, lineC } = receivedLines;
  const { bc, ac, ab } = absDifference;
  if (lineA < bc) return true;
  if (lineB < ac) return true;
  if (lineC < ab) return true;
  return false;
};

const smallerThenOthersSummed = (receivedLines) => {
  // confere se 1 lado é < que a SOMA dos outros dois
  const { lineA, lineB, lineC } = receivedLines;
  if (lineA < (lineB + lineC)) return true;
  if (lineB < (lineA + lineC)) return true;
  if (lineC < (lineA + lineB)) return true;
  return false;
};

const largerThenOthersDifference = (receivedLines, absDifference) => {
  // confere se 1 lado é > que a diferença absoluta dos outros 2
  const { lineA, lineB, lineC } = receivedLines;
  const { bc, ac, ab } = absDifference;
  if (lineA > bc) return true;
  if (lineB > ac) return true;
  if (lineC > ab) return true;
  return false;
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
// seu código aqui
  const receivedLines = { lineA, lineB, lineC };
  const absDifference = {
    bc: Math.abs(lineB - lineC),
    ac: Math.abs(lineA - lineC),
    ab: Math.abs(lineA - lineB),
  };

  if (largerThenOthersSummed(receivedLines)) return false;
  if (smallerThenOthersDifference(receivedLines, absDifference)) return false;
  if (
    smallerThenOthersSummed(receivedLines)
    && (largerThenOthersDifference(receivedLines, absDifference))
  ) return true;
}

// Desafio 13
function hydrate(qtdCerveja) {
  let expressaoRegular = /\d+/g; // usar /d para procurar digitos, + para mais de 1 dígito, e colocar entre "//" para definir como expressão regular
  let resultadoBusca = qtdCerveja.match(expressaoRegular);
  let soma = 0;
  let stringReturn = '';

  for (let index = 0; index < resultadoBusca.length; index += 1) { // encontrar números e somar na variável 'soma'
    let atual = parseInt(resultadoBusca[index], 0);
    soma += atual;
  }
  stringReturn = String(soma);

  if (stringReturn === '1') return (`${stringReturn} copo de água`);
  return `${stringReturn} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
