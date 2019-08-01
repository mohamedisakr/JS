function search(n, array) {
    let len = array.length;
    if (n < array[0] || n > array[len - 1]) { return -1; }

    let i = 0;
    let j = array.length;

    while (i < j) {
        let m = Math.floor((i + j) / 2);
        if (n > array[m]) {
            i = m + 1;
        } else {
            j = m;
        }
    }

    let pos = -1;
    if (n === array[i]) { pos = i; }
    return pos;
}

x = 7;  //9; //0;  //20;
a = [1, 3, 4, 5, 6, 8, 9, 11];
let pos = search(x, a);
document.write(`<h4>${x} is located at position ${pos}.</h4>`);

/*
text = ``;
a = [];
for (let i = 1; i <= 1000; i++) {
    a.push(i);
    //text += `${i}, `;
}
document.write(a);
*/