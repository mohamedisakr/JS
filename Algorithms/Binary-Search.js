function search(x, list) {
    let i = 0;
    let j = list.length;
    if (key < a[lo] || key > a[hi]) { return -1; }

    while (i < j) {
        let m = Math.floor((i + j) / 2);
        if (x > list[m]) { i = m + 1; }
        else { j = m; }
    }

    let pos = -1;
    if (x === list[i]) { pos = i; }
    //else { pos = -1; }
    return pos;
}


let x = 19;
let list = [1, 2, 3, 5, 6, 7, 8, 10, 12, 13, 15, 16, 18, 19, 20, 22];
let pos = search(x, list);
if (pos !== -1) {
    document.write(`<h2>` + `The location of ${x} is at ${pos}.` + `</h2>`); // ``
}
else {
    document.write(`<h2>` + `${x} not found.` + `</h2>`);
}