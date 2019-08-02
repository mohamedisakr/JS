function insert(key, a) {
    a.push(0);
    let n = a.length;

    let i = 0;
    for (i = n - 2; (i >= 0 && a[i] > key); i--) {
        a[i + 1] = a[i];
    }

    a[i + 1] = key;
    return a;
}

let item = 20; //7;  //9; //0;  //
let arr = [1, 3, 4, 5, 6, 8, 9, 11];
let array = insert(item, arr);

for (let k = 0; k < array.length; k++) {
    console.log(arr[k]);
}
