function getMinAndMax(a) {
    let n = a.length;
    let min = a[0];
    let max = a[0];

    for (let i = 0; i < n; i++) {
        if (min > a[i]) { min = a[i]; }
        if (max < a[i]) { max = a[i]; }
    }

    return [min, max];
}

let array = [12, 16, 2, 20, 8, 13, 5, 3, 12, 9, 17, 4, 4, 17, 18, 2, 8];
let res = getMinAndMax(array);
[min, max] = res;
document.write(`<h4>The minimum is ${min} and the maximum is ${max}.</h4>`);