function search(key, array) {
    let len = array.length;
    if (key < array[0] || key > array[len - 1]) { return -1; }

    let i = 0;
    let j = len - 1;

    while (i < j) {
        let m = Math.floor((i + j) / 2);
        if (key > array[m]) {
            i = m + 1;
        } else {
            j = m;
        }
    }

    let pos = -1;
    if (key === array[i]) { pos = i; }
    return pos;
}

function deleteItem(key, array) {
    let n = array.length;
    let pos = search(key, array);

    if (pos === -1) { return -1; }

    for (let i = pos; i < n; i++) {
        array[i] = array[i + 1];
    }
    array.pop();
    return array.length;
}

x = 7;  //9; //0;  //20; //
a = [1, 3, 4, 5, 6, 8, 9, 11];
let pos = deleteItem(x, a);  //search(x, a);
if (pos === -1) {
    document.write(`<h4>${x} not found.</h4>`);
} else {
    document.write(`<h4>${x} is deleted.</h4>`);
}