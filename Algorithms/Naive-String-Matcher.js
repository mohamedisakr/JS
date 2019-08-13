// https://www.youtube.com/watch?v=xP5Ox-df_ik&t=105s
function match(text, pattern) {
    let n = text.length;
    let m = pattern.length;
    let j;
    if (m > n) { throw new Error('Pattern not found.'); }

    for (let i = 0; i <= (n - m); i++) {
        for (j = 0; j < m; j++) {
            if (pattern[j] !== text[i + j]) { break; }
        }
        if (j === m) { console.log(`Pattern found at position ${i}.`); }
    }
}

let text = 'ABAAABCDBBABCDDEBCABC';  // "AABAAAB";
let pattern = 'ABC'; // "AA";
match(text, pattern);

// Rosen
/*
function search(text, pattern) {
    let m = pattern.length;
    let n = text.length;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        for (j = 0; j < m; j++) {
            if (text[i + j] !== pattern[j]) { break; }
        }
        if (j === m) {
            document.write(`Pattern found at index ${i}<br/>`);
        }
    }
}

let text = 'eceyeye';
let pattern = 'eye';
search(text, pattern);
*/