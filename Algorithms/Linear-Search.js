/*
function search(x, list) {
    let i = 0;
    let pos = 0;
    let n = list.length;
    while (i <= n && x != list[i]) {
        i++;
    }
    if (i <= n) { pos = i; }
    else { pos = -1; }
    return pos;
}
*/

function search(x, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === x) {
            return i;
        }
    }
    return -1;
}

let x = 12; //3; //
let list = [100, 1, 9, 20, 43, 12, 34];
let pos = search(x, list);
if (pos !== -1) {
    document.write(`<h2>` + `The location of ${x} is at ${pos}.` + `</h2>`); // ``
}
else {
    document.write(`<h2>` + `${x} not found.` + `</h2>`);
}