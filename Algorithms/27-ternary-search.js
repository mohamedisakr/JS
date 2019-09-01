function search(key, a) {
    let l = 0;
    let r = a.length - 1;
    //  key less than the first element or key greater than the last elemnt
    if (key < a[l] || key > a[r]) { return -1; }   
    // if the array is empty
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
// see if the test cases working properly when
//  1. array is empty
//  2. key less than the first element
//  3. key greater than the last elemnt
// alert(`l = ${l}`);
// alert(`r = ${r}`); 
// if (key < a[l]) {
//     console.log(`key = ${key} and a[l] = ${a[l]}`);
//     console.log(key < a[l] === true);
//     alert('im here.');
//     return -1;
// }
// if (key > a[r]) {
//     console.log(`key = ${key} and a[r] = ${a[r]}`);
//     console.log(key > a[r] === true);
//     alert('im here.');
//     return -1;
// }
// alert(`r - l = ${r - l}`);

// alert(`l = ${l} and r = ${r}, i will go to while`);


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let x = 5;
// let pos = search(x, array);
// if (pos !== -1) {
//     document.write(`<h2>` + `The location of ${x} is at ${pos}.` + `</h2>`);
// }
// else {
//     document.write(`<h2>` + `${x} not found.` + `</h2>`);
// }

