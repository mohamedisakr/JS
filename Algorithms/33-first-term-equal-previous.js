// slader implementation
function getEqualToPrevious(a) {
    let n = a.length;
    let pos = -1;

    for (let i = 0; i < n - 1 && (pos = -1); i++) {
        for (let j = i + 1; j < n && (pos = -1); j++) {
            if (a[i] === a[j]) {
                return a[i];
            }
        }
    }

    return pos;
}

// console.log(`i = ${i} , j = ${j}`);
// // console.log(`a[i] = ${a[i]} , a[j] = ${a[j]}`);
// // (n-i)	//for (let j = 0; j < i && (pos = -1); j++) {

/* ************** old implementation *****
    // for (let i = 1; i < n && (pos = -1); i++) {
    //     for (let j = 0; j < i && (pos = -1); j++) {
    //         console.log(`i = ${i} , j = ${j}`);
    //         // (n-i)	//for (let j = 0; j < i && (pos = -1); j++) {
    //         if (a[i] === a[j]) {
    //             pos = i;
    //         }
    //     }
    // }

    // let i = 1;
    // while (i < n && (pos = -1)) {
    // 	let j = 0;
    // 	while (j < i && (pos = -1)) {
    // 		if (a[i] === a[j]) {
    // 			pos = i;
    // 		} else {
    // 			j++;//i++;
    // 		}
    // 	}
    // 	i++;
    // }
    */

/* ************** test case *****
// let arr = [4, 6, 2, 3, 1, 5, 4];
// let pos = getEqualToPrevious(arr);
// console.log(pos);
*/

// my algorithm
/*
function sumPreviousTerms(arr, val, lo, hi) {
    let s = 0;
    for (let k = lo; k <= hi; k++) {
        if (arr[k] < val) { s += arr[k]; }
        if (s === val) { return s; }
    }
    return s;
}

// my algorithm test
// [6, 2, 3, 1, 5, 4]; ==>> this array worked and returned 5
let a = [6, 2, 1, 3, 5, 4]; // ==>> this array worked and returned 3
for (let i = 1; i < a.length; i++) {
    if (sumPreviousTerms(a, a[i], 0, i - 1) === a[i]) {
        console.log(a[i]); break;
    }
}
*/
