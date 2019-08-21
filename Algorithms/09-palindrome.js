// let mystr = 'hello';
// res = reverseString(mystr);
// document.write(`The reverse of ${mystr} is ${res}`);

function removeSpaces(statement) {
    let text = ``;
    let n = statement.length;
    for (let i = 0; i < n; i++) {
        if (statement[i] !== ' ') { text += statement[i]; }
    }
    return text;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(statement) {
    let lowcase = statement.toLowerCase();
    let res = removeSpaces(lowcase);
    let rev = reverseString(res);
    return res === rev;
}

function isPalindrome_V2(statement) {
    let res = removeSpaces(statement);
    let lowcase = res.toLowerCase();
    console.log(lowcase);
    let n = lowcase.length;
    for (let i = 0; i <= Math.floor(n / 2); i++) {
        console.log(lowcase[i], lowcase[n - i - 1]);
        if (lowcase[i] !== lowcase[n - i - 1]) { return false; }
    }
    return true;
}

/**
 * Check if a given word or phrase is palindrome by splitting the word
 * into 2 halves [0 : (n//2)] and [n - (n / 2) : n] then compare the first
 * half with the second
 * return true if it is palindrome, false othersise.
 * @param {statement} arg A string to check if it is palindrome.
 */
function isPalindrome_V3(statement) {
    let res = removeSpaces(statement);
    let lowcase = res.toLowerCase();
    console.log(lowcase);
    let n = lowcase.length;
    return lowcase.slice(0, parseInt(n / 2)) === reverseString(lowcase.slice(n - parseInt(n / 2), n));
}

// let phrase = 'Mr Owl ate my metal worm';   //'anything'; // 'My gym';    //
// let isOk = isPalindrome_V3(phrase); //isPalindromeV2(phrase); //isPalindrome(phrase);
// if (isOk) { document.write(`${phrase} <h4> is palindrome.</h4>`); }
// else { document.write(`${phrase} <h4> is NOT palindrome.</h4>`); }
