function search(key, a) {
    let l = 0;
    let r = a.length - 1;
    if ((r - l) <= 0) { return -1; }
    while (r => l) {
        let m1 = l + ((r - l) / 3);
        let m2 = r - ((r - l) / 3);

        if (key === a[m1]) { return m1; }
        if (key === a[m2]) { return m2; }

        if (key < a[m1]) { r = m1 - 1; }
        else if (key > a[m2]) { l = m2 + 1; }
        else { l = m1 + 1; r = m2 - 1; }
    }
    return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x = 5;
let pos = search(x, array);
if (pos !== -1) {
    document.write(`<h2>` + `The location of ${x} is at ${pos}.` + `</h2>`);
}
else {
    document.write(`<h2>` + `${x} not found.` + `</h2>`);
}