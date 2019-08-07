// using set and then using loop to check 
function isanagram(subject, anagram) {
    const sset = new Set(subject.replace(/\s+/g, '').split(''));
    const anaset = new Set(anagram.replace(/\s+/g, '').split(''));

    const n = anaset.size - 1;
    for (let i = 0; i < n; i++) {
        if (!sset.has(anaset[i])) { return false; }
    }
    return true;
}

/*
* Using Rosen method
* (1) Assume the input is strings a1a2…an and b1b2…bn, where each character is a letter, A through Z
* (2) Assume also that a function index is available, such that index(x) is the
       position of the letter x in the alphabet (index(‘A’) = 1, ..., index(‘Z’) = 26)

* a) Initialize a-count and b-count to be lists of length 26 with all values equal to 0. 
      For i from 1 to n increment a-count(index(ai)) and b-count(index(bi)). If 
      a-count(i) = b-count(i) for all i from 1 to 26, then return “true”; 
      otherwise return “false.”
* b) Sort both strings into alphabetical order. Then the two original strings were anagrams
      if and only if the sorted strings are identical
*/

function getCharIndex(char) {
    const a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let index = {};
    for (let i = 0; i < a.length; i++) {
        index[a[i]] = i + 1;
    }
    let c = char.toLocaleLowerCase();
    return index[c];
}

function checkByFrequency(subject, anagram) {
    let a = Array(26).fill(0);
    let b = Array(26).fill(0);

    const subset = new Set(subject.replace(/\s+/g, '').split(''));
    const anaset = new Set(anagram.replace(/\s+/g, '').split(''));
    const n = subset.length - 1;

    for (let i = 0; i < n; i++) {
        a[getCharIndex(subset[i])]++;
        b[getCharIndex(anaset[i])]++;
    }

    for (let i = 0; i < n; i++) {
        if (a[i] !== b[i]) { return false; }
    }
    return true;
}
let sub = 'rail safety';
let ana = 'wfairy tales';

let res = checkByFrequency(sub, ana);
if (res) {
    document.write(`${sub} and ${ana} are anagrams`);
} else {
    document.write(`${sub} and ${ana} are NOT anagrams`);
}

/*
// test getCharIndex function
let ch = 'Z';
let idx = getCharIndex(ch); //index[ch.toLocaleLowerCase()];
console.log(idx);
*/

// Test ====> using set and then using loop to check 
/*
let sub = 'rail safety';
let ana = 'fairy tales w';

let res = isanagram(sub, ana);
if (res) {
    document.write(`${sub} and ${ana} are anagrams`);
} else {
    document.write(`${sub} and ${ana} are NOT anagrams`);
}
*/
