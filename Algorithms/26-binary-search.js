function search(x, a) {
    let n = a.length;
    let i = 0;
    let j = n - 1;
    let pos = -1;
    let s = false;
    while (i < j&&s===false) {
        let m = Math.floor((i + j) / 2);
        if (x > a[m]) { i = m + 1; }
        else if(x===a[m]){s=true;pos=m;}
        else { j = m; }
    }
   
    return pos;
}

let x = 19;
let list = [1, 2, 3, 5, 6, 7, 8, 10, 12, 13, 15, 16, 18, 19, 20, 22];
let pos = search(x, list);
if (pos !== -1) {
    document.write(`<h2>` + `The location of ${x} is at ${pos}.` + `</h2>`);
}
else {
    document.write(`<h2>` + `${x} not found.` + `</h2>`);
}