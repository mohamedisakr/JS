// The last updated binary search algorithm
function search(key, a) {
    let lo = 0;
    let hi = a.length - 1;
    if (key < a[lo] || key > a[hi]) { return -1; }
    //alert('test');
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (key < a[mid]) { hi = mid - 1; }
        else if (key > a[mid]) { lo = mid + 1; }
        else { return mid; }
    }
    return -1;
}

let x = 9;  //20; //7;  //0;  //
let arr = [1, 3, 4, 5, 6, 8, 9, 11];
let pos = search(x, arr);
if (pos !== - 1) { document.write(`<h4>${x} is located at position ${pos}.</h4>`); }
else { document.write(`<h4>${x} is not found.</h4>`); }

/*
function search(n, array) {
    let len = array.length;
    if (n < array[0] || n > array[len - 1]) { return -1; }

    let i = 0;
    let j = array.length;

    while (i < j) {
        let m = Math.floor((i + j) / 2);
        if (n > array[m]) { i = m + 1; }
        else { j = m; }
    }

    let pos = -1;
    if (n === array[i]) { pos = i; }
    return pos;
}
*/



/*
text = ``;
a = [];
for (let i = 1; i <= 1000; i++) {
    a.push(i);
    //text += `${i}, `;
}
document.write(a);
*/