
function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const letters = string
  .toLowerCase()
  .match(/[a-z]/g)
  .filter((item, index, array) => {
    if (array.indexOf(item) == index) {
      return item
    }
    })
  .sort()
  .join("");
  return letters == alphabet ? true : false;
}

const string = "mi nombre es Mario Velandia";
const pangram = "The quick brown fox jumps over the lazy dog";

let checkedWord = isPangram(string);
console.log(`La cadena '${string}' ${checkedWord ? 'es' : 'no es'} un pangrama`);
checkedWord = isPangram(pangram);
console.log(`La cadena '${pangram}' ${checkedWord ? 'es' : 'no es'} un pangrama`);
