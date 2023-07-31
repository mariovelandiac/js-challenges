function printArray(arr, n) {
    console.log(`The ${n} form`);
    arr.forEach(output => console.log(output));
}

function generateArrayToPrint(n) {
    if (n == 0) {
        return ['*'];
    }
    const arrayLength = n + 2;
    const arrayToPrint = new Array(arrayLength);
    for (let i = 0; i < arrayLength; i++) {
        if (i == 0 || i == arrayLength - 1) {
            const starString = "*".repeat(arrayLength);
            arrayToPrint[i] = [starString].join("");
        } else {
            const starString = "*";
            const qString = "Q".repeat(n);
            arrayToPrint[i] = [starString, qString, starString].join("");
        }
    }
    return arrayToPrint;
}

function printForm(n) {
    const arrayToPrint = generateArrayToPrint(n);
    printArray(arrayToPrint, n)
}


function main() {
    const input = Array.from({ length: 21 }, (_, index) => index);
    input.forEach(input => printForm(input));
}

main()