// this function as Rosen BUT does not work
function findMode(a) {
    let n = a.length;
    let modecount = 0;
    let i = 0;
    let value = 0;
    let count = 0;

    while (i <= n) {
        value = a[i];
        count = 1;
        while (i <= n && a[i] === value) {
            count++;
            i++;
        }
    }

    let mode = 0;
    if (count > modecount) {
        modecount = count;
        mode = value;
    }

    return mode;
}

let v = [3, 3, 5, 6, 6, 6, 9, 9]; //  [1, 10, 2, 3, 4, 7, 7, 7, 9, 9]
let mode = findMode(v);
console.log(mode);
v.sort();

/* // find mode using JavaScript object

// let a = [6, 3, 9, 6, 6, 5, 9, 3];
let a = [1, 7, 7, 7, 9, 2, 3, 10, 9, 4];
let occur = {};
for (let i = 0; i < a.length; i++) {
    let j = a[i];
    occur[j] = occur[j] ? occur[j] + 1 : 1;
}

let max = 0;
for (const key in occur) {
    if (occur.hasOwnProperty(key)) {
        const value = occur[key];
        if (max < value) { max = value; }
    }
}

const key = Object.keys(occur).find(key => occur[key] === max);
let mode = parseInt(key); //Number(m);
console.log(mode);
*/