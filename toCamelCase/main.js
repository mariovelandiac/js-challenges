function toCamelCase(str) {
  function splitString(str) {
    const regex = /-|_/;
    return str.split(regex);
  }

  function checkWord(word, iterator) {
    const firstLetter = word[0];
    const isUpperCase = firstLetter.toUpperCase() === firstLetter;
    if (isUpperCase || iterator == 0) {
      return word;
    }
    const newWord = firstLetter.toUpperCase() + word.slice(1);
    return newWord;
  }
  function makeCamelCase(arrayStr) {
    let i = 0;
    let max = arrayStr.length;
    while (i < max) {
      arrayStr[i] = checkWord(arrayStr[i], i);
      i++;
    }
    return arrayStr.join('');
  }

  if (!str) {
    return '';
  }
  const splittedString = splitString(str);
  return makeCamelCase(splittedString);
}

// this option does only Computes if the firstLetter is not upperCase
function toCamelCaseWithMap(str) {
  if (!str) {
    return '';
  }
  return str
    .split(/-|_/)
    .map((item, index) =>
      item[0].toUpperCase() === item[0] || index == 0
        ? item
        : item[0].toUpperCase() + item.slice(1),
    )
    .join('');
}

// this option always computes, even if the firstLetter is already upper case
function toCamelCaseCompact(str) {
  if (!str) {
    return '';
  }
  return str.split(/-|_/).map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)).join("");
}

const word = 'Mario-Velandia';
console.log(toCamelCase(word));
console.log(toCamelCaseWithMap(word));
console.log(toCamelCaseCompact(word));
