// Diseña una función en javascript que recibe una cadena de texto y retorna como resultado cuántos tokens hay conformados por sólo dígitos. Un token es una secuencia de caracteres sin espacios.

(function main() {
  const readInput = () => {
    return 'T3ngo 3 palabras con dígit0s, hola, h0ola esta no tiene, per0 est4s s1 t13nen';
  };
  const input = readInput();
  if (!input) {
    console.log(0);
    return;
  }

  // using regex
  const regex = /\d+/g;
  const tokens = input.split(' ').filter((item) => item.match(regex));
  console.log(tokens.length);

  // using no regex;
  // el some indica si dentro de una palabra hay un numero, en caso de que si retorna true, y esa palabra (item) el filter lo tomará, los demás, no
  const tokensOtherWay = input.split(' ').filter((item) => item.split('').some((element) => Number(element) || element == '0'));
  console.log(tokensOtherWay.length);
})();
