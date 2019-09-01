function calculateStat(a, b, c) {
    let max;
    let min;
    let mean;
    let median;
    
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
    mean = (a + b + c) / 3;
    return [max, mean, median, min];
}

function getStat(a) {
    let n = a.length;
    let min = a[0];
    let max = a[0];
    let median = a[0];
    let sum = 0;

    for (let i = 0; i < n; i++) {
        if (max < a[i]) { max = a[i]; }
        if (min > a[i]) { min = a[i]; }
        sum += a[i];
    }
    let mean = sum / 3;

    for (let i = 0; i < n; i++) {
        if (a[i] > min && a[i] < max) { median = a[i]; }
    }
    return [min, max, mean, median];
}

// let array = [4, 2, 3];
// let res = getStat(array);
// [min, max, mean, median] = res;
// document.write(`<h4>min =  ${min}, max =  ${max}, mean = ${mean}, median = ${median}.</h4>`);


/*
function getMedian(a, b, c) {
    if ((a >= b && a <= c) || (a >= c && a <= b)) { return a; }
    else if ((b >= a && b <= c) || (b >= c && b <= a)) { return b; }
    else if ((c >= a && c <= b) || (c >= b && c <= a)) { return c; }
}

function getMean(a, b, c) {
    return ((a + b + c) / 3);
}

let a = 4;
let b = 2;
let c = 3;
let med = getMean(a, b, c);
console.log(med);
*/