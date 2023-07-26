function comp(array1, array2) {
  if (array1 != null && array2 != null) {
    const isSqrt = array2.map((item) => {
      let i = 0;
      while (i < array1.length) {
        const condition = Math.sqrt(item) == array1[i];
        if (condition) {
          multiplicity1 = array1.filter(
            (element) => element == array1[i],
          ).length;
          multiplicity2 = array2.filter((element) => element == item).length;
          return multiplicity1 == multiplicity2 ? true : false;
        }
        i++;
      }
    });
    return isSqrt.every((item) => item == true);
  }
  return false;
}
const array1 = [2, 2, 3];
const array2 = [4, 9, 9];
console.log(comp(array1, array2)); //false

// this is a refactorized version
function compRefact(array1, array2){
  if (array1 == null || array2 == null) {
    return false
  }
  return array2.every(item => {
    return array1.some(element => {
    const areTheSame = Math.sqrt(item) == element;
    const areSame = array1.filter(arr1 => arr1 == element).length == array2.filter(arr2 => arr2 == item).length;
      return areTheSame && areSame;
    })
  })
}
