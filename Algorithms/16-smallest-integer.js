function find(array) {
    let n = array.length;
    let min = array[0];
    for (let i = 1; i < n; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

// let a = [1, 3, 4, 5, 6, 8, 9, 11];
// let min = find(a);
// document.write(`<h4>${min} is the smallest integer in the sequence.</h4>`);