// Desafio 10
function techList(techs, name) {
  // seu código aqui

  // ordenação do array techs e declaração do novo array que vai receber os objetos
  let orderedList = techs.sort();
  let techsAndNames = [];

  if (orderedList.length > 0) { // verifica se o array techs é maior que 0
    for (let index = 0; index < orderedList.length; index +=1) { // para cada posição do array recebido será atribuído um novo objeto, com uma key Tech[index] e uma key Name. Criando um Array de objetos.
      techsAndNames.push({
        tech: orderedList[index],
        name: name,
      });
    }
  } else {
    return ('Vazio!');
  }
  return techsAndNames;
}

// Desafio 11
function generatePhoneNumber(numberList) {
  if (numberList.length !== 11) { // verificar se o array tem lenght diferente 11
      return 'Array com tamanho incorreto.';
  }
  
  for (let index = 0; index < numberList.length; index +=1) { // verificar se o array tem número MENOR que 0 ou MAIOR que 9
    let atual = numberList[index];
    if (atual < 0 || atual > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  
  for (let index2 = 0; index2 < numberList.length; index2 +=1) { // Verificar se o array tem números que se repetem 3 vezes ou mais.
    let pegaUmNumero = numberList[index2];
    let contador = 0;
    for (let forComparacao = 0; forComparacao < numberList.length; forComparacao += 1){
      if (pegaUmNumero === numberList[forComparacao]){
        contador += 1;
      }
    }
    if (contador >= 3){
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // Principal ~> Organiza lista telefônica com parenteses e traço;  
  let organizedPhoneNumber = '(' + numberList[0] + numberList[1] + ') '; // Recebe primeira parte: 2 dígitos.
  
  for(let index3 = 2; index3 < 7; index3 += 1) { // Recebe segunda parte: 5 dígitos.
    organizedPhoneNumber += numberList[index3];
  }
  organizedPhoneNumber += '-';
  for(let index4 = 7; index4 < 11; index4 += 1) { // recebe terceira parte, 4 últimos.
    organizedPhoneNumber += numberList[index4];
  }
  return organizedPhoneNumber;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
