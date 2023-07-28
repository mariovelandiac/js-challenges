// Diseña una función en javascript que recibe una cadena de texto y retorna como resultado cuántos tokens hay conformados por sólo dígitos. Un token es una secuencia de caracteres sin espacios.

(function main() {
   const readInput = () => {
    return "465 123 456 789 456 msf4f56 & ffds46 & dfsafd456 12 23 5 45"
   } 
   const input = readInput();
   if (!input) {
    console.log(0)
    return
   }
   
   //
   const regex = /^\d*$/g;
   const tokens = input.split(" ").filter(item => item.match(regex));
   console.log(tokens.length)
   
   
   // using no regex;
   const tokensOtherWay = input.split(" ").filter(item => Number(item));
})()