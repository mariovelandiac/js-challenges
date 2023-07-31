function print(arr, n) {
    console.log("Printing the " + n + " form")
    arr.forEach(item => console.log(item));
}

function generateArrayToPrint(n) {
    const arrayLength = 2 * n - 1;
    const arrayToPrint = new Array(arrayLength);
    for (let i = 0; i < arrayLength; i++) {
        if (i + 1 <= n) { // parte superior 
            const temp = 2 * (i + 1) - 1;
            const spaceArray = " ".repeat((arrayLength - temp) / 2);
            const starArray = "*".repeat(temp);
            arrayToPrint[i] = [spaceArray, starArray, spaceArray].join("")
        } else {        // parte inferior espejo de la parte superior
            arrayToPrint[i] = arrayToPrint[arrayLength - 1 - i]
        }
    }
    return arrayToPrint
}
function printForm(n) {
    const arrayToPrint = generateArrayToPrint(n);
    print(arrayToPrint, n)
}

function main() {
    const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    inputs.forEach(input => printForm(input));
}

main();