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