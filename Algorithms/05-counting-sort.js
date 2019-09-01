function findOccurences(a) {
    if (a.length === 0) { throw new Error('Array is empty'); }
    let n = a.length - 1;
    let more = [];
    for (let i = 1; i < n; i++) {
        // console.log(`a[i - 1] = ${a[i - 1]}, a[i] = ${a[i]} , a[i + 1] = ${a[i + 1]}.`);
        if ((a[i] === a[i - 1]) && (a[i] < a[i + 1])) {  // add equal to (to be (a[i] < a[i + 1]))
            // document.write(`<h4>${a[i]}</h4>`);
            more.push(a[i]);
        }
    }
    if (a[n] === a[n - 1]) { more.push(a[n]); }
    return more;
}

// let a = [1, 2, 3, 4, 7, 7];
// let more = findOccurences(a);
// console.log(more);

let arr = []; //[1, 2, 3, 4, 7, 7, 7, 9, 9, 10];
let more = findOccurences(arr);
console.log(more);



/*
function sort(a) {
    let b = new Map();
    for (let i = 0; i < a.length; i++) {
        if (b.has(a[i])) {
            let val = b.get(a[i]);
            b.set(a[i], ++val);
        }
        else { b.set(a[i], 1); }
    }

    for (const [key, value] of b) {
        //if (value > 1) {
        document.write(`<h4>${key} : ${value}</h4>`);
        // }
    }
}

// let arr = [1, 7, 7, 7, 9, 2, 3, 10, 9, 4];

// sort(b);
let counts = {};

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}

for (const key in counts) {
    if (counts.hasOwnProperty(key)) {
        if (counts[key] > 1) {
            document.write(`<h4>${key}</h4>`);
        }
    }
}

let dic = new Map();
dic.set(1, 1);
dic.set(1, 8);
*/

/*
let dic = new Map();
dic.set(1,1);
dic.set(7, 3);
dic.set(9, 2);
dic.set(2, 1);
dic.set(3, 1);
dic.set(10, 1);
dic.set(4, 1);

for (const [key, value] of dic) {
    if (value > 1) {
        document.write(`<h4>${key}</h4>`);
    }
}
*/
