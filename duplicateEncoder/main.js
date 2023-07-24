// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

const readWord = () => {
  const word = 'Test Text';
  return word;
};

const validateWord = (word) => {
  if (typeof word != 'string') {
    throw new Error('The data is not of type String');
  }
};

const encodeArray = function (array) {
  return array
    .map((item) =>
      array.indexOf(item) !== array.lastIndexOf(item) ? ')' : '(',
    )
    .join('');
};

const encode = function (word = '') {
  try {
    validateWord(word);
    const lowerCaseWord = word.toLowerCase();
    const arrayWord = lowerCaseWord.split('');
    const encodedWord = encodeArray(arrayWord);
    return encodedWord;
  } catch (e) {
    console.log(e.message);
    return false;
  }
};

const main = function () {
  const word = readWord();
  const encodedWord = encode(word);
  if (encodedWord) {
    console.log(encodedWord);
  }
};

main();
