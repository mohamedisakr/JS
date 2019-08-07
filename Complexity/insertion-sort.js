// Cormen revised by me
function sort(a) {
    let n = a.length;
    for (let j = 1; j < n; j++) {
        let key = a[j];
        let i = 0;
        for (i = j - 1; i >= 0 && a[i] > key; i--) { a[i + 1] = a[i]; }
        a[i + 1] = key;
    }
}

let list = [5, 2, 4, 6, 1, 3];  //[3, 7, 4, 9, 5, 2, 6, 1];  // [3, 2, 4, 1, 5];
sort(list);
let txt = ``;
for (let i = 0; i < list.length; i++) {
    txt += `${list[i]}, `;
}
document.write(txt);
