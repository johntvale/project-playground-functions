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
function generatePhoneNumber() {
  // seu código aqui
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
