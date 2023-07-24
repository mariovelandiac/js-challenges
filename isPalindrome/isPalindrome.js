(function(word) {
    const wordPlain = word.toLowerCase();
    const arrayWord = wordPlain.toLowerCase().split("");
    const reverseWord = arrayWord.reverse().join("");
    if (wordPlain == reverseWord) {
        console.log("This word is a Palindrome");
    } else {
        console.log("This word is NOT a Palindrome")
    };
})(word);
