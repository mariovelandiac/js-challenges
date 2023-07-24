const readArray = function () {
  return [1, 2, 3, 4, 45, 4, 5, 3, 2, 100 ,5, 1];
};

const validateArray = function (array) {
  return array;
};

// Usando POO
class FindMax {
  constructor(array) {
    this.array = array;
    this.length = array.length;
    this.index = 0;
    this.max = 0;
    this.findMax();
  }

  findMax() {
    if (this.length > this.index) {
      if (this.array[this.index] > this.max) {
        this.max = this.array[this.index];
        this.index++;
        this.findMax();
      } else {
        this.index++;
        this.findMax();
      }
    }
  }

  getMax() {
    return this.max;
  }
}

// En esta función, max, le llega como un argumento y es pasado de función en función
const findMaxRecursively = function (array, index = 0, max = 0) {
    // este es el punto de salida,porque es un atributo o un valor que no va al stack, y va a ser lo que va a retornarse de función en función
    if (array.length === index) {
        return max;
    }
    if (array[index] > max) {
        max = array[index];
    }
    return findMaxRecursively(array, index + 1, max) 
}

const main = function () {
  debugger
  const array = readArray();
  const newArray = validateArray(array);
  // con POO
  const max = new FindMax(newArray);
  // Con Programación funcional
  const maxFuncional = findMaxRecursively(newArray);
  console.log("El máximo del array usando POO es: " + max.getMax().toString());
  console.log("El máximo del array usando Programación Funcional es: " + maxFuncional.toString());
};

main();
