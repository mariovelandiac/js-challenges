var uniqueInOrder=function(iterable){
  if (typeof iterable == 'string') {
    iterable = iterable.split("");
  }
  const result = iterable.filter((item, index, array) => {
    if (array[index] != array[index+1]) {
        return item
        }
  })
  return result
}

const word = 'ADFDFDFSADFDDSSSSASSSDDDDD';
console.log(uniqueInOrder(word))
