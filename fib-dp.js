function fib(n, _mem={1: 1, 2: 1}) {
    if (n < 1) {
        return 0;
    }
    if (_mem[n]) {
        return _mem[n];
    }
    _mem[n] = fib(n-1, _mem) + fib(n-2, _mem);
    return _mem[n];
}

function fibNaive(n) {
    if (n <= 2) return 1;
    let result = fibNaive(n-1) + fibNaive(n-2);
    return result;
}


(function main(){
    const dp_template = "Dynamic Programming Approach: ";
    const naive_template = "Naive Programming Approach: ";
    const fib2 = fib(2);
    console.log(dp_template, fib2);
    const fibNaive2 = fibNaive(2);
    console.log(naive_template, fibNaive2);
    const fib5 = fib(5);
    console.log(dp_template, fib5);
    const fibNaive5 = fibNaive(5);
    console.log(naive_template, fibNaive5);
    const fib50 = fib(50);
    console.log(dp_template, fib50)
    const fibNaive50 = fibNaive(50);
    console.log(naive_template, fibNaive50);
    const fib500 = fib(500);
    console.log(dp_template, fib500)
    const fibNaive500 = fibNaive(500);
    console.log(naive_template, fib500)
})()


