function contarPalabras(sentence, character) {
    return sentence.toLowerCase().split(" ").join("").split("").filter(item => item == character.toLowerCase()).length
}   

const string = 'Algoritmos y programación';
const character = 'a';
const counter = contarPalabras(string, character);
console.log(counter);