$(document).on('ready', function() {
	function addStrings(str1, str2) {
        return str1+str2;
    };

    function displayArg(argue, n) {
        for (let i = 0; i<n; i++) {
            console.log(argue);
        };
    };

    function toPower(number, power) {
        let final = 1;
        for (let i = 0; i<power; i++) {
            final *= number;
        };
        return final
    };

    function pie(radius) {
        return Math.PI*radius*radius
    };

    function pythag(a, b) {
        return a*a + b*b;
    };

    function remainder(x, y) {
        if (x%y === 0) {
            return true;
        }
        return false;
    };

    function vowels(word) {
        let splitWord = word.split("");
        let counter = 0;
        for (let i = 0; i<splitWord.length; i++) {
            if (splitWord[i] === "a" || splitWord[i] === "e" || splitWord[i] === "i" ||
                 splitWord[i] === "o" || splitWord[i] === "u" || splitWord[i] === "y") {
                counter += 1;
                console.log(splitWord[i], counter);
            };
        };
        return counter;
    };

    function wdi(word) {
        let testArray = [9,'Bart Simpson', true, 'wdi'];
        for (let i = 0; i<testArray.length; i++) {
            if (testArray[i].prototype.includes(word) === true) {
                return true;
            }
            return false;
        };
    };

    function flip() {
        if (Math.random >= .5) {
            return "tails"
        }
        else {
            return "heads"
        };
    };

    function coinGuess() {
        let userGuess = window.prompt("Heads or tails?");
        return userGuess;
    }

    function prompter(guess, flip) {
        if (guess === flip) {
            $('#result').html("WRONG");
        }
        else {
            $('#result').html("correct");
        };
    };

    function headTail() {
        coinGuess();
        flip();
        prompter(coinGuess(), flip())
    };
    // coinGuess();
    headTail();
    console.log("test");

});