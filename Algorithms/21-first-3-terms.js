function sortFirstThree(array) {
    let max;
    let min;
    let median;
    
    let a = array[0];
    let b = array[1];
    let c = array[2];

    if (a >= b && a >= c) {
        max = a;
        if (b >= c) {
            median = b;
            min = c;
        } else {
            median = c;
            min = b;
        }
    }
    else if (b >= a && b >= c) {
        max = b;
        if (a >= c) {
            median = a;
            min = c;
        } else {
            median = c;
            min = a;
        }
    }
    else {
        max = c;
        if (a >= b) {
            median = a;
            min = b;
        } else {
            median = b;
            min = a;
        }
    }

    array[0] = min;
    array[1] = median;
    array[2] = max;
}

// second implementation using sorting algorithm
/*
function sortFirstThree(a) {
    let n = 3;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
            }
        }
    }
}
*/
let array = [12, 16, 2, 20, 8, 13, 5, 3, 12, 9, 17, 4, 4, 17, 18, 2, 8];
sortFirstThree(array);
