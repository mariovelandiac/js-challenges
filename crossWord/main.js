let sopaDeLetras = [
  [...'xxxxxdxxxx'],
  [...'xxxxxaxxxx'],
  [...'xxxxxtxxxx'],
  [...'xxxxxaxxxx'],
  [...'xxxxxxxxxx'],
  [...'xdxxxxxxxx'],
  [...'xxaxxxxxxx'],
  [...'xxxtxxxxxx'],
  [...'atadaxxxxx'],
  [...'xxxxxxxxxx'],
];

// Imprimir la sopa de letras en la consola para la visualización
sopaDeLetras.forEach((row) => console.log(row.join(' ')));

const word = 'data';
const WORD_LENGTH = word.length;
const SOPA_SIZE = sopaDeLetras.length;

const navigateCrossWord = function (x, y, m, n) {
  if (
    x + m * (WORD_LENGTH - 1) >= 0 &&
    x + m * (WORD_LENGTH - 1) < SOPA_SIZE &&
    y + n * (WORD_LENGTH - 1) >= 0 &&
    y + n * (WORD_LENGTH - 1) < SOPA_SIZE
  ) {
    let newWord = sopaDeLetras[y][x];
    let i = 0;
    while (i < word.length - 1) {
      i++;
      newWord += sopaDeLetras[y + n * i][x + m * i];
    }
    return newWord == word;
  }
};

const checkWord = function (x, y) {
  return (
    navigateCrossWord(x, y, 0, 1) || // abajo
    navigateCrossWord(x, y, 0, -1) || // arriba
    navigateCrossWord(x, y, 1, 0) || // derecha
    navigateCrossWord(x, y, -1, 0) || // izquierda
    navigateCrossWord(x, y, 1, -1) || // arriba a la derecha
    navigateCrossWord(x, y, -1, -1) || // arriba a la izquierda
    navigateCrossWord(x, y, 1, 1) || // abajo a la derecha
    navigateCrossWord(x, y, -1, 1) // abajo a la izquierda
  );
};

const findWord = function (sopa, word) {
  let count = 0;
  sopa.forEach((item, indexN) => {
    item.forEach((element, indexM) => {
      if (element == word[0] && checkWord(indexM, indexN)) {
        count++;
      }
    });
  });
  return count;
};

console.log(findWord(sopaDeLetras, word));
