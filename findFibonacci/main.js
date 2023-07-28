function main() {
  function findFibonacci(n) {
    debugger;
    const initial = [0, 1];
    let i = 0;
    while (i < n) {
      initial.push(initial[i] + initial[i + 1]);
      if (initial[i + 2] > n) {
        break;
      }
      i++;
    }
    return initial[initial.length - 1];
  }
  const number = 25;
  const fibonacci = findFibonacci(number);
  console.log(fibonacci);
}
main();
