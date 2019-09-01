// my implementation to calc longest word size (length)
function findLongestWord(sentence) {
    let n = sentence.length;
    let size = 0;
    let max = 0;
    for (let i = 0; i < n; i++) {
        if (sentence[i] !== ' ') { size++; }
        else {
            if (max < size) { max = size; }
            size = 0;
        }
    }
    return max;
}

function longestwordV2(sentence) {
    let longest = ``;
    let size = 0;
    let curr = ``;
    let n = sentence.length;

    for (let i = 0; i < n; i++) {
        if (sentence[i] != ' ') {
            curr += sentence[i];
        }
        else {
            if (curr.length > size) {
                size = curr.length;
                longest = curr;
            }
            curr = ``;
        }
    }

    return longest;
}

// let mystr = 'This is something ';
// let longest = longestwordV2(mystr);
// document.write(`<h4>The longest word is ${longest} and its length is ${longest.length}.</h4>`);

function longestword(sentence) {
    let longest = '';
    let i = 0;
    //let n = sentence.length;
    if (sentence[i] != ' ') { i++; }
    else { longest = sentence.slice(0, i); }//-1
    console.log('i = ' + i);
    console.log(sentence.slice(0, i)); // print I
    return longest; // return empty string
}

function getLongestWord(statement) {
    let words = statement.split(' ');
    let n = words.length;

    let len = words[0].length;
    let longest = words[0];
    for (let i = 1; i < n; i++) {
        if (len < words[i].length) {
            len = words[i].length;
            longest = words[i];
        }
    }
    return longest;
}

// let text = 'I am an intern at geeksforgeeks';  //'Describe an algorithm to find the longest word in an English sentence where a sentence is a sequence of symbols, either a letter or a blank, which can then be broken into alternating words and blanks.';
// let longest = getLongestWord(text);
// document.write(`<h4>The longest word is ${longest} and its length is ${longest.length}.</h4>`);

// let words = statement.split(' ');
// let n = words.length;

// for (let i = 1; i < n; i++) {
//     if (len < words[i].length) {
//         len = words[i].length;
//         longest = words[i];
//     }
// }