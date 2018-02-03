let utilities = {};

utilities.addTwo = (num1, num2) => {
    return num1 + num2;
}

utilities.reverseString = (string) => {
    return string.split("").reverse().join("");
}

utilities.findLongest = (string) => {
    let longestWord = "";

    string.split(" ").forEach((word) => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

utilities.isPalindrome = (word) => {
    // return word.split("").reverse().join("") === word;
    return utilities.reverseString(word) === word;
}

utilities.groupArray = (array, size) => {
    let masterArray = [];
    let subArray = [];

    for (let i = 0; i < array.length; i++) {
        subArray.push(array[i]);

        if (subArray.length === size) {
            masterArray.push(subArray);
            subArray = [];
        }
    }

    return masterArray;
}

//ES5 syntax
// utilities.addTwo = function(num1, num2) {
//
// }

module.exports = utilities;
